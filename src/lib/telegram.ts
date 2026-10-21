export type TelegramSendResult =
  | { ok: true; messageId: number }
  | { ok: false; retryable: boolean; error: string; ambiguous?: boolean };

export type TelegramSendOptions = {
  text: string;
  parseMode?: "HTML" | "Markdown" | "MarkdownV2";
  disableWebPagePreview?: boolean;
};

function resolveChatId(raw: string): string | number {
  return /^-?\d+$/.test(raw) ? Number(raw) : raw;
}

export function getTelegramConfig(): {
  token: string;
  chatId: string | number;
  threadId?: number;
} | null {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chat = process.env.TELEGRAM_CHAT_ID?.trim();
  if (!token || !chat) return null;

  const threadRaw = process.env.TELEGRAM_MESSAGE_THREAD_ID?.trim();
  const threadId =
    threadRaw && /^\d+$/.test(threadRaw) ? Number(threadRaw) : undefined;

  return {
    token,
    chatId: resolveChatId(chat),
    threadId,
  };
}

export async function sendTelegramMessage(
  options: TelegramSendOptions,
): Promise<TelegramSendResult> {
  const config = getTelegramConfig();
  if (!config) {
    return {
      ok: false,
      retryable: false,
      error: "TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing",
    };
  }

  const controller = new AbortController();
  const timeoutMs = Number(process.env.TELEGRAM_SEND_TIMEOUT_MS ?? "15000");
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const body: Record<string, unknown> = {
      chat_id: config.chatId,
      text: options.text,
      parse_mode: options.parseMode ?? "HTML",
      disable_web_page_preview: options.disableWebPagePreview ?? true,
    };
    if (config.threadId !== undefined) {
      body.message_thread_id = config.threadId;
    }

    const response = await fetch(
      `https://api.telegram.org/bot${config.token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      },
    );

    let result: {
      ok?: boolean;
      description?: string;
      error_code?: number;
      result?: { message_id?: number };
    } = {};
    try {
      result = (await response.json()) as typeof result;
    } catch {
      return {
        ok: false,
        retryable: true,
        ambiguous: true,
        error: `telegram_invalid_json_status_${response.status}`,
      };
    }

    if (!response.ok || !result.ok) {
      const code = result.error_code ?? response.status;
      const retryable = code === 429 || code >= 500;
      return {
        ok: false,
        retryable,
        error: result.description ?? `telegram_http_${response.status}`,
      };
    }

    const messageId = result.result?.message_id;
    if (typeof messageId !== "number") {
      return {
        ok: false,
        retryable: false,
        ambiguous: true,
        error: "telegram_missing_message_id",
      };
    }

    return { ok: true, messageId };
  } catch (error) {
    const aborted =
      error instanceof Error &&
      (error.name === "AbortError" || error.message.includes("aborted"));
    return {
      ok: false,
      retryable: !aborted,
      ambiguous: aborted,
      error: aborted
        ? "telegram_timeout"
        : error instanceof Error
          ? error.message
          : "telegram_request_failed",
    };
  } finally {
    clearTimeout(timer);
  }
}

import PageBreadcrumbs from "@/components/PageBreadcrumbs";
import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { formatSitePhone, siteConfig } from "@/lib/site";

type ContactPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function TelegramIcon() {
  return (
    <svg
      className="contact-telegram-icon"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M21.8 4.2c.3-.9-.5-1.6-1.3-1.3L2.9 9.3c-.9.3-.9 1.6.1 1.9l4.5 1.5 1.7 5.3c.2.7 1.1.9 1.6.4l2.5-2.5 4.6 3.4c.7.5 1.7.1 1.9-.7l2.9-14.4ZM9.3 13.3l-.2 2.9-.9-2.9 9.7-6.1-8.6 6.1Z"
      />
    </svg>
  );
}

export default function ContactPage({ locale, dictionary }: ContactPageProps) {
  const copy = dictionary.contactPage;

  const channels: Array<{
    key: string;
    label: string;
    value: string;
    href: string;
    external: boolean;
    description?: string;
  }> = [
    {
      key: "email",
      label: copy.emailLabel,
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      external: false,
    },
    {
      key: "phone",
      label: copy.phoneLabel,
      value: formatSitePhone(siteConfig.phone),
      href: `tel:${siteConfig.phone}`,
      external: false,
    },
    {
      key: "telegram",
      label: copy.telegramLabel,
      value: copy.telegramValue,
      href: siteConfig.telegramBot,
      external: true,
    },
    {
      key: "instagram",
      label: copy.instagramLabel,
      value: copy.instagramValue,
      href: siteConfig.instagram,
      external: true,
    },
  ];

  return (
    <>
      <Header locale={locale} dictionary={dictionary} />
      <main className="sp contact-page">
        <section className="contact-hero">
          <div className="wrap">
            <PageBreadcrumbs items={[{ label: dictionary.nav.contact }]} />
            <h1 className="sp-h1 contact-hero-title">
              {copy.title}
              <span className="sp-h1-accent">.</span>
            </h1>
            <p className="sp-lead contact-hero-lead">{copy.lead}</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="wrap">
            <div className="contact-intro">
              <h2 className="contact-intro-title">{copy.channelsTitle}</h2>
              <p className="contact-intro-lead">{copy.channelsLead}</p>
            </div>

            <div className="contact-grid">
              {channels.map((channel) => {
                const isTelegram = channel.key === "telegram";
                return (
                  <a
                    key={channel.key}
                    className={`contact-card${isTelegram ? " contact-card--telegram" : ""}`}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noreferrer" : undefined}
                  >
                    {isTelegram ? (
                      <span className="contact-telegram-row">
                        <TelegramIcon />
                        <span className="contact-card-value">{channel.value}</span>
                      </span>
                    ) : (
                      <>
                        <span className="contact-card-top">
                          <span className="contact-card-label">{channel.label}</span>
                          <span className="contact-card-arrow" aria-hidden="true">
                            ↗
                          </span>
                        </span>
                        <span className="contact-card-value">{channel.value}</span>
                        {channel.description ? (
                          <span className="contact-card-note">{channel.description}</span>
                        ) : null}
                      </>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="sp-cta">
          <div className="wrap">
            <CtaPanel dictionary={dictionary} />
          </div>
        </section>
      </main>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}

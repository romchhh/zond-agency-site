import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const result = spawnSync(
  "npx",
  ["--yes", "tsx", path.join("scripts", "cms-seed.ts")],
  { cwd: root, encoding: "utf8", stdio: "inherit", shell: false },
);

process.exit(result.status ?? 1);

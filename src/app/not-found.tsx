import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="wrap">
        <p className="not-found-label">404</p>
        <h1>Сторінку не знайдено</h1>
        <p>Перевірте адресу або поверніться на головну сторінку {siteConfig.name}.</p>
        <Link className="not-found-link" href="/">
          На головну
        </Link>
      </div>
    </main>
  );
}

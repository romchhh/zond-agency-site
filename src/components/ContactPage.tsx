import CtaPanel from "@/components/CtaPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import { siteConfig } from "@/lib/site";

type ContactPageProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 12 || !digits.startsWith("380")) return phone;
  return `+38 ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10, 12)}`;
}

export default function ContactPage({ locale, dictionary }: ContactPageProps) {
  const copy = dictionary.contactPage;

  const channels = [
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
      value: formatPhone(siteConfig.phone),
      href: `tel:${siteConfig.phone}`,
      external: false,
    },
    {
      key: "telegram",
      label: copy.telegramLabel,
      value: copy.telegramValue,
      href: siteConfig.telegramBot,
      external: true,
      description: copy.telegramDescription,
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
              {channels.map((channel) => (
                <a
                  key={channel.key}
                  className="contact-card"
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                >
                  <span className="contact-card-top">
                    <span className="contact-card-label">{channel.label}</span>
                    <span className="contact-card-arrow" aria-hidden="true">↗</span>
                  </span>
                  <span className="contact-card-value">{channel.value}</span>
                  {channel.description ? (
                    <span className="contact-card-note">{channel.description}</span>
                  ) : null}
                </a>
              ))}
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

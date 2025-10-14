"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

type Locale = "pt" | "en" | "it";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const router = useRouter();
  const pathname = usePathname(); // sem prefixo de locale (vem da factory do next-intl)
  const currentLocale = useLocale() as Locale;

  function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value as Locale;
    router.push(pathname, { locale: newLocale });
  }

  const phoneRaw = t("phone");
  const phoneHref = `tel:${phoneRaw.replace(/\D/g, "")}`;

  return (
    <footer className="relative isolate">
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto max-w-7xl px-6 py-14">
          {/* Contact & Social */}
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
            <address className="not-italic text-sm text-white/85 md:col-span-6">
              <p className="font-medium text-white text-base">
                {t("contactTitle")}
              </p>
              <p className="mt-1">{t("address")}</p>
              <p className="mt-1">
                <a
                  className="hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition"
                  href={`mailto:${t("email")}`}
                >
                  {t("email")}
                </a>{" "}
                ·{" "}
                <a
                  className="hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition"
                  href={phoneHref}
                >
                  {t("phone")}
                </a>
              </p>
            </address>

            {/* Redes sociais */}
            <div className="md:col-span-6">
              <ul className="flex flex-wrap items-center gap-3">
                <li>
                  <a
                    href="https://wa.me/5548991147704?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    title={t("whatsappTitle")}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/20 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <FaWhatsapp size={18} aria-hidden />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/seuusuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title={t("instagramTitle")}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/20 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <FaInstagram size={18} aria-hidden />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ecprojetos"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title={t("linkedinTitle")}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 transition hover:bg-white/20 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <FaLinkedin size={18} aria-hidden />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/70 md:flex-row">
            <p>
              © {year} Eagle Consultoria — {t("rights")}
            </p>
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  className="hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition"
                  href="/legal/privacy"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition"
                  href="/legal/terms"
                >
                  {t("terms")}
                </Link>
              </li>
              <li>
                <select
                  aria-label={t("languageLabel")}
                  onChange={handleLanguageChange}
                  value={currentLocale}
                  className="rounded-md bg-white/10 px-2 py-1 text-white outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-sky-400"
                >
                  <option className="text-black" value="pt">
                    Português (BR)
                  </option>
                  <option className="text-black" value="en">
                    English (US)
                  </option>
                  <option className="text-black" value="it">
                    Italiano
                  </option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Gradiente sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/10 to-transparent"
      />
    </footer>
  );
}

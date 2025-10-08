// app/[locale]/(marketing)/components/About.tsx
import Container from "@/components/ui/container";
import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const bullets = [
    t("items.legitimacy"),
    t("items.speed"),
    t("items.partnership"),
    t("items.techDNA"),
  ];

  return (
    <section className="bg-brand-light2 py-16">
      <Container>
        <H2 className="mb-8">{t("title")}</H2>
        <ul className="grid gap-4 md:grid-cols-2">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-brand-secondary/10"
            >
              ✓ {b}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

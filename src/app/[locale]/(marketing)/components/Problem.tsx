// app/[locale]/(marketing)/components/Problem.tsx
import Container from "@/components/ui/container";
import { Globe } from "@/components/ui/globe";
import { H2, Muted } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export default function Problem() {
  const t = useTranslations("problem");
  const cards: { title: string; desc: string }[] = [
    { title: t("card1.title"), desc: t("card1.desc") },
    { title: t("card2.title"), desc: t("card2.desc") },
    { title: t("card3.title"), desc: t("card3.desc") },
  ];

  return (
    <section className="bg-brand-light1 py-16">
      <Container>
        <div className="mb-6 text-sm font-medium uppercase tracking-wider text-brand-secondary">
          {t("tag")}
        </div>
        <H2 className="mb-4">{t("title")}</H2>
        <Muted className="mb-10 max-w-3xl">{t("subtitle")}</Muted>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-secondary/10"
            >
              <div className="mb-2 text-lg font-semibold text-brand-primary">
                {c.title}
              </div>
              <p className="text-brand-text/80">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
      {/* <Globe /> */}
    </section>
  );
}

// app/[locale]/(marketing)/components/ActionPlan.tsx
import Container from "@/components/ui/container";
import { H2, Muted } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export default function ActionPlan() {
  const t = useTranslations("actionPlan");
  const steps: { title: string; desc: string }[] = [
    { title: t("step1.title"), desc: t("step1.desc") },
    { title: t("step2.title"), desc: t("step2.desc") },
    { title: t("step3.title"), desc: t("step3.desc") },
  ];

  return (
    <section className="bg-brand-light1 py-16">
      <Container>
        <H2 className="mb-4">{t("title")}</H2>
        <Muted className="mb-10 max-w-3xl">{t("subtitle")}</Muted>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-brand-secondary/10"
            >
              <div className="mb-2 text-lg font-semibold text-brand-primary">
                {s.title}
              </div>
              <p className="text-brand-text/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

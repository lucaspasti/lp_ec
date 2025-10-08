// app/[locale]/(marketing)/components/FinalCTA.tsx
import Container from "@/components/ui/container";
import { H2, Muted } from "@/components/ui/typography";
import ContactDialog from "./ContactDialog";
import { useTranslations } from "next-intl";

export default function FinalCTA() {
  const t = useTranslations("finalCTA");
  return (
    <section className="bg-brand-primary py-16 text-white">
      <Container>
        <H2 className="mb-3 text-white">{t("headline")}</H2>
        <Muted className="mb-6 text-brand-light1/90">{t("sub")}</Muted>
        <ContactDialog triggerLabel={t("cta")} />
      </Container>
    </section>
  );
}

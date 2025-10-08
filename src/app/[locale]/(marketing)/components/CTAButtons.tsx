// app/[locale]/(marketing)/components/CTAButtons.tsx
"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ContactDialog from "./ContactDialog";

export default function CTAButtons({
  primaryText,
  secondaryText,
}: {
  primaryText: string;
  secondaryText: string;
}) {
  const t = useTranslations("shared");
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5599999999999";

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <ContactDialog  triggerLabel={primaryText} />
      <Link
        href={`https://wa.me/${phone}`}
        className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-black backdrop-blur transition hover:bg-white/20"
      >
        {secondaryText || t("viewCases")}
      </Link>
    </div>
  );
}

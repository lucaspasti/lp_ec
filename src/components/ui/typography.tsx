// components/ui/typography.tsx
import { ReactNode } from "react";

export function H1({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-3xl md:text-5xl font-semibold tracking-tight text-brand-primary ${className}`}
    >
      {children}
    </h1>
  );
}

export function H2({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl md:text-4xl font-semibold tracking-tight text-brand-primary ${className}`}
    >
      {children}
    </h2>
  );
}

export function Muted({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-base md:text-lg text-brand-textMuted ${className}`}>
      {children}
    </p>
  );
}

// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0C2860", // fundo escuro institucional, cabeçalhos, destaque forte
          secondary: "#5E7092", // apoio, subtítulos, ícones secundários, bordas
          light1: "#EEF4FB", // blocos de contraste, seções de conteúdo
          light2: "#F0F5FC", // cards, áreas alternadas
          text: "#1A1A1A", // texto principal (sobre fundos claros)
          textMuted: "#5E7092", // texto secundário
          white: "#FFFFFF",
          cta: "#D4A017", // botões destaque (premium)
        },
      },
    },
  },
  plugins: [],
};

export default config;

// app/[locale]/(marketing)/components/ContactDialog.tsx
"use client";
import { useState } from "react";

export default function ContactDialog({
  triggerLabel,
}: {
  triggerLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-lg bg-brand-cta px-6 py-3 font-semibold text-black shadow-md transition hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
      >
        {triggerLabel}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal
        >
          <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl border border-gray-200 animate-fade-in">
            <div className="mb-6 text-2xl font-bold  text-center">
              <span className="text-black">Fale com a </span>
              <span className="text-blue-600">EC</span>{" "}
              <span className="text-gray-700">Projetos</span>
            </div>
            <form
              className="grid grid-cols-1 gap-4 text-gray-600"
              action="/api/contact"
              method="post"
            >
              <input
                required
                name="name"
                placeholder="Nome"
                className="rounded-md border border-gray-300 px-4 py-2 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
              />
              <input
                required
                name="company"
                placeholder="Empresa"
                className="rounded-md border border-gray-300 px-4 py-2 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
              />
              <input
                required
                name="role"
                placeholder="Cargo"
                className="rounded-md border border-gray-300 px-4 py-2 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="E-mail"
                className="rounded-md border border-gray-300 px-4 py-2 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
              />
              <input
                name="phone"
                placeholder="Telefone"
                className="rounded-md border border-gray-300 px-4 py-2 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition"
              />
              <textarea
                name="message"
                placeholder="Mensagem"
                rows={4}
                className="rounded-md border border-gray-300 px-4 py-2 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition resize-none"
              />
              <div className="mt-4 flex items-center justify-end gap-3">
                <button
                  type="submit"
                  className="rounded-md bg-brand-primary px-5 py-2 font-semibold text-black shadow hover:bg-blue-600 hover:text-white transition"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-gray-300 px-5 py-2 font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </>
  );
}

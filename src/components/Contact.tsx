import { FormEvent, useState } from "react";
import { useReveal } from "../hooks/useReveal";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const sectionRef = useReveal<HTMLElement>();
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="reveal mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
      aria-labelledby="contact-title"
    >
      <h2
        id="contact-title"
        className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl"
      >
        Écrire au fournil
      </h2>
      <p className="mt-3 max-w-xl text-[var(--crust)]/80">
        Commande spéciale, question ou simple bonjour — ce formulaire est une
        démo : rien n&apos;est envoyé.
      </p>

      {submitted ? (
        <div
          className="mt-10 max-w-xl border border-[var(--sage)]/40 bg-white/60 px-5 py-6"
          role="status"
        >
          <p className="font-display text-lg font-bold text-[var(--ink)]">
            Message bien reçu
          </p>
          <p className="mt-2 text-sm text-[var(--crust)]/80">
            Merci ! Dans une vraie boutique, nous vous répondrions sous 24 h.
            Ici, aucune donnée n&apos;a quitté votre navigateur.
          </p>
          <button
            type="button"
            className="mt-5 text-sm font-semibold text-[var(--sage)] underline-offset-4 hover:underline"
            onClick={() => setSubmitted(false)}
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form
          className="mt-10 max-w-xl space-y-5"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--ink)]"
            >
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1.5 w-full border border-[var(--ink)]/15 bg-white/70 px-3 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--sage)]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--ink)]"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1.5 w-full border border-[var(--ink)]/15 bg-white/70 px-3 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--sage)]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--ink)]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1.5 w-full resize-y border border-[var(--ink)]/15 bg-white/70 px-3 py-2.5 text-[var(--ink)] outline-none transition focus:border-[var(--sage)]"
            />
          </div>
          <button
            type="submit"
            className="bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--crust)]"
          >
            Envoyer
          </button>
        </form>
      )}
    </section>
  );
}

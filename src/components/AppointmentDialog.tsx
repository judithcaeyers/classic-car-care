import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Naam is te kort").max(80),
  email: z.string().trim().email("Ongeldig e-mailadres").max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  car: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().max(60),
  slot1: z.string().trim().min(2, "Geef minstens één moment door").max(80),
  slot2: z.string().trim().max(80).optional().or(z.literal("")),
  slot3: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Vertel kort wat u zoekt").max(1200),
});

type FormState = z.infer<typeof schema>;

const SERVICES = [
  "Onderhoud & herstelling",
  "Carrosserie & spuitwerk",
  "Restauratie van oldtimer",
  "Diagnose / advies",
  "Andere",
];

export function AppointmentTrigger({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      <AppointmentDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function AppointmentDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setDone(false);
      setErrors({});
    }
  }, [open]);

  if (!open) return null;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const d = parsed.data;
    const subject = `Afspraakaanvraag — ${d.name}`;
    const body =
      `Naam: ${d.name}\n` +
      `E-mail: ${d.email}\n` +
      `Telefoon: ${d.phone || "—"}\n` +
      `Wagen: ${d.car || "—"}\n` +
      `Type dienst: ${d.service}\n\n` +
      `Voorgestelde momenten:\n` +
      ` 1. ${d.slot1}\n` +
      (d.slot2 ? ` 2. ${d.slot2}\n` : "") +
      (d.slot3 ? ` 3. ${d.slot3}\n` : "") +
      `\nVraag:\n${d.message}\n`;
    window.location.href = `mailto:info@drs-classics.be?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Afspraak maken"
      className="fixed inset-0 z-[110] bg-background/95 backdrop-blur-md flex items-start md:items-center justify-center overflow-y-auto p-4 md:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-card border border-border my-8 animate-in zoom-in-95 fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Sluiten"
          onClick={onClose}
          className="absolute top-4 right-4 text-cream hover:text-brass transition-colors p-2 z-10"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {done ? (
          <div className="p-10 md:p-14 text-center">
            <div className="eyebrow mb-6">Bedankt</div>
            <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
              Uw aanvraag is <em className="text-brass not-italic italic">onderweg</em>.
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Wij bekijken uw voorgestelde momenten en bevestigen binnen 1 à 2 werkdagen.
            </p>
            <button onClick={onClose} className="btn-ghost mt-8">Sluiten</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="p-6 md:p-10 space-y-6 max-h-[88vh] overflow-y-auto" noValidate>
            <div>
              <div className="eyebrow mb-3">Afspraak maken</div>
              <h2 className="font-display text-3xl md:text-4xl text-cream">
                Plan een <em className="text-brass not-italic italic">bezoek</em> aan het atelier.
              </h2>
              <p className="text-sm text-muted-foreground mt-3">
                Geef enkele momenten door die u schikken — wij bevestigen binnen 1 à 2 werkdagen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field name="name" label="Uw naam" required error={errors.name} />
              <Field name="phone" label="Telefoon" type="tel" error={errors.phone} />
            </div>
            <Field name="email" label="E-mail" type="email" required error={errors.email} />

            <div>
              <span className="eyebrow block mb-2">Type dienst</span>
              <select
                name="service"
                defaultValue={SERVICES[0]}
                className="w-full bg-transparent border-0 border-b border-border focus:border-brass outline-none py-3 text-cream"
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-background text-cream">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <Field name="car" label="Merk & model" placeholder="Bijv. BMW E30 — 1988" error={errors.car} />

            <div className="space-y-3">
              <span className="eyebrow block">Voorgestelde momenten <span className="text-accent">*</span></span>
              <Field
                name="slot1"
                label=""
                placeholder="Bijv. dinsdag 19/05 — voormiddag"
                required
                error={errors.slot1}
                bare
              />
              <Field name="slot2" label="" placeholder="Tweede optie (optioneel)" error={errors.slot2} bare />
              <Field name="slot3" label="" placeholder="Derde optie (optioneel)" error={errors.slot3} bare />
            </div>

            <div>
              <span className="eyebrow block mb-2">Uw vraag <span className="text-accent">*</span></span>
              <textarea
                name="message"
                rows={4}
                maxLength={1200}
                placeholder="Vertel kort wat er moet gebeuren of wat u wenst te bespreken."
                className="w-full bg-transparent border-0 border-b border-border focus:border-brass outline-none py-3 text-cream placeholder:text-muted-foreground/60"
              />
              {errors.message && <p className="text-xs text-accent mt-1 font-mono">{errors.message}</p>}
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-3 md:items-center md:justify-between pt-2">
              <button type="button" onClick={onClose} className="btn-ghost">
                Annuleren
              </button>
              <button type="submit" disabled={submitting} className="btn-brass">
                {submitting ? "Versturen…" : "Afspraak aanvragen →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
  error,
  bare,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  bare?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-0 border-b border-border focus:border-brass outline-none py-3 text-cream placeholder:text-muted-foreground/60 transition-colors";
  return (
    <label className="block">
      {!bare && label && (
        <span className="eyebrow block mb-2">
          {label}
          {required && <span className="text-accent"> *</span>}
        </span>
      )}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={250}
        className={cls}
      />
      {error && <p className="text-xs text-accent mt-1 font-mono">{error}</p>}
    </label>
  );
}

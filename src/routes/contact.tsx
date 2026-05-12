import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DRS Classics · Sint-Pieters-Leeuw" },
      { name: "description", content: "Contacteer DRS Classics voor onderhoud, herstelling of restauratie. Mekingenweg 122, 1600 Sint-Pieters-Leeuw — +32 499 70 58 70." },
      { property: "og:title", content: "Contact · DRS Classics" },
      { property: "og:description", content: "Bel, mail of kom langs in het atelier." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="pt-40 pb-16 md:pt-48 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="eyebrow mb-6">Contact</div>
        <h1 className="font-display text-6xl md:text-8xl text-cream text-balance max-w-4xl">
          Een <em className="text-brass italic">gesprek</em> begint vaak met een koffie.
        </h1>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Info */}
          <div className="md:col-span-5 space-y-12">
            <div>
              <div className="eyebrow mb-4">Atelier</div>
              <p className="font-display text-2xl text-cream leading-snug">
                Mekingenweg 122<br />
                1600 Sint-Pieters-Leeuw<br />
                België
              </p>
            </div>

            <div className="hairline" />

            <div>
              <div className="eyebrow mb-4">Direct contact</div>
              <a href="tel:+32499705870" className="block font-display text-3xl text-cream hover:text-brass transition-colors">
                +32 499 70 58 70
              </a>
              <a href="mailto:info@drs-classics.be" className="block font-display text-2xl text-cream hover:text-brass transition-colors mt-2">
                info@drs-classics.be
              </a>
            </div>

            <div className="hairline" />

            <div>
              <div className="eyebrow mb-4">Openingsuren</div>
              <dl className="space-y-2 font-mono text-sm">
                <div className="flex justify-between"><dt>Ma — Vr</dt><dd className="text-muted-foreground">Op afspraak</dd></div>
                <div className="flex justify-between"><dt>Zaterdag</dt><dd className="text-muted-foreground">Op afspraak</dd></div>
                <div className="flex justify-between"><dt>Zondag</dt><dd className="text-muted-foreground">Gesloten</dd></div>
              </dl>
            </div>

            <div className="hairline" />

            <div>
              <div className="eyebrow mb-4">Onderneming</div>
              <p className="font-mono text-sm text-muted-foreground">BE 0795.933.302</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <form
              className="space-y-8 bg-card border border-border p-8 md:p-12"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(`Aanvraag — ${data.get("name")}`);
                const body = encodeURIComponent(
                  `Naam: ${data.get("name")}\nTelefoon: ${data.get("phone")}\nWagen: ${data.get("car")}\n\n${data.get("message")}`
                );
                window.location.href = `mailto:info@drs-classics.be?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field name="name" label="Uw naam" required />
                <Field name="phone" label="Telefoon" type="tel" />
              </div>
              <Field name="email" label="E-mail" type="email" required />
              <Field name="car" label="Merk & model" placeholder="Bijv. BMW E30 — 1988" />
              <Field name="message" label="Uw vraag of project" textarea />

              <button type="submit" className="btn-brass w-full justify-center">
                Bericht versturen →
              </button>
              <p className="text-xs text-muted-foreground text-center font-mono">
                Wij contacteren u binnen 1 à 2 werkdagen.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full bg-transparent border-0 border-b border-border focus:border-brass outline-none py-3 text-cream placeholder:text-muted-foreground/60 transition-colors";
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}{required && <span className="text-accent"> *</span>}</span>
      {textarea ? (
        <textarea name={name} rows={5} required={required} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

import { usePageMeta } from "@/hooks/use-page-meta";

export default function Contact() {
  usePageMeta({
    title: "Contact — DRS Classics · Lembeek",
    description: "Contacteer DRS Classics voor onderhoud, herstelling of restauratie. Noorderstraat 50, 1502 Lembeek — +32 478 01 43 17.",
    ogTitle: "Contact · DRS Classics",
    ogDescription: "Bel, mail of kom langs in het atelier.",
  });
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
          <div className="md:col-span-5 space-y-12">
            <div>
              <div className="eyebrow mb-4">Atelier</div>
              <p className="font-display text-2xl text-cream leading-snug">
                Noorderstraat 50<br />
                1502 Lembeek<br />
                België
              </p>
            </div>

            <div className="hairline" />

            <div>
              <div className="eyebrow mb-4">Direct contact</div>
              <a href="tel:+32478014317" className="block font-display text-3xl text-cream hover:text-brass transition-colors">
                +32 478 01 43 17
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

          <div className="md:col-span-7">
            <div className="space-y-8 bg-card border border-border p-8 md:p-12">
              <div>
                <div className="eyebrow mb-4">E-mail ons</div>
                <a href="mailto:info@drs-classics.be" className="font-display text-3xl text-cream hover:text-brass transition-colors">
                  info@drs-classics.be
                </a>
                <p className="text-muted-foreground mt-4 max-w-md">
                  Stuur ons gerust een mail met uw vraag of project. Wij lezen en beantwoorden persoonlijk binnen 1 à 2 werkdagen.
                </p>
              </div>
            </div>
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

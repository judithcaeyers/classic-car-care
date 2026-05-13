import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import mechImg from "@/assets/service-mechanic.jpg";
import bodyImg from "@/assets/service-body.jpg";
import restoImg from "@/assets/service-restoration.jpg";

const items = [
  {
    n: "01",
    title: "Onderhoud & Herstelling",
    img: mechImg,
    desc: "Een oldtimer rijdt het mooist als hij betrouwbaar is. Wij verzorgen alle reguliere onderhouden, technische herstellingen en diagnoses — voor klassiekers én moderne wagens.",
    bullets: ["Periodiek onderhoud & olieservice", "Mechaniek, remmen, ophanging", "Diagnose en elektriciteit", "Voorbereiding voor de keuring"],
  },
  {
    n: "02",
    title: "Carrosserie & Spuitwerk",
    img: bodyImg,
    desc: "Geen kleurverschillen op de deuren. Geen restjes roest in de kofferbak. Carrosseriewerk waar we trots op zijn — afgewerkt zoals een klassieker het verdient.",
    bullets: ["Plaatwerk & lasreparaties", "Volledig spuitwerk in moffeloven", "Kleur op kleur of volledige overspuiting", "Polish & afwerking"],
  },
  {
    n: "03",
    title: "Restauratie van Oldtimers",
    img: restoImg,
    desc: "Een volledige restauratie is een lange reis. Wij begeleiden u stap voor stap — van demontage en sandblasten tot de eerste rit op een zonnige zondag.",
    bullets: ["Volledige of gedeeltelijke restauratie", "Mechanische revisie", "Carrosserie & afwerking", "Begeleiding van A tot Z"],
  },
];

export default function Diensten() {
  return (
    <>
      <Helmet>
        <title>Diensten — Onderhoud, Carrosserie & Restauratie · DRS Classics</title>
        <meta name="description" content="Onderhoud en herstelling, carrosseriewerken en volledige restauratie van auto's en oldtimers in Sint-Pieters-Leeuw." />
        <meta property="og:title" content="Diensten · DRS Classics" />
        <meta property="og:description" content="Onderhoud, carrosserie en restauratie voor auto's en oldtimers." />
      </Helmet>

      <section className="pt-40 pb-20 md:pt-48 md:pb-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="eyebrow mb-6">Diensten</div>
        <h1 className="font-display text-6xl md:text-8xl text-cream text-balance max-w-4xl">
          Drie disciplines.
          <br />
          <span className="text-brass italic">Eén ambachtelijke standaard.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg text-muted-foreground text-pretty">
          Wij specialiseren in de herstelling en restauratie van oldtimers, maar
          tot vandaag kan u bij ons terecht voor élke auto. Kwaliteit gaat altijd
          voor snelheid.
        </p>
      </section>

      <div className="hairline max-w-[1400px] mx-auto" />

      {items.map((item, i) => (
        <section key={item.n} className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className={`grid md:grid-cols-12 gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.title} loading="lazy" width={1280} height={960} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="font-mono text-xs text-brass mb-4">— {item.n} / 03</div>
              <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">{item.title}</h2>
              <p className="text-muted-foreground text-lg text-pretty mb-8">{item.desc}</p>
              <ul className="space-y-3">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-baseline gap-3 text-cream/90">
                    <span className="text-brass font-mono text-xs">+</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="border border-border p-12 md:p-20 text-center bg-card">
          <div className="eyebrow mb-6">Een vraag?</div>
          <h2 className="font-display text-4xl md:text-6xl text-cream text-balance max-w-3xl mx-auto">
            Vertel ons over uw <em className="text-brass not-italic">project</em>.
          </h2>
          <div className="mt-10">
            <Link to="/contact" className="btn-brass">Contacteer ons</Link>
          </div>
        </div>
      </section>
    </>
  );
}

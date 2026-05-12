import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-garage.jpg";
import mechImg from "@/assets/service-mechanic.jpg";
import bodyImg from "@/assets/service-body.jpg";
import restoImg from "@/assets/service-restoration.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { n: "01", title: "Onderhoud & Herstelling", desc: "Voor moderne wagens én oldtimers. Betrouwbaar werk, eerlijk advies.", img: mechImg, href: "/diensten" as const },
  { n: "02", title: "Carrosserie & Spuitwerk", desc: "Een carrosserie die blinkt — want elke oldtimer verdient het.", img: bodyImg, href: "/diensten" as const },
  { n: "03", title: "Restauratie van Oldtimers", desc: "Volledige restauraties met respect voor het origineel en oog voor detail.", img: restoImg, href: "/diensten" as const },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Klassieke BMW E30 in het atelier van DRS Classics"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 grain" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pb-24 md:pb-32 pt-40 w-full">
          <div className="eyebrow mb-6">Est. 2024 · Sint-Pieters-Leeuw</div>
          <h1 className="font-display text-[14vw] md:text-[7.5rem] leading-[0.9] text-cream text-balance max-w-5xl">
            Vakmanschap voor wie van <em className="text-brass not-italic">auto's</em> houdt.
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link to="/diensten" className="btn-brass">Ontdek onze diensten →</Link>
            <Link to="/contact" className="btn-ghost">Maak een afspraak</Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-[0.4em] text-muted-foreground uppercase animate-pulse">
          Scroll
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-2 eyebrow">Wat wij doen</div>
          <div className="md:col-span-10">
            <p className="font-display text-3xl md:text-5xl leading-[1.15] text-balance text-cream">
              Algemene garage met een hart voor oldtimers. Van een onderhoud op
              maandag tot een complete restauratie die maanden duurt — wij nemen
              de tijd om het <em className="text-brass not-italic">juist</em> te doen.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="eyebrow mb-4">Drie pijlers</div>
            <h2 className="font-display text-5xl md:text-6xl text-cream">Onze expertise</h2>
          </div>
          <Link to="/diensten" className="hidden md:inline-block text-xs uppercase tracking-[0.22em] text-brass hover:underline underline-offset-8">
            Alle diensten →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <Link
              key={s.n}
              to={s.href}
              className="group relative bg-background p-8 md:p-10 flex flex-col gap-6 hover:bg-card transition-colors duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                />
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-brass">{s.n}</span>
                <div className="hairline flex-1" />
              </div>
              <h3 className="font-display text-3xl text-cream">{s.title}</h3>
              <p className="text-muted-foreground text-pretty">{s.desc}</p>
              <span className="text-xs uppercase tracking-[0.22em] text-brass mt-2 inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Lees meer →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative py-32 md:py-48 border-y border-border overflow-hidden">
        <div className="absolute inset-0 grain opacity-50" />
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <div className="eyebrow mb-8">Onze belofte</div>
          <p className="font-display text-3xl md:text-5xl leading-[1.2] text-cream text-balance">
            "Niet elke oldtimer komt elke zondag buiten,
            <br />
            <span className="text-brass italic">maar elke oldtimer verdient het om er goed uit te zien."</span>
          </p>
          <div className="hairline w-24 mx-auto mt-12" />
          <div className="mt-6 font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Wouter — DRS Classics
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h2 className="font-display text-5xl md:text-7xl text-cream text-balance">
              Klaar om uw <em className="text-brass not-italic">klassieker</em> de zorg te geven die hij verdient?
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right space-y-6">
            <p className="text-muted-foreground text-lg max-w-md md:ml-auto">
              Een gesprek begint vaak met een koffie in het atelier. Bel, mail
              of kom langs.
            </p>
            <div className="flex flex-wrap md:justify-end gap-4">
              <Link to="/contact" className="btn-brass">Contact opnemen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

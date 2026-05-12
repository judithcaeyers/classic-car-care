import { createFileRoute, Link } from "@tanstack/react-router";
import interiorImg from "@/assets/about-interior.jpg";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Het verhaal achter DRS Classics" },
      { name: "description", content: "Hoe een passie voor oldtimers uitgroeide tot DRS Classics. Lees het verhaal van Wouter en de mensen achter het atelier." },
      { property: "og:title", content: "Over ons · DRS Classics" },
      { property: "og:description", content: "Een jonge garage met een hart voor klassiekers." },
    ],
  }),
  component: Over,
});

const timeline = [
  { year: "Studies", text: "Wouter twijfelt tussen ingenieur en autotechnologie. Het wordt Sint-Katelijne-Waver — en al snel zijn eerste oldtimer." },
  { year: "Volvo", text: "Aan de slag als technieker. Overdag bij Volvo, 's avonds en in het weekend onder de motorkap van een eigen project." },
  { year: "E30", text: "De aankoop van een BMW E30. Een herstelling brengt hem bij Elie Vellemans — een specialist in oudere BMW's. Een vriendschap en een richting zijn geboren." },
  { year: "Vandaag", text: "Wat begon als hulp aan vrienden en familie groeit uit tot DRS Classics: een atelier dat kwaliteit vooropstelt voor élke auto, en in het bijzonder voor de oldtimer." },
];

const values = [
  { t: "Kwaliteit boven snelheid", d: "Een auto die de weg op kan moet veilig én mooi zijn. Wij nemen de tijd die daarvoor nodig is." },
  { t: "Eerlijk advies", d: "Wat moet, dat moet. Wat kan wachten, dat zeggen we ook. Geen verrassingen achteraf." },
  { t: "Passie als drijfveer", d: "We doen dit omdat we van auto's houden. Dat voel je in elk detail." },
];

function Over() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="eyebrow mb-6">Over ons</div>
        <h1 className="font-display text-6xl md:text-8xl text-cream text-balance max-w-4xl">
          Begonnen met een <em className="text-brass italic">passie</em>.
          Gegroeid tot een atelier.
        </h1>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-32">
            <img
              src={interiorImg}
              alt="Interieur van een klassieke wagen"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full"
            />
          </div>
          <div className="md:col-span-7 space-y-12">
            <p className="font-display text-2xl md:text-3xl leading-relaxed text-cream text-pretty">
              De interesse was er al tijdens de studies. Wat begon met een eerste
              oldtimer en een job bij Volvo, groeide via avonduren en weekends
              uit tot een succesvol bijberoep — en uiteindelijk tot DRS Classics.
            </p>

            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div key={i} className="grid grid-cols-12 gap-6">
                  <div className="col-span-3 md:col-span-2">
                    <div className="font-mono text-xs uppercase tracking-[0.2em] text-brass">{t.year}</div>
                  </div>
                  <div className="col-span-9 md:col-span-10 text-muted-foreground text-pretty border-l border-border pl-6">
                    {t.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="eyebrow mb-6">Waar wij voor staan</div>
          <h2 className="font-display text-5xl md:text-6xl text-cream mb-16 max-w-3xl">
            Een eenvoudige <em className="text-brass not-italic italic">filosofie</em>.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={v.t}>
                <div className="font-mono text-xs text-brass mb-4">0{i + 1}</div>
                <h3 className="font-display text-2xl text-cream mb-3">{v.t}</h3>
                <p className="text-muted-foreground text-pretty">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 text-center">
        <h2 className="font-display text-4xl md:text-6xl text-cream text-balance max-w-3xl mx-auto">
          Kom eens langs in het <em className="text-brass not-italic">atelier</em>.
        </h2>
        <div className="mt-10">
          <Link to="/contact" className="btn-brass">Plan een bezoek</Link>
        </div>
      </section>
    </>
  );
}

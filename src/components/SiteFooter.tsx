import { Link } from "@tanstack/react-router";
import logo from "@/assets/drs-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <img src={logo} alt="DRS Classics" width={120} height={120} className="h-20 w-auto" />
          <p className="mt-6 text-muted-foreground max-w-sm text-pretty">
            Onderhoud, herstelling en restauratie voor wie de schoonheid van een
            oldtimer kan appreciëren. Vakmanschap dat blijft.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-5">Navigatie</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brass transition-colors">Home</Link></li>
            <li><Link to="/diensten" className="hover:text-brass transition-colors">Diensten</Link></li>
            <li><Link to="/over-ons" className="hover:text-brass transition-colors">Over ons</Link></li>
            <li><Link to="/contact" className="hover:text-brass transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="eyebrow mb-5">Atelier</div>
          <address className="not-italic text-sm space-y-2 text-muted-foreground">
            <div>Mekingenweg 122</div>
            <div>1600 Sint-Pieters-Leeuw</div>
            <div className="pt-3">
              <a href="tel:+32499705870" className="block hover:text-brass transition-colors">
                +32 499 70 58 70
              </a>
              <a href="mailto:info@drs-classics.be" className="block hover:text-brass transition-colors">
                info@drs-classics.be
              </a>
            </div>
            <div className="pt-3 font-mono text-xs">BE 0795.933.302</div>
          </address>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} DRS Classics — Alle rechten voorbehouden</span>
          <span className="tracking-[0.2em] uppercase">Sint-Pieters-Leeuw · België</span>
        </div>
      </div>
    </footer>
  );
}

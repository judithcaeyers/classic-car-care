import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "@/assets/drs-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-background/85 border-b border-border" : ""
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)} aria-label="DRS Classics — Home">
          <img src={logo} alt="DRS Classics" width={48} height={48} className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.22em] transition-colors ${
                  isActive ? "text-brass" : "text-muted-foreground hover:text-brass"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <AppointmentTrigger className="hidden md:inline-flex btn-ghost py-2.5 px-4 text-[0.65rem]">
          Maak afspraak
        </AppointmentTrigger>

        <button aria-label="Menu" className="md:hidden text-cream" onClick={() => setOpen((v) => !v)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.22em] ${isActive ? "text-brass" : "text-muted-foreground"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

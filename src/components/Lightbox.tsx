import { useEffect, useCallback } from "react";

export type LightboxImage = { src: string; alt: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const isOpen = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const prev = useCallback(() => {
    if (index === null) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, next, prev, onClose]);

  if (!isOpen || index === null) return null;
  const img = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Foto-galerij"
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        aria-label="Sluiten"
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-8 text-cream hover:text-brass transition-colors z-10 p-2"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-7 left-6 md:top-9 md:left-8 font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase">
        {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Prev */}
      <button
        type="button"
        aria-label="Vorige foto"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-cream hover:text-brass transition-colors p-3 z-10"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>

      {/* Image */}
      <figure
        className="relative max-w-[92vw] max-h-[82vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="max-w-[92vw] max-h-[78vh] object-contain animate-in fade-in zoom-in-95 duration-300"
        />
        <figcaption className="mt-4 font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground text-center">
          {img.alt}
        </figcaption>
      </figure>

      {/* Next */}
      <button
        type="button"
        aria-label="Volgende foto"
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-cream hover:text-brass transition-colors p-3 z-10"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

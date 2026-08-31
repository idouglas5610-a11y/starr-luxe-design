import { useCallback, useRef, useState } from "react";

export function BeforeAfterSlider({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/3 w-full touch-none overflow-hidden select-none bg-cream"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) setFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
    >
      <img
        src={after}
        alt={`${label} after redesign`}
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
        aria-hidden
      >
        <img
          src={before}
          alt=""
          loading="lazy"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
          style={{ width: containerRef.current?.clientWidth ?? "100%", maxWidth: "none" }}
        />
      </div>

      <span className="pointer-events-none absolute top-4 left-4 bg-charcoal/85 px-3 py-1.5 spaced-caps text-ivory">
        Before
      </span>
      <span className="pointer-events-none absolute top-4 right-4 bg-ivory/90 px-3 py-1.5 spaced-caps text-charcoal">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-ivory"
        style={{ left: `${position}%` }}
      />
      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`Reveal before and after for ${label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <div
        className="pointer-events-none absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-charcoal/15 bg-ivory shadow-[0_2px_18px_rgba(0,0,0,0.18)]"
        style={{ left: `${position}%` }}
      >
        <span className="font-display text-sm tracking-widest">⟷</span>
      </div>
    </div>
  );
}

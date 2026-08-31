import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, type LucideIcon } from "lucide-react";
import { brand, navLinks } from "@/lib/site-content";

const icons: Record<string, LucideIcon> = {
  Instagram,
  Facebook,
};

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.6-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2.4 3.3-5 0-2-1.3-3.6-3.9-3.6-2.9 0-4.6 2.1-4.6 4.3 0 .9.3 1.5.7 2 .2.2.2.3.1.6l-.2.9c-.1.3-.3.4-.6.3-1.4-.6-2.1-2.2-2.1-4C6 8 8.4 5 12.4 5c3.3 0 5.5 2.4 5.5 4.9 0 3.4-1.9 6-4.7 6-.9 0-1.8-.5-2.1-1.1l-.6 2.3c-.2.8-.7 1.8-1.1 2.5A10 10 0 1 0 12 2Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl tracking-[0.2em] uppercase">Starr</p>
            <p className="mt-1 spaced-caps text-taupe">Decor Luxe</p>
            <p className="body-lg mt-6 max-w-xs">{brand.tagline}</p>
          </div>

          <div>
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="link-underline text-sm font-light text-foreground/75 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow">Connect</h2>
            <ul className="mt-6 space-y-3 text-sm font-light text-foreground/75">
              <li>
                <a className="link-underline" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </li>
              <li>
                <a className="link-underline" href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>
                  {brand.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{brand.serviceArea}</li>
            </ul>
            <div className="mt-7 flex gap-3">
              {brand.socials.map((social) => {
                const Icon = icons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center border border-border text-foreground/70 transition-colors hover:border-charcoal hover:bg-charcoal hover:text-ivory"
                  >
                    {Icon ? <Icon className="size-4" /> : <PinterestIcon className="size-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs font-light text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Starr Decor Luxe. All Rights Reserved.</p>
          <p className="spaced-caps text-taupe">Interior Design Studio</p>
        </div>
      </div>
    </footer>
  );
}

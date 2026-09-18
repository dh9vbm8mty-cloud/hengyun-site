"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const nav = [
  ["/#engineering", "Engineering"],
  ["/#technologies", "Technologies"],
  ["/#research", "Research"],
  ["/#development", "Development"],
  ["/#collaboration", "Collaboration"],
  ["/#contact", "Contact"],
];

export default function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header className={`canvas-header ${dark ? "is-dark" : ""}`}
      onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); } }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <Link className="skip-link" href="/#main-content">Skip to content</Link>
      <div className="canvas-width header-row">
        <Link href="/#top" className="brand-lockup" onClick={() => setOpen(false)}>
          <span className="brand-symbol brand-symbol--header" aria-hidden="true">
            <Image src="/hengyun-logo-transparent.png" alt="" width={53} height={53} className={dark ? "brand-inverted" : ""} />
          </span>
          <span><span className="brand-name">HENGYUN Technology</span><span className="brand-tagline">Thermal Infrastructure Engineering</span></span>
        </Link>
        <button ref={toggle} type="button" className="nav-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav id="primary-navigation" className={`canvas-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}

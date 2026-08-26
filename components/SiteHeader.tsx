import Link from "next/link";

const nav = [
  ["#about", "About"],
  ["#engineering", "Engineering"],
  ["#technologies", "Technologies"],
  ["#research", "Research"],
  ["#partners", "Demo / Partners"],
  ["#contact", "Contact"],
];

export default function SiteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header className={dark ? "bg-[#1b1f22] text-[#f4f3ef]" : "bg-[#f4f3ef] text-[#1b1f22]"}>
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 md:px-8">
        <Link href="#top" className="flex items-center gap-[5px]">
          <span className="brand-symbol brand-symbol--header" aria-hidden="true">
            <img
              src="/hengyun-logo-transparent.png"
              alt=""
              className={dark ? "brightness-0 invert" : ""}
            />
          </span>
          <div className="leading-tight">
            <div className="text-[15px] font-[650] tracking-[-0.02em]">HENGYUN Technology</div>
            <div className={dark ? "mt-1 text-[11px] text-white/45" : "mt-1 text-[11px] text-black/45"}>
              Thermal Infrastructure Engineering
            </div>
          </div>
        </Link>

        <nav className="hidden gap-7 text-[13px] md:flex">
          {nav.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={dark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

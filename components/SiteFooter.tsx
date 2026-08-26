import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1b1f22] text-[#f4f3ef]">
      <div className="mx-auto max-w-[1180px] px-6 py-10 md:px-8">
        <div className="grid gap-10 border-b border-white/12 pb-9 md:grid-cols-[1.6fr_1fr_1fr]">
          <div className="flex items-center gap-2">
            <img src="/hengyun-logo-transparent.png" alt="HENGYUN" className="h-8 w-8 brightness-0 invert" />
            <div>
              <div className="text-[15px] font-[650]">HENGYUN Technology</div>
              <div className="mt-1 text-[11px] text-white/45">Thermal Infrastructure Engineering</div>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-[13px] text-white/55">
            <Link href="#about">About</Link>
            <Link href="#engineering">Engineering</Link>
            <Link href="#technologies">Technologies</Link>
            <Link href="#contact">Contact</Link>
          </div>

          <div className="text-[13px] text-white/55">
            <div>founder@hengyun-tech.com</div>
          </div>
        </div>

        <div className="pt-5 text-[11px] text-white/35">
          <div>STEPS — Core Engineering System</div>
          <div className="mt-1">RTSU — Current Engineering Prototype</div>
        </div>

        <div className="pt-5 text-[11px] text-white/30">© {new Date().getFullYear()} HENGYUN Technology</div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="canvas-footer">
      <div className="canvas-width">
        <div className="footer-top">
          <Link href="/#top" className="brand-lockup">
            <span className="brand-symbol brand-symbol--footer" aria-hidden="true"><Image src="/hengyun-logo-transparent.png" alt="" width={47} height={47} className="brand-inverted" /></span>
            <span><span className="brand-name">HENGYUN Technology</span><span className="brand-tagline">Thermal Infrastructure Engineering</span></span>
          </Link>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} HENGYUN Technology</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link href="/#engineering">Engineering</Link><Link href="/#technologies">Technologies</Link><Link href="/#research">Research</Link><Link href="/#development">Development</Link><Link href="/#collaboration">Collaboration</Link><Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

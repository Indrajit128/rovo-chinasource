import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-visual">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-info">
            {/* Logo removed as per request */}
            <p className="max-w-xs opacity-60 text-sm leading-relaxed">
              ROVO Solutions is a premier trade corridor specialist, engineering high-performance supply chains between China and India.
            </p>
          </div>
          <div className="footer-nav-col">
            <h4>Solutions</h4>
            <Link href="/services">Strategic Sourcing</Link>
            <Link href="/services">Ocean Freight</Link>
            <Link href="/services">Customs Clearing</Link>
          </div>
          <div className="footer-nav-col">
            <h4>Offices</h4>
            <div className="office-tag">
              <strong>Hong Kong</strong>
              <p>Kwun Tong Industrial Hub</p>
            </div>
            <div className="office-tag">
              <strong>Guangzhou HQ</strong>
              <p style={{ fontSize: "0.8rem", lineHeight: "1.4", marginTop: "0.25rem", color: "var(--color-warm-gray-400)" }}>Room 503-504, Area C, Huilong Base<br/>No. 88 Helong 1st Road, Baiyun District</p>
            </div>
          </div>
          <div className="footer-nav-col">
            <h4>Connect</h4>
            <div className="social-row">
              <Link href="#" className="social-icon">IN</Link>
              <Link href="#" className="social-icon">WA</Link>
              <Link href="#" className="social-icon">X</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom-visual">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} ROVO Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

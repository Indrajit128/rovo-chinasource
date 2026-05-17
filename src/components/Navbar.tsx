"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${(mounted && isScrolled) ? "scrolled" : "transparent"}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo-placeholder" />
        
        <nav className="nav-links" style={{ margin: 0 }}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/products" className="nav-link">Product Category</Link>
          <Link href="/sourcing" className="nav-link">Sourcing</Link>
          <Link href="/contact" className="nav-link">Contact Details</Link>
        </nav>

        <button className="btn-primary" style={{ borderRadius: '0.75rem' }}>
          Sign Up Free
        </button>
      </div>
    </header>
  );
}

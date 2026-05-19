"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isMobileMenuOpen ? "mobile-menu-active" : ""}`}>
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          <div className="logo-badge">
            <span>RC</span>
          </div>
          <div className="logo-text">
            <span className="logo-brand">
              ROVO <span className="logo-accent-red">ChinaSourcing</span>
            </span>
            <span className="logo-subtext-gray">
              Premium Sourcing & Logistics
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link href="/" className="nav-link nav-link-home">Home</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/products" className="nav-link">Product Category</Link>
          <Link href="/sourcing" className="nav-link">Sourcing</Link>
          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/contact" className="nav-link">Contact Details</Link>
        </nav>

        {/* Desktop Get Started Button */}
        <div className="navbar-actions">
          <Link href="/contact" className="btn-primary nav-btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${isMobileMenuOpen ? "open" : ""}`}>
          <nav className="mobile-nav-links">
            <Link href="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link href="/products" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Product Category</Link>
            <Link href="/sourcing" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sourcing</Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Details</Link>
            
            <div className="mobile-nav-actions">
              <Link href="/contact" className="btn-primary mobile-btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

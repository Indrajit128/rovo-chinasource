"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsScrolled(true);
  }, []);

  return (
    <header 
      className="navbar" 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '0 2px 24px rgba(15,23,42,0.04)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ width: '2.25rem', height: '2.25rem', background: '#C62828', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 900, fontSize: '0.88rem' }}>RC</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontWeight: 900, fontSize: '1.125rem', color: '#0F172A' }}>
              ROVO <span style={{ color: '#C62828' }}>ChinaSourcing</span>
            </span>
            <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#64748B', marginTop: '3px' }}>
              Premium Sourcing & Logistics
            </span>
          </div>
        </Link>
        
        <nav className="nav-links" style={{ margin: 0, gap: '2.5rem', display: 'flex' }}>
          <Link href="/" className="nav-link" style={{ color: '#C62828', fontWeight: 'bold' }}>Home</Link>
          <Link href="/services" className="nav-link" style={{ color: '#0F172A' }}>Services</Link>
          <Link href="/products" className="nav-link" style={{ color: '#0F172A' }}>Product Category</Link>
          <Link href="/sourcing" className="nav-link" style={{ color: '#0F172A' }}>Sourcing</Link>
          <Link href="/contact" className="nav-link" style={{ color: '#0F172A' }}>Contact Details</Link>
        </nav>

        <button 
          className="btn-primary" 
          style={{ 
            borderRadius: '9999px', 
            background: '#C62828', 
            color: 'white', 
            fontWeight: 'bold', 
            border: 'none', 
            padding: '0.625rem 1.5rem',
            cursor: 'pointer'
          }}
        >
          Become a Member
        </button>
      </div>
    </header>
  );
}

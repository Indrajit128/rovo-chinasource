"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { allProducts } from "./products/data";
import { 
  Zap, 
  Globe,
  FileText,
  Search,
  CreditCard,
  PackageCheck,
  Warehouse,
  ClipboardCheck,
  Truck,
  ShieldCheck,
  Ship,
  Plane
} from "lucide-react";

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mounted) return;
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="hero">
        <Image
          src="/hero image.png"
          alt="ROVO ChinaSourcing"
          fill
          className="hero-image"
          priority
        />

        <div className="hero-container">
          <div 
            className="hero-left" 
            style={{ 
              padding: '0', 
              paddingTop: '6rem', 
              maxWidth: '850px' 
            }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h1-hero"
              style={{ marginBottom: '2rem', color: '#2D3748', fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: '700', lineHeight: '1.2' }}
            >
              Your Trusted Partner for<br />
              importing from China to India
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-body-large hero-sub"
              style={{ maxWidth: '750px', marginBottom: '3rem', color: '#4A5568', fontSize: '1.15rem', fontWeight: '400', lineHeight: '1.6' }}
            >
              Your direct gateway to verified Chinese manufacturers, rigorous quality vetting, and secure door-to-door logistics across India.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-cta-row"
            >
              <button 
                className="btn-primary" 
                style={{ 
                  padding: '1.25rem 2.5rem', 
                  borderRadius: '9999px',
                  background: '#C62828',
                  color: 'white',
                  fontWeight: 'bold',
                  border: 'none',
                  boxShadow: '0 10px 15px -3px rgba(198, 40, 40, 0.3)',
                  cursor: 'pointer'
                }}
              >
                Get Started
              </button>
              <button 
                className="btn-primary" 
                style={{ 
                  padding: '1.25rem 2.5rem', 
                  borderRadius: '9999px', 
                  background: '#000000',
                  color: 'white',
                  fontWeight: 'bold',
                  border: 'none',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer'
                }}
              >
                Learn How It Works
              </button>
            </motion.div>
          </div>

          <div className="hero-right">
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section bg-white" style={{ borderBottom: '1px solid #f1f5f9' }}>
        <div className="container">
          <div className="split-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <span className="section-eyebrow orange" style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>Who We Are</span>
              <h2 className="h2-display" style={{ marginBottom: '1.5rem', color: '#0F172A' }}>
                Your Boots on the <span style={{ color: '#C62828' }}>Factory Floor</span>
              </h2>
              <p style={{ color: '#4A5568', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                ROVO ChinaSourcing is a next-generation procurement and supply chain specialist. 
                We bridge the gap between Indian enterprises and China's vast manufacturing ecosystems by establishing highly secure, transparent, and direct factory-to-warehouse trade corridors.
              </p>
              <p style={{ color: '#4A5568', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Unlike traditional trading agencies that mark up product costs, our bilingual agents negotiate directly inside local manufacturing hubs (Shenzhen, Guangzhou, Ningbo, and Yiwu). We protect your B2B margins and ensure absolute product compliance before any container is locked.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Local China Presence</h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5 }}>Fluent negotiators working directly inside factory walls in Guangzhou.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Zero Trading Markups</h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5 }}>We connect you directly to the source, eliminating middlemen costs.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} style={{ position: 'relative', height: '420px', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <Image 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                alt="ROVO Sourcing Specialists on Factory Floor"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section bg-warm-gray">
        <div className="container">
          <motion.div {...fadeUp} className="section-header centered">
            <span className="section-eyebrow orange" style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>Visual Spotlight</span>
            <h2 className="h2-display" style={{ marginBottom: '1.5rem' }}>Core Services</h2>
            <p className="section-sub" style={{ maxWidth: '700px', margin: '0 auto', color: '#4A5568', fontSize: '1.15rem', lineHeight: '1.6' }}>
              Managed directly on the factory floors in China by our bilingual trade and logistics specialists.
            </p>
          </motion.div>

          <div className="service-spotlight-grid">
            {/* Service 1: Sea Cargo */}
            <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="service-spotlight-card">
              <div className="service-spotlight-img-wrapper">
                <Image src="/sea cargo.png" alt="Sea Cargo" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="service-spotlight-content">
                <span className="service-spotlight-tagline">Sea Cargo Logistics</span>
                <h3 className="service-spotlight-title">Sea Cargo</h3>
                <p className="service-spotlight-desc">High-capacity ocean container transport directly from China ports (Shenzhen, Ningbo, Shanghai) to Nhava Sheva, Chennai, and Kolkata trade terminals.</p>
                <div className="service-spotlight-specs">
                  <div className="service-spotlight-spec-row">
                    <span className="service-spotlight-spec-label">Typical Transit:</span>
                    <span className="service-spotlight-spec-value">30 - 35 Days</span>
                  </div>
                  <div className="service-spotlight-spec-row">
                    <span className="service-spotlight-spec-label">Port Terminals:</span>
                    <span className="service-spotlight-spec-value">All Major India Ports</span>
                  </div>
                </div>
                <Link href="/contact" className="service-spotlight-btn">Inquire Sea Cargo</Link>
              </div>
            </motion.div>

            {/* Service 2: Air Freight */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="service-spotlight-card">
              <div className="service-spotlight-img-wrapper">
                <Image src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1000&auto=format&fit=crop" alt="Air Freight" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="service-spotlight-content">
                <span className="service-spotlight-tagline">Air Freight Logistics</span>
                <h3 className="service-spotlight-title">Air Freight</h3>
                <p className="service-spotlight-desc">Express international air freight solutions for high-value components, urgent production batches, or lightweight retail collections directly to Delhi, Mumbai, and Bangalore airport hubs.</p>
                <div className="service-spotlight-specs">
                  <div className="service-spotlight-spec-row">
                    <span className="service-spotlight-spec-label">Typical Transit:</span>
                    <span className="service-spotlight-spec-value">7-9 Days</span>
                  </div>
                  <div className="service-spotlight-spec-row">
                    <span className="service-spotlight-spec-label">Service Type:</span>
                    <span className="service-spotlight-spec-value">Airport-to-Airport & DDP</span>
                  </div>
                </div>
                <Link href="/contact" className="service-spotlight-btn">Inquire Air Freight</Link>
              </div>
            </motion.div>

            {/* Service 3: Sourcing */}
            <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="service-spotlight-card">
              <div className="service-spotlight-img-wrapper">
                <Image src="/sourcing.png" alt="Product Sourcing & OEM" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="service-spotlight-content">
                <span className="service-spotlight-tagline">Product Sourcing & OEM</span>
                <h3 className="service-spotlight-title">Sourcing</h3>
                <p className="service-spotlight-desc">We match you with top-tier, certified Chinese manufacturers. Our fluent ground agents negotiate low pricing, establish bilingual legal contracts, and coordinate factory production runs.</p>
                <div className="service-spotlight-specs">
                  <div className="service-spotlight-spec-row">
                    <span className="service-spotlight-spec-label">Factory Hubs:</span>
                    <span className="service-spotlight-spec-value">Shenzhen, Foshan, Yiwu, Guangzhou</span>
                  </div>
                  <div className="service-spotlight-spec-row">
                    <span className="service-spotlight-spec-label">OEM / ODM:</span>
                    <span className="service-spotlight-spec-value">Full Mold & Packing Customization</span>
                  </div>
                </div>
                <Link href="/contact" className="service-spotlight-btn">Start Supplier Search</Link>
              </div>
            </motion.div>

          </div>

          {/* See More Services Button */}
          <motion.div 
            {...fadeUp} transition={{ delay: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
          >
            <Link 
              href="/services" 
              className="service-spotlight-btn"
              style={{ padding: '1rem 2.5rem', fontSize: '1rem', background: '#C62828' }}
            >
              See More Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section bg-[#F8FAFC]">
        <div className="container">
          <motion.div {...fadeUp} className="section-header centered">
            <span className="section-eyebrow orange" style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>Featured</span>
            <h2 className="h2-display" style={{ marginBottom: '1.5rem' }}>Top Sourced Products</h2>
            <p className="section-sub" style={{ maxWidth: '700px', margin: '0 auto', color: '#4A5568', fontSize: '1.15rem', lineHeight: '1.6' }}>
              A selection of our most requested high-quality items from certified manufacturers.
            </p>
          </motion.div>

          <div className="service-spotlight-grid">
            {[
              allProducts[0],  // Smart Bluetooth Headphones (Electronics)
              allProducts[10], // Modern Accent Lounge Chairs (Furniture)
              allProducts[16], // Ceramic Decorative Vase Sets (Decor)
              allProducts[17], // Modern LED Pendant Chandeliers (Decor)
              allProducts[21], // Organic Cotton Oversized Hoodies (Apparel)
              allProducts[29], // Fiber Laser Engraving Machines (Industrial)
            ].map((product, idx) => (
              <motion.div
                key={idx}
                {...fadeUp}
                transition={{ delay: 0.08 * (idx + 1) }}
                className="service-spotlight-card"
              >
                <div className="service-spotlight-img-wrapper">
                  <Image 
                    src={product.img} 
                    alt={product.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="service-spotlight-content">
                  <span className="service-spotlight-tagline">{product.category} Sourcing</span>
                  <h3 className="service-spotlight-title">{product.title}</h3>
                  <p className="service-spotlight-desc">{product.desc}</p>
                  
                  <div className="service-spotlight-specs">
                    <div className="service-spotlight-spec-row">
                      <span className="service-spotlight-spec-label">Avg. MOQ:</span>
                      <span className="service-spotlight-spec-value">{product.moq}</span>
                    </div>
                    <div className="service-spotlight-spec-row">
                      <span className="service-spotlight-spec-label">Inspection Grade:</span>
                      <span className="service-spotlight-spec-value">AQL 2.5 Standard</span>
                    </div>
                  </div>
                  <Link 
                    href="/contact" 
                    className="service-spotlight-btn"
                  >
                    Inquire {product.title}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            {...fadeUp} transition={{ delay: 0.4 }}
            style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}
          >
            <Link 
              href="/products" 
              className="service-spotlight-btn"
              style={{ padding: '1.2rem 3rem', fontSize: '1.05rem', background: '#0F172A' }}
            >
              View Full Product Catalog
            </Link>
          </motion.div>
        </div>
      </section>


      {/* STEP-BY-STEP — VISUALIZATION UPGRADE */}
      <section id="process" className="section bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)', zIndex: 0 }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp} className="section-header centered">
            <span className="section-eyebrow orange">Lifecycle</span>
            <h2 className="h2-display">Our End-to-End Workflow</h2>
            <p className="section-sub">A 12-step precision pipeline designed for modern enterprise trade.</p>
          </motion.div>

          <div className="cyclic-workflow-wrapper" suppressHydrationWarning>
            <div className="cyclic-orbit" />
            <div className="cyclic-center-node">
              <Zap size={32} style={{ marginBottom: '0.5rem' }} />
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}>PRECISION</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>LIFECYCLE</span>
            </div>

            {[
              { title: "Customers", icon: <Globe size={20} />, step: "01" },
              { title: "Inquiry", icon: <FileText size={20} />, step: "02" },
              { title: "Sourcing", icon: <Search size={20} />, step: "03" },
              { title: "Invoice", icon: <FileText size={20} />, step: "04" },
              { title: "Payment", icon: <CreditCard size={20} />, step: "05" },
              { title: "Order", icon: <Zap size={20} />, step: "06" },
              { title: "Collect", icon: <PackageCheck size={20} />, step: "07" },
              { title: "Warehouse", icon: <Warehouse size={20} />, step: "08" },
              { title: "Q&C", icon: <ClipboardCheck size={20} />, step: "09" },
              { title: "Loading", icon: <Truck size={20} />, step: "10" },
              { title: "Customs", icon: <ShieldCheck size={20} />, step: "11" },
              { title: "Shipping", icon: <Ship size={20} />, step: "12" },
            ].map((step, idx) => {
              let style = {};
              if (mounted && typeof window !== "undefined" && window.innerWidth > 900) {
                const angle = (idx * 30 - 90) * (Math.PI / 180);
                const radius = 300;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                style = { 
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                  position: 'absolute'
                };
              } else {
                style = { position: 'relative' };
              }

              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="cyclic-step"
                  style={style}
                  suppressHydrationWarning
                >
                  <div className="step-bubble">
                    {step.icon}
                  </div>
                  <h5>{step.title}</h5>
                  <span className="step-num-visual">{step.step}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

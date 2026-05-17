"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, MotionProps } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  Globe,
  FileText,
  Search,
  CreditCard,
  PackageCheck,
  Warehouse,
  ClipboardCheck,
  Truck,
  ShieldCheck,
  Ship
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

  return (
    <main className="min-h-screen bg-white">
      <section className="hero">
        <Image
          src="/ship_2.png"
          alt="ROVO Global Logistics"
          fill
          className="hero-image"
          priority
        />
        <div className="hero-overlay hero-gradient-custom" />

        <div className="hero-container">
          <div className="hero-left" style={{ padding: '0', paddingTop: '6rem', maxWidth: '650px' }}>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h1-hero"
              style={{ marginBottom: '2rem' }}
            >
              Smart Import Management<br />Between China & India
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-body-large hero-sub"
              style={{ maxWidth: '500px', marginBottom: '3rem' }}
            >
              Architecting high-velocity supply chains between China and India. Engineered for scale, reliability, and absolute transparency.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-cta-row"
            >
              <button className="btn-primary" style={{ padding: '1.25rem 2.5rem', borderRadius: '0.75rem' }}>Track Orders</button>
              <button className="btn-ghost glass" style={{ padding: '1.25rem 2.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>Learn More</button>
            </motion.div>
          </div>

          <div className="hero-right">
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — ANIMATED */}
      <section className="section bg-warm-gray overflow-hidden">
        <div className="container">
          <div className="split-layout">
            <motion.div {...fadeUp} className="split-content">
              <span className="section-eyebrow">Excellence</span>
              <h2 className="h2-display">The ROVO Standard</h2>
              <p className="mb-md">We don&apos;t just move cargo; we engineer trade corridors. Our local presence in both Guangzhou and Hong Kong ensures boots-on-the-ground control over every shipment.</p>
              
              <div className="feature-item-visual">
                <div className="feature-icon-small"><Zap size={18} /></div>
                <div>
                  <h4>High-Velocity Operations</h4>
                  <p>Reducing lead times by 30% through optimized factory-to-port routes.</p>
                </div>
              </div>
              <div className="feature-item-visual">
                <div className="feature-icon-small"><BarChart3 size={18} /></div>
                <div>
                  <h4>Real-Time Intelligence</h4>
                  <p>Full visibility into your cargo&apos;s journey with data-driven tracking.</p>
                </div>
              </div>
              <div className="feature-item-visual">
                <div className="feature-icon-small"><Globe size={18} /></div>
                <div>
                  <h4>Global Infrastructure</h4>
                  <p>Boots on the ground in Guangzhou, Hong Kong, and across major Indian ports.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="split-visual"
            >
              <div className="experience-badge glass">
                <strong className="text-white">15+</strong>
                <span className="text-white">Years</span>
              </div>
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics center"
                width={600}
                height={800}
                className="image-cover rounded-lg"
              />
            </motion.div>
          </div>
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

          <div className="cyclic-workflow-wrapper">
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
              if (mounted) {
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
                  initial={mounted ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="cyclic-step"
                  style={style}
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

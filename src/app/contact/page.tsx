"use client";

import Image from "next/image";
import { motion, MotionProps } from "framer-motion";
import { Phone } from "lucide-react";

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-[80px]">
      <section className="section-cta-visual" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Image 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
          alt="Global port"
          fill
          className="cta-bg-image"
        />
        <div className="cta-overlay-visual" />
        <div className="container relative z-10 w-full">
          <motion.div {...fadeUp} className="cta-box-visual" style={{ margin: '0 auto', maxWidth: '800px', padding: '4rem', background: 'rgba(2, 6, 23, 0.85)', backdropFilter: 'blur(10px)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>Ready to Engineer Your Next Growth Phase?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              Connect with our sourcing experts in Guangzhou and Hong Kong to initialize your high-velocity trade corridor.
            </p>
            <div className="cta-button-row" style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button className="btn-primary large" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '0.75rem' }}>Initialize Partnership</button>
              <div className="cta-phone-card glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Phone size={24} color="#f97316" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Consultation</span>
                  <strong style={{ fontSize: '1.2rem', color: 'white' }}>+91 98900 26014</strong>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

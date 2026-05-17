"use client";

import { motion } from "framer-motion";

export default function SourcingPage() {
  return (
    <main className="min-h-screen bg-white pt-[120px]">
      <section className="section bg-pattern">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-header centered"
          >
            <span className="section-eyebrow orange">Network</span>
            <h1 className="h2-display">Strategic Sourcing</h1>
            <p className="section-sub">Leverage our boots-on-the-ground presence in China's top manufacturing districts.</p>
          </motion.div>

          <div style={{ padding: '4rem 0', textAlign: 'center', background: '#f8f9fa', borderRadius: '1rem', marginTop: '2rem' }}>
            <h3 style={{ color: '#343a40', fontWeight: 500 }}>Sourcing Network Details Coming Soon</h3>
            <p style={{ color: '#6c757d', marginTop: '0.5rem' }}>Detailed information about our factory verification and negotiation process.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

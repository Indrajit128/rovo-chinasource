"use client";

import { motion } from "framer-motion";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-warm-gray pt-[120px]">
      <section className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-header centered"
          >
            <span className="section-eyebrow orange">Portfolio</span>
            <h1 className="h2-display">Product Category</h1>
            <p className="section-sub">Discover our extensive range of high-quality products sourced directly from premier manufacturing hubs.</p>
          </motion.div>

          <div style={{ padding: '4rem 0', textAlign: 'center', border: '1px dashed #ced4da', borderRadius: '1rem', marginTop: '2rem' }}>
            <h3 style={{ color: '#6c757d', fontWeight: 500 }}>Product Catalog Coming Soon</h3>
            <p style={{ color: '#adb5bd', marginTop: '0.5rem' }}>We are currently curating our premium product selection.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

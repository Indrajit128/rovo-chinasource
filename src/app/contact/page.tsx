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

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1.25rem',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '0.75rem',
  color: 'white',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  color: 'rgba(255, 255, 255, 0.8)',
  marginBottom: '0.5rem',
  fontWeight: 500,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-[80px]">
      <section className="section-cta-visual" style={{ minHeight: 'calc(100vh - 80px)', padding: '4rem 0' }}>
        <Image 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
          alt="Global port"
          fill
          className="cta-bg-image"
          style={{ objectFit: 'cover' }}
        />
        <div className="cta-overlay-visual" />
        <div className="container relative z-10 w-full">
          <motion.div {...fadeUp} className="cta-box-visual" style={{ margin: '0 auto', maxWidth: '900px', padding: '3.5rem', background: 'rgba(2, 6, 23, 0.85)', backdropFilter: 'blur(12px)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <h2 style={{ fontSize: '2.25rem', color: 'white', marginBottom: '0.75rem', fontWeight: 700 }}>Submit Logistics Requirements</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '500px' }}>
                  Provide your cargo specifications below. Our Guangzhou and Mumbai teams will analyze the requirements and contact you with a direct quotation.
                </p>
              </div>
              <div className="cta-phone-card glass" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}>
                <Phone size={24} color="#f97316" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct WhatsApp</span>
                  <strong style={{ fontSize: '1.1rem', color: 'white' }}>+91 98900 26014</strong>
                </div>
              </div>
            </div>

            <form 
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" style={inputStyle} placeholder="John Doe" required />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input type="email" style={inputStyle} placeholder="john@company.com" required />
              </div>
              <div>
                <label style={labelStyle}>Mobile No. / WhatsApp</label>
                <input type="tel" style={inputStyle} placeholder="+91 98765 43210" required />
              </div>
              <div>
                <label style={labelStyle}>Product Name</label>
                <input type="text" style={inputStyle} placeholder="e.g., LED Panels" required />
              </div>
              <div>
                <label style={labelStyle}>Product HSN Code</label>
                <input type="text" style={inputStyle} placeholder="e.g., 854140" />
              </div>
              <div>
                <label style={labelStyle}>Total Shipment Weight (KG)</label>
                <input type="number" style={inputStyle} placeholder="e.g., 1500" />
              </div>
              <div>
                <label style={labelStyle}>Number of Boxes / Cartons</label>
                <input type="number" style={inputStyle} placeholder="e.g., 50" />
              </div>
              <div>
                <label style={labelStyle}>Box Dimensions (CM) in (L x W x H)</label>
                <input type="text" style={inputStyle} placeholder="e.g., 60 x 40 x 40" />
              </div>
              <div>
                <label style={labelStyle}>Pickup City in China (Factory)</label>
                <input type="text" style={inputStyle} placeholder="e.g., Shenzhen" />
              </div>
              <div>
                <label style={labelStyle}>Delivery City in India (Destination)</label>
                <input type="text" style={inputStyle} placeholder="e.g., Mumbai" />
              </div>
              <div>
                <label style={labelStyle}>Estimated Invoice Value ($/₹)</label>
                <input type="text" style={inputStyle} placeholder="e.g., $15,000" />
              </div>
              <div>
                <label style={labelStyle}>Shipping Mode</label>
                <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} defaultValue="">
                  <option value="" disabled>Select...</option>
                  <option value="sea_fcl">Sea Cargo (FCL)</option>
                  <option value="sea_lcl">Sea Cargo (LCL)</option>
                  <option value="air_standard">Air Freight (Standard)</option>
                  <option value="air_express">Air Freight (Express Courier)</option>
                </select>
              </div>

              <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ 
                    width: '100%', 
                    padding: '1.25rem', 
                    fontSize: '1.1rem', 
                    borderRadius: '0.75rem', 
                    background: '#C62828', 
                    color: 'white', 
                    border: 'none', 
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(198, 40, 40, 0.4)'
                  }}
                >
                  Submit Logistics Request
                </button>
              </div>
            </form>
            
          </motion.div>
        </div>
      </section>
    </main>
  );
}

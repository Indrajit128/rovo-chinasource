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
  background: '#F8FAFC',
  border: '1px solid #CBD5E1',
  borderRadius: '0.5rem',
  color: '#0F172A',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  color: '#475569',
  marginBottom: '0.5rem',
  fontWeight: 600,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-[80px]">
      <section className="section bg-white" style={{ minHeight: 'calc(100vh - 80px)', padding: '5rem 0' }}>
        <div className="container relative z-10 w-full">
          <motion.div {...fadeUp} style={{ margin: '0 auto', maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            {/* Header Text */}
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <span className="section-eyebrow orange" style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>Contact Us</span>
              <h2 className="h2-display" style={{ color: '#0F172A', marginBottom: '1rem' }}>Submit Logistics Requirements</h2>
              <p style={{ color: '#4A5568', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Provide your cargo specifications below. Our Guangzhou and Mumbai teams will analyze the requirements and contact you with a direct quotation within 24 hours.
              </p>
            </div>

            {/* Main Form Card */}
            <div style={{ background: '#FFFFFF', padding: '3.5rem', borderRadius: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.05)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '0.5rem', fontWeight: 700 }}>Shipment Details</h3>
                  <p style={{ color: '#64748B', fontSize: '0.95rem' }}>All fields are recommended for the most accurate routing quote.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem', borderRadius: '0.75rem', border: '1px solid #F1F5F9', background: '#F8FAFC' }}>
                  <Phone size={24} color="#C62828" />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct WhatsApp</span>
                    <strong style={{ fontSize: '1.1rem', color: '#0F172A' }}>+91 98900 26014</strong>
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
              
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

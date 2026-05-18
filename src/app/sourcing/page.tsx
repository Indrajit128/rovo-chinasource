"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Search, Users, ShieldCheck, DollarSign,
  Package, BarChart3, Repeat2, ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const process = [
  { 
    num: "01", 
    icon: Search,      
    title: "Requirement Briefing",     
    desc: "We start with a thorough consultation to analyze your product specs, materials, quality standards, and target Indian landed cost.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop"
  },
  { 
    num: "02", 
    icon: Users,       
    title: "Supplier Discovery",       
    desc: "Our China-based procurement team scans our network of 850+ pre-vetted direct factories in Guangdong and Zhejiang.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop"
  },
  { 
    num: "03", 
    icon: ShieldCheck, 
    title: "Factory Vetting & Audit",  
    desc: "We physically visit factory premises, inspect raw inventories, check machinery age, and verify business licenses.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop"
  },
  { 
    num: "04", 
    icon: DollarSign,  
    title: "Direct Price Negotiation", 
    desc: "Our local Chinese trade negotiators secure the absolute best factory prices, payment terms, and timelines on your behalf.",
    img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=400&auto=format&fit=crop"
  },
  { 
    num: "05", 
    icon: Package,     
    title: "Sample Evaluation",        
    desc: "We coordinate custom prototyping, QC test the samples, and express ship them to India for your final approval.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop"
  },
  { 
    num: "06", 
    icon: BarChart3,   
    title: "Production Monitoring",    
    desc: "Once deposit is paid, our local agents oversee production milestones to ensure manufacturing remains on-schedule.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop"
  },
  { 
    num: "07", 
    icon: ShieldCheck, 
    title: "Pre-Shipment QC Audit",    
    desc: "Our certified quality engineers run full AQL inspections on packed cartons, rejecting any defective items before container loading.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=400&auto=format&fit=crop"
  },
  { 
    num: "08", 
    icon: Repeat2,     
    title: "Logistics & Delivery",     
    desc: "We manage booking notes, warehouse consolidation in Guangzhou/Yiwu, and secure customs clearance to deliver to your door in India.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=400&auto=format&fit=crop"
  },
];

const stats = [
  { val: "850+", label: "Verified Manufacturers", desc: "Direct access to verified suppliers across Guangdong, Zhejiang, and Jiangsu hubs." },
  { val: "35%",  label: "Average Cost Reductions", desc: "Acquire direct factory price points by completely eliminating trading companies." },
  { val: "100%", label: "Strict Quality Checks",   desc: "On-site AQL inspections ensure zero defect containers are loaded." },
];

const categories = [
  "Consumer Electronics", "Office & Home Furniture", "Industrial CNC Machinery", "Home Decor & Lighting",
  "Fashion Accessories", "Silicone Tableware", "Printed Box Packaging", "Electric Power Inverters",
  "LED Assemblies", "Stainless Kitchenware", "B2B Hardware & Tools", "Custom Plastic Molding",
];

const whyUs = [
  { 
    icon: CheckCircle2, 
    title: "Local China Presence",      
    desc: "Our bilingual team operates directly from Guangzhou — we negotiate in Mandarin, in person, at the factory gate.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
  },
  { 
    icon: CheckCircle2, 
    title: "Zero Trading Companies",    
    desc: "We connect you directly to the manufacturer, cutting out middlemen that inflate costs by 20–40%.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
  },
  { 
    icon: CheckCircle2, 
    title: "End-to-End Accountability", 
    desc: "From spec sheet to delivery, one dedicated ROVO manager owns your order from start to finish.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
  },
  { 
    icon: CheckCircle2, 
    title: "India Trade Expertise",     
    desc: "Deep knowledge of IEC, BIS, FSSAI, and other Indian import compliance standards built into every deal.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"
  },
];

export default function SourcingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#F8FAFC" }}>

      {/* ── Hero ── */}
      <section className="product-catalog-hero" style={{ background: "none", paddingBottom: "5rem" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/sourcing.png"
            alt="Strategic Sourcing"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,23,42,0.90) 0%, rgba(30,41,59,0.84) 60%, rgba(15,23,42,0.92) 100%)" }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span className="product-hero-eyebrow">
              <Search size={12} style={{ color: "#f97316" }} />
              Procurement Solutions
            </span>
            <h1 className="product-hero-title">
              Strategic <span>Sourcing</span><br />
              <span style={{ fontSize: "clamp(1.5rem,3.5vw,2.4rem)", fontWeight: 700, color: "rgba(255,255,255,0.75)" }}>
                Direct from China Factories
              </span>
            </h1>
            <p className="product-hero-sub" style={{ marginBottom: "2.5rem" }}>
              Leverage our boots-on-the-ground presence in China&apos;s top manufacturing districts.
              We handle every procurement phase locally so you build your brand risk-free.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/contact" className="service-spotlight-btn" style={{ padding: "1rem 2rem", background: "#C62828", fontSize: "0.9rem" }}>
                Start Sourcing <ArrowRight size={16} style={{ display: "inline", marginLeft: "0.35rem" }} />
              </Link>
              <a href="#process" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white", fontWeight: 600, padding: "1rem 2rem", borderRadius: "99px", fontSize: "0.9rem", textDecoration: "none", transition: "background 0.2s" }}>
                See Sourcing Flow
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section bg-white">
        <div className="container">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-eyebrow orange" style={{ letterSpacing: "0.2em", textTransform: "uppercase" }}>Why Partner With Us</span>
            <h2 className="h2-display" style={{ marginBottom: "1rem" }}>
              Sourcing That Protects Your Bottom Line
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "2rem" }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.12 }}
                style={{ background: "#F8FAFC", borderRadius: "1.5rem", padding: "2.5rem", textAlign: "center", border: "1px solid #e2e8f0" }}
              >
                <p style={{ fontSize: "3.5rem", fontWeight: 900, background: "linear-gradient(135deg,#f97316,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>{s.val}</p>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.75rem" }}>{s.label}</h4>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.65 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-eyebrow orange" style={{ letterSpacing: "0.2em", textTransform: "uppercase" }}>Our Advantage</span>
            <h2 className="h2-display" style={{ marginBottom: "1rem" }}>What Sets ROVO Apart</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.75rem" }}>
            {whyUs.map((w, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                style={{ background: "white", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #f1f5f9", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column" }}
              >
                {/* Image Section */}
                <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden", background: "#f8fafc" }}>
                  <Image 
                    src={w.img} 
                    alt={w.title} 
                    fill 
                    sizes="(max-width:768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }} 
                  />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", width: "2.25rem", height: "2.25rem", borderRadius: "0.75rem", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                    <CheckCircle2 size={15} style={{ color: "#C62828" }} />
                  </div>
                </div>
                {/* Content Section */}
                <div style={{ padding: "1.5rem 1.75rem 1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem" }}>{w.title}</h4>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.6, flex: 1 }}>{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8-Step Process ── */}
      <section id="process" className="section bg-white">
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-eyebrow orange" style={{ letterSpacing: "0.2em", textTransform: "uppercase" }}>Procurement Timeline</span>
            <h2 className="h2-display" style={{ marginBottom: "1rem" }}>Our Proven Sourcing Process</h2>
            <p style={{ color: "#64748b", maxWidth: "560px", margin: "0 auto", fontSize: "1rem", lineHeight: 1.65 }}>
              A battle-tested 8-step methodology refined across hundreds of successful China–India trade operations.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.75rem" }}>
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: (i % 4) * 0.1 }}
                  className="product-card"
                  style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", background: "white" }}
                >
                  {/* Step Image */}
                  <div style={{ position: "relative", width: "100%", height: "140px", overflow: "hidden", background: "#f8fafc" }}>
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      sizes="(max-width:768px) 100vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Floating Step Badge */}
                    <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(4px)", padding: "0.25rem 0.75rem", borderRadius: "99px", display: "flex", alignItems: "center", gap: "0.35rem", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#C62828" }}>{step.num}</span>
                    </div>
                    {/* Floating Icon */}
                    <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", width: "2rem", height: "2rem", borderRadius: "50%", background: "linear-gradient(135deg,#f97316,#ef4444)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(239,68,68,0.3)" }}>
                      <Icon size={12} color="white" />
                    </div>
                  </div>
                  {/* Step Info */}
                  <div style={{ padding: "1.25rem 1.5rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem" }}>{step.title}</h4>
                    <p style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.6, flex: 1 }}>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── Bottom CTA ── */}
      <section className="section bg-white">
        <div className="container">
          <motion.div {...fadeUp} className="product-cta-block">
            <h2 className="product-cta-title">Ready to Source Smarter?</h2>
            <p className="product-cta-sub">
              Submit your sourcing brief today and our Guangzhou team will respond with a shortlist of verified manufacturers within 24 hours.
            </p>
            <Link href="/contact" className="product-cta-btn">
              Submit Sourcing Brief <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

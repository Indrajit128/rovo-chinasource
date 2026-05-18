"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Shield, Award, Sparkles } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const stats = [
  { val: "10,000+", label: "Delivered Shipments" },
  { val: "850+",   label: "Verified Suppliers" },
  { val: "18+",    label: "Years Experience" },
  { val: "35%",    label: "Average Cost Savings" },
];

const values = [
  { icon: Target, title: "Precision Sourcing", desc: "Every supplier vetted and every single factory audit conducted with rigorous, physical inspection protocols." },
  { icon: Heart,  title: "Client Commitment",  desc: "We treat your sourcing volumes like our own, negotiating direct factory costs to maximize your B2B margins." },
  { icon: Eye,    title: "Extreme Transparency", desc: "No hidden commissions, no factory kickbacks. Zero pricing markup. Fully transparent invoices." },
];

const team = [
  { name: "Founder & CEO",       initials: "RS", color: "#C62828", tagline: "China–India trade veteran, 18+ years" },
  { name: "Head of Logistics",   initials: "HL", color: "#1E293B", tagline: "Ex-Maersk supply chain expert" },
  { name: "Chief Sourcing Director", initials: "CS", color: "#0F766E", tagline: "Guangzhou Sourcing Hub lead" },
  { name: "Customs Officer",     initials: "CO", color: "#4F46E5", tagline: "Pan-India compliance team leader" },
];

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#F8FAFC" }}>

      {/* ── Hero Banner ── */}
      <section className="product-catalog-hero" style={{ background: "none", paddingBottom: "5rem" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop"
            alt="About ROVO ChinaSourcing"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,41,59,0.85) 60%, rgba(15,23,42,0.94) 100%)" }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} style={{ textAlign: "center" }}>
              <span className="product-hero-eyebrow" style={{ margin: "0 auto" }}>
                <Sparkles size={12} style={{ color: "#f97316" }} />
                About ROVO ChinaSourcing
              </span>
              <h1 className="product-hero-title" style={{ marginTop: "1.5rem" }}>
                Your Trusted <span>China–India</span><br />
                Sourcing Partner
              </h1>
              <p className="product-hero-sub" style={{ marginBottom: "2.5rem", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
                Empowering Indian importers to securely source, verify, inspect, and ship high-quality products directly from Chinese factories.
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link href="/contact" className="service-spotlight-btn" style={{ padding: "1rem 2.5rem", background: "#C62828" }}>
                  Partner With Us <ArrowRight size={16} style={{ display: "inline", marginLeft: "0.35rem" }} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats Grid ── */}
      <section className="section bg-white" style={{ paddingTop: "4rem", paddingBottom: "4rem", borderBottom: "1px solid #f1f5f9" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "2rem" }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <h3 style={{ fontSize: "2.75rem", fontWeight: 900, color: "#C62828", marginBottom: "0.25rem" }}>{s.val}</h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Story ── */}
      <section className="section" style={{ background: "#F8FAFC" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "4rem", alignItems: "center" }}>
            
            {/* Story Visual */}
            <motion.div {...fadeUp}>
              <div style={{ position: "relative", width: "100%", height: "380px", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.04)" }}>
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop"
                  alt="China to India Sourcing"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.2) 60%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem", color: "white" }}>
                  <span style={{ display: "inline-block", background: "#f97316", color: "white", fontSize: "0.75rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "99px", marginBottom: "0.75rem" }}>LAUNCHED 2014</span>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 800 }}>China to India Direct Trade</h4>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", marginTop: "0.25rem" }}>Secure, Direct Factory Procurement Solutions</p>
                </div>
              </div>
            </motion.div>

            {/* Story Content */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
              <span className="section-eyebrow orange" style={{ letterSpacing: "0.2em" }}>OUR JOURNEY</span>
              <h2 className="h2-display" style={{ marginBottom: "1.5rem" }}>
                Solving the Cross-Border Risk
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.7, marginBottom: "1rem" }}>
                ROVO ChinaSourcing was born from a fundamental trade bottleneck: Indian businesses struggled to securely coordinate with manufacturers in China due to language barriers, hidden middleman commissions, high quality-defect ratios, and complex customs documentation.
              </p>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.7, marginBottom: "1rem" }}>
                We built the ultimate B2B infrastructure with our own team based locally in Guangzhou to inspect factories, manage quality control at the manufacturing line, translate briefs, and clear Indian customs hassle-free.
              </p>
              <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.7 }}>
                Today, ROVO ChinaSourcing is the most trusted procurement partner for active Indian brands, handling sourcing across electronics, furniture, machinery, kitchenware, and textiles.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Interactive Transit & Compliance Planner ── */}
      <TransitCompliancePlanner />

      {/* ── Core Values ── */}
      <section className="section bg-white">
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-eyebrow orange" style={{ letterSpacing: "0.2em" }}>OUR VALUES</span>
            <h2 className="h2-display" style={{ marginBottom: "1rem" }}>The Values That Guide Us</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "2rem" }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.12 }}
                  className="product-card"
                  style={{ padding: "2.5rem", textAlign: "center", border: "1px solid #f1f5f9" }}
                >
                  <div style={{ width: "3.5rem", height: "3.5rem", borderRadius: "1rem", background: "#FEF2F2", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                    <Icon size={24} style={{ color: "#C62828" }} />
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.75rem" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: 1.65 }}>{v.desc}</p>
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
            <h2 className="product-cta-title">Ready to Settle Your Import Supply Chain?</h2>
            <p className="product-cta-sub">
              Partner with the industry leaders in China–India cross-border trade, verification, and end-to-end procurement.
            </p>
            <Link href="/contact" className="product-cta-btn">
              Partner With Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

function TransitCompliancePlanner() {
  const [origin, setOrigin] = useState("Guangzhou");
  const [destination, setDestination] = useState("Mumbai");
  const [mode, setMode] = useState("Sea");
  const [category, setCategory] = useState("Electronics");

  // Dynamic calculations based on options selected
  const getTransitDays = () => {
    if (mode === "Air") {
      return "7–9 Days (Express Air Cargo)";
    }
    // Sea transit based on destination
    switch (destination) {
      case "Mumbai":   return "28–32 Days (Direct Port Nhava Sheva)";
      case "Chennai":  return "24–28 Days (Direct Port Chennai)";
      case "Delhi":    return "32–36 Days (Via Mumbai Port to Delhi ICD)";
      case "Kolkata":  return "30–34 Days (Via Kolkata Port)";
      default:         return "30–35 Days (Sea Cargo Consolidation)";
    }
  };

  const getComplianceDocs = () => {
    switch (category) {
      case "Electronics":
        return [
          { name: "BIS Registration", desc: "Mandatory compliance for electronic imports to India under CRS scheme." },
          { name: "WPC Approval", desc: "Required for items featuring active wireless or Bluetooth transceivers." },
          { name: "EPR Certificate", desc: "Extended Producer Responsibility registration for e-waste protocols." }
        ];
      case "Machinery":
        return [
          { name: "CE & ISO Certs", desc: "Required to verify equipment structural and operational safety limits." },
          { name: "Chartered Engineer Certificate (CEC)", desc: "Mandatory audit clearance before shipping secondhand machinery." },
          { name: "IEC Validation", desc: "Active Import Export Code must contain exact machinery HSN codes." }
        ];
      case "Aesthetic Devices":
        return [
          { name: "CDSCO License", desc: "Medical or aesthetic active laser devices require CDSCO import permission." },
          { name: "BIS Compliance", desc: "Required for active diagnostic and photomedical power adaptors." }
        ];
      case "Toys & Babycare":
        return [
          { name: "BIS Certification", desc: "Requires strict adherence to Indian Safety Standard IS 9873." },
          { name: "In-line Testing Report", desc: "Mandatory safety verification from NABL-certified laboratories." }
        ];
      case "Apparel & Home Decor":
        return [
          { name: "Phytosanitary Certificate", desc: "Required for organic fibers, wood items, or natural grass components." },
          { name: "Azo-Free Dye Certificate", desc: "Mandatory verification that dye agents meet toxic-free safety rules." }
        ];
      default:
        return [
          { name: "IEC Registration", desc: "Import Export Code linked to active PAN details is mandatory for every shipment." },
          { name: "Guangzhou Export License", desc: "Ensures seamless Chinese customs origin clearance." }
        ];
    }
  };

  const transitInfo = getTransitDays();
  const complianceDocs = getComplianceDocs();

  return (
    <section className="section" style={{ background: "#F1F5F9", paddingTop: "5.5rem", paddingBottom: "5.5rem", borderBottom: "1px solid #e2e8f0" }}>
      <div className="container">
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-eyebrow orange" style={{ letterSpacing: "0.2em" }}>TRADE CORRIDOR PLANNER</span>
          <h2 className="h2-display" style={{ marginBottom: "1rem" }}>Interactive Route &amp; Compliance Planner</h2>
          <p style={{ color: "#64748b", maxWidth: "600px", margin: "0 auto", fontSize: "0.95rem", lineHeight: 1.65 }}>
            Estimate exact cargo shipping durations and track critical Indian customs compliance protocols for your sourcing portfolio in real-time.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", alignItems: "stretch" }}>
          
          {/* Planner Controls Card */}
          <motion.div {...fadeUp} transition={{ delay: 0.1 }} style={{ background: "white", borderRadius: "1.5rem", padding: "2.5rem", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", borderBottom: "1px solid #f1f5f9", paddingBottom: "1rem", margin: 0 }}>Corridor Settings</h3>
            
            {/* Origin Option */}
            <div>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#475569", marginBottom: "0.6rem", letterSpacing: "0.05em" }}>1. CHINA ORIGIN HUB</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Guangzhou", "Shenzhen", "Yiwu", "Ningbo"].map((o) => (
                  <button
                    key={o}
                    onClick={() => setOrigin(o)}
                    style={{
                      background: origin === o ? "#C62828" : "#F8FAFC",
                      color: origin === o ? "white" : "#475569",
                      border: "1px solid",
                      borderColor: origin === o ? "#C62828" : "#e2e8f0",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Option */}
            <div>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#475569", marginBottom: "0.6rem", letterSpacing: "0.05em" }}>2. INDIA DESTINATION PORT</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Mumbai", "Delhi", "Chennai", "Kolkata"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDestination(d)}
                    style={{
                      background: destination === d ? "#C62828" : "#F8FAFC",
                      color: destination === d ? "white" : "#475569",
                      border: "1px solid",
                      borderColor: destination === d ? "#C62828" : "#e2e8f0",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Cargo Mode */}
            <div>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#475569", marginBottom: "0.6rem", letterSpacing: "0.05em" }}>3. LOGISTICS DISPATCH MODE</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {["Sea", "Air"].map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    style={{
                      flex: 1,
                      background: mode === m ? "#1e293b" : "#F8FAFC",
                      color: mode === m ? "white" : "#475569",
                      border: "1px solid",
                      borderColor: mode === m ? "#1e293b" : "#e2e8f0",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    {m === "Sea" ? "🚢 Sea Cargo (Eco)" : "✈️ Air Freight (Express)"}
                  </button>
                ))}
              </div>
            </div>

            {/* Sourcing Category */}
            <div>
              <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#475569", marginBottom: "0.6rem", letterSpacing: "0.05em" }}>4. PRODUCT CATEGORY FOR COMPLIANCE</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Electronics", "Machinery", "Aesthetic Devices", "Toys & Babycare", "Apparel & Home Decor"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    style={{
                      background: category === cat ? "#C62828" : "#F8FAFC",
                      color: category === cat ? "white" : "#475569",
                      border: "1px solid",
                      borderColor: category === cat ? "#C62828" : "#e2e8f0",
                      padding: "0.4rem 0.85rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Results & Compliance Display Card */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} style={{ background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)", borderRadius: "1.5rem", padding: "2.5rem", color: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <div>
              <span style={{ display: "inline-block", background: "rgba(249,115,22,0.15)", color: "#ffedd5", border: "1px solid rgba(249,115,22,0.3)", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "99px", marginBottom: "1.5rem", letterSpacing: "0.05em" }}>ESTIMATED ROUTING CORRIDOR</span>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                
                {/* Transit Details */}
                <div>
                  <p style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Estimated Transit Duration</p>
                  <p style={{ fontSize: "1.5rem", fontWeight: 900, color: "#f97316", marginTop: "0.25rem" }}>{transitInfo}</p>
                  <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.15rem" }}>Route: {origin} Hub → Dispatch Corridor → {destination} Terminal.</p>
                </div>

                {/* Compliance Protocols */}
                <div>
                  <p style={{ fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "0.4rem" }}>Mandatory Indian Compliance Protocols</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {complianceDocs.map((doc, idx) => (
                      <div key={idx} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.75rem", padding: "0.75rem 1rem" }}>
                        <h4 style={{ fontSize: "0.82rem", fontWeight: 700, color: "#38bdf8" }}>✓ {doc.name}</h4>
                        <p style={{ fontSize: "0.72rem", color: "#94a3b8", marginTop: "0.15rem", lineHeight: 1.4 }}>{doc.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Routing CTA */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#cbd5e1" }}>Doorstep Delivery Handled</p>
                <p style={{ fontSize: "0.7rem", color: "#64748b" }}>We handle standard custom filings &amp; delivery.</p>
              </div>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#C62828", color: "white", textDecoration: "none", fontSize: "0.82rem", fontWeight: 700, padding: "0.7rem 1.2rem", borderRadius: "0.5rem", transition: "background 0.2s" }}>
                Plan My Shipment <ArrowRight size={14} />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

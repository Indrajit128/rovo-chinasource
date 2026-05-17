"use client";

import Image from "next/image";
import { motion, MotionProps } from "framer-motion";
import { Search, Ship, ShieldCheck } from "lucide-react";

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-[120px]">
      <section className="section bg-white bg-pattern">
        <div className="container">
          <motion.div {...fadeUp} className="section-header centered">
            <span className="section-eyebrow orange">Capabilities</span>
            <h2 className="h2-display">Integrated Trade Solutions</h2>
            <p className="section-sub">We provide the operational infrastructure; you drive the global vision.</p>
          </motion.div>

          <div className="service-visual-grid">
            {[
              { 
                title: "Strategic Sourcing", 
                desc: "Direct factory negotiation and supplier verification across China's manufacturing heartland.", 
                icon: <Search className="text-white" />,
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                title: "Global Freight", 
                desc: "Multimodal logistics engineered for speed, including sea, air, and last-mile fulfillment.", 
                icon: <Ship className="text-white" />,
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
              },
              { 
                title: "Customs Mastery", 
                desc: "End-to-end documentation and compliance management for seamless cross-border entry.", 
                icon: <ShieldCheck className="text-white" />,
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                {...fadeUp}
                transition={{ delay: idx * 0.2 }}
                className="service-visual-card"
              >
                <Image src={service.img} alt={service.title} fill className="card-image-bg" />
                <div className="card-overlay">
                  <div className="card-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

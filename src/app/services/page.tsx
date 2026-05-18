"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionProps } from "framer-motion";

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-warm-gray pt-[120px] pb-24">
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

          {/* Service 3: LCL Shipping */}
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="service-spotlight-card">
            <div className="service-spotlight-img-wrapper">
              <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" alt="LCL Shipping" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="service-spotlight-content">
              <span className="service-spotlight-tagline">LCL Shipping Consolidation</span>
              <h3 className="service-spotlight-title">LCL Shipping</h3>
              <p className="service-spotlight-desc">Less-than-Container-Load shipping. Pay only for the volume you occupy (CBM). We consolidate small boxes from separate manufacturers in our warehouses to minimize your costs.</p>
              <div className="service-spotlight-specs">
                <div className="service-spotlight-spec-row">
                  <span className="service-spotlight-spec-label">Minimum Volume:</span>
                  <span className="service-spotlight-spec-value">1 CBM</span>
                </div>
                <div className="service-spotlight-spec-row">
                  <span className="service-spotlight-spec-label">Free Storage:</span>
                  <span className="service-spotlight-spec-value">Up to 30 Days</span>
                </div>
              </div>
              <Link href="/contact" className="service-spotlight-btn">Inquire LCL Shipping</Link>
            </div>
          </motion.div>

          {/* Service 4: FCL Shipping */}
          <motion.div {...fadeUp} transition={{ delay: 0.4 }} className="service-spotlight-card">
            <div className="service-spotlight-img-wrapper">
              <Image src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop" alt="FCL Container Logistics" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="service-spotlight-content">
              <span className="service-spotlight-tagline">FCL Container Logistics</span>
              <h3 className="service-spotlight-title">FCL Shipping</h3>
              <p className="service-spotlight-desc">Dedicated Full-Container-Load solutions (20' GP, 40' GP, 40' HQ). We manage supplier bookings, haul containers directly to factories, supervise loading, and secure low ocean freight contracts.</p>
              <div className="service-spotlight-specs">
                <div className="service-spotlight-spec-row">
                  <span className="service-spotlight-spec-label">Container Sizes:</span>
                  <span className="service-spotlight-spec-value">20' GP / 40' GP / 40' HQ</span>
                </div>
                <div className="service-spotlight-spec-row">
                  <span className="service-spotlight-spec-label">Load Supervision:</span>
                  <span className="service-spotlight-spec-value">Full Video & Seal Reports</span>
                </div>
              </div>
              <Link href="/contact" className="service-spotlight-btn">Inquire FCL Shipping</Link>
            </div>
          </motion.div>

          {/* Service 5: Sourcing */}
          <motion.div {...fadeUp} transition={{ delay: 0.5 }} className="service-spotlight-card">
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

          {/* Service 6: Import */}
          <motion.div {...fadeUp} transition={{ delay: 0.6 }} className="service-spotlight-card">
            <div className="service-spotlight-img-wrapper">
              <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop" alt="Import & Customs Clearance" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="service-spotlight-content">
              <span className="service-spotlight-tagline">Import & Customs Clearance</span>
              <h3 className="service-spotlight-title">Import</h3>
              <p className="service-spotlight-desc">Our expert domestic Indian custom desks handle correct HS Code classification, active custom duty calculation, file Bill of Entries, manage inspections, and release cargo immediately.</p>
              <div className="service-spotlight-specs">
                <div className="service-spotlight-spec-row">
                  <span className="service-spotlight-spec-label">Custom Brokerage:</span>
                  <span className="service-spotlight-spec-value">In-House Licensed CHA</span>
                </div>
                <div className="service-spotlight-spec-row">
                  <span className="service-spotlight-spec-label">Compliance:</span>
                  <span className="service-spotlight-spec-value">BIS, WPC, EPR, Allied Acts Clearances</span>
                </div>
              </div>
              <Link href="/contact" className="service-spotlight-btn">Consult Custom</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

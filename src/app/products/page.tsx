"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, Package, SlidersHorizontal } from "lucide-react";
import { allProducts } from "./data";

const CATEGORIES = ["All", "Electronics", "Furniture", "Decor", "Apparel", "Industrial"];

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const countFor = (cat: string) =>
    cat === "All"
      ? allProducts.length
      : allProducts.filter((p) => p.category === cat).length;

  return (
    <main style={{ minHeight: "100vh", background: "#F8FAFC" }}>

      {/* ── Dark Hero Banner ── */}
      <section className="product-catalog-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="product-hero-eyebrow">
              <Package size={12} style={{ color: "#f97316" }} />
              Sourcing Portfolio
            </div>
            <h1 className="product-hero-title">
              Product <span>Catalog</span>
            </h1>
            <p className="product-hero-sub">
              {allProducts.length} verified products across 5 categories, sourced directly from
              certified manufacturers in China.
            </p>

            {/* Stats Row */}
            <div className="product-hero-stats">
              {[
                { label: "Total Products", value: allProducts.length },
                { label: "Categories",     value: 5 },
                { label: "Min MOQ",        value: "10 Units" },
                { label: "Lead Time",      value: "15–45 Days" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="product-hero-stat-value">{s.value}</p>
                  <p className="product-hero-stat-label">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="product-search-wrap">
              <span className="product-search-icon">
                <Search size={15} />
              </span>
              <input
                type="text"
                placeholder="Search products…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="product-search-input"
              />
              {searchQuery && (
                <button className="product-search-clear" onClick={() => setSearchQuery("")}>
                  <X size={14} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="section">
        <div className="container">

          {/* Filter Pills */}
          <motion.div
            className="product-filters-bar"
            {...fadeUp}
            transition={{ delay: 0.15 }}
          >
            <div className="product-filter-label">
              <SlidersHorizontal size={13} />
              Filter
            </div>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              const activeClass = isActive
                ? `active-${cat === "All" ? "all" : cat}`
                : "";
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`product-filter-btn ${activeClass}`}
                >
                  {cat}
                  <span className={`product-filter-count ${isActive ? "" : "inactive"}`}>
                    {countFor(cat)}
                  </span>
                </button>
              );
            })}
            <div className="product-result-count">
              Showing <strong>{filteredProducts.length}</strong>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </div>
          </motion.div>

          {/* Product Grid */}
          <AnimatePresence mode="wait">
            {filteredProducts.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="product-empty"
              >
                <Package size={48} />
                <p>No products match your search.</p>
                <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                  Clear filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="product-catalog-grid"
              >
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx * 0.04, 0.35), duration: 0.3 }}
                    className="product-card"
                  >
                    {/* Image */}
                    <div className="product-card-img-wrap">
                      <Image
                        src={product.img}
                        alt={product.title}
                        fill
                        sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
                        style={{ objectFit: "cover" }}
                      />
                      {/* Category Badge */}
                      <span className={`product-card-badge badge-${product.category}`}>
                        {product.category}
                      </span>
                      {/* Hover Overlay */}
                      <div className="product-card-overlay">
                        <Link href="/contact" className="product-card-overlay-btn">
                          Request a Quote →
                        </Link>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="product-card-body">
                      <p className="product-card-title">{product.title}</p>
                      <p className="product-card-desc">{product.desc}</p>
                      <div className="product-card-footer">
                        <div>
                          <p className="product-card-moq-label">Avg. MOQ</p>
                          <p className="product-card-moq-value">{product.moq}</p>
                        </div>
                        <Link href="/contact" className="product-card-inquire">
                          Inquire →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            className="product-cta-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="product-cta-title">Can&apos;t find what you need?</h2>
            <p className="product-cta-sub">
              Our sourcing team can locate and verify any product from our network of 2,000+
              certified Chinese manufacturers.
            </p>
            <Link href="/contact" className="product-cta-btn">
              Submit Custom Sourcing Request
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

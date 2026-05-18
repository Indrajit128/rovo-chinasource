"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { allProducts } from "./data";

const categories = ["All", "Electronics", "Furniture", "Decor", "Apparel", "Industrial"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-[120px] pb-24 font-inter">
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block tracking-[0.2em] uppercase text-xs font-bold text-[#f97316] mb-4">Portfolio</span>
          <h1 className="font-inter font-black text-4xl md:text-5xl text-[#0F172A] mb-6 tracking-tight">Product Catalog</h1>
          <p className="text-[#4A5568] text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our extensive range of high-quality products sourced directly from premier manufacturing hubs.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-[#0F172A] text-white shadow-lg" 
                  : "bg-white text-[#4A5568] border border-gray-200 hover:border-[#0F172A] hover:text-[#0F172A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx % 4 * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <Image 
                  src={product.img} 
                  alt={product.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#C62828] uppercase tracking-wider shadow-sm">
                  {product.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-inter font-bold text-lg text-[#0F172A] mb-3 leading-tight line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {product.desc}
                </p>
                
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Avg. MOQ</span>
                    <span className="text-[#0F172A] font-bold text-sm">{product.moq}</span>
                  </div>
                  <Link 
                    href="/contact" 
                    className="text-[#C62828] text-sm font-bold hover:text-[#9b1c1c] transition-colors"
                  >
                    Inquire →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

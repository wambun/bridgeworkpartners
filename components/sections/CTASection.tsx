'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Subtle background accents for section */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent2-500 rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent3-500 rounded-full blur-3xl opacity-5" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 lg:p-16 overflow-hidden shadow-2xl"
        >
          {/* Multi-color gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700" />
          <div className="absolute inset-0 premium-gradient-mesh opacity-30" />

          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent1-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent2-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-48 h-48 bg-accent3-500 rounded-full blur-3xl opacity-15 animate-glow-pulse" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Take the first step toward building your{' '}
              <span className="text-gradient-gold">dream team.</span>
            </h2>
            <p className="text-lg text-primary-100 mb-10">
              Start working with BridgeWork Partners today and connect with top talent
              faster and more efficiently!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all shadow-lg shadow-black/10 hover:shadow-xl hover:scale-105"
              >
                <span>Free consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all border border-white/30"
              >
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

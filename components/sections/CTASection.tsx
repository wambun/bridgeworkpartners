'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-primary-500 rounded-3xl p-8 lg:p-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-600/30 rounded-full blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Take the first step toward building your dream team.
            </h2>
            <p className="text-lg text-primary-100 mb-10">
              Start working with BridgeWork Partners today and connect with top talent
              faster and more efficiently!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
              >
                <span>Free consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group flex items-center gap-2 bg-primary-600/50 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600/70 transition-colors border border-white/20"
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

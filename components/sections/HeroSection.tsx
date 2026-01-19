'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-accent2-50/30" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B5E5E' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Premium Decorative Blur Orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent2-500 rounded-full blur-3xl opacity-20 animate-glow-pulse" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-accent3-500 rounded-full blur-3xl opacity-15" />
      <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-accent1-500 rounded-full blur-3xl opacity-15 animate-float" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Stats Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-50 to-accent2-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-100/50 shadow-sm"
            >
              <span className="w-2 h-2 bg-accent1-500 rounded-full animate-pulse" />
              <span className="font-semibold">250+</span>
              <span>trusted partners</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              HR Solutions with{' '}
              <span className="text-gradient-multi">smart strategies.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              BridgeWork Partners is your trusted partner in human resources, offering
              personalized HR solutions that connect top talent with the right opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group relative flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 hover:scale-105"
              >
                <span>Free consultation</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="group flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-medium border border-gray-200 hover:border-accent2-300 hover:bg-accent2-50/50 transition-all hover:shadow-md"
              >
                <span>Explore our services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform group-hover:text-accent2-500" />
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Featured Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-3xl p-8 text-white overflow-hidden shadow-2xl shadow-primary-500/30">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent1-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent2-500/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent3-500/20 rounded-full blur-2xl" />

              <div className="relative">
                <h3 className="text-2xl font-display font-semibold mb-4">
                  Successfully connected over 1,000 businesses with top talent.
                </h3>
                <p className="text-primary-100 mb-6">
                  Reducing hiring time by 30% and improving team efficiency across industries.
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent1-500/40 to-accent1-600/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <span className="text-lg font-semibold">WG</span>
                  </div>
                  <div>
                    <p className="font-medium">Wanda Granier</p>
                    <p className="text-sm text-primary-100">CEO, BridgeWork Partners</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-premium-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Top Rated</p>
                  <p className="text-sm text-gray-500">HR Consulting Firm</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-gray-200/60"
        >
          <p className="text-center text-sm text-gray-500 mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {['Dallas Business Journal', 'Inc. Magazine', 'Best Places to Work', 'WBENC', 'Texas HUB'].map((partner, index) => {
              const colors = ['text-accent1-400', 'text-accent2-400', 'text-primary-400', 'text-accent3-400', 'text-accent1-400'];
              return (
                <div key={partner} className={`${colors[index]} font-medium text-sm hover:opacity-100 opacity-70 transition-opacity cursor-default`}>
                  {partner}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

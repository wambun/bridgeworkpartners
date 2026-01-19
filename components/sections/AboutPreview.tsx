'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Target, Zap, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Tailored Solutions',
    description: 'Tailored hiring solutions that fit your business perfectly.',
    accentBg: 'bg-accent1-50',
    accentText: 'text-accent1-500',
    borderColor: 'border-l-accent1-500',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Faster Hiring',
    description: 'Streamlined hiring processes that cut hiring time by 30%.',
    accentBg: 'bg-accent2-50',
    accentText: 'text-accent2-500',
    borderColor: 'border-l-accent2-500',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Access to Top Talent',
    description: 'Connect with highly qualified candidates across industries.',
    accentBg: 'bg-accent3-50',
    accentText: 'text-accent3-500',
    borderColor: 'border-l-accent3-500',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Effortless Integration',
    description: 'Seamlessly integrate with your HR tools for effortless hiring.',
    accentBg: 'bg-primary-50',
    accentText: 'text-primary-500',
    borderColor: 'border-l-primary-500',
  },
];

const AboutPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent1-500 rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent2-500 rounded-full blur-3xl opacity-5" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-500/30">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Platform designed to simplify and enhance the hiring process.
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              With personalized solutions tailored to your business needs, we connect you
              with the best talent quickly and efficiently, helping you build stronger,
              more effective teams.
            </p>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 hover:gap-3 transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl"
            >
              <span>About BridgeWork Partners</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${feature.borderColor} hover:shadow-premium transition-all duration-300 group`}
              >
                <div className={`w-10 h-10 ${feature.accentBg} ${feature.accentText} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

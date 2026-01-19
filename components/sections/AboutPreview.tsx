'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Target, Zap, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Tailored Solutions',
    description: 'Tailored hiring solutions that fit your business perfectly.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Faster Hiring',
    description: 'Streamlined hiring processes that cut hiring time by 30%.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Access to Top Talent',
    description: 'Connect with highly qualified candidates across industries.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Effortless Integration',
    description: 'Seamlessly integrate with your HR tools for effortless hiring.',
  },
];

const AboutPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white mb-6">
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
              className="inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all"
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
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-primary-50 text-primary-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
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

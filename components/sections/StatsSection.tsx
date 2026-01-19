'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years of Excellence', color: 'accent1' },
  { value: '1000+', label: 'Successful Placements', color: 'accent2' },
  { value: '98%', label: 'Client Satisfaction', color: 'accent3' },
  { value: '250+', label: 'Partner Companies', color: 'primary' },
];

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Premium Gradient Mesh Background */}
      <div className="absolute inset-0 premium-gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/95 via-primary-600/95 to-primary-700/95" />

      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent1-500 rounded-full blur-3xl opacity-20 animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent2-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-56 h-56 bg-accent3-500 rounded-full blur-3xl opacity-15" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-dark rounded-2xl p-6 lg:p-8 text-center hover:bg-white/15 transition-colors group"
            >
              <div className="text-4xl lg:text-5xl font-display font-semibold text-white mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-primary-100 text-sm lg:text-base">{stat.label}</div>
              {/* Accent indicator */}
              <div className={`w-12 h-1 mx-auto mt-4 rounded-full bg-${stat.color}-500 opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '1000+', label: 'Successful Placements' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '250+', label: 'Partner Companies' },
];

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-primary-500">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-display font-semibold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-primary-100 text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

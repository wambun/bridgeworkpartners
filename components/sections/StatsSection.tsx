'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence', color: 'accent1' },
  { value: 1000, suffix: '+', label: 'Successful Placements', color: 'accent2' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', color: 'accent3' },
  { value: 250, suffix: '+', label: 'Partner Companies', color: 'primary' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = display.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [display]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

const StatsSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Premium Gradient Mesh Background */}
      <div className="absolute inset-0 premium-gradient-mesh" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/95 via-primary-600/95 to-primary-700/95" />

      {/* Animated Decorative Orbs */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/4 w-64 h-64 bg-accent1-500 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          y: [10, -15, 10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent2-500 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 -translate-y-1/2 right-0 w-56 h-56 bg-accent3-500 rounded-full blur-3xl"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1] as const,
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card-dark rounded-2xl p-6 lg:p-8 text-center hover:bg-white/15 transition-colors group cursor-default"
            >
              <motion.div
                className="text-4xl lg:text-5xl font-display font-semibold text-white mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4 }}
                className="text-primary-100 text-sm lg:text-base"
              >
                {stat.label}
              </motion.div>
              {/* Accent indicator */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                className={`h-1 mx-auto mt-4 rounded-full bg-${stat.color}-500 opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

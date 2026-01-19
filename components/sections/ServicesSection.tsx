'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Laptop, Search, Users, Heart, Building, RefreshCw } from 'lucide-react';
import { services } from '@/data/config/services';
import { accentColorClasses, type AccentColor } from '@/lib/colorUtils';

const iconMap: Record<string, React.ReactNode> = {
  laptop: <Laptop className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  building: <Building className="w-6 h-6" />,
  refresh: <RefreshCw className="w-6 h-6" />,
};

// Get border class for accent color
const getBorderClass = (color: AccentColor) => {
  const borderMap: Record<AccentColor, string> = {
    primary: 'border-t-primary-500',
    accent1: 'border-t-accent1-500',
    accent2: 'border-t-accent2-500',
    accent3: 'border-t-accent3-500',
  };
  return borderMap[color];
};

// Get hover border class
const getHoverBorderClass = (color: AccentColor) => {
  const hoverBorderMap: Record<AccentColor, string> = {
    primary: 'hover:border-primary-200',
    accent1: 'hover:border-accent1-200',
    accent2: 'hover:border-accent2-200',
    accent3: 'hover:border-accent3-200',
  };
  return hoverBorderMap[color];
};

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-accent2-500 rounded-full blur-3xl opacity-5"
      />
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent3-500 rounded-full blur-3xl opacity-5"
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 mb-4 bg-primary-50 px-4 py-2 rounded-full"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-accent1-500 rounded-full"
            />
            Our Services
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Platform that matches businesses<br className="hidden sm:block" /> with top-tier talent.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our tailored approach integrates seamlessly with your existing systems,
            ensuring a smooth experience from start to finish.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const colorClasses = accentColorClasses[service.accentColor];
            const borderClass = getBorderClass(service.accentColor);
            const hoverBorderClass = getHoverBorderClass(service.accentColor);

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={service.href}
                  className={`group block bg-white border border-gray-200 border-t-4 ${borderClass} rounded-2xl p-6 hover:shadow-premium-lg ${hoverBorderClass} transition-all duration-300 h-full`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-12 h-12 ${colorClasses.bgLight} ${colorClasses.text} rounded-xl flex items-center justify-center mb-5 shadow-sm`}
                  >
                    {iconMap[service.icon]}
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <svg className={`w-4 h-4 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className={`flex items-center gap-1 text-sm font-medium ${colorClasses.text} group-hover:gap-2 transition-all`}>
                    <span>Details</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:gap-3 transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl"
            >
              <span>View all services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

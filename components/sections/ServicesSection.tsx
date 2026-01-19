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
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent2-500 rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent3-500 rounded-full blur-3xl opacity-5" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 mb-4 bg-primary-50 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-accent1-500 rounded-full" />
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            Platform that matches businesses<br className="hidden sm:block" /> with top-tier talent.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our tailored approach integrates seamlessly with your existing systems,
            ensuring a smooth experience from start to finish.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colorClasses = accentColorClasses[service.accentColor];
            const borderClass = getBorderClass(service.accentColor);
            const hoverBorderClass = getHoverBorderClass(service.accentColor);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className={`group block bg-white border border-gray-200 border-t-4 ${borderClass} rounded-2xl p-6 hover:shadow-premium-lg ${hoverBorderClass} transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${colorClasses.bgLight} ${colorClasses.text} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                    {iconMap[service.icon]}
                  </div>

                  {/* Content */}
                  <h3 className={`font-semibold text-xl text-gray-900 mb-2 group-hover:${colorClasses.text.replace('text-', 'text-')} transition-colors`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className={`w-4 h-4 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className={`flex items-center gap-1 text-sm font-medium ${colorClasses.text} group-hover:gap-2 transition-all`}>
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:gap-3 transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl hover:scale-105"
          >
            <span>View all services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

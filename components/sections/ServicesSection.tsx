'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Laptop, Search, Users, Heart, Building, RefreshCw } from 'lucide-react';
import { services } from '@/data/config/services';

const iconMap: Record<string, React.ReactNode> = {
  laptop: <Laptop className="w-6 h-6" />,
  search: <Search className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  building: <Building className="w-6 h-6" />,
  refresh: <RefreshCw className="w-6 h-6" />,
};

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary-500 mb-4">
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
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  {iconMap[service.icon]}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:gap-2 transition-all">
                  <span>Details</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
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
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all"
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

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Laptop, Search, Users, Heart, Building, RefreshCw } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections';
import { services } from '@/data/config/services';
import { accentColorClasses, type AccentColor } from '@/lib/colorUtils';

const iconMap: Record<string, React.ReactNode> = {
  laptop: <Laptop className="w-8 h-8" />,
  search: <Search className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  heart: <Heart className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
  refresh: <RefreshCw className="w-8 h-8" />,
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

// Process step colors
const processColors = [
  { bg: 'bg-primary-500', shadow: 'shadow-primary-500/30' },
  { bg: 'bg-accent2-500', shadow: 'shadow-accent2-500/30' },
  { bg: 'bg-accent1-500', shadow: 'shadow-accent1-500/30' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Expert workforce solutions"
        title="Services"
        subtitle="Discover our range of services designed to optimize talent acquisition, development, and retention."
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent2-500 rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent3-500 rounded-full blur-3xl opacity-5" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const colorClasses = accentColorClasses[service.accentColor];
              const borderClass = getBorderClass(service.accentColor);

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
                    className={`group block bg-white border border-gray-200 border-t-4 ${borderClass} rounded-2xl p-8 hover:shadow-premium-lg transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className={`text-sm font-medium ${colorClasses.text} mb-2 block`}>
                          {service.name}
                        </span>
                        <h3 className="font-display text-2xl font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <div className={`w-14 h-14 ${colorClasses.bgLight} ${colorClasses.text} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                        {iconMap[service.icon]}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className={`flex items-center gap-2 ${colorClasses.bgLight} px-3 py-1.5 rounded-full text-sm text-gray-700`}
                        >
                          <svg className={`w-4 h-4 ${colorClasses.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Link */}
                    <div className={`flex items-center gap-1 text-sm font-medium ${colorClasses.text} group-hover:gap-2 transition-all`}>
                      <span>View details</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent1-500 rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent2-500 rounded-full blur-3xl opacity-5" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 mb-4 bg-primary-50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent1-500 rounded-full" />
              How it works
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Efficient process to connect businesses<br className="hidden sm:block" /> with the best talent.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work closely with you to understand your unique needs, culture, and hiring goals.
              Using this insight, we tailor a recruitment strategy that targets the right candidates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Understand Your Needs',
                description: 'We begin by working closely with you to understand your business, culture, and specific hiring requirements.',
              },
              {
                step: '2',
                title: 'Recruitment Strategy',
                description: 'Based on your unique needs, we craft a personalized recruitment strategy designed to attract the best talent.',
              },
              {
                step: '3',
                title: 'Seamless Hiring Process',
                description: 'Using our advanced tools, we match you with top candidates and integrate the process with your HR systems.',
              },
            ].map((item, index) => {
              const color = processColors[index];
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-premium transition-all duration-300 group"
                >
                  <div className={`absolute -top-4 left-8 w-8 h-8 ${color.bg} text-white rounded-full flex items-center justify-center font-semibold shadow-lg ${color.shadow} group-hover:scale-110 transition-transform`}>
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3 mt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

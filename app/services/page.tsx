'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Laptop, Search, Users, Heart, Building, RefreshCw } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections';
import { services } from '@/data/config/services';

const iconMap: Record<string, React.ReactNode> = {
  laptop: <Laptop className="w-8 h-8" />,
  search: <Search className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  heart: <Heart className="w-8 h-8" />,
  building: <Building className="w-8 h-8" />,
  refresh: <RefreshCw className="w-8 h-8" />,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Expert workforce solutions"
        title="Services"
        subtitle="Discover our range of services designed to optimize talent acquisition, development, and retention."
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
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
                  className="group block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="text-sm font-medium text-primary-500 mb-2 block">
                        {service.name}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-14 h-14 bg-primary-50 text-primary-500 rounded-xl flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
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
                        className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full text-sm text-gray-600"
                      >
                        <svg className="w-4 h-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:gap-2 transition-all">
                    <span>View details</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary-500 mb-4">
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
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-200"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3 mt-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

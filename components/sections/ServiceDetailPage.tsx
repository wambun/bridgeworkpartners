'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections';
import { Service, services } from '@/data/config/services';

interface ServiceDetailPageProps {
  service: Service;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <PageHero
        badge={service.name}
        title={service.title}
        subtitle={service.description}
      />

      {/* Back Link */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all services
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                  Overview
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.longDescription}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3"
                    >
                      <div className="w-6 h-6 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  Key Benefits
                </h3>
                <div className="space-y-6">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 bg-primary-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32"
              >
                {/* CTA Card */}
                <div className="bg-primary-500 rounded-2xl p-8 text-white mb-8">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Ready to get started?
                  </h3>
                  <p className="text-primary-100 mb-6">
                    Contact us today to discuss how our {service.name} services can help your organization.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-primary-500 px-6 py-3 rounded-xl font-medium hover:bg-primary-50 transition-colors"
                  >
                    Contact Us
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Other Services */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Other Services
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((otherService) => (
                      <Link
                        key={otherService.id}
                        href={otherService.href}
                        className="group flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-all"
                      >
                        <div>
                          <p className="font-medium text-gray-900 group-hover:text-primary-500 transition-colors">
                            {otherService.name}
                          </p>
                          <p className="text-sm text-gray-500">{otherService.title}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="block text-center text-sm text-primary-500 font-medium mt-4 hover:underline"
                  >
                    View all services
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

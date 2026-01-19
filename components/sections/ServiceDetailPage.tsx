'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, ChevronRight } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections';
import { Service, services } from '@/data/config/services';
import { accentColorClasses, type AccentColor } from '@/lib/colorUtils';

interface ServiceDetailPageProps {
  service: Service;
}

// CTA gradient backgrounds for each accent color
const ctaGradients: Record<AccentColor, string> = {
  primary: 'from-primary-500 via-primary-600 to-primary-700',
  accent1: 'from-accent1-500 via-accent1-600 to-accent1-700',
  accent2: 'from-accent2-500 via-accent2-600 to-accent2-700',
  accent3: 'from-accent3-500 via-accent3-600 to-accent3-700',
};

// Text colors for CTA card based on accent
const ctaTextColors: Record<AccentColor, { muted: string; button: string; buttonHover: string }> = {
  primary: { muted: 'text-primary-100', button: 'text-primary-600', buttonHover: 'hover:bg-primary-50' },
  accent1: { muted: 'text-accent1-100', button: 'text-accent1-600', buttonHover: 'hover:bg-accent1-50' },
  accent2: { muted: 'text-accent2-100', button: 'text-accent2-600', buttonHover: 'hover:bg-accent2-50' },
  accent3: { muted: 'text-accent3-100', button: 'text-accent3-600', buttonHover: 'hover:bg-accent3-50' },
};

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const colorClasses = accentColorClasses[service.accentColor];
  const ctaGradient = ctaGradients[service.accentColor];
  const ctaText = ctaTextColors[service.accentColor];

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
            className={`inline-flex items-center gap-2 text-sm text-gray-600 hover:${colorClasses.text} transition-colors`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all services
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background decorations using service accent */}
        <div className={`absolute top-20 right-0 w-96 h-96 ${colorClasses.bg} rounded-full blur-3xl opacity-5`} />
        <div className={`absolute bottom-0 left-0 w-72 h-72 ${colorClasses.bg} rounded-full blur-3xl opacity-5`} />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
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

                {/* Features Grid - with service accent colors */}
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-3 ${colorClasses.bgLight} rounded-xl px-4 py-3 border border-gray-100`}
                    >
                      <div className={`w-6 h-6 ${colorClasses.bg} text-white rounded-full flex items-center justify-center flex-shrink-0`}>
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
                      <div className={`w-10 h-10 ${colorClasses.bg} text-white rounded-xl flex items-center justify-center flex-shrink-0 font-semibold shadow-lg ${colorClasses.shadow}`}>
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
                {/* CTA Card - with service accent gradient */}
                <div className={`relative rounded-2xl p-8 text-white mb-8 overflow-hidden shadow-xl`}>
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${ctaGradient}`} />
                  {/* Decorative orb */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-10" />

                  <div className="relative">
                    <h3 className="font-display text-xl font-semibold mb-4">
                      Ready to get started?
                    </h3>
                    <p className={`${ctaText.muted} mb-6`}>
                      Contact us today to discuss how our {service.name} services can help your organization.
                    </p>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 bg-white ${ctaText.button} px-6 py-3 rounded-xl font-medium ${ctaText.buttonHover} transition-colors shadow-lg`}
                    >
                      Contact Us
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Other Services - with accent color indicators */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Other Services
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((otherService) => {
                      const otherColors = accentColorClasses[otherService.accentColor];
                      return (
                        <Link
                          key={otherService.id}
                          href={otherService.href}
                          className={`group flex items-center justify-between p-3 bg-white rounded-xl border-l-4 ${otherColors.borderLeft} hover:shadow-md transition-all`}
                        >
                          <div>
                            <p className={`font-medium text-gray-900 group-hover:${otherColors.text} transition-colors`}>
                              {otherService.name}
                            </p>
                            <p className="text-sm text-gray-500">{otherService.title}</p>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-gray-400 group-hover:${otherColors.text} transition-colors`} />
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    href="/services"
                    className={`block text-center text-sm ${colorClasses.text} font-medium mt-4 hover:underline`}
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

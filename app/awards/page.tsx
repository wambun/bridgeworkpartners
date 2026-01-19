'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections';

const awards = [
  {
    year: '2024',
    title: 'Circle of Excellence',
    description: 'Recognized for outstanding contributions to team success',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    year: '2021',
    title: 'Best Places to Work',
    description: 'Inc. Magazine Editor\'s List for embracing strong culture during the pandemic',
    icon: <Star className="w-6 h-6" />,
  },
  {
    year: '2018',
    title: 'Best Places to Work',
    description: 'Dallas Business Journal recognition for workplace excellence',
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: '2016',
    title: 'Best Places to Work',
    description: 'Dallas Business Journal recognition for workplace excellence',
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: '2015',
    title: 'Lillie Knox Investing for Growth',
    description: 'Recognized for strategic growth and investment in the community',
    icon: <Medal className="w-6 h-6" />,
  },
  {
    year: '2014',
    title: 'Minority Business Leader Award',
    description: 'Dallas Business Journal recognition for leadership in minority business',
    icon: <Star className="w-6 h-6" />,
  },
  {
    year: '2014',
    title: 'Supplier of the Year - Class II',
    description: 'DFW Minority Supplier Development Council',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    year: '2013',
    title: 'Top 500 Emerging Businesses',
    description: 'Diversity Business recognition as one of the top emerging businesses in the U.S.',
    icon: <Medal className="w-6 h-6" />,
  },
  {
    year: '2012',
    title: 'Best Places to Work',
    description: 'Dallas Business Journal recognition for workplace excellence',
    icon: <Award className="w-6 h-6" />,
  },
  {
    year: '2011',
    title: 'Regional Supplier of the Year',
    description: 'National Minority Supplier Development Council recognition',
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    year: '2010',
    title: 'E Award',
    description: 'Recognition for excellence in business operations',
    icon: <Star className="w-6 h-6" />,
  },
];

export default function AwardsPage() {
  return (
    <>
      <PageHero
        badge="Awards & Accolades"
        title="Recognized Excellence"
        subtitle="Our dedication to excellence has been recognized through numerous industry awards and accolades."
      />

      {/* Awards Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-6 mb-8"
              >
                {/* Year */}
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="font-semibold text-primary-500">{award.year}</span>
                </div>

                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-4 h-4 bg-primary-500 rounded-full mt-1" />
                  {index !== awards.length - 1 && (
                    <div className="absolute top-5 left-1.5 w-1 h-full bg-primary-100" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:bg-primary-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      {award.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{award.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{award.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-primary-500 mb-4">
              Certifications
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Certified & Trusted
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              BridgeWork Partners holds multiple certifications demonstrating our commitment
              to excellence and diversity.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {['Texas HUB', 'WBENC', 'NCTRCA', 'NMSDC'].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-primary-500" />
                  </div>
                  <p className="font-semibold text-gray-900">{cert}</p>
                  <p className="text-sm text-gray-500">Certified</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

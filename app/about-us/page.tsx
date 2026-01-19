'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, Heart, Building } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { CoreValuesSection, TeamPreview, CTASection } from '@/components/sections';

const pillars = [
  {
    name: 'BridgeWorkTECH',
    description: 'IT & Technical Recruiting with cybersecurity expertise',
    href: '/services/bridgeworktech',
  },
  {
    name: 'BridgeWorkSEARCH',
    description: 'Direct Hire Placements from entry to C-suite',
    href: '/services/bridgeworksearch',
  },
  {
    name: 'BridgeWorkSTAFF',
    description: 'Professional & Administrative Staffing Solutions',
    href: '/services/bridgeworkstaff',
  },
  {
    name: 'BridgeWorkHR',
    description: 'HR Consulting with 20+ years of experience',
    href: '/services/bridgeworkhr',
  },
  {
    name: 'BridgeWorkSLED',
    description: 'State, Local & Education Market Expertise',
    href: '/services/bridgeworksled',
  },
  {
    name: 'BridgeWorkRPO',
    description: 'Recruitment Process Outsourcing Solutions',
    href: '/services/bridgeworkrpo',
  },
];

const highlights = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Award Winning',
    description: 'Multiple "Best Places to Work" awards by Dallas Business Journal',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Hispanic-Owned',
    description: 'Certified HUB, WBE, and WOSB business enterprise',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Community Focused',
    description: 'Active philanthropy through our BridgeWorkGIVES program',
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: 'Since 2008',
    description: 'Over 15 years of HR consulting and talent acquisition excellence',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Who we are"
        subtitle="Building stronger teams and empowering businesses through tailored recruitment solutions and expert talent acquisition since 2008."
      />

      {/* About Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                Award-winning human resources consulting
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  BridgeWork Partners is a high-value consultative human resources company that
                  strategically leverages 6 Pillars to aggressively support the demanding needs of our clients.
                </p>
                <p>
                  We believe this approach allows us to best leverage the strengths of our internal team,
                  Channel Partners, Mentor Protégé Recruiting Program, and Advisory Council to best meet
                  our clients&apos; needs as an &quot;In Business for Business&quot; HR Model.
                </p>
                <p>
                  BridgeWork Partners is based in Dallas, Texas and supports clients locally,
                  nationally, and internationally.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6 Pillars */}
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
              Our 6 Pillars
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Comprehensive HR Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer high-impact strategies and quality talent to drive positive results
              and meet the needs of our clients.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={pillar.href}
                  className="group block bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary-500 transition-colors mb-2">
                    {pillar.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{pillar.description}</p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary-500">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CoreValuesSection />
      <TeamPreview />
      <CTASection />
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, Linkedin, Mail } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections';
import { teamMembers, TeamMember } from '@/data/config/team';

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const featuredMember = teamMembers.find((m) => m.featured);
  const otherMembers = teamMembers.filter((m) => !m.featured);

  return (
    <>
      <PageHero
        badge="Our Team"
        title="Meet the Leadership"
        subtitle="Our experienced team brings decades of combined expertise in HR consulting, talent acquisition, and business development."
      />

      {/* Back Link */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to About Us
          </Link>
        </div>
      </div>

      {/* Featured Team Member */}
      {featuredMember && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-primary-300 text-[120px] font-display">
                      {featuredMember.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-6 py-3 rounded-xl">
                  <span className="text-sm font-medium">Founder & CEO</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="inline-block text-sm font-medium text-primary-500 mb-4">
                  Leadership
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-2">
                  {featuredMember.name}
                </h2>
                <p className="text-xl text-gray-500 mb-6">{featuredMember.title}</p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {featuredMember.bio}
                </p>
                <div className="flex items-center gap-4">
                  <button
                    aria-label={`Connect with ${featuredMember.name} on LinkedIn`}
                    className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    aria-label={`Email ${featuredMember.name}`}
                    className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Team Grid */}
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
              Executive Team
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who drive our success and lead our
              commitment to excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherMembers.map((member, index) => (
              <motion.button
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedMember(member)}
                className="group text-left bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-50 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-primary-300 text-6xl font-display group-hover:scale-110 transition-transform">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors" />
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{member.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center">
                    <span className="text-primary-400 text-2xl font-display">
                      {selectedMember.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">
                      {selectedMember.name}
                    </h3>
                    <p className="text-gray-500">{selectedMember.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  aria-label="Close modal"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>

                <div className="flex items-center gap-4 mt-8">
                  <button
                    aria-label={`Connect with ${selectedMember.name} on LinkedIn`}
                    className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </button>
                  <button
                    aria-label={`Email ${selectedMember.name}`}
                    className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm font-medium">Email</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}

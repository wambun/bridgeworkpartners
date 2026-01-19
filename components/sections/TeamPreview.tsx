'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { teamMembers } from '@/data/config/team';

// Rotating accent colors for team members
const accentColors = [
  { bg: 'bg-primary-500', gradient: 'from-primary-900/90 via-primary-800/40', ring: 'ring-primary-400/30' },
  { bg: 'bg-accent1-500', gradient: 'from-accent1-900/90 via-accent1-800/40', ring: 'ring-accent1-400/30' },
  { bg: 'bg-accent2-500', gradient: 'from-accent2-900/90 via-accent2-800/40', ring: 'ring-accent2-400/30' },
  { bg: 'bg-accent3-500', gradient: 'from-accent3-900/90 via-accent3-800/40', ring: 'ring-accent3-400/30' },
];

const TeamPreview = () => {
  const previewMembers = teamMembers.slice(0, 4);

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent3-500 rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent1-500 rounded-full blur-3xl opacity-5" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 mb-4 bg-primary-50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent2-500 rounded-full" />
              Team
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900">
              Meet the experts behind<br className="hidden sm:block" /> your recruitment success
            </h2>
          </div>
          <Link
            href="/about-us/team"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary-600 hover:gap-3 transition-all shadow-lg shadow-primary-500/30 whitespace-nowrap"
          >
            <span>View all team</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewMembers.map((member, index) => {
            const accent = accentColors[index % accentColors.length];
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={`/about-us/team#${member.id}`}
                  className="block relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Team member photo */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent.gradient} to-transparent`} />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-semibold text-lg group-hover:text-white transition-colors">{member.name}</h3>
                    <p className="text-sm text-white/80">{member.title}</p>
                  </div>

                  {/* Hover accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${accent.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;

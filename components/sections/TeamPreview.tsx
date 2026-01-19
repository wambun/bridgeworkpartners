'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { teamMembers } from '@/data/config/team';

const TeamPreview = () => {
  const previewMembers = teamMembers.slice(0, 4);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block text-sm font-medium text-primary-500 mb-4">
              Team
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-gray-900">
              Meet the experts behind<br className="hidden sm:block" /> your recruitment success
            </h2>
          </div>
          <Link
            href="/about-us/team"
            className="inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-3 transition-all whitespace-nowrap"
          >
            <span>View all team</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewMembers.map((member, index) => (
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
                className="block relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4]"
              >
                {/* Placeholder for team member image */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-white/80">{member.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;

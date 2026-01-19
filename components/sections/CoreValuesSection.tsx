'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Sparkles } from 'lucide-react';

const coreValues = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community',
    description: 'The heartbeat and foundation of our company is built on our "BridgeWorkGIVES" program. We operate with a strong passion to the human need and spirit.',
    number: '1',
    accentColor: 'accent2', // Blue
    bgClass: 'bg-accent2-500',
    shadowClass: 'shadow-accent2-500/40',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Customer',
    description: 'Customer loyalty is at the heart of our service execution. Our top priority is to build an overall positive experience that concentrates on driving results.',
    number: '2',
    accentColor: 'accent1', // Gold
    bgClass: 'bg-accent1-500',
    shadowClass: 'shadow-accent1-500/40',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Culture',
    description: 'At BridgeWork Partners, we are clear about who we are. Our employees are our greatest assets. We hire and develop people who are passionate about our Core Values.',
    number: '3',
    accentColor: 'accent3', // Purple
    bgClass: 'bg-accent3-500',
    shadowClass: 'shadow-accent3-500/40',
  },
];

const CoreValuesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white relative overflow-hidden">
      {/* Multi-color background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent1-500 rounded-full blur-3xl opacity-15 animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent2-500 rounded-full blur-3xl opacity-15" />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-72 h-72 bg-accent3-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-0 w-56 h-56 bg-white rounded-full blur-3xl opacity-5" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-100 mb-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="w-2 h-2 bg-accent1-500 rounded-full animate-pulse" />
            Our Foundation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            The 3 C&apos;s that drive our success
          </h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            BridgeWork Partners cultivates its core values and transfers those values into
            mechanisms that encourage progress within our company and our clients&apos; companies.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative glass-card-dark rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group"
            >
              {/* Number badge with accent color */}
              <div className={`absolute -top-4 -left-4 w-10 h-10 ${value.bgClass} text-white rounded-full flex items-center justify-center font-semibold text-lg shadow-lg ${value.shadowClass} group-hover:scale-110 transition-transform`}>
                {value.number}
              </div>

              <div className={`mb-6 text-${value.accentColor}-300 group-hover:text-${value.accentColor}-200 transition-colors`}>
                {value.icon}
              </div>

              <h3 className="font-semibold text-2xl mb-4 group-hover:text-white transition-colors">{value.title}</h3>
              <p className="text-primary-100 leading-relaxed">{value.description}</p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-8 right-8 h-0.5 ${value.bgClass} opacity-0 group-hover:opacity-50 transition-opacity rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;

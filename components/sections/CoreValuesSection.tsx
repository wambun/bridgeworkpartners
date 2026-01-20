'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Sparkles } from 'lucide-react';

const coreValues = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community',
    description: 'The heartbeat and foundation of our company is built on our "BridgeWorkGIVES" program. We operate with a strong passion to the human need and spirit.',
    gradient: 'from-accent2-500 to-accent2-600',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Customer',
    description: 'Customer loyalty is at the heart of our service execution. Our top priority is to build an overall positive experience that concentrates on driving results.',
    gradient: 'from-accent1-500 to-accent1-600',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Culture',
    description: 'At BridgeWork Partners, we are clear about who we are. Our employees are our greatest assets. We hire and develop people who are passionate about our Core Values.',
    gradient: 'from-accent3-500 to-accent3-600',
  },
];

const CoreValuesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-50/30 via-transparent to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary-500 mb-4">
            Our Foundation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
            The 3 C&apos;s that drive our success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            BridgeWork Partners cultivates its core values and transfers those values into
            mechanisms that encourage progress within our company and our clients&apos; companies.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;

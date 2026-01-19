'use client';

import { motion } from 'framer-motion';
import { Users, Heart, Sparkles } from 'lucide-react';

const coreValues = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community',
    description: 'The heartbeat and foundation of our company is built on our "BridgeWorkGIVES" program. We operate with a strong passion to the human need and spirit.',
    number: '1',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Customer',
    description: 'Customer loyalty is at the heart of our service execution. Our top priority is to build an overall positive experience that concentrates on driving results.',
    number: '2',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Culture',
    description: 'At BridgeWork Partners, we are clear about who we are. Our employees are our greatest assets. We hire and develop people who are passionate about our Core Values.',
    number: '3',
  },
];

const CoreValuesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary-500 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
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
          <span className="inline-block text-sm font-medium text-primary-100 mb-4">
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
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-white text-primary-500 rounded-full flex items-center justify-center font-semibold text-lg">
                {value.number}
              </div>

              <div className="mb-6 text-primary-100">
                {value.icon}
              </div>

              <h3 className="font-semibold text-2xl mb-4">{value.title}</h3>
              <p className="text-primary-100 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;

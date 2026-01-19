'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections';
import { newsArticles } from '@/data/config/news';

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        badge="News & Updates"
        title="Latest News"
        subtitle="Stay updated with the latest news, announcements, and insights from BridgeWork Partners."
      />

      {/* News Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/news/${article.id}`} className="block">
                  {/* Image placeholder */}
                  <div className="aspect-[16/10] bg-gray-100 rounded-2xl mb-5 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                      <span className="text-primary-300 text-6xl font-display">B</span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {formatDate(article.date)}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-xl text-gray-900 group-hover:text-primary-500 transition-colors mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react';
import { newsArticles, getNewsArticle, getNewsArticleIds } from '@/data/config/news';
import { CTASection } from '@/components/sections';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return getNewsArticleIds().map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getNewsArticle(id);

  if (!article) {
    return {
      title: 'Article Not Found | BridgeWork Partners',
    };
  }

  return {
    title: `${article.title} | BridgeWork Partners News`,
    description: article.excerpt,
  };
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params;
  const article = getNewsArticle(id);

  if (!article) {
    notFound();
  }

  const otherArticles = newsArticles.filter((a) => a.id !== id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Back Link */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all news
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              {formatDate(article.date)}
            </span>
            {article.author && (
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <User className="w-4 h-4" />
                {article.author}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 max-w-4xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-primary-500">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(Boolean);
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={index}>{paragraph}</p>;
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                {/* Share */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <button
                      aria-label="Share on LinkedIn"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                    <button
                      aria-label="Share on Twitter"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      aria-label="Share via Email"
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Other Articles */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">More News</h3>
                  <div className="space-y-4">
                    {otherArticles.map((otherArticle) => (
                      <Link
                        key={otherArticle.id}
                        href={`/news/${otherArticle.id}`}
                        className="block group"
                      >
                        <p className="font-medium text-gray-900 group-hover:text-primary-500 transition-colors text-sm line-clamp-2">
                          {otherArticle.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {formatDate(otherArticle.date)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

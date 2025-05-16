import { getDictionary } from '@/lib/i18n';
import { blogs } from '@/lib/blogs';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function BlogPage({
  params: { locale, id }
}: {
  params: { locale: string; id: string };
}) {
  const dict = await getDictionary(locale);
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <Link
        href={`/${locale}/blogs`}
        className="inline-block text-blue-500 hover:text-blue-600 mb-8"
      >
        ← {dict.blogs.backToList}
      </Link>

      <header className="space-y-4">
        <h1 className="text-4xl font-bold">{blog.title[locale as 'en' | 'ar']}</h1>
        <time className="text-gray-500">
          {dict.blogs.publishedOn} {new Date(blog.date).toLocaleDateString(locale)}
        </time>
      </header>

      <div className="prose prose-lg max-w-none">
        <p>{blog.content[locale as 'en' | 'ar']}</p>
      </div>
    </article>
  );
} 
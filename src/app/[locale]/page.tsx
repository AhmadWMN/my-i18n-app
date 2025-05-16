import { getDictionary } from '@/lib/i18n';
import { blogs } from '@/lib/blogs';
import Link from 'next/link';

export default async function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{dict.home.title}</h1>
        <p className="text-xl text-gray-600">{dict.home.description}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, 3).map((blog) => (
          <article key={blog.id} className="border rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{blog.title[locale as 'en' | 'ar']}</h2>
            <p className="text-gray-600">{blog.excerpt[locale as 'en' | 'ar']}</p>
            <Link
              href={`/${locale}/blogs/${blog.id}`}
              className="inline-block text-blue-500 hover:text-blue-600"
            >
              {dict.home.readMore}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 
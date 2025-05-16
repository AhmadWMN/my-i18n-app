import { getDictionary } from '@/lib/i18n';
import { blogs } from '@/lib/blogs';
import Link from 'next/link';

export default async function BlogsPage({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const dict = await getDictionary(locale);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">{dict.blogs.title}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article key={blog.id} className="border rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{blog.title[locale as 'en' | 'ar']}</h2>
            <p className="text-gray-600">{blog.excerpt[locale as 'en' | 'ar']}</p>
            <div className="flex justify-between items-center">
              <Link
                href={`/${locale}/blogs/${blog.id}`}
                className="text-blue-500 hover:text-blue-600"
              >
                {dict.home.readMore}
              </Link>
              <time className="text-sm text-gray-500">
                {new Date(blog.date).toLocaleDateString(locale)}
              </time>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 
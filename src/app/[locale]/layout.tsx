import { Inter } from 'next/font/google';
import { Locale } from '@/lib/i18n';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={inter.className}>
      <body>
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <nav className="flex gap-4">
              <Link href={`/${locale}`} className="hover:text-blue-500">
                Home
              </Link>
              <Link href={`/${locale}/blogs`} className="hover:text-blue-500">
                Blogs
              </Link>
            </nav>
            <LanguageSwitcher />
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
} 
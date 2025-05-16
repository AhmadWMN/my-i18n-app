'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = useCallback((locale: string) => {
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
    const newPath = `/${locale}${pathWithoutLocale}`;
    router.push(newPath);
  }, [pathname, router]);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        English
      </button>
      <button
        onClick={() => switchLanguage('ar')}
        className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        العربية
      </button>
    </div>
  );
} 
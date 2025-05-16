import 'server-only';

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  ar: () => import('@/locales/ar.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) => {
  const validLocale = (locale in dictionaries ? locale : 'en') as Locale;
  return dictionaries[validLocale]();
}; 
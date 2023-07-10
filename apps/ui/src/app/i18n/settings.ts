import { InitOptions } from 'i18next';

export type Language = 'en' | 'fr';
export const defaultLanguage = 'en';
export const supportedLanguages: Language[] = [defaultLanguage, 'fr'];

export const defaultNS = 'translation';

export function getOptions(
  lang = defaultLanguage,
  ns = defaultNS
): InitOptions {
  return {
    // debug: true,
    supportedLngs: supportedLanguages,
    fallbackLng: defaultLanguage,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}

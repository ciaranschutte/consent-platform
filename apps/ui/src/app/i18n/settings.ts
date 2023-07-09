import { InitOptions } from 'i18next';

export const defaultLanguage = 'en';
export const supportedLanguages = [defaultLanguage, 'fr'];

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

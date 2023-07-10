import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { defaultNS, getOptions } from './settings';

const initI18next = async (lang: string, ns: string) => {
  const i18nInstance = createInstance();
  const options = getOptions(lang, ns);
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(options);
  return i18nInstance;
};

export async function useTranslation(
  lang: string,
  ns: string = defaultNS,
  options: any = {}
) {
  const i18nextInstance = await initI18next(lang, ns);
  return {
    t: i18nextInstance.getFixedT(
      lang,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}

const dictionaries: any = {
  en: (namespace: string) =>
    import(`./locales/en/${namespace}.json`).then((module) => module.default),
  fr: (namespace: string) =>
    import(`./locales/fr/${namespace}.json`).then((module) => module.default),
};

export const getDictionary = async (locale: string, namespace: string) =>
  dictionaries[locale](namespace);

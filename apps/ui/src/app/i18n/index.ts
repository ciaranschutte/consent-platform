import {
  ValidLanguage,
  ValidNamespace,
  defaultLanguage,
  defaultNS,
} from './settings';

type DictionaryModule = { [k: string]: string };
// Record<ValidLanguage, (namespace: ValidNamespace) => DictionaryModule>
// these will only reload on page refresh (server only) or lang change
const dictionaries = {
  en: (namespace: ValidNamespace) =>
    import(`./locales/en/${namespace}.json`).then((module) => {
      return module.default;
    }),
  fr: (namespace: ValidNamespace) =>
    import(`./locales/fr/${namespace}.json`).then((module) => {
      return module.default;
    }),
};

export const getDictionary = async (
  language: ValidLanguage = defaultLanguage,
  namespace: ValidNamespace = defaultNS
): Promise<
  (k: string, params?: { [key: string]: string | number }) => string
> => {
  const dictionary = await dictionaries[language](namespace);
  return (key: string, params?: { [key: string]: string | number }) => {
    let translation = dictionary[key];
    // use this for nested keys, not sure if we will use this approach, namespaces may be sufficient
    // .split('.')
    // .reduce((obj, key) => obj && obj[key], dictionary);

    if (!translation) {
      // TODO: add error handling/default values for missing translations
      console.error('Could not find translation');
      return key;
    }
    // for interpolation
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation!.replace(`{{ ${key} }}`, String(value));
      });
    }
    return translation;
  };
};

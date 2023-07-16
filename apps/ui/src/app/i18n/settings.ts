export const supportedLanguages = ['en', 'fr'] as const;
export type ValidLanguage = (typeof supportedLanguages)[number];
export const defaultLanguage: ValidLanguage = 'en';

export const supportedNamespaces = ['common', 'header', 'second-page'] as const;
export type ValidNamespace = (typeof supportedNamespaces)[number];
export const defaultNS: ValidNamespace = 'common';

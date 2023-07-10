import Link from 'next/link';

import { supportedLanguages } from '../../i18n/settings';
import { getDictionary, useTranslation } from '../../i18n';

export default async function ({ lang }: { lang: string }) {
  const { t } = await useTranslation(lang, 'header');
  const dict = await getDictionary(lang, 'header');
  return (
    <ul>
      {supportedLanguages
        .filter((lng) => lang !== lng)
        .map((l) => {
          return (
            <li
              style={{ border: '1px solid black', width: '150px', flex: 1 }}
              key={l}
            >
              <Link style={{ flex: 1 }} href={`/${l}`}>
                {/* {dict[l]} */}
                {t(l)}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

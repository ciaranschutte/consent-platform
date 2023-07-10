import Link from 'next/link';
import { User } from 'common';

import { getDictionary, useTranslation } from '../i18n';
import Header from '../components/Header';

const user: User = {
  id: '1',
  name: 'Homer Simpson',
  email: 'homersimpson@example.com',
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang);
  // const dict = await getDictionary(lang, 'translation');
  return (
    <>
      <Header lang={lang} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <div>
            <h1>{t('title')}</h1>
            <p>{t('sample-text')}</p>
            <h2>{t('greeting')}</h2>
            <Link href={`/${lang}/second-page`}>{t('to-second-page')}</Link>
            {/* <h1>{dict['title']}</h1>
            <p>{dict['sample-text']}</p>
            <h2>{dict['greeting']}</h2> */}
            {/* <Link href={`/${lang}/second-page`}>{dict['to-second-page']}</Link> */}
          </div>
        </div>
      </main>
    </>
  );
}

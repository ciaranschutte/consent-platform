import Link from 'next/link';
import { User } from 'common';

import { useTranslation } from '../i18n';
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
  return (
    <>
      <Header lang={lang} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <div>
            <h1>OHCRN Patient Enrolment Portal</h1>
            <p>Sample text for the landing page.</p>
            <h2>{t('title')}</h2>
            <Link href={`/${lang}/second-page`}>{t('to-second-page')}</Link>
          </div>
        </div>
      </main>
    </>
  );
}

import { getDictionary, useTranslation } from '@/app/i18n';
import Link from 'next/link';

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // const dict = await getDictionary(lang, 'second-page');
  const { t } = await useTranslation(lang, 'second-page');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('title')}</h1>
      <Link href={`/${lang}`}>{t('back-to-home')}</Link>
    </main>
  );
}

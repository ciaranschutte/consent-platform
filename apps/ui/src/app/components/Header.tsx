import Link from 'next/link';
import { supportedLanguages } from '../i18n/settings';
import { useTranslation } from '../i18n';

const Header = async ({ lang }: { lang: string }) => {
  const { t } = await useTranslation(lang, 'header');
  return (
    <header style={{ marginTop: 50 }}>
      <button>{t('switchLanguage')}</button>
      {supportedLanguages
        .filter((lng) => lang !== lng)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </header>
  );
};

export default Header;

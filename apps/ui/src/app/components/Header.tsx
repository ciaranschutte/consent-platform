import { useTranslation } from '../i18n';
import { getDictionary } from '../i18n';
import LanguageToggle from './LanguageToggle';
import LanguageList from './LanguageToggle/LanguageList';

const Header = async ({ lang }: { lang: string }) => {
  const { t } = await useTranslation(lang, 'header');
  console.log('in header');
  // const dict = await getDictionary(lang, 'header');
  return (
    <header style={{ marginTop: 50 }}>
      <LanguageToggle selected={t(lang)}>
        <LanguageList lang={lang} />
      </LanguageToggle>
    </header>
  );
};

export default Header;

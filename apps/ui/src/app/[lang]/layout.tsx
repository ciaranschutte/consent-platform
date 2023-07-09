import { dir } from 'i18next';
import { supportedLanguages } from '../i18n/settings';
import '../globals.css';
import { Montserrat } from 'next/font/google';

const inter = Montserrat({ subsets: ['latin'] });

export async function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export const metadata = {
  title: 'OHCRN - Homepage',
  description: 'Landing page for OHCRN Patient Enrolment Portal',
};

export default function RootLayout({ children, params: { lang } }: any) {
  console.log('RootLayout', lang);
  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

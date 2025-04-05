import '@/fonts';
import '../globals.css';

import TranslationsProvider from '@/components/Internationalization/TranslationsProvider';
import i18nConfig from '@/i18nConfig';
import { inter } from '@/fonts';

import initTranslations from '../i18n';
import { dir } from 'i18next';

export const metadata = {
  title: 'Ljubimac',
  description: 'Tvoj kucni drug',
};

//To generate static routes for a given set of locales
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = [
  'header'
];

export default async function RootLayout({ children, params }) {
  const lng = params?.lng || 'en';
  const { t, resources } = await initTranslations(lng, i18nNamespaces);
  
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <TranslationsProvider namespaces={i18nNamespaces} locale={lng} resources={resources}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
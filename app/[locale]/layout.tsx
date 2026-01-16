import type { NextLayoutIntlayer } from 'next-intlayer';
import { getHTMLTextDir } from 'intlayer';
import type { Metadata } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/components/providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ia11y',
  description: 'AI-powered accessibility assistant.',
};

export { generateStaticParams } from 'next-intlayer';

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <html lang={locale} dir={getHTMLTextDir(locale)} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;

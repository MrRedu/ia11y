import type { ReactNode } from 'react';
import './globals.css';
import type { Metadata } from 'next';
import type { LocalPromiseParams } from 'next-intlayer';
import { getHTMLTextDir, getIntlayer, getMultilingualUrls } from 'intlayer';

import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/components/providers';
import { getLocale, IntlayerServerProvider } from 'next-intlayer/server';
import { cookies } from 'next/headers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const generateMetadata = async ({ params }: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;

  const metadata = getIntlayer('metadata', locale);

  const multilingualUrls = getMultilingualUrls('/');
  const localizedUrl = multilingualUrls[locale as keyof typeof multilingualUrls];

  return {
    ...metadata,
    alternates: {
      canonical: localizedUrl,
      languages: { ...multilingualUrls, 'x-default': '/' },
    },
    openGraph: {
      url: localizedUrl,
      images: [
        {
          url: '/og-1920x1080.webp',
          width: 1200,
          height: 630,
          alt: 'ia11y | AI-Powered Web Accessibility Auditor',
        },
        {
          url: '/og-600x600.webp',
          width: 600,
          height: 600,
          alt: 'ia11y | AI-Powered Web Accessibility Auditor',
        },
      ],
    },
  };
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const locale = await getLocale();
  const cookieStore = await cookies();
  const isSidebarOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <html lang={locale} dir={getHTMLTextDir(locale)} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <IntlayerServerProvider locale={locale}>
          <Providers locale={locale} isSidebarOpen={isSidebarOpen}>
            {children}
          </Providers>
        </IntlayerServerProvider>
      </body>
    </html>
  );
};

export default RootLayout;

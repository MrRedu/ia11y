import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import type { LocalPromiseParams } from 'next-intlayer';
import './globals.css';
import { getHTMLTextDir, getIntlayer } from 'intlayer';
import { IBM_Plex_Mono, Lora, Plus_Jakarta_Sans } from 'next/font/google';
import { Providers } from '@/components/providers';
import { getLocale, IntlayerServerProvider } from 'next-intlayer/server';
import { cookies } from 'next/headers';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

const loraSerif = Lora({
  variable: '--font-lora-serif',
  subsets: ['latin'],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const generateMetadata = async ({ params }: LocalPromiseParams): Promise<Metadata> => {
  const { locale } = await params;
  const metadata = getIntlayer('metadata', locale);

  return {
    ...metadata,
    authors: [{ name: 'Eduardo R.', url: 'https://github.com/MrRedu' }],
    creator: '@MrRedu | Eduardo R.',
    publisher: 'Eduardo R.',
    openGraph: {
      url: 'https://ia11y.vercel.app',
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
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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
      <body
        className={`${plusJakartaSans.variable} ${loraSerif.variable} ${ibmPlexMono.variable} antialiased`}
      >
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

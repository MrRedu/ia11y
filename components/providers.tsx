'use client';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { Header } from './layout/header';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { IntlayerClientProvider } from 'next-intlayer';
import { type LocalesValues } from 'intlayer';

interface ProviderProps {
  children: React.ReactNode;
  locale: LocalesValues;
  isSidebarOpen: boolean;
}

export const Providers = ({ children, locale, isSidebarOpen }: ProviderProps) => {
  return (
    <IntlayerClientProvider locale={locale}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={isSidebarOpen}>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main className="container min-h-[calc(100svh-52px)] mx-auto space-y-8 w-full">
              <>{children}</>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </NextThemesProvider>
    </IntlayerClientProvider>
  );
};

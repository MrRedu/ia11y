'use client';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { Header } from './layout/header';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ProviderProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <SidebarInset>
            <Header />
            <main className="container min-h-[calc(100svh-52px)] mx-auto space-y-8 w-full">
              <>{children}</>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </NextThemesProvider>
    </>
  );
};

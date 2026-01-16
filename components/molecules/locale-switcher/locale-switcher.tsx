'use client';

import {
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { getLocaleName, getLocalizedUrl } from 'intlayer';
import { Languages } from 'lucide-react';
import { useIntlayer, useLocale } from 'next-intlayer';
import Link from 'next/link';

// interface LocaleSwitcherProps {}

export const LocaleSwitcher = () => {
  const { locale, pathWithoutLocale, availableLocales, setLocale } = useLocale();
  const content = useIntlayer('locale-switcher');

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Languages />
        {content.title}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {availableLocales.map((localeItem) => (
            <DropdownMenuItem key={localeItem} asChild>
              <Link
                href={getLocalizedUrl(pathWithoutLocale, localeItem)}
                hrefLang={locale}
                aria-current={locale === localeItem ? 'page' : undefined}
                onClick={() => setLocale(localeItem)}
              >
                {getLocaleName(localeItem, locale)}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

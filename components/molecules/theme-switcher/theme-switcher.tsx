'use client';
import {
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { SunMoon } from 'lucide-react';
import { useIntlayer } from 'next-intlayer';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();
  const content = useIntlayer('theme-switcher');

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <SunMoon />
        {content.title}
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem onClick={() => setTheme('light')}>{content.light}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>{content.dark}</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>{content.system}</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

'use client';
import { MessageCirclePlus } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { FooterSidebar } from './footer-sidebar';
import { useIntlayer } from 'next-intlayer';
import { Ia11yIcon } from '@/components/atoms/icons/ia11y.icon';

export function AppSidebar() {
  const content = useIntlayer('app-sidebar');

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex w-full flex-row items-center gap-2 pr-4">
        <SidebarTrigger />
        <h1 className="font-mono font-bold flex items-center gap-2 ml-auto md:hidden">
          <Ia11yIcon className="size-4 text-primary" aria-hidden="true" />
          ia11y
        </h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{content.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="#" className="cursor-not-allowed">
                    <MessageCirclePlus />
                    <span>New chat</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <FooterSidebar />
    </Sidebar>
  );
}

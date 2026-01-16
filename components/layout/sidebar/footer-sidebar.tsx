import {
  SidebarFooter,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenu,
  // SidebarGroup,
  // SidebarGroupContent,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuPortal,
  // DropdownMenuSeparator,
  // DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages, Settings, SunMoon } from 'lucide-react';
import { type UseThemeProps } from 'next-themes';
import { LocaleSwitcher } from '@/components/molecules/locale-switcher/locale-switcher';

interface FooterSidebarProps {
  setTheme: UseThemeProps['setTheme'];
}

export const FooterSidebar = ({ setTheme }: FooterSidebarProps) => {
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <Settings /> Configuration
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Keyboard shortcuts
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator /> */}
              <DropdownMenuGroup>
                <LocaleSwitcher />
                {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <SunMoon />
                    Theme
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                {/* <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem> */}
              </DropdownMenuGroup>
              {/* <DropdownMenuSeparator />
                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

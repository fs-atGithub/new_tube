'use client';
import { LogOutIcon, VideoIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import StudioSidebarHeader from '@/components/StudioSidebarHeader';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

export const StudioSidebar = () => {
  const pathname = usePathname()
  return (
    <Sidebar className={'pt-16 z-40'} collapsible={'icon'}>
      <SidebarContent className={'bg-background'}>
        <SidebarGroup>
          <SidebarMenu>
            <StudioSidebarHeader />
            <SidebarMenuItem>
              <SidebarMenuButton isActive={pathname === '/studio'} tooltip={'Videos'} asChild>
                <Link href={'/studio'} >
                  <VideoIcon className={'size-5'} />
                  <span className={pathname === '/studio' ? 'text-red-500' : ''}>Content</span>
                </Link>

              </SidebarMenuButton>
            </SidebarMenuItem>
            <Separator className={'my-2'} />
            <SidebarMenuItem>
              <SidebarMenuButton tooltip={'Exit studio'} asChild>
                <Link href={'/'} className={"text-muted-foreground"}>
                  <LogOutIcon className={'size-5'} />
                  <span className={'text-sm text-muted-foreground'}>Exit studio</span>
                </Link>

              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
};


import React from 'react';

import { MainSection } from '@/components/MainSection';
import { PersonalSection } from '@/components/PersonalSection';
import { Separator } from '@/components/ui/separator';
import { Sidebar, SidebarContent } from '@/components/ui/sidebar';

export const HomeSidebar = () => {
  return (
    <Sidebar className={'pt-16 z-40 border-none '} collapsible={'icon'}>
      <SidebarContent className={'bg-background'}>
        <MainSection />
        <Separator />
        <PersonalSection />
      </SidebarContent>
    </Sidebar>
  );
};


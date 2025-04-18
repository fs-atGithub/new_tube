import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { AuthButton } from '@/components/AuthButton';
import StudioUploadModal from '@/components/StudioUploadModal';
import { SidebarTrigger } from '@/components/ui/sidebar';

export const StudioNavbar = () => {
  return (
    <nav className={'fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-bottom shadow-md'}>
      <div className="flex items-center gap-4 w-full">
        {/*Menu and logo*/}
        <div className={'flex items-center flex-shrink-0'}>
          <SidebarTrigger />
          <Link href={'/studio'}>
            <div className={'p-4 flex items-center gap-1'}>
              <Image src={'/logo.svg'} alt={'logo'} height={32} width={32} />
              <p className={'text-xl font-semibold tracking-tight'}>Studio</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={'flex-shrink-0 items-center flex gap-4'}>
        <StudioUploadModal/>
        <AuthButton />
      </div>
    </nav>
  );
};


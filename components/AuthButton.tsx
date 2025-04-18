'use client';
import { UserButton, SignIn, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { ClapperboardIcon, UserCircleIcon } from 'lucide-react';
import React from 'react';


import { Button } from '@/components/ui/button';

export const AuthButton = () => {

  return (
    <>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link label={'Studio'} labelIcon={<ClapperboardIcon className={'size-4'} />} href={'/studio'} />
            <UserButton.Action label={"manageAccount"}/>
          </UserButton.MenuItems>
        </UserButton>

      </SignedIn>
      <SignedOut>
        <SignInButton mode={'modal'}>
          <Button variant={'outline'}
                  className={'px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-l-full shadow-none cursor-pointer'}>
            <UserCircleIcon />
            Sign In

          </Button>
        </SignInButton>
      </SignedOut>
    </>

  );
};


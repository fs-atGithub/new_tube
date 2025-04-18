import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const avatarVariants = cva('', {
  variants: {
    size: {
      default: 'h-9 w-9',
      sm: 'h-6 w-6',
      xs: 'h-4 w-4',
      lg: 'h-10 w-10',
      xl: 'w-[160px] h-[160px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
type UserAvatarProps = VariantProps<typeof avatarVariants> & {
  imageUrl: string;
  name: string;
  className?: string;
  onClick?: () => void;

}

const UserAvatar = ({ imageUrl, name, size, className, onClick }: UserAvatarProps & {}) => {
  return (
    <Avatar
      className={cn(avatarVariants({ size }), className)}
      onClick={onClick}
    >
      <AvatarImage
        src={imageUrl}
        alt={name}
        className="object-cover"
      />
      <span className="sr-only">{name}</span>
    </Avatar>
  );


};
export default UserAvatar;

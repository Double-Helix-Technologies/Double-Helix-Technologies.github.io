import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AvatarPlaceholder ({className,  ...props}: AvatarProps) {
  return (
    <div
      className="w-10 h-10 aspect-square rounded-full flex items-center justify-center
      text-white font-medium text-lg --gradient-accent: bg-gradient-to-tr from-purple-500 to-blue-500"
      {...props}
    />
  )
}


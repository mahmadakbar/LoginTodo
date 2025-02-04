import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@components/atoms/avatar'

export default function Header() {
  return (
    <div className="flex h-16 flex-1 items-center justify-end gap-4 border border-[#D8D8D8] bg-white px-6">
      <div className="flex items-center gap-4">
        <h1>Ahmad Akbar</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

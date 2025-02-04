import React from 'react'
import {
  Sidebar as SidebarContainer,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@components/atoms/sidebar'
import items from './menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@utils/helper/cn'
import Image from 'next/image'
import SVG from '@assets/svg'

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <SidebarContainer collapsible="icon">
      <SidebarGroup>
        <SidebarGroupLabel>
          <h1 className="text-xl font-bold text-[#4C4E64DE] text-opacity-[0.87]">Nodewave</h1>
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="mt-4">
            {items.map(item => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={cn('py-2 hover:bg-[#4C4E6414]', pathname === item.url && 'bg-[#4C4E6414]')}
                >
                  <Link href={item.url} className="flex flex-row items-center gap-2">
                    <Image src={SVG.Home} alt="Toggle Home" width={24} height={24} />
                    <p className="font-medium">{item.title}</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContainer>
  )
}

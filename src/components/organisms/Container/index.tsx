import Header from '@components/molecules/Header'
import React from 'react'
import { SidebarProvider, SidebarTrigger } from '@components/atoms/sidebar'
import Sidebar from '@components/molecules/Sidebar'
import { cn } from '@utils/helper/cn'

export default function Container({ children }: { readonly children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  return (
    <SidebarProvider defaultOpen={sidebarOpen} open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <div className="relative flex">
        <Sidebar />
        <SidebarTrigger
          className={cn(
            'z-50 h-12 w-12 rounded-full',
            sidebarOpen ? '-ml-14 bg-transparent' : 'absolute left-10 rotate-180 bg-sidebar',
          )}
        />
      </div>
      <main className="flex flex-1 bg-background">
        <Header />
        <div>{children}</div>
      </main>
    </SidebarProvider>
  )
}

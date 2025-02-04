'use client'

import React from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { getQueryClient } from '@utils/config/queryClientConfig'
import { Toaster } from '@components/atoms/toaster'
import Container from '../Container'

export default function ContainerProvider({ children }: { readonly children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Container>{children}</Container>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

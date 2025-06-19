'use client'

import { PostHogProvider as Provider } from 'posthog-js/react'
import posthog from 'posthog-js'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

if (typeof window !== 'undefined') {
  console.log('PostHog Key:', process.env.NEXT_PUBLIC_POSTHOG_KEY);
  console.log('PostHog Host:', process.env.NEXT_PUBLIC_POSTHOG_HOST);
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    capture_pageview: false, // We'll handle this manually
    capture_pageleave: true,
    autocapture: true,
    disable_session_recording: false,
    enable_recording_console_log: true,
  })
  console.log('PostHog initialized:', posthog.__loaded);
}

function PostHogPageview() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname
      if (searchParams?.toString()) {
        url = url + '?' + searchParams.toString()
      }
      posthog.capture('$pageview', {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageview />
      </Suspense>
      {children}
    </Provider>
  )
} 
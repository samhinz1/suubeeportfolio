'use client'

import { PostHogProvider as Provider } from 'posthog-js/react'
import posthog from 'posthog-js'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

// Initialize PostHog only once
let posthogInitialized = false

if (typeof window !== 'undefined' && !posthogInitialized) {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'
  
  // Validate we're on an authorized domain
  const authorizedDomains = [
    'http://localhost:3000',
    'https://suubeeportfolio.vercel.app',
    'https://suubeeportfolios.com',
    'https://www.suubeeportfolios.com'
  ]
  
  const isAuthorizedDomain = authorizedDomains.includes(window.location.origin)
  
  if (posthogKey && isAuthorizedDomain) {
    try {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        capture_pageview: false, // We'll handle this manually
        capture_pageleave: true,
        autocapture: true,
        disable_session_recording: false,
        enable_recording_console_log: true,
        loaded: (posthog) => {
          // PostHog loaded successfully
        },
        bootstrap: {
          distinctID: undefined,
          isIdentifiedID: false,
        }
      })
      posthogInitialized = true
    } catch (error) {
      console.error('Failed to initialize PostHog:', error);
    }
  } else {
    if (!posthogKey) {
      console.warn('PostHog key not found in environment variables');
    }
    if (!isAuthorizedDomain) {
      console.warn('Current domain is not authorized in PostHog settings');
    }
  }
}

function PostHogPageview() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && posthogInitialized) {
      try {
        let url = window.origin + pathname
        if (searchParams?.toString()) {
          url = url + '?' + searchParams.toString()
        }
        
        posthog.capture('$pageview', {
          $current_url: url,
          pathname: pathname,
          search: searchParams?.toString() || '',
        })
      } catch (error) {
        console.error('Failed to capture pageview:', error);
      }
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
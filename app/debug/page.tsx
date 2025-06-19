'use client'

import { useEffect, useState } from 'react'
import posthog from 'posthog-js'

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    const info = {
      environment: process.env.NODE_ENV,
      posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ? 'Set' : 'Not Set',
      posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'Default (us.i.posthog.com)',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
      posthogLoaded: typeof window !== 'undefined' ? posthog.__loaded : 'N/A',
      posthogDistinctId: typeof window !== 'undefined' ? posthog.get_distinct_id() : 'N/A',
      timestamp: new Date().toISOString(),
    }
    
    setDebugInfo(info)
    
    // Send debug info to PostHog
    if (typeof window !== 'undefined' && posthog.__loaded) {
      posthog.capture('debug_page_loaded', info)
    }
  }, [])

  const sendTestEvent = () => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
      posthog.capture('manual_test_event', {
        source: 'debug_page',
        timestamp: new Date().toISOString(),
      })
      alert('Test event sent!')
    } else {
      alert('PostHog not loaded!')
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">PostHog Debug Information</h1>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-3">Environment Variables</h2>
        <pre className="text-sm overflow-auto">
          {JSON.stringify(debugInfo, null, 2)}
        </pre>
      </div>

      <div className="space-y-4">
        <button
          onClick={sendTestEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Test Event
        </button>
        
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Troubleshooting Steps:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Check that PostHog Key is "Set" above</li>
            <li>Verify posthogLoaded is "true"</li>
            <li>Click "Send Test Event" and check your PostHog dashboard</li>
            <li>Check browser console for any error messages</li>
            <li>Verify your Vercel environment variables are correctly set</li>
          </ol>
        </div>
      </div>
    </div>
  )
} 
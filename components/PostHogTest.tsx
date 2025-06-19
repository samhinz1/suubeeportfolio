'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { Button } from '@/components/ui/button'

export function PostHogTest() {
  useEffect(() => {
    // Test PostHog functionality on component mount
    if (typeof window !== 'undefined') {
      console.log('PostHog test component mounted');
      console.log('PostHog loaded state:', posthog.__loaded);
      console.log('PostHog distinct ID:', posthog.get_distinct_id());
      
      // Send a test event
      try {
        posthog.capture('test_event', {
          component: 'PostHogTest',
          timestamp: new Date().toISOString(),
        })
        console.log('Test event sent successfully');
      } catch (error) {
        console.error('Failed to send test event:', error);
      }
    }
  }, [])

  const handleTestClick = () => {
    try {
      posthog.capture('button_click', {
        button: 'test_button',
        location: 'PostHogTest component',
      })
      console.log('Button click event sent');
      alert('Test event sent! Check PostHog dashboard and browser console.');
    } catch (error) {
      console.error('Failed to send button click event:', error);
      alert('Failed to send event. Check console for details.');
    }
  }

  const handleIdentify = () => {
    try {
      posthog.identify('test-user-' + Date.now(), {
        name: 'Test User',
        email: 'test@example.com',
        environment: process.env.NODE_ENV,
      })
      console.log('User identified successfully');
      alert('User identified! Check PostHog dashboard.');
    } catch (error) {
      console.error('Failed to identify user:', error);
      alert('Failed to identify user. Check console for details.');
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border rounded-lg shadow-lg p-4 space-y-2">
      <h3 className="font-semibold text-sm">PostHog Test</h3>
      <div className="space-y-2">
        <Button 
          size="sm" 
          onClick={handleTestClick}
          className="w-full"
        >
          Send Test Event
        </Button>
        <Button 
          size="sm" 
          variant="outline"
          onClick={handleIdentify}
          className="w-full"
        >
          Identify User
        </Button>
      </div>
    </div>
  )
} 
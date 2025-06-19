import posthog from 'posthog-js'

// Check if PostHog is available (client-side only)
export const isPostHogAvailable = () => {
  return typeof window !== 'undefined' && posthog.__loaded
}

// Track custom events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (isPostHogAvailable()) {
    posthog.capture(eventName, properties)
  }
}

// Track user identification
export const identifyUser = (userId: string, userProperties?: Record<string, any>) => {
  if (isPostHogAvailable()) {
    posthog.identify(userId, userProperties)
  }
}

// Set user properties
export const setUserProperties = (properties: Record<string, any>) => {
  if (isPostHogAvailable()) {
    posthog.setPersonProperties(properties)
  }
}

// Track page views
export const trackPageView = (pageName?: string) => {
  if (isPostHogAvailable()) {
    posthog.capture('$pageview', {
      page_name: pageName || window.location.pathname,
    })
  }
}

// Track button clicks
export const trackButtonClick = (buttonName: string, properties?: Record<string, any>) => {
  trackEvent('button_clicked', {
    button_name: buttonName,
    ...properties,
  })
}

// Track form submissions
export const trackFormSubmission = (formName: string, properties?: Record<string, any>) => {
  trackEvent('form_submitted', {
    form_name: formName,
    ...properties,
  })
}

// Track feature usage
export const trackFeatureUsage = (featureName: string, properties?: Record<string, any>) => {
  trackEvent('feature_used', {
    feature_name: featureName,
    ...properties,
  })
} 
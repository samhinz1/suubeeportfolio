# PostHog Setup Guide

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# PostHog Configuration
NEXT_PUBLIC_POSTHOG_KEY=phc_exvmYUY5OYLgWt6ZLO5TUXy6ZTlRXB21sJzF7RUt4KH
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Base URL for your application
NEXT_PUBLIC_BASE_URL=https://suubeeportfolios.com
```

## What's Been Set Up

1. **PostHog Provider** (`components/PostHogProvider.tsx`): Automatically initializes PostHog and tracks page views
2. **Utility Functions** (`lib/posthog.ts`): Helper functions for tracking events, user identification, and more
3. **Layout Integration**: PostHog is now integrated into your root layout

## Usage Examples

### Track Custom Events
```typescript
import { trackEvent } from '@/lib/posthog'

// Track a button click
trackEvent('button_clicked', {
  button_name: 'sign_up',
  page: '/home'
})
```

### Track User Identification
```typescript
import { identifyUser } from '@/lib/posthog'

// Identify a user after login
identifyUser('user_123', {
  email: 'user@example.com',
  name: 'John Doe',
  plan: 'premium'
})
```

### Track Form Submissions
```typescript
import { trackFormSubmission } from '@/lib/posthog'

// Track form submission
trackFormSubmission('contact_form', {
  form_type: 'contact',
  has_newsletter: true
})
```

### Track Feature Usage
```typescript
import { trackFeatureUsage } from '@/lib/posthog'

// Track feature usage
trackFeatureUsage('portfolio_viewer', {
  portfolio_type: 'aggressive',
  user_type: 'premium'
})
```

## Available Functions

- `trackEvent(eventName, properties?)` - Track custom events
- `identifyUser(userId, userProperties?)` - Identify users
- `setUserProperties(properties)` - Set user properties
- `trackPageView(pageName?)` - Track page views
- `trackButtonClick(buttonName, properties?)` - Track button clicks
- `trackFormSubmission(formName, properties?)` - Track form submissions
- `trackFeatureUsage(featureName, properties?)` - Track feature usage

## Features Enabled

- ✅ Automatic page view tracking
- ✅ Session recording
- ✅ Autocapture (clicks, form submissions)
- ✅ Console log recording
- ✅ Page leave tracking
- ✅ Custom event tracking
- ✅ User identification

## Next Steps

1. Create the `.env.local` file with your PostHog API key
2. Restart your development server
3. Visit your PostHog dashboard to see incoming events
4. Start adding custom tracking to important user interactions

## Testing

To test that PostHog is working:

1. Open your browser's developer tools
2. Go to the Network tab
3. Navigate through your app
4. You should see requests to `app.posthog.com`

## Privacy Considerations

- PostHog respects user privacy and GDPR compliance
- Session recordings can be disabled by setting `disable_session_recording: true`
- Users can opt out of tracking through browser settings
- Consider adding a privacy banner for EU users 
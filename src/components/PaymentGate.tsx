import { useState, useEffect } from 'react'
import { checkAccess, grantAccess, isValidSessionId, LANDING_URL } from '@/utils/accessControl'

type GateState = 'checking' | 'granted' | 'denied'

export default function PaymentGate({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GateState>('checking')

  useEffect(() => {
    // 1. Check URL for fresh session_id from Stripe redirect
    const params = new URLSearchParams(window.location.search)
    const sessionId = params.get('session_id') ?? ''

    if (sessionId && isValidSessionId(sessionId)) {
      grantAccess(sessionId)
      setState('granted')
      return
    }

    // 2. Check existing localStorage token (returning paid user within 24h)
    if (checkAccess()) {
      setState('granted')
      return
    }

    // 3. No valid access — redirect to landing page
    setState('denied')
    window.location.replace(LANDING_URL)
  }, [])

  if (state === 'checking') {
    return (
      <div className="payment-gate-loading" aria-live="polite">
        <div className="payment-gate-spinner" aria-hidden="true" />
        <p className="payment-gate-text">Verifying your payment…</p>
      </div>
    )
  }

  if (state === 'denied') {
    // Redirect is in progress — render nothing
    return null
  }

  return <>{children}</>
}

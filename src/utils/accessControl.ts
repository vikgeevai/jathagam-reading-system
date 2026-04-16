// ================================================================
// PAYMENT ACCESS CONTROL
// Validates Stripe session IDs and manages 24-hour localStorage tokens.
// ================================================================

const ACCESS_KEY = 'jothidam_access'
const EXPIRY_MS = 24 * 60 * 60 * 1000 // 24 hours

interface AccessRecord {
  sessionId: string
  grantedAt: number
}

export const LANDING_URL = 'https://jothidam.co'

// Stripe checkout session IDs start with cs_live_ or cs_test_ followed by ≥20 alphanumeric chars
export function isValidSessionId(id: string): boolean {
  return /^cs_(live|test)_[A-Za-z0-9_-]{20,}$/.test(id)
}

export function checkAccess(): boolean {
  try {
    const raw = localStorage.getItem(ACCESS_KEY)
    if (!raw) return false
    const record: AccessRecord = JSON.parse(raw)
    if (Date.now() - record.grantedAt > EXPIRY_MS) {
      localStorage.removeItem(ACCESS_KEY)
      return false
    }
    return true
  } catch {
    return false
  }
}

export function grantAccess(sessionId: string): void {
  const record: AccessRecord = { sessionId, grantedAt: Date.now() }
  localStorage.setItem(ACCESS_KEY, JSON.stringify(record))
  // Strip session_id from URL immediately so the clean URL cannot be shared for free access
  const url = new URL(window.location.href)
  url.searchParams.delete('session_id')
  window.history.replaceState({}, '', url.toString())
}

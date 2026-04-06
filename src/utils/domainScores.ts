import { PLANET_NUMBER, DOMAIN_READINGS } from '@/data/astrologyData'
import type { Planet, DomainKey } from '@/data/astrologyData'

export interface DomainResult {
  key: DomainKey
  label: string
  score: number
  reading: string
  colour: 'green' | 'amber' | 'red'
}

const DOMAIN_SEED: Record<DomainKey, number> = {
  career: 7,
  health: 13,
  finance: 19,
  family: 3,
  business: 11,
}

const DOMAIN_LABELS: Record<DomainKey, string> = {
  career: 'Career / Work',
  health: 'Health',
  finance: 'Finance',
  family: 'Family',
  business: 'Business',
}

export function calcDomainScores(
  moolank: number,
  bhagyank: number,
  horaPlanet: Planet,
  lagnaRuler: Planet,
): DomainResult[] {
  const h = PLANET_NUMBER[horaPlanet]
  const l = PLANET_NUMBER[lagnaRuler]

  return (['career', 'health', 'finance', 'family', 'business'] as DomainKey[]).map(key => {
    const seed = DOMAIN_SEED[key]
    const raw = (moolank * 11 + bhagyank * 7 + h * 5 + l * 3 + seed) % 100
    const score = Math.min(92, Math.max(15, 15 + Math.round(raw * 0.77)))
    const colour: 'green' | 'amber' | 'red' = score >= 70 ? 'green' : score >= 40 ? 'amber' : 'red'
    const reading = DOMAIN_READINGS[key][moolank] ?? DOMAIN_READINGS[key][1]
    return { key, label: DOMAIN_LABELS[key], score, reading, colour }
  })
}

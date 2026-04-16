import { PREDICTION_POOL } from '@/data/astrologyData'
import type { Planet, Prediction } from '@/data/astrologyData'

export function selectPredictions(
  moolank: number,
  bhagyank: number,
  horaPlanet: Planet,
  lagnaRuler: Planet,
  isPositive: boolean,
  count = 10,
  rasiName?: string,
  natchatiramRulingPlanet?: Planet,
  saniType?: string,
): Prediction[] {
  const activePlanets = new Set([horaPlanet, lagnaRuler])
  const pool = PREDICTION_POOL.filter(p => p.isPositive === isPositive)

  const scored = pool.map(p => {
    let score = 0
    if (p.triggerPlanets.some(pl => activePlanets.has(pl))) score += 3
    if (p.triggerMoolankRange.includes(moolank)) score += 2
    if (p.triggerBhagyankRange.includes(bhagyank)) score += 2
    // Personalisation signals — higher weight for more specific matches
    if (saniType && p.triggerSaniType?.includes(saniType)) score += 4
    if (rasiName && p.triggerRasi?.includes(rasiName)) score += 3
    if (natchatiramRulingPlanet && p.triggerNatchatiramPlanet?.includes(natchatiramRulingPlanet)) score += 2
    return { ...p, score }
  })

  scored.sort((a, b) => b.score - a.score)

  // Ensure category diversity: one per category first
  const selected: (Prediction & { score: number })[] = []
  const usedCategories = new Set<string>()
  for (const p of scored) {
    if (!usedCategories.has(p.category)) {
      selected.push(p)
      usedCategories.add(p.category)
    }
    if (selected.length === count) break
  }
  // Fill remaining if needed
  if (selected.length < count) {
    const selectedIds = new Set(selected.map(p => p.id))
    for (const p of scored) {
      if (!selectedIds.has(p.id)) {
        selected.push(p)
        if (selected.length === count) break
      }
    }
  }

  return selected.slice(0, count)
}

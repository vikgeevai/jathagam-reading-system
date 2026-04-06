import { SATURN_TRANSITS, SANI_PERIOD_INFO, RASI_DATA, NATCHATIRAM_DATA, RASI_SANI_PREDICTIONS } from '@/data/rasiNatchatiramData'
import type { SaniType, SaturnTransit } from '@/data/rasiNatchatiramData'

const REFERENCE_YEAR = 2026
const REFERENCE_MONTH = 4 // April 2026

// ── Find which Rasi Saturn is in at a given year/month ──────────
function findSaturnRasi(year: number, month: number): SaturnTransit | null {
  return SATURN_TRANSITS.find(t => {
    const afterEntry = year > t.entryYear || (year === t.entryYear && month >= t.entryMonth)
    const beforeExit = year < t.exitYear || (year === t.exitYear && month <= t.exitMonth)
    return afterEntry && beforeExit
  }) ?? null
}

// ── Calculate house position (1-12) of Saturn relative to a Rasi ─
function saturnHouse(saturnRasiIndex: number, personRasiIndex: number): number {
  return ((saturnRasiIndex - personRasiIndex + 12) % 12) + 1
}

// ── Determine Sani type from house position ─────────────────────
function saniTypeFromHouse(house: number): SaniType {
  if (house === 12) return 'sade_sati_rising'
  if (house === 1)  return 'sade_sati_peak'
  if (house === 2)  return 'sade_sati_setting'
  if (house === 8)  return 'ashtama_sani'
  if (house === 4)  return 'ardhastama_sani'
  return 'clear'
}

export interface SaniPhaseEntry {
  label: string
  type: SaniType
  startYear: number
  startMonth: number
  endYear: number
  endMonth: number
  entryLabel: string
  exitLabel: string
  house: number
  isCurrent: boolean
  isFuture: boolean
}

export interface SaniCycleResult {
  rasiName: string
  natchatiramName: string
  currentSaturnRasi: string
  currentSaturnHouse: number
  currentSaniType: SaniType
  currentSaniInfo: typeof SANI_PERIOD_INFO[SaniType]
  currentSaniEnds: string
  personalPrediction: string
  fullTimeline: SaniPhaseEntry[]
  nextSadeSatiStart: string
  nextSadeSatiEnd: string
  lastSadeSatiEnd: string
  dashaLord: string
  dashaYears: number
  natchatiramCharacter: string
}

export function calcSaniCycle(rasiName: string, natchatiramName: string): SaniCycleResult {
  const rasi = RASI_DATA.find(r => r.name === rasiName) ?? RASI_DATA[7] // default Vrichigam
  const natchatiram = NATCHATIRAM_DATA.find(n => n.tamilName === natchatiramName) ?? NATCHATIRAM_DATA[16]

  // Current Saturn position
  const currentTransit = findSaturnRasi(REFERENCE_YEAR, REFERENCE_MONTH)
  const currentSaturnRasiIndex = currentTransit?.rasiIndex ?? 11 // Meenam default
  const currentHouse = saturnHouse(currentSaturnRasiIndex, rasi.index)
  const currentSaniType = saniTypeFromHouse(currentHouse)

  // Current period end date
  const currentSaniEnds = currentTransit
    ? `${currentTransit.exitLabel} (when Saturn leaves ${currentTransit.rasiName})`
    : 'Unknown'

  // Build full timeline: scan all SATURN_TRANSITS for this rasi
  const fullTimeline: SaniPhaseEntry[] = SATURN_TRANSITS.map(t => {
    const house = saturnHouse(t.rasiIndex, rasi.index)
    const type = saniTypeFromHouse(house)
    const isCurrent = t.rasiIndex === currentSaturnRasiIndex
    const isFuture = t.entryYear > REFERENCE_YEAR || (t.entryYear === REFERENCE_YEAR && t.entryMonth > REFERENCE_MONTH)
    return {
      label: t.rasiName,
      type,
      startYear: t.entryYear,
      startMonth: t.entryMonth,
      endYear: t.exitYear,
      endMonth: t.exitMonth,
      entryLabel: t.entryLabel,
      exitLabel: t.exitLabel,
      house,
      isCurrent,
      isFuture: isFuture && !isCurrent,
    }
  })

  // Find next Sade Sati (all 3 phases)
  const futureSadeSati = fullTimeline.filter(e =>
    e.isFuture &&
    (e.type === 'sade_sati_rising' || e.type === 'sade_sati_peak' || e.type === 'sade_sati_setting')
  )
  const nextSadeSatiStart = futureSadeSati.length > 0
    ? futureSadeSati[0].entryLabel
    : 'Beyond 2047 (outside projection window)'
  const nextSadeSatiEnd = futureSadeSati.length > 0
    ? futureSadeSati[futureSadeSati.length - 1].exitLabel
    : 'Beyond 2047'

  // Last Sade Sati end
  const pastSadeSati = fullTimeline.filter(e =>
    !e.isFuture && !e.isCurrent &&
    (e.type === 'sade_sati_rising' || e.type === 'sade_sati_peak' || e.type === 'sade_sati_setting')
  )
  const lastSadeSatiEnd = pastSadeSati.length > 0
    ? pastSadeSati[pastSadeSati.length - 1].exitLabel
    : 'Before 2014 (outside data window)'

  // If currently in Sade Sati, note that
  const currentInSadeSati = ['sade_sati_rising', 'sade_sati_peak', 'sade_sati_setting'].includes(currentSaniType)

  const personalPrediction =
    RASI_SANI_PREDICTIONS[rasiName]?.[currentSaniType] ??
    SANI_PERIOD_INFO[currentSaniType].overview

  return {
    rasiName: rasi.name,
    natchatiramName: natchatiram.tamilName,
    currentSaturnRasi: currentTransit?.rasiName ?? 'Meenam',
    currentSaturnHouse: currentHouse,
    currentSaniType,
    currentSaniInfo: SANI_PERIOD_INFO[currentSaniType],
    currentSaniEnds: currentInSadeSati
      ? `This Sade Sati phase ends ${currentTransit?.exitLabel ?? ''}`
      : currentSaniEnds,
    personalPrediction,
    fullTimeline,
    nextSadeSatiStart,
    nextSadeSatiEnd,
    lastSadeSatiEnd,
    dashaLord: natchatiram.rulingPlanet,
    dashaYears: natchatiram.dashaYears,
    natchatiramCharacter: natchatiram.character,
  }
}

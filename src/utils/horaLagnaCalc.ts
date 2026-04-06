import { HORA_CYCLE, DAY_HORA_START, ZODIAC_SIGNS } from '@/data/astrologyData'
import type { Planet, ZodiacSign } from '@/data/astrologyData'

export interface HoraLagnaResult {
  horaLord: Planet
  horaNumber: number
  lagnaSign: ZodiacSign
  lagnaIndex: number
  lagnaRuler: Planet
}

function parseDOB(dob: string): Date {
  const [d, m, y] = dob.split('/').map(Number)
  return new Date(y, m - 1, d)
}

export function calcHoraLagna(dob: string, timeStr: string): HoraLagnaResult {
  const [h, m] = timeStr.split(':').map(Number)
  const birthMinutes = h * 60 + m
  const dayStartMinutes = 6 * 60 // 6:00 AM

  // Minutes elapsed since 6:00 AM (handles pre-dawn births)
  const elapsed = birthMinutes >= dayStartMinutes
    ? birthMinutes - dayStartMinutes
    : birthMinutes + (24 * 60 - dayStartMinutes)

  const horaIndex = Math.floor(elapsed / 60)
  const date = parseDOB(dob)
  const dow = date.getDay() // 0=Sun...6=Sat

  const startPlanetIndex = DAY_HORA_START[dow]
  const finalIndex = (startPlanetIndex + horaIndex) % 7
  const horaLord = HORA_CYCLE[finalIndex]

  // Lagna: each sign covers 120 minutes starting from Aries at 6AM
  const signIndex = Math.floor(elapsed / 120) % 12
  const lagnaSign = ZODIAC_SIGNS[signIndex]

  return {
    horaLord,
    horaNumber: horaIndex + 1,
    lagnaSign,
    lagnaIndex: signIndex,
    lagnaRuler: lagnaSign.rulingPlanet as Planet,
  }
}

// ================================================================
// MOON LONGITUDE CALCULATOR — Sidereal (Hindu / Lahiri Ayanamsa)
// Based on Jean Meeus "Astronomical Algorithms" Ch. 47 (simplified)
// Accuracy: ≈ 0.3° – 0.5°, sufficient for Rasi/Nakshatra determination
// Time assumption: input is Indian Standard Time (IST = UTC+5:30)
// ================================================================

import { RASI_DATA, NATCHATIRAM_DATA } from '@/data/rasiNatchatiramData'

// ── Helper ──────────────────────────────────────────────────────
function norm360(deg: number): number {
  return ((deg % 360) + 360) % 360
}

// Convert calendar date (UT hours) to Julian Day Number
function toJulianDay(year: number, month: number, day: number, utHours: number): number {
  let y = year
  let m = month
  if (m <= 2) { y -= 1; m += 12 }
  const A = Math.floor(y / 100)
  const B = 2 - A + Math.floor(A / 4)
  return (
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    day + utHours / 24.0 + B - 1524.5
  )
}

// ── Lahiri Ayanamsa ──────────────────────────────────────────────
// Increases ~50.29" per year = 0.013969° per year
// Reference: 23.8531° at J2000.0 (1 Jan 2000 12:00 UT)
function lahiriAyanamsa(jd: number): number {
  const T = (jd - 2451545.0) / 36525.0   // Julian centuries from J2000.0
  return 23.8531 + T * 1.3969            // degrees (100 years × 0.013969°/yr = 1.3969°)
}

// ── Moon Tropical Longitude ──────────────────────────────────────
// Uses the 30 largest terms from Meeus Table 47.A/47.B
function moonTropicalLongitude(jd: number): number {
  const T  = (jd - 2451545.0) / 36525.0
  const T2 = T * T
  const T3 = T2 * T
  const T4 = T3 * T
  const r  = Math.PI / 180

  // Fundamental arguments (degrees)
  const Lp = norm360(218.3164477 + 481267.88123421 * T - 0.0015786 * T2 + T3 / 538841   - T4 / 65194000)
  const D  = norm360(297.8501921 + 445267.1114034  * T - 0.1818819 * T2 + T3 / 545868   - T4 / 113065000)
  const M  = norm360(357.5291092 + 35999.0502909   * T - 0.0001536 * T2 + T3 / 24490000)
  const Mp = norm360(134.9633964 + 477198.8675055  * T + 0.0087414 * T2 + T3 / 69699    - T4 / 14712000)
  const F  = norm360(93.2720950  + 483202.0175233  * T - 0.0036539 * T2 - T3 / 3526000  + T4 / 863310000)

  // Eccentricity correction
  const E  = 1 - 0.002516 * T - 0.0000074 * T2

  // Longitude perturbation terms (×10⁻⁶ degrees)
  // Format: [coeff, mult_D, mult_M, mult_Mp, mult_F]
  const terms: number[][] = [
    [ 6288774,  0,  0,  1,  0],
    [ 1274027,  2,  0, -1,  0],
    [  658314,  2,  0,  0,  0],
    [  213618,  0,  0,  2,  0],
    [ -185116,  0,  1,  0,  0],   // × E
    [ -114332,  0,  0,  0,  2],
    [   58793,  2,  0, -2,  0],
    [   57066,  2, -1, -1,  0],   // × E
    [   53322,  2,  0,  1,  0],
    [   45758,  2, -1,  0,  0],   // × E
    [  -40923,  0,  1, -1,  0],   // × E
    [  -34720,  1,  0,  0,  0],
    [  -30383,  0,  1,  1,  0],   // × E
    [   15327,  2,  0,  0, -2],
    [  -12528,  0,  0,  1,  2],
    [   10980,  0,  0,  1, -2],
    [   10675,  4,  0, -1,  0],
    [   10034,  0,  0,  3,  0],
    [    8548,  4,  0, -2,  0],
    [   -7888,  2,  1, -1,  0],   // × E
    [   -6766,  2,  1,  0,  0],   // × E
    [   -5163,  1,  0, -1,  0],
    [    4987,  1,  1,  0,  0],   // × E
    [    4036,  2, -1,  1,  0],   // × E
    [    3994,  2,  0,  2,  0],
    [    3861,  4,  0,  0,  0],
    [    3665,  2,  0, -3,  0],
    [   -2689,  0,  1, -2,  0],   // × E
    [   -2602,  2,  0, -1,  2],
    [    2390,  2, -1, -2,  0],   // × E
    [   -2348,  1,  0,  1,  0],
    [    2236,  2, -2,  0,  0],   // × E²
    [   -2120,  0,  1,  2,  0],   // × E
    [   -2069,  0,  2,  0,  0],   // × E²
    [    2048,  2, -2, -1,  0],   // × E²
    [   -1773,  2,  0,  1, -2],
    [   -1595,  2,  0,  0,  2],
    [    1215,  4, -1, -1,  0],   // × E
    [   -1110,  0,  0,  2,  2],
    [   -892,   3,  0, -1,  0],
    [   -810,   2,  1,  1,  0],   // × E
    [    759,   4, -1, -2,  0],   // × E
    [   -713,   0,  2, -1,  0],   // × E²
    [   -700,   2,  2, -1,  0],   // × E²
    [    691,   2,  1, -2,  0],   // × E
    [    596,   2, -1,  0, -2],   // × E
    [    549,   4,  0,  1,  0],
    [    537,   0,  0,  4,  0],
    [    520,   4, -1,  0,  0],   // × E
    [   -487,   1,  0, -2,  0],
    [   -399,   2,  1,  0, -2],   // × E
    [   -381,   0,  0,  2, -2],
    [    351,   1,  1,  1,  0],   // × E
    [   -340,   3,  0, -2,  0],
    [    330,   4,  0, -3,  0],
    [    327,   2, -1,  2,  0],   // × E
    [   -323,   0,  2,  1,  0],   // × E²
    [    299,   1,  1, -1,  0],   // × E
    [    294,   2,  0,  3,  0],
  ]

  const eTerms = new Set([4, 7, 9, 10, 12, 19, 20, 23, 24, 27, 29, 32, 33, 35, 38, 41, 43, 44, 45, 46, 49, 50, 52, 56, 57])
  const e2Terms = new Set([31, 33, 34, 42, 43])  // where |M|=2

  let sigma = 0
  terms.forEach(([coeff, mD, mM, mMp, mF], i) => {
    const ang = (mD * D + mM * M + mMp * Mp + mF * F) * r
    let c = coeff
    if (e2Terms.has(i) || Math.abs(mM) === 2) c *= E * E
    else if (eTerms.has(i) || Math.abs(mM) === 1) c *= E
    sigma += c * Math.sin(ang)
  })

  // Additional three terms from Meeus §47
  sigma += 3958 * Math.sin((119.75 + 131.849 * T) * r)
  sigma += 1962 * Math.sin((Lp - F) * r)
  sigma +=  318 * Math.sin((53.09 + 479264.29 * T) * r)

  return norm360(Lp + sigma / 1000000)
}

// ── Main export ──────────────────────────────────────────────────
export interface MoonDetectionResult {
  moonLongitude: number          // Sidereal degrees (0–360)
  rasiIndex: number              // 0-based
  rasiName: string
  natchatiramIndex: number       // 0-based
  natchatiramName: string
  natchatiramPada: number        // 1–4 (quarter of nakshatra)
  moonLongitudeDisplay: string   // e.g. "Vrichigam 10°23'"
}

export function detectRasiNatchatiram(
  dob: string,        // DD/MM/YYYY
  timeOfBirth: string // HH:MM (24hr, IST)
): MoonDetectionResult | null {
  // Parse date
  const dobMatch = dob.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  const timeMatch = timeOfBirth.match(/^(\d{2}):(\d{2})$/)
  if (!dobMatch || !timeMatch) return null

  const day   = parseInt(dobMatch[1], 10)
  const month = parseInt(dobMatch[2], 10)
  const year  = parseInt(dobMatch[3], 10)
  const hours = parseInt(timeMatch[1], 10)
  const mins  = parseInt(timeMatch[2], 10)

  if (month < 1 || month > 12 || day < 1 || day > 31) return null
  if (hours > 23 || mins > 59) return null

  // Convert IST to UT (India is UTC+5:30)
  const istDecimal = hours + mins / 60
  const utHours = istDecimal - 5.5

  // Handle day rollback if UT is previous day
  let utDay = day
  let utMonth = month
  let utYear = year
  let finalUT = utHours
  if (finalUT < 0) {
    finalUT += 24
    utDay -= 1
    if (utDay < 1) {
      utMonth -= 1
      if (utMonth < 1) { utMonth = 12; utYear -= 1 }
      const daysInMonth = new Date(utYear, utMonth, 0).getDate()
      utDay = daysInMonth
    }
  }

  const jd = toJulianDay(utYear, utMonth, utDay, finalUT)
  const tropLon = moonTropicalLongitude(jd)
  const ayanamsa = lahiriAyanamsa(jd)
  const siderealLon = norm360(tropLon - ayanamsa)

  // Map to Rasi (12 signs × 30°)
  const rasiIndex = Math.floor(siderealLon / 30)
  const rasi = RASI_DATA.find(r => r.index === rasiIndex)
  if (!rasi) return null

  // Map to Natchatiram (27 nakshatras × 13°20' = 13.3333°)
  const nakshatra27Deg = 360 / 27
  const natchatiramIndex = Math.floor(siderealLon / nakshatra27Deg)
  const natc = NATCHATIRAM_DATA.find(n => n.index === natchatiramIndex)
  if (!natc) return null

  // Pada (quarter): each nakshatra is divided into 4 padas
  const posWithinNakshatra = siderealLon - natchatiramIndex * nakshatra27Deg
  const natchatiramPada = Math.floor(posWithinNakshatra / (nakshatra27Deg / 4)) + 1

  // Build display string
  const degInRasi   = siderealLon - rasiIndex * 30
  const degPart     = Math.floor(degInRasi)
  const minPart     = Math.round((degInRasi - degPart) * 60)
  const moonLongitudeDisplay = `${rasi.name} ${degPart}°${minPart.toString().padStart(2, '0')}'`

  return {
    moonLongitude: siderealLon,
    rasiIndex,
    rasiName: rasi.name,
    natchatiramIndex,
    natchatiramName: natc.tamilName,
    natchatiramPada,
    moonLongitudeDisplay,
  }
}

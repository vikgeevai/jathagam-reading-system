import { CHALDEAN_MAP, CHALDEAN_INTERPRETATIONS, VEDIC_NUMBERS, MOOLANK_PLANET } from '@/data/astrologyData'
import type { Planet } from '@/data/astrologyData'

export function digitReduce(n: number): number {
  while (n > 9) {
    n = String(n).split('').reduce((acc, d) => acc + parseInt(d), 0)
  }
  return n || 9
}

function chaldeanLetterValue(letter: string): number {
  return CHALDEAN_MAP[letter.toUpperCase()] ?? 0
}

function extractLetters(name: string): string[] {
  return name.toUpperCase().replace(/[^A-Z]/g, '').split('')
}

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U'])

export interface ChaldeanResult {
  destinyNumber: number
  destinyPlanet: Planet
  destinyInterpretation: string
  soulUrgeNumber: number
  soulUrgePlanet: Planet
  soulUrgeInterpretation: string
  personalityNumber: number
  personalityPlanet: Planet
  personalityInterpretation: string
  letterTable: { letter: string; value: number; isVowel: boolean }[]
}

export function calcChaldean(fullName: string): ChaldeanResult {
  const letters = extractLetters(fullName)
  const letterTable = letters.map(l => ({ letter: l, value: chaldeanLetterValue(l), isVowel: VOWELS.has(l) }))

  const destinyRaw = letters.reduce((s, l) => s + chaldeanLetterValue(l), 0)
  const destinyNumber = digitReduce(destinyRaw)

  const vowelLetters = letters.filter(l => VOWELS.has(l))
  const soulRaw = vowelLetters.reduce((s, l) => s + chaldeanLetterValue(l), 0)
  const soulUrgeNumber = digitReduce(soulRaw || 1)

  const consonantLetters = letters.filter(l => !VOWELS.has(l))
  const personalityRaw = consonantLetters.reduce((s, l) => s + chaldeanLetterValue(l), 0)
  const personalityNumber = digitReduce(personalityRaw || 1)

  const destinyInfo = CHALDEAN_INTERPRETATIONS[destinyNumber]
  const soulInfo = CHALDEAN_INTERPRETATIONS[soulUrgeNumber]
  const personalityInfo = CHALDEAN_INTERPRETATIONS[personalityNumber]

  return {
    destinyNumber,
    destinyPlanet: destinyInfo.rulingPlanet,
    destinyInterpretation: destinyInfo.interpretation,
    soulUrgeNumber,
    soulUrgePlanet: soulInfo.rulingPlanet,
    soulUrgeInterpretation: soulInfo.interpretation,
    personalityNumber,
    personalityPlanet: personalityInfo.rulingPlanet,
    personalityInterpretation: personalityInfo.interpretation,
    letterTable,
  }
}

export interface VedicResult {
  moolank: number
  moolankPlanet: Planet
  moolankInfo: typeof VEDIC_NUMBERS[1]
  bhagyank: number
  bhagyankPlanet: Planet
  bhagyankInfo: typeof VEDIC_NUMBERS[1]
  kuaNumber: number
  kuaPlanet: Planet
  kuaInfo: typeof VEDIC_NUMBERS[1]
}

export function calcVedic(dob: string, gender: 'Male' | 'Female'): VedicResult {
  // dob = "DD/MM/YYYY"
  const parts = dob.split('/')
  const day = parseInt(parts[0])
  const year = parseInt(parts[2])

  const moolank = digitReduce(day)
  const allDigits = dob.replace(/\//g, '').split('').map(Number).reduce((a, b) => a + b, 0)
  const bhagyank = digitReduce(allDigits)

  // Kua number
  const lastTwo = year % 100
  const yDigit = digitReduce(lastTwo)
  let kua: number
  if (gender === 'Male') {
    kua = digitReduce(11 - yDigit)
    if (kua === 5) kua = 2
  } else {
    kua = digitReduce(4 + yDigit)
    if (kua === 5) kua = 8
  }

  const moolankPlanet = MOOLANK_PLANET[moolank]
  const bhagyankPlanet = MOOLANK_PLANET[bhagyank]
  const kuaPlanet = MOOLANK_PLANET[kua]

  return {
    moolank,
    moolankPlanet,
    moolankInfo: VEDIC_NUMBERS[moolank],
    bhagyank,
    bhagyankPlanet,
    bhagyankInfo: VEDIC_NUMBERS[bhagyank],
    kuaNumber: kua,
    kuaPlanet,
    kuaInfo: VEDIC_NUMBERS[kua],
  }
}

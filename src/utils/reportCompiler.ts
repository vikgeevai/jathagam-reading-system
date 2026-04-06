import type { JathagamResult } from '@/App'

export function compileReport(data: JathagamResult): string {
  const { input, chaldean, vedic, horaLagna, domains, predictions, warnings, pariharam, saniCycle } = data
  const lines: string[] = []
  const div = '═'.repeat(60)
  const sub = '─'.repeat(60)

  lines.push(div)
  lines.push('         ✦ SACRED JATHAGAM READING REPORT ✦')
  lines.push(div)
  lines.push('')
  lines.push(`Name          : ${input.fullName}`)
  lines.push(`Date of Birth : ${input.dob}`)
  lines.push(`Time of Birth : ${input.timeOfBirth}`)
  lines.push(`Gender        : ${input.gender}`)
  if (input.rasi) {
    lines.push(`Rasi          : ${input.rasi} (Moon Sign)`)
    lines.push(`Natchatiram   : ${input.natchatiram} (Birth Star)`)
  }
  lines.push('')

  lines.push(sub)
  lines.push('SECTION 1 — CHALDEAN NUMEROLOGY')
  lines.push(sub)
  lines.push(`Destiny Number    : ${chaldean.destinyNumber} (${chaldean.destinyPlanet})`)
  lines.push(`  ${chaldean.destinyInterpretation}`)
  lines.push(`Soul Urge Number  : ${chaldean.soulUrgeNumber} (${chaldean.soulUrgePlanet})`)
  lines.push(`  ${chaldean.soulUrgeInterpretation}`)
  lines.push(`Personality Number: ${chaldean.personalityNumber} (${chaldean.personalityPlanet})`)
  lines.push(`  ${chaldean.personalityInterpretation}`)
  lines.push('')

  lines.push(sub)
  lines.push('SECTION 2 — VEDIC NUMEROLOGY')
  lines.push(sub)
  lines.push(`Moolank (Birth Number) : ${vedic.moolank} — Ruled by ${vedic.moolankPlanet}`)
  lines.push(`  Element: ${vedic.moolankInfo.element} | Gemstone: ${vedic.moolankInfo.gemstone}`)
  lines.push(`  Lucky Days: ${vedic.moolankInfo.luckyDays.join(', ')} | Lucky Colour: ${vedic.moolankInfo.luckyColour}`)
  lines.push(`Bhagyank (Destiny Number) : ${vedic.bhagyank} — Ruled by ${vedic.bhagyankPlanet}`)
  lines.push(`  Element: ${vedic.bhagyankInfo.element} | Gemstone: ${vedic.bhagyankInfo.gemstone}`)
  lines.push(`Kua Number : ${vedic.kuaNumber} — Ruled by ${vedic.kuaPlanet}`)
  lines.push('')

  lines.push(sub)
  lines.push('SECTION 3 — HORA & LAGNA')
  lines.push(sub)
  lines.push(`Hora Lord  : ${horaLagna.horaLord} (Hour ${horaLagna.horaNumber} from sunrise)`)
  lines.push(`Lagna Sign : ${horaLagna.lagnaSign.name} (${horaLagna.lagnaSign.tamilName}) ${horaLagna.lagnaSign.symbol}`)
  lines.push(`  Ruling Planet: ${horaLagna.lagnaRuler} | Element: ${horaLagna.lagnaSign.element}`)
  lines.push(`  Core Trait: ${horaLagna.lagnaSign.coreTrait}`)
  lines.push('')

  lines.push(sub)
  lines.push('SECTION 4 — LIFE DOMAIN SCORES')
  lines.push(sub)
  domains.forEach(d => {
    const bar = '█'.repeat(Math.round(d.score / 10)) + '░'.repeat(10 - Math.round(d.score / 10))
    lines.push(`${d.label.padEnd(18)}: ${bar} ${d.score}/100`)
    lines.push(`  ${d.reading}`)
  })
  lines.push('')

  lines.push(sub)
  lines.push('SECTION 5 — TOP 10 POSITIVE PREDICTIONS')
  lines.push(sub)
  predictions.forEach((p, i) => {
    lines.push(`${i + 1}. ${p.icon} ${p.headline}`)
    lines.push(`   ${p.elaboration}`)
  })
  lines.push('')

  lines.push(sub)
  lines.push('SECTION 6 — TOP 10 WARNINGS')
  lines.push(sub)
  warnings.forEach((w, i) => {
    lines.push(`${i + 1}. ${w.icon} ${w.headline}`)
    lines.push(`   ${w.elaboration}`)
  })
  lines.push('')

  lines.push(sub)
  lines.push('SECTION 8 — PARIHARAM (DIVINE REMEDIES)')
  lines.push(sub)
  const pp = pariharam.primaryPlan
  lines.push(`Dominant Planet   : ${pariharam.dominantPlanet}`)
  lines.push(`Primary Deity     : ${pp.primaryDeity}`)
  lines.push(`Secondary Deity   : ${pp.secondaryDeity}`)
  lines.push(`Prayer Day & Time : ${pp.prayerDay} at ${pp.prayerTime}`)
  lines.push(`Offerings         : ${pp.offerings.join(' | ')}`)
  lines.push(`Lamp Ritual       : ${pp.lampColour} lamp, ${pp.lampWicks} wicks, facing ${pp.lampDirection}`)
  lines.push(`Temple Activity   : ${pp.templeActivity}`)
  lines.push(`Mantra            : ${pp.mantraName}`)
  lines.push(`  "${pp.mantraText}"`)
  lines.push(`  Recite ${pp.mantraCount} times at ${pp.mantraBestTime}`)
  lines.push('')
  if (pariharam.situationalRemedies.length > 0) {
    lines.push('Situation-Based Remedies:')
    pariharam.situationalRemedies.forEach(sr => {
      if (sr.remedy) {
        lines.push(`  ${sr.domain}: ${sr.remedy.remedy}`)
      }
    })
  }
  lines.push('')
  lines.push('Monthly Remedy Calendar:')
  pariharam.monthlyCalendar.forEach(w => {
    lines.push(`  ${w.label}:`)
    w.activities.forEach(a => lines.push(`    • ${a}`))
  })
  lines.push('')

  if (input.rasi && saniCycle) {
    lines.push(sub)
    lines.push('SECTION 9 — RASI & NATCHATIRAM — COSMIC IDENTITY')
    lines.push(sub)
    lines.push(`Rasi (Moon Sign)    : ${saniCycle.rasiName}`)
    lines.push(`Natchatiram (Star)  : ${saniCycle.natchatiramName}`)
    lines.push(`Dasha Lord          : ${saniCycle.dashaLord} (${saniCycle.dashaYears}-year dasha period)`)
    lines.push(`Birth Star Character: ${saniCycle.natchatiramCharacter}`)
    lines.push('')

    lines.push(sub)
    lines.push('SECTION 10 — SANI (SATURN) CYCLE — CURRENT STATUS')
    lines.push(sub)
    lines.push(`Saturn Position     : ${saniCycle.currentSaturnRasi} (House ${saniCycle.currentSaturnHouse} from ${saniCycle.rasiName})`)
    lines.push(`Current Phase       : ${saniCycle.currentSaniInfo.englishName} — ${saniCycle.currentSaniInfo.tamilName}`)
    lines.push(`Intensity           : ${saniCycle.currentSaniInfo.intensity}`)
    lines.push(`Phase Duration      : ${saniCycle.currentSaniInfo.duration}`)
    lines.push(`Phase Ends          : ${saniCycle.currentSaniEnds}`)
    lines.push('')
    lines.push('Personal Prediction:')
    lines.push(`  ${saniCycle.personalPrediction}`)
    lines.push('')
    lines.push('Life Areas Affected:')
    saniCycle.currentSaniInfo.lifeAreas.forEach(area => lines.push(`  • ${area}`))
    lines.push('')
    lines.push('Prescribed Remedies:')
    saniCycle.currentSaniInfo.remedies.forEach(r => lines.push(`  🪔 ${r}`))
    lines.push('')
    lines.push(`Saturn Mantra: "${saniCycle.currentSaniInfo.mantra}"`)
    lines.push('  Recite 108 times on Saturday')
    lines.push('')
    lines.push('Sade Sati Timeline:')
    lines.push(`  Last Sade Sati Ended : ${saniCycle.lastSadeSatiEnd}`)
    lines.push(`  Next Sade Sati Begins: ${saniCycle.nextSadeSatiStart}`)
    lines.push(`  Next Sade Sati Ends  : ${saniCycle.nextSadeSatiEnd}`)
    lines.push('')
  }

  lines.push(div)
  lines.push('  This sacred report was generated by the Jathagam Reading System.')
  lines.push('  For personal guidance, consult your astrologer for interpretation.')
  lines.push(div)

  return lines.join('\n')
}

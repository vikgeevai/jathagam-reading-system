import SectionCard from './shared/SectionCard'
import PlanetBadge from './shared/PlanetBadge'
import { PLANET_META } from '@/data/astrologyData'
import type { Planet } from '@/data/astrologyData'

interface Props {
  dominantPlanet: Planet
  moolank: number
  bhagyank: number
}

function getDos(planet: Planet, moolank: number): string[] {
  const base = [
    `Wear ${PLANET_META[planet].gemstone} on ${PLANET_META[planet].luckyDays[0]}`,
    `Pray to ${PLANET_META[planet].deity} every ${PLANET_META[planet].prayerDay}`,
    `Chant "${PLANET_META[planet].mantra}" 108 times daily at sunrise`,
    `Wear ${PLANET_META[planet].luckyColour} on ${PLANET_META[planet].luckyDays[0]}`,
    `Fast on ${PLANET_META[planet].fastingDay} to strengthen planetary energy`,
    `Meditate using ${PLANET_META[planet].yantra} for 21 minutes each morning`,
    `Donate ${PLANET_META[planet].offerings[0]} to temples on ${PLANET_META[planet].prayerDay}`,
    `Perform charity aligned with ${planet} energy to balance karma`,
  ]
  const extras: Record<number, string> = {
    1: 'Rise before sunrise — solar energy peaks between 5–7 AM',
    2: 'Keep your home and workspace clean and moonlit-white',
    3: 'Teach or mentor others — Jupiter expands through sharing wisdom',
    4: 'Build consistent daily routines — structure attracts Saturn blessings',
    5: 'Write daily — Mercury rewards consistent intellectual output',
    6: 'Beautify your living space — Venus thrives in aesthetic environments',
    7: 'Spend time in solitude and nature for spiritual recharge',
    8: 'Start financial planning with a long-term 10-year horizon',
    9: 'Exercise vigorously — Mars energy must be channelled physically',
  }
  base[base.length - 1] = extras[moolank] ?? base[base.length - 1]
  return base
}

function getDonts(planet: Planet, moolank: number): string[] {
  const base = [
    `Avoid wearing black on ${PLANET_META[planet].luckyDays[0]} — it blocks ${planet} energy`,
    'Do not consume alcohol on your fasting day — it nullifies the remedy',
    'Avoid cutting hair or nails on sacred prayer days',
    'Do not lend money without a written agreement during challenging transits',
    'Avoid arguments in the early morning — protect your solar/lunar energy',
    'Do not skip daily mantra practice — consistency amplifies planetary remedies',
    'Avoid negative self-talk — planetary energy responds to your inner dialogue',
    'Do not make major decisions during eclipses or Rahu Kaal periods',
  ]
  const extras: Record<number, string> = {
    1: 'Avoid ego-driven decisions — pride creates Solar blockages',
    2: 'Do not suppress emotions — Moon energy demands authentic expression',
    3: 'Avoid overindulgence in food or pleasure — Jupiter needs moderation',
    4: 'Do not make sudden, impulsive financial moves against your plan',
    5: 'Avoid gossiping or spreading unverified information — Mercury rebounds',
    6: 'Do not neglect relationships — Venus punishes emotional carelessness',
    7: 'Avoid excessive isolation — Ketu retreats must be intentional, not fearful',
    8: 'Do not take shortcuts — Saturn\'s rewards come only through honest effort',
    9: 'Avoid physical confrontations — Mars aggression attracts legal consequences',
  }
  base[base.length - 1] = extras[moolank] ?? base[base.length - 1]
  return base
}

export default function DosDontsRemedies({ dominantPlanet, moolank, bhagyank }: Props) {
  const dos = getDos(dominantPlanet, moolank)
  const donts = getDonts(dominantPlanet, moolank)
  const meta = PLANET_META[dominantPlanet]

  return (
    <SectionCard
      title="✦ Do's, Don'ts & Sacred Remedies"
      subtitle="Personalised guidance aligned to your dominant planetary energy"
      sectionIndex={6}
      variant="gold"
    >
      <div className="dos-donts-grid">
        <div className="dos-column">
          <h3 className="dos-donts-title dos-title cinzel-heading">✓ Do's</h3>
          <ul className="dos-list">
            {dos.map((item, i) => (
              <li key={i} className="dos-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="donts-column">
          <h3 className="dos-donts-title donts-title cinzel-heading">✗ Don'ts</h3>
          <ul className="donts-list">
            {donts.map((item, i) => (
              <li key={i} className="donts-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Remedy Card */}
      <div className="remedy-card glass-card--gold">
        <div className="remedy-card__header">
          <span className="remedy-card__icon">💎</span>
          <h3 className="remedy-card__title cinzel-heading">Sacred Remedy Prescription</h3>
          <PlanetBadge planet={dominantPlanet} />
        </div>
        <div className="remedy-grid">
          <div className="remedy-item">
            <span className="remedy-item__label cinzel-heading">Gemstone</span>
            <span className="remedy-item__value">{meta.gemstone}</span>
          </div>
          <div className="remedy-item">
            <span className="remedy-item__label cinzel-heading">Primary Mantra</span>
            <span className="remedy-item__value">{meta.mantra}</span>
          </div>
          <div className="remedy-item">
            <span className="remedy-item__label cinzel-heading">Yantra</span>
            <span className="remedy-item__value">{meta.yantra}</span>
          </div>
          <div className="remedy-item">
            <span className="remedy-item__label cinzel-heading">Lucky Colour</span>
            <span className="remedy-item__value">{meta.luckyColour}</span>
          </div>
          <div className="remedy-item">
            <span className="remedy-item__label cinzel-heading">Fasting Day</span>
            <span className="remedy-item__value">{meta.fastingDay}</span>
          </div>
          <div className="remedy-item">
            <span className="remedy-item__label cinzel-heading">Charity Action</span>
            <span className="remedy-item__value">Donate {meta.offerings[0]} on {meta.fastingDay}</span>
          </div>
        </div>
        <div className="remedy-numbers">
          <div className="remedy-number-pill">
            <span className="remedy-number-pill__label">Moolank</span>
            <span className="remedy-number-pill__value cinzel-heading">{moolank}</span>
          </div>
          <div className="remedy-number-pill">
            <span className="remedy-number-pill__label">Bhagyank</span>
            <span className="remedy-number-pill__value cinzel-heading">{bhagyank}</span>
          </div>
          <div className="remedy-number-pill">
            <span className="remedy-number-pill__label">Ruling Deity</span>
            <span className="remedy-number-pill__value cinzel-heading">{meta.deity.split('(')[0].trim()}</span>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}

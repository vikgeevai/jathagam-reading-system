import { useState } from 'react'
import SectionCard from './shared/SectionCard'
import PlanetBadge from './shared/PlanetBadge'
import type { FullPariharamPlan } from '@/utils/pariharamEngine'

interface Props {
  pariharam: FullPariharamPlan
}

export default function Pariharam({ pariharam }: Props) {
  const [copied, setCopied] = useState(false)
  const { primaryPlan: pp, secondaryPlan: sp, situationalRemedies, monthlyCalendar } = pariharam

  function handleCopy() {
    const text = buildPariharamText(pariharam)
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <SectionCard
      title="✦ Pariharam — Divine Remedies"
      subtitle="Complete sacred remedy system prescribed for your planetary chart"
      sectionIndex={7}
      variant="pariharam"
    >
      {/* Lotus decoration */}
      <div className="pariharam-header-decor">
        <span className="pariharam-om">ॐ</span>
        <span className="pariharam-divider-line" />
        <span className="pariharam-lotus">🪷</span>
        <span className="pariharam-divider-line" />
        <span className="pariharam-om">ॐ</span>
      </div>

      {/* A. Deity */}
      <div className="pariharam-block">
        <h3 className="pariharam-block-title cinzel-heading">A. Deity to Pray</h3>
        <div className="deity-grid">
          <div className="deity-card">
            <div className="deity-card__badge cinzel-heading">Primary Deity</div>
            <div className="deity-card__name cinzel-heading">{pp.primaryDeity}</div>
            <PlanetBadge planet={pariharam.dominantPlanet} />
            <p className="deity-card__reason">{pp.deityReason}</p>
          </div>
          <div className="deity-card deity-card--secondary">
            <div className="deity-card__badge deity-card__badge--secondary cinzel-heading">Secondary Deity</div>
            <div className="deity-card__name cinzel-heading">{pp.secondaryDeity}</div>
            <PlanetBadge planet={pariharam.moolankPlanet} />
            <p className="deity-card__reason">
              {sp.primaryDeity} supports the primary remedy by balancing the Moolank planet ({pariharam.moolankPlanet}) energy in your chart.
            </p>
          </div>
        </div>
      </div>

      {/* B. Prayer Day & Time */}
      <div className="pariharam-block">
        <h3 className="pariharam-block-title cinzel-heading">B. Day & Time of Prayer</h3>
        <div className="prayer-time-card glass-card--inner">
          <div className="prayer-time-items">
            <div className="prayer-time-item">
              <span className="prayer-time-icon">📅</span>
              <div>
                <div className="prayer-time-label cinzel-heading">Sacred Day</div>
                <div className="prayer-time-value">{pp.prayerDay}</div>
              </div>
            </div>
            <div className="prayer-time-item">
              <span className="prayer-time-icon">⏰</span>
              <div>
                <div className="prayer-time-label cinzel-heading">Ideal Time</div>
                <div className="prayer-time-value">{pp.prayerTime}</div>
              </div>
            </div>
            <div className="prayer-time-item">
              <span className="prayer-time-icon">🏛️</span>
              <div>
                <div className="prayer-time-label cinzel-heading">Temple Type</div>
                <div className="prayer-time-value">{pp.templeType}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* C. Physical Offerings */}
      <div className="pariharam-block">
        <h3 className="pariharam-block-title cinzel-heading">C. Sacred Offerings</h3>
        <div className="offerings-wrap">
          {pp.offerings.map((o, i) => (
            <span key={i} className="offering-pill">{o}</span>
          ))}
        </div>
      </div>

      {/* D. Lamp Ritual */}
      <div className="pariharam-block">
        <h3 className="pariharam-block-title cinzel-heading">D. Lamp / Candle Ritual</h3>
        <div className="lamp-card glass-card--inner">
          <div className="lamp-details">
            <div className="lamp-detail">
              <span className="lamp-icon">🪔</span>
              <div>
                <div className="lamp-label cinzel-heading">Lamp Colour</div>
                <div className="lamp-value">{pp.lampColour}</div>
              </div>
            </div>
            <div className="lamp-detail">
              <span className="lamp-icon">🔥</span>
              <div>
                <div className="lamp-label cinzel-heading">Number of Wicks</div>
                <div className="lamp-value">{pp.lampWicks} wick{pp.lampWicks > 1 ? 's' : ''}</div>
              </div>
            </div>
            <div className="lamp-detail">
              <span className="lamp-icon">🧭</span>
              <div>
                <div className="lamp-label cinzel-heading">Face Direction</div>
                <div className="lamp-value">{pp.lampDirection}</div>
              </div>
            </div>
          </div>
          <div className="lamp-chant">
            <span className="lamp-chant-label cinzel-heading">Chant while lighting:</span>
            <span className="lamp-chant-text">"{pp.lampChant}"</span>
          </div>
        </div>
      </div>

      {/* E. Temple Activity */}
      <div className="pariharam-block">
        <h3 className="pariharam-block-title cinzel-heading">E. Temple Activity</h3>
        <div className="temple-card glass-card--inner">
          <div className="temple-rows">
            <div className="temple-row">
              <span className="temple-row-label cinzel-heading">Temple</span>
              <span className="temple-row-value">{pp.templeType}</span>
            </div>
            <div className="temple-row">
              <span className="temple-row-label cinzel-heading">Activity</span>
              <span className="temple-row-value">{pp.templeActivity}</span>
            </div>
            <div className="temple-row">
              <span className="temple-row-label cinzel-heading">Pradakshinam</span>
              <span className="temple-row-value">{pp.pradakshinaCount} rounds</span>
            </div>
            <div className="temple-row">
              <span className="temple-row-label cinzel-heading">Best Day</span>
              <span className="temple-row-value">{pp.bestDay}</span>
            </div>
          </div>
        </div>
      </div>

      {/* F. Mantra */}
      <div className="pariharam-block">
        <h3 className="pariharam-block-title cinzel-heading">F. Mantra Prescription</h3>
        <div className="mantra-card glass-card--inner">
          <div className="mantra-name cinzel-heading">{pp.mantraName}</div>
          <div className="mantra-text">"{pp.mantraText}"</div>
          <div className="mantra-meta">
            <span className="mantra-meta-pill">
              <span>🔢</span> {pp.mantraCount} times
            </span>
            <span className="mantra-meta-pill">
              <span>⏰</span> {pp.mantraBestTime}
            </span>
          </div>
        </div>
      </div>

      {/* G. Situational Pariharam */}
      {situationalRemedies.length > 0 && (
        <div className="pariharam-block">
          <h3 className="pariharam-block-title cinzel-heading">G. Targeted Remedies for Weak Domains</h3>
          <div className="situational-list">
            {situationalRemedies.map((sr, i) => sr.remedy && (
              <div key={i} className="situational-item glass-card--inner">
                <div className="situational-domain cinzel-heading">⚠️ {sr.domain}</div>
                <p className="situational-remedy">{sr.remedy.remedy}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* H. Monthly Calendar */}
      <div className="pariharam-block">
        <h3 className="pariharam-block-title cinzel-heading">H. Monthly Remedy Calendar</h3>
        <div className="calendar-grid">
          {monthlyCalendar.map((week) => (
            <div key={week.week} className="calendar-week glass-card--inner">
              <div className="calendar-week-label cinzel-heading">{week.label}</div>
              <ul className="calendar-activities">
                {week.activities.map((a, j) => (
                  <li key={j} className="calendar-activity">• {a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copy button */}
      <button
        className="btn-copy-pariharam cinzel-heading"
        onClick={handleCopy}
      >
        {copied ? '✅ Copied!' : '📿 Copy Pariharam Plan'}
      </button>
    </SectionCard>
  )
}

function buildPariharamText(p: FullPariharamPlan): string {
  const pp = p.primaryPlan
  const lines = [
    '═══════════════════════════════════════════',
    '        ✦ PARIHARAM — DIVINE REMEDY PLAN ✦',
    '═══════════════════════════════════════════',
    '',
    `Dominant Planet : ${p.dominantPlanet}`,
    `Primary Deity   : ${pp.primaryDeity}`,
    `Secondary Deity : ${pp.secondaryDeity}`,
    '',
    `Prayer Day & Time: ${pp.prayerDay} at ${pp.prayerTime}`,
    `Offerings: ${pp.offerings.join(' | ')}`,
    '',
    `Lamp Ritual: ${pp.lampColour} lamp, ${pp.lampWicks} wicks, facing ${pp.lampDirection}`,
    `Chant: "${pp.lampChant}"`,
    '',
    `Temple: ${pp.templeType}`,
    `Activity: ${pp.templeActivity}`,
    `Pradakshinam: ${pp.pradakshinaCount} rounds on ${pp.bestDay}`,
    '',
    `Mantra: ${pp.mantraName}`,
    `"${pp.mantraText}"`,
    `Recite ${pp.mantraCount} times at ${pp.mantraBestTime}`,
    '',
  ]
  if (p.situationalRemedies.length > 0) {
    lines.push('Targeted Remedies:')
    p.situationalRemedies.forEach(sr => {
      if (sr.remedy) lines.push(`  ${sr.domain}: ${sr.remedy.remedy}`)
    })
    lines.push('')
  }
  lines.push('Monthly Calendar:')
  p.monthlyCalendar.forEach(w => {
    lines.push(`  ${w.label}:`)
    w.activities.forEach(a => lines.push(`    • ${a}`))
  })
  return lines.join('\n')
}

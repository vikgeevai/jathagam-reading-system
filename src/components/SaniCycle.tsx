import SectionCard from './shared/SectionCard'
import type { SaniCycleResult } from '@/utils/saniCycleCalc'
import type { SaniType } from '@/data/rasiNatchatiramData'
import { PLANET_META } from '@/data/astrologyData'

interface Props {
  data: SaniCycleResult
}

const PHASE_LABELS: Record<SaniType, string> = {
  sade_sati_rising:   'Sade Sati (Rising)',
  sade_sati_peak:     'Sade Sati (Peak)',
  sade_sati_setting:  'Sade Sati (Setting)',
  ashtama_sani:       'Ashtama Sani',
  ardhastama_sani:    'Ardhastama Sani',
  clear:              'Clear Period',
}

const INTENSITY_ICON: Record<string, string> = {
  'Very High': '🔴',
  'High': '🟠',
  'Moderate': '🟡',
  'Clear': '🟢',
}

const HOUSE_LABELS: Record<number, string> = {
  1: '1st (Own Rasi)', 2: '2nd', 3: '3rd', 4: '4th ⚠', 5: '5th',
  6: '6th', 7: '7th', 8: '8th ⚠', 9: '9th', 10: '10th', 11: '11th', 12: '12th ⚠',
}

export default function SaniCycle({ data }: Props) {
  const { currentSaniInfo } = data
  const saturnMeta = PLANET_META['Saturn']

  const colourClass = {
    red: 'sani-status--red',
    amber: 'sani-status--amber',
    yellow: 'sani-status--yellow',
    green: 'sani-status--green',
  }[currentSaniInfo.colour]

  return (
    <SectionCard
      title="✦ Sani (Saturn) Cycle — Current Status & Forecast"
      subtitle="Saturn's transit relative to your birth Rasi — the most critical planetary cycle in Hindu astrology"
      sectionIndex={9}
      variant="default"
    >
      {/* Shani header decoration */}
      <div className="sani-shani-decor">
        <span className="sani-planet-icon">♄</span>
        <div className="sani-shani-text">
          <div className="sani-shani-label cinzel-heading">Saturn (Shani Bhagavan)</div>
          <div className="sani-shani-sub">Currently in {data.currentSaturnRasi} — House {data.currentSaturnHouse} from {data.rasiName}</div>
        </div>
      </div>

      {/* Current Status Banner */}
      <div className={`sani-status-banner ${colourClass}`}>
        <div className="sani-status-left">
          <div className="sani-status-icon">{INTENSITY_ICON[currentSaniInfo.intensity]}</div>
          <div>
            <div className="sani-status-type cinzel-heading">{currentSaniInfo.tamilName}</div>
            <div className="sani-status-sub">{currentSaniInfo.englishName} · {currentSaniInfo.duration}</div>
          </div>
        </div>
        <div className="sani-status-right">
          <div className="sani-intensity cinzel-heading" data-intensity={currentSaniInfo.intensity.replace(' ', '-')}>
            {currentSaniInfo.intensity} Intensity
          </div>
          <div className="sani-ends-label">Phase ends: {data.currentSaniEnds}</div>
        </div>
      </div>

      {/* Personal Prediction */}
      <div className="sani-personal-pred glass-card--inner">
        <div className="sani-pred-header cinzel-heading">
          🌙 Personalised {data.rasiName} Rasi Reading
        </div>
        <p className="sani-pred-text">{data.personalPrediction}</p>
      </div>

      {/* Life Areas + Remedies */}
      <div className="sani-two-col">
        <div className="sani-block">
          <h3 className="sani-block-title cinzel-heading">Life Areas Affected</h3>
          <ul className="sani-areas-list">
            {currentSaniInfo.lifeAreas.map((area, i) => (
              <li key={i} className="sani-area-item">
                <span className={`sani-area-dot sani-area-dot--${currentSaniInfo.colour}`} />
                {area}
              </li>
            ))}
          </ul>
        </div>
        <div className="sani-block">
          <h3 className="sani-block-title cinzel-heading">Prescribed Remedies</h3>
          <ul className="sani-remedies-list">
            {currentSaniInfo.remedies.map((r, i) => (
              <li key={i} className="sani-remedy-item">🪔 {r}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mantra */}
      <div className="sani-mantra-card glass-card--inner">
        <div className="sani-mantra-label cinzel-heading">♄ Prescribed Saturn Mantra</div>
        <div className="sani-mantra-text">"{currentSaniInfo.mantra}"</div>
        <div className="sani-mantra-meta">
          <span className="mantra-meta-pill">🔢 108 times on Saturday</span>
          <span className="mantra-meta-pill">⏰ {saturnMeta.prayerTime}</span>
        </div>
      </div>

      {/* Sade Sati Timeline Summary */}
      <div className="sani-timeline-block">
        <h3 className="sani-block-title cinzel-heading">🗓 Sade Sati Timeline for {data.rasiName} Rasi</h3>
        <div className="sani-timeline-cards">
          <div className="sani-timeline-item sani-timeline-item--past">
            <div className="sani-timeline-badge cinzel-heading">Last Sade Sati Ended</div>
            <div className="sani-timeline-date">{data.lastSadeSatiEnd}</div>
          </div>
          <div className="sani-timeline-arrow">→</div>
          <div className={`sani-timeline-item ${['sade_sati_rising','sade_sati_peak','sade_sati_setting'].includes(data.currentSaniType) ? 'sani-timeline-item--active' : 'sani-timeline-item--clear'}`}>
            <div className="sani-timeline-badge cinzel-heading">Current Period</div>
            <div className="sani-timeline-date">{PHASE_LABELS[data.currentSaniType]}</div>
          </div>
          <div className="sani-timeline-arrow">→</div>
          <div className="sani-timeline-item sani-timeline-item--future">
            <div className="sani-timeline-badge cinzel-heading">Next Sade Sati</div>
            <div className="sani-timeline-date">{data.nextSadeSatiStart} — {data.nextSadeSatiEnd}</div>
          </div>
        </div>
      </div>

      {/* Full Saturn Transit Table for this Rasi */}
      <div className="sani-table-block">
        <h3 className="sani-block-title cinzel-heading">Saturn Transit Table — {data.rasiName} Rasi</h3>
        <div className="sani-table">
          <div className="sani-table-header">
            <span>Saturn Rasi</span>
            <span>Period</span>
            <span>House</span>
            <span>Effect</span>
          </div>
          {data.fullTimeline.map((entry, i) => (
            <div
              key={i}
              className={`sani-table-row ${entry.isCurrent ? 'sani-table-row--current' : ''} ${entry.isFuture ? 'sani-table-row--future' : ''}`}
            >
              <span className="sani-table-rasi cinzel-heading">
                {entry.isCurrent && '▶ '}{entry.label}
              </span>
              <span className="sani-table-period">{entry.entryLabel} — {entry.exitLabel}</span>
              <span className="sani-table-house">{HOUSE_LABELS[entry.house] ?? `${entry.house}th`}</span>
              <span className={`sani-table-effect sani-table-effect--${getEffectColour(entry.type)}`}>
                {PHASE_LABELS[entry.type]}
              </span>
            </div>
          ))}
        </div>
        <p className="sani-table-note">
          ★ All dates are approximate based on sidereal (Hindu) zodiac transits. Retrograde motions may cause slight variations.
          Consult a Jyotish astrologer for precise transit dates.
        </p>
      </div>

      {/* Natchatiram Dasha Info */}
      <div className="sani-dasha-card glass-card--inner">
        <div className="sani-dasha-header cinzel-heading">
          🌟 Natchatiram Vimshottari Dasha — {data.natchatiramName}
        </div>
        <div className="sani-dasha-content">
          <div className="sani-dasha-planet">
            <span className="rasi-meta-label cinzel-heading">Dasha Lord</span>
            <span className="sani-dasha-value cinzel-heading">{data.dashaLord} ({data.dashaYears} years)</span>
          </div>
          <p className="sani-dasha-text">{data.natchatiramCharacter}</p>
        </div>
      </div>
    </SectionCard>
  )
}

function getEffectColour(type: SaniType): string {
  if (type === 'sade_sati_peak') return 'red'
  if (type === 'sade_sati_rising' || type === 'sade_sati_setting' || type === 'ashtama_sani') return 'amber'
  if (type === 'ardhastama_sani') return 'yellow'
  return 'green'
}

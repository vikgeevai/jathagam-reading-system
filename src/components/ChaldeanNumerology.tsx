import SectionCard from './shared/SectionCard'
import PlanetBadge from './shared/PlanetBadge'
import type { ChaldeanResult } from '@/utils/numerologyCalc'

interface Props {
  data: ChaldeanResult
  name: string
}

export default function ChaldeanNumerology({ data, name }: Props) {
  return (
    <SectionCard
      title="✦ Name Analysis — Chaldean Numerology"
      subtitle="Sacred letter vibrations reveal the cosmic blueprint of your identity"
      sectionIndex={0}
      variant="default"
    >
      {/* Letter Table */}
      <div className="chaldean-name-display cinzel-heading">{name.toUpperCase()}</div>
      <div className="letter-table-wrap">
        <div className="letter-table">
          {data.letterTable.map((item, i) => (
            <div key={i} className={`letter-cell ${item.isVowel ? 'letter-cell--vowel' : 'letter-cell--consonant'}`}>
              <span className="letter-cell__letter">{item.letter}</span>
              <span className="letter-cell__value">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="letter-legend">
          <span className="legend-item legend-item--vowel">■ Vowel (Soul Urge)</span>
          <span className="legend-item legend-item--consonant">■ Consonant (Personality)</span>
        </div>
      </div>

      {/* Three numbers */}
      <div className="numerology-results-grid">
        <NumerologyCard
          label="Destiny Number"
          number={data.destinyNumber}
          planet={data.destinyPlanet}
          interpretation={data.destinyInterpretation}
          icon="☀️"
        />
        <NumerologyCard
          label="Soul Urge Number"
          number={data.soulUrgeNumber}
          planet={data.soulUrgePlanet}
          interpretation={data.soulUrgeInterpretation}
          icon="🌙"
        />
        <NumerologyCard
          label="Personality Number"
          number={data.personalityNumber}
          planet={data.personalityPlanet}
          interpretation={data.personalityInterpretation}
          icon="⭐"
        />
      </div>
    </SectionCard>
  )
}

function NumerologyCard({
  label, number, planet, interpretation, icon,
}: {
  label: string; number: number; planet: string; interpretation: string; icon: string
}) {
  return (
    <div className="num-card glass-card--inner">
      <div className="num-card__header">
        <span className="num-card__icon">{icon}</span>
        <span className="num-card__label cinzel-heading">{label}</span>
      </div>
      <div className="num-card__number cinzel-heading">{number}</div>
      <PlanetBadge planet={planet as import('@/data/astrologyData').Planet} />
      <p className="num-card__interpretation">{interpretation}</p>
    </div>
  )
}

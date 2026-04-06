import SectionCard from './shared/SectionCard'
import PlanetBadge from './shared/PlanetBadge'
import { PLANET_META } from '@/data/astrologyData'
import type { HoraLagnaResult } from '@/utils/horaLagnaCalc'

interface Props {
  data: HoraLagnaResult
  timeOfBirth: string
}

export default function HoraLagna({ data, timeOfBirth }: Props) {
  const horaColor = PLANET_META[data.horaLord].colour
  const lagnaColor = PLANET_META[data.lagnaRuler].colour

  return (
    <SectionCard
      title="✦ Time of Birth — Hora & Lagna"
      subtitle="The celestial hour lord and rising sign at your birth moment"
      sectionIndex={2}
      variant="default"
    >
      <div className="hora-lagna-grid">
        {/* Hora */}
        <div className="hora-card glass-card--inner">
          <div className="hora-card__badge" style={{ background: `${horaColor}22`, borderColor: `${horaColor}66` }}>
            <span className="hora-card__icon" style={{ color: horaColor }}>⏱</span>
            <span className="hora-card__eyebrow cinzel-heading">Hora Lord</span>
          </div>
          <div className="hora-card__planet cinzel-heading" style={{ color: horaColor }}>
            {data.horaLord}
          </div>
          <PlanetBadge planet={data.horaLord} />
          <div className="hora-card__meta">
            <div className="hora-meta-row">
              <span className="hora-meta-label">Birth Time</span>
              <span className="hora-meta-value">{timeOfBirth}</span>
            </div>
            <div className="hora-meta-row">
              <span className="hora-meta-label">Hora Number</span>
              <span className="hora-meta-value">{data.horaNumber} (from sunrise)</span>
            </div>
            <div className="hora-meta-row">
              <span className="hora-meta-label">Element</span>
              <span className="hora-meta-value">{PLANET_META[data.horaLord].element}</span>
            </div>
            <div className="hora-meta-row">
              <span className="hora-meta-label">Gemstone</span>
              <span className="hora-meta-value">{PLANET_META[data.horaLord].gemstone}</span>
            </div>
          </div>
          <p className="hora-card__interpretation">
            The planetary hour of your birth is ruled by <strong>{data.horaLord}</strong>.
            This hora lord colours your first instincts, birth energy, and the quality of your natural talents.
            {' '}{PLANET_META[data.horaLord].mantra} — your protective mantra.
          </p>
        </div>

        {/* Lagna */}
        <div className="hora-card glass-card--inner">
          <div className="hora-card__badge" style={{ background: `${lagnaColor}22`, borderColor: `${lagnaColor}66` }}>
            <span className="hora-card__icon" style={{ color: lagnaColor }}>
              {data.lagnaSign.symbol}
            </span>
            <span className="hora-card__eyebrow cinzel-heading">Lagna (Ascendant)</span>
          </div>
          <div className="hora-card__planet cinzel-heading" style={{ color: lagnaColor }}>
            {data.lagnaSign.name}
          </div>
          <div className="lagna-tamil cinzel-heading">({data.lagnaSign.tamilName})</div>
          <PlanetBadge planet={data.lagnaRuler} />
          <div className="hora-card__meta">
            <div className="hora-meta-row">
              <span className="hora-meta-label">Sign</span>
              <span className="hora-meta-value">{data.lagnaSign.symbol} {data.lagnaSign.name}</span>
            </div>
            <div className="hora-meta-row">
              <span className="hora-meta-label">Ruling Planet</span>
              <span className="hora-meta-value">{data.lagnaRuler}</span>
            </div>
            <div className="hora-meta-row">
              <span className="hora-meta-label">Element</span>
              <span className="hora-meta-value">{data.lagnaSign.element}</span>
            </div>
          </div>
          <p className="hora-card__interpretation">
            {data.lagnaSign.coreTrait}. Your {data.lagnaSign.name} ascendant shapes your outward personality,
            physical appearance, and the first impression you make on the world.
          </p>
        </div>
      </div>
    </SectionCard>
  )
}

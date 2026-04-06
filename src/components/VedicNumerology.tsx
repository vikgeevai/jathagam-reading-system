import SectionCard from './shared/SectionCard'
import PlanetBadge from './shared/PlanetBadge'
import type { VedicResult } from '@/utils/numerologyCalc'

interface Props {
  data: VedicResult
}

export default function VedicNumerology({ data }: Props) {
  return (
    <SectionCard
      title="✦ Date of Birth — Vedic Numerology"
      subtitle="The three sacred numbers that govern your earthly journey"
      sectionIndex={1}
      variant="default"
    >
      <div className="vedic-grid">
        <VedicCard
          title="Moolank"
          subtitle="Birth Number"
          number={data.moolank}
          planet={data.moolankPlanet}
          info={data.moolankInfo}
          icon="🌞"
        />
        <VedicCard
          title="Bhagyank"
          subtitle="Destiny Number"
          number={data.bhagyank}
          planet={data.bhagyankPlanet}
          info={data.bhagyankInfo}
          icon="🌟"
        />
        <VedicCard
          title="Kua Number"
          subtitle="Feng Shui / Direction"
          number={data.kuaNumber}
          planet={data.kuaPlanet}
          info={data.kuaInfo}
          icon="🧭"
        />
      </div>
    </SectionCard>
  )
}

function VedicCard({
  title, subtitle, number, planet, info, icon,
}: {
  title: string; subtitle: string; number: number
  planet: import('@/data/astrologyData').Planet
  info: import('@/data/astrologyData').VedicNumber
  icon: string
}) {
  return (
    <div className="vedic-card glass-card--inner">
      <div className="vedic-card__header">
        <span className="vedic-card__icon">{icon}</span>
        <div>
          <div className="vedic-card__title cinzel-heading">{title}</div>
          <div className="vedic-card__subtitle">{subtitle}</div>
        </div>
        <div className="vedic-card__number cinzel-heading">{number}</div>
      </div>
      <PlanetBadge planet={planet} />
      <div className="vedic-card__details">
        <span className="vedic-detail"><span className="vedic-detail__label">Element</span> {info.element}</span>
        <span className="vedic-detail"><span className="vedic-detail__label">Gemstone</span> {info.gemstone}</span>
        <span className="vedic-detail"><span className="vedic-detail__label">Colour</span> {info.luckyColour}</span>
        <span className="vedic-detail"><span className="vedic-detail__label">Lucky Days</span> {info.luckyDays.join(', ')}</span>
      </div>
      <p className="vedic-card__interpretation">{info.interpretation}</p>
    </div>
  )
}

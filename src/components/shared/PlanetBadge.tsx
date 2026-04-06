import { PLANET_META } from '@/data/astrologyData'
import type { Planet } from '@/data/astrologyData'

interface PlanetBadgeProps {
  planet: Planet
  size?: 'sm' | 'md'
}

export default function PlanetBadge({ planet, size = 'md' }: PlanetBadgeProps) {
  const meta = PLANET_META[planet]
  return (
    <span
      className={`planet-badge planet-badge--${size}`}
      style={{ '--planet-colour': meta.colour } as React.CSSProperties}
    >
      <span className="planet-badge__dot" />
      {planet}
    </span>
  )
}

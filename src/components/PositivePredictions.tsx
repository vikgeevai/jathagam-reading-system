import SectionCard from './shared/SectionCard'
import type { Prediction } from '@/data/astrologyData'

interface Props {
  predictions: Prediction[]
}

export default function PositivePredictions({ predictions }: Props) {
  return (
    <SectionCard
      title="✦ Top 10 Favourable Predictions"
      subtitle="Cosmic blessings and auspicious events aligned in your favour"
      sectionIndex={4}
      variant="green"
    >
      <div className="prediction-grid">
        {predictions.map((p, i) => (
          <div
            key={p.id}
            className="prediction-card prediction-card--positive"
            style={{ '--card-index': i } as React.CSSProperties}
          >
            <div className="prediction-card__header">
              <span className="prediction-card__icon">{p.icon}</span>
              <div>
                <div className="prediction-card__category">{p.category.toUpperCase()}</div>
                <h3 className="prediction-card__headline cinzel-heading">{p.headline}</h3>
              </div>
              <span className="prediction-card__number cinzel-heading">{i + 1}</span>
            </div>
            <p className="prediction-card__elaboration">{p.elaboration}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}

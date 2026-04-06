import SectionCard from './shared/SectionCard'
import type { Prediction } from '@/data/astrologyData'

interface Props {
  warnings: Prediction[]
}

export default function Warnings({ warnings }: Props) {
  return (
    <SectionCard
      title="✦ Top 10 Caution Areas"
      subtitle="Areas requiring awareness, remedies, and preventive action"
      sectionIndex={5}
      variant="red"
    >
      <div className="prediction-grid">
        {warnings.map((w, i) => (
          <div
            key={w.id}
            className="prediction-card prediction-card--warning"
            style={{ '--card-index': i } as React.CSSProperties}
          >
            <div className="prediction-card__header">
              <span className="prediction-card__icon">{w.icon}</span>
              <div>
                <div className="prediction-card__category">{w.category.toUpperCase()}</div>
                <h3 className="prediction-card__headline cinzel-heading">{w.headline}</h3>
              </div>
              <span className="prediction-card__number prediction-card__number--red cinzel-heading">{i + 1}</span>
            </div>
            <p className="prediction-card__elaboration">{w.elaboration}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}

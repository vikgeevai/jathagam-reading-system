import SectionCard from './shared/SectionCard'
import type { DomainResult } from '@/utils/domainScores'

interface Props {
  domains: DomainResult[]
}

const DOMAIN_ICONS: Record<string, string> = {
  career: '💼',
  health: '💚',
  finance: '💰',
  family: '👨‍👩‍👧',
  business: '🏢',
}

export default function LifeDomains({ domains }: Props) {
  return (
    <SectionCard
      title="✦ Jathagam Life Domain Scores"
      subtitle="Planetary influences on your five key life areas"
      sectionIndex={3}
      variant="default"
    >
      <div className="domains-list">
        {domains.map((domain, i) => (
          <div key={domain.key} className="domain-item" style={{ '--item-index': i } as React.CSSProperties}>
            <div className="domain-header">
              <div className="domain-title">
                <span className="domain-icon">{DOMAIN_ICONS[domain.key]}</span>
                <span className="domain-label cinzel-heading">{domain.label}</span>
              </div>
              <div className="domain-score-badge" data-colour={domain.colour}>
                <span className="domain-score cinzel-heading">{domain.score}</span>
                <span className="domain-score-max">/100</span>
              </div>
            </div>
            <div className="progress-track">
              <div
                className={`progress-fill progress-fill--${domain.colour}`}
                style={{ '--target-width': `${domain.score}%`, animationDelay: `${0.3 + i * 0.15}s` } as React.CSSProperties}
              />
            </div>
            <p className="domain-reading">{domain.reading}</p>
          </div>
        ))}
      </div>
      <div className="domain-legend">
        <span className="legend-pill legend-pill--green">70–100 Favourable</span>
        <span className="legend-pill legend-pill--amber">40–69 Moderate</span>
        <span className="legend-pill legend-pill--red">Below 40 Needs Attention</span>
      </div>
    </SectionCard>
  )
}

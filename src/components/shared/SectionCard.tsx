import type { ReactNode } from 'react'

interface SectionCardProps {
  title: string
  subtitle?: string
  sectionIndex: number
  variant?: 'default' | 'gold' | 'green' | 'red' | 'pariharam'
  children: ReactNode
  className?: string
}

export default function SectionCard({
  title,
  subtitle,
  sectionIndex,
  variant = 'default',
  children,
  className = '',
}: SectionCardProps) {
  return (
    <section
      className={`glass-card glass-card--${variant} section-reveal ${className}`}
      style={{ '--section-index': sectionIndex } as React.CSSProperties}
    >
      <div className="section-header">
        <h2 className="section-title cinzel-heading">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="section-divider" />
      </div>
      {children}
    </section>
  )
}

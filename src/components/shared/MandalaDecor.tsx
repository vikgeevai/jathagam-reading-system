interface MandalaDecorProps {
  size?: number
  className?: string
}

export default function MandalaDecor({ size = 240, className = '' }: MandalaDecorProps) {
  const cx = size / 2
  const cy = size / 2
  const r1 = size * 0.42
  const r2 = size * 0.30
  const r3 = size * 0.18

  // Generate lotus petals
  const petalCount = 16
  const petals = Array.from({ length: petalCount }, (_, i) => {
    const angle = (i * 360) / petalCount
    const rad = (angle * Math.PI) / 180
    const px = cx + r1 * Math.cos(rad)
    const py = cy + r1 * Math.sin(rad)
    const cpx = cx + (r1 * 0.6) * Math.cos(rad - 0.3)
    const cpy = cy + (r1 * 0.6) * Math.sin(rad - 0.3)
    const cp2x = cx + (r1 * 0.6) * Math.cos(rad + 0.3)
    const cp2y = cy + (r1 * 0.6) * Math.sin(rad + 0.3)
    return `M ${cx} ${cy} C ${cpx} ${cpy}, ${cp2x} ${cp2y}, ${px} ${py} Z`
  })

  // Inner star points (6-pointed)
  const starPoints = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * Math.PI / 180
    const angle2 = ((i * 60 + 30) - 90) * Math.PI / 180
    return {
      outer: [cx + r2 * Math.cos(angle), cy + r2 * Math.sin(angle)],
      inner: [cx + r3 * Math.cos(angle2), cy + r3 * Math.sin(angle2)],
    }
  })

  const triangleUp = `${cx},${cy - r2} ${cx + r2 * 0.866},${cy + r2 * 0.5} ${cx - r2 * 0.866},${cy + r2 * 0.5}`
  const triangleDown = `${cx},${cy + r2} ${cx + r2 * 0.866},${cy - r2 * 0.5} ${cx - r2 * 0.866},${cy - r2 * 0.5}`

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={`mandala-svg ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="mandala-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Outer ring — lotus petals */}
      <g className="mandala-outer" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {petals.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.5" filter="url(#mandala-glow)" />
        ))}
        <circle cx={cx} cy={cy} r={r1} fill="none" stroke="var(--gold)" strokeWidth="0.6" opacity="0.3" strokeDasharray="4 6" />
      </g>

      {/* Middle ring — star of david / shatkona */}
      <g className="mandala-inner" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <polygon points={triangleUp} fill="none" stroke="var(--saffron)" strokeWidth="1" opacity="0.7" />
        <polygon points={triangleDown} fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.7" />
        <circle cx={cx} cy={cy} r={r2} fill="none" stroke="var(--gold)" strokeWidth="0.8" opacity="0.4" />
        {starPoints.map((sp, i) => (
          <line key={i}
            x1={sp.outer[0]} y1={sp.outer[1]}
            x2={sp.inner[0]} y2={sp.inner[1]}
            stroke="var(--gold-light)" strokeWidth="0.6" opacity="0.5"
          />
        ))}
      </g>

      {/* Inner circle */}
      <circle cx={cx} cy={cy} r={r3} fill="rgba(212,175,55,0.06)" stroke="var(--gold)" strokeWidth="1" opacity="0.6" />
      <circle cx={cx} cy={cy} r={r3 * 0.6} fill="none" stroke="var(--saffron)" strokeWidth="0.8" opacity="0.4" strokeDasharray="2 4" />

      {/* Om symbol at centre */}
      <text
        x={cx} y={cy + size * 0.05}
        textAnchor="middle"
        fontSize={size * 0.16}
        fill="var(--gold)"
        opacity="0.9"
        filter="url(#mandala-glow)"
        fontFamily="serif"
      >
        ॐ
      </text>
    </svg>
  )
}

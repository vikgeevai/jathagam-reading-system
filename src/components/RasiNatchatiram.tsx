import SectionCard from './shared/SectionCard'
import PlanetBadge from './shared/PlanetBadge'
import { RASI_DATA, NATCHATIRAM_DATA } from '@/data/rasiNatchatiramData'

interface Props {
  rasiName: string
  natchatiramName: string
}

export default function RasiNatchatiram({ rasiName, natchatiramName }: Props) {
  const rasi = RASI_DATA.find(r => r.name === rasiName) ?? RASI_DATA[7]
  const natchatiram = NATCHATIRAM_DATA.find(n => n.tamilName === natchatiramName) ?? NATCHATIRAM_DATA[16]

  return (
    <SectionCard
      title="✦ Rasi & Natchatiram — Cosmic Identity"
      subtitle="Your Moon sign and birth star reveal the deepest blueprint of your soul's journey"
      sectionIndex={8}
      variant="gold"
    >
      <div className="rasi-natc-grid">
        {/* Rasi Card */}
        <div className="rasi-card glass-card--inner">
          <div className="rasi-card__header">
            <span className="rasi-symbol cinzel-heading">{rasi.symbol}</span>
            <div>
              <div className="rasi-badge cinzel-heading">Rasi (Moon Sign)</div>
              <div className="rasi-name cinzel-heading">{rasi.name}</div>
              <div className="rasi-english">({rasi.sanskrit} / {rasi.english})</div>
            </div>
            <PlanetBadge planet={rasi.rulingPlanet} />
          </div>

          <div className="rasi-meta-row">
            <div className="rasi-meta-item">
              <span className="rasi-meta-label cinzel-heading">Element</span>
              <span className="rasi-meta-value">{rasi.element}</span>
            </div>
            <div className="rasi-meta-item">
              <span className="rasi-meta-label cinzel-heading">Quality</span>
              <span className="rasi-meta-value">{rasi.quality}</span>
            </div>
            <div className="rasi-meta-item">
              <span className="rasi-meta-label cinzel-heading">Body Part</span>
              <span className="rasi-meta-value">{rasi.bodyPart}</span>
            </div>
            <div className="rasi-meta-item">
              <span className="rasi-meta-label cinzel-heading">Deity</span>
              <span className="rasi-meta-value">{rasi.deity}</span>
            </div>
          </div>

          <p className="rasi-character">{rasi.character}</p>

          <div className="rasi-traits">
            <div className="rasi-strengths">
              <div className="trait-label cinzel-heading trait-label--green">✓ Strengths</div>
              {rasi.strengths.map((s, i) => <div key={i} className="trait-item trait-item--green">• {s}</div>)}
            </div>
            <div className="rasi-challenges">
              <div className="trait-label cinzel-heading trait-label--amber">⚠ Challenges</div>
              {rasi.challenges.map((c, i) => <div key={i} className="trait-item trait-item--amber">• {c}</div>)}
            </div>
          </div>

          <div className="rasi-lucky-row">
            <span className="lucky-pill">🎨 {rasi.luckyColour}</span>
            <span className="lucky-pill">🔢 {rasi.luckyNumber}</span>
            <span className="lucky-pill">📅 {rasi.luckyDay}</span>
            <span className="lucky-pill">💎 {rasi.gemstone}</span>
          </div>

          <div className="rasi-compatible">
            <span className="rasi-meta-label cinzel-heading">Compatible Rasis: </span>
            {rasi.compatibleRasis.map((r, i) => (
              <span key={i} className="compatible-pill">{r}</span>
            ))}
          </div>

          <p className="rasi-fortune">{rasi.generalFortune}</p>
        </div>

        {/* Natchatiram Card */}
        <div className="natc-card glass-card--inner">
          <div className="natc-card__header">
            <span className="natc-star-icon" aria-hidden="true">⭐</span>
            <div className="natc-header-text">
              <div className="rasi-badge natc-badge cinzel-heading">Natchatiram (Birth Star)</div>
              <div className="rasi-name cinzel-heading">{natchatiram.tamilName}</div>
              <div className="rasi-english">({natchatiram.sanskritName})</div>
            </div>
            <PlanetBadge planet={natchatiram.rulingPlanet} />
          </div>

          {/* Symbol as a styled label */}
          <div className="natc-symbol-row">
            <span className="natc-symbol-label cinzel-heading">Symbol</span>
            <span className="natc-symbol-value">{natchatiram.symbol}</span>
          </div>

          <div className="rasi-meta-row">
            <div className="rasi-meta-item">
              <span className="rasi-meta-label cinzel-heading">Dasha Lord</span>
              <span className="rasi-meta-value">{natchatiram.rulingPlanet}</span>
            </div>
            <div className="rasi-meta-item">
              <span className="rasi-meta-label cinzel-heading">Dasha Years</span>
              <span className="rasi-meta-value">{natchatiram.dashaYears} yrs</span>
            </div>
            <div className="rasi-meta-item">
              <span className="rasi-meta-label cinzel-heading">Deity</span>
              <span className="rasi-meta-value">{natchatiram.deity.split('(')[0].trim()}</span>
            </div>
            <div className="rasi-meta-item">
              <span className="rasi-meta-label cinzel-heading">Body Part</span>
              <span className="rasi-meta-value">{natchatiram.bodyPart}</span>
            </div>
          </div>

          <p className="rasi-character">{natchatiram.character}</p>

          <div className="rasi-traits">
            <div className="rasi-strengths">
              <div className="trait-label cinzel-heading trait-label--green">✓ Positive Traits</div>
              {natchatiram.positiveTraits.map((t, i) => <div key={i} className="trait-item trait-item--green">• {t}</div>)}
            </div>
            <div className="rasi-challenges">
              <div className="trait-label cinzel-heading trait-label--red">⚠ Watch For</div>
              {natchatiram.negativeTraits.map((t, i) => <div key={i} className="trait-item trait-item--red">• {t}</div>)}
            </div>
          </div>

          <div className="natc-details">
            <div className="natc-detail">
              <span className="rasi-meta-label cinzel-heading">Career Aptitude</span>
              <p className="natc-detail-value">{natchatiram.careerAptitude}</p>
            </div>
            <div className="natc-detail">
              <span className="rasi-meta-label cinzel-heading">Health Focus</span>
              <p className="natc-detail-value">{natchatiram.health}</p>
            </div>
            <div className="natc-detail">
              <span className="rasi-meta-label cinzel-heading">Spiritual Path</span>
              <p className="natc-detail-value">{natchatiram.spiritualPath}</p>
            </div>
          </div>

          <div className="natc-mantra glass-card--inner">
            <span className="rasi-meta-label cinzel-heading">Sacred Mantra</span>
            <div className="natc-mantra-text">"{natchatiram.mantra}"</div>
            <div className="natc-mantra-meta">
              <span className="mantra-meta-pill">🔢 108 times</span>
              <span className="mantra-meta-pill">🎵 {natchatiram.soundSyllables}</span>
              <span className="lucky-pill">🔢 {natchatiram.luckyNumber}</span>
              <span className="lucky-pill">🎨 {natchatiram.luckyColour}</span>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  )
}

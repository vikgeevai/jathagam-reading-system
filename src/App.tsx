import { useState } from 'react'
import { STAR_DATA } from '@/data/astrologyData'
import PaymentGate from '@/components/PaymentGate'
import InputForm from '@/components/InputForm'
import ChaldeanNumerology from '@/components/ChaldeanNumerology'
import VedicNumerology from '@/components/VedicNumerology'
import HoraLagna from '@/components/HoraLagna'
import LifeDomains from '@/components/LifeDomains'
import PositivePredictions from '@/components/PositivePredictions'
import Warnings from '@/components/Warnings'
import DosDontsRemedies from '@/components/DosDontsRemedies'
import Pariharam from '@/components/Pariharam'
import RasiNatchatiram from '@/components/RasiNatchatiram'
import SaniCycle from '@/components/SaniCycle'
import MasterReport from '@/components/MasterReport'
import type { FormData } from '@/components/InputForm'
import { calcChaldean, calcVedic } from '@/utils/numerologyCalc'
import { calcHoraLagna } from '@/utils/horaLagnaCalc'
import { calcDomainScores } from '@/utils/domainScores'
import { selectPredictions } from '@/utils/predictionsEngine'
import { buildPariharamPlan } from '@/utils/pariharamEngine'
import { calcSaniCycle } from '@/utils/saniCycleCalc'
import { compileReport } from '@/utils/reportCompiler'
import { NATCHATIRAM_DATA } from '@/data/rasiNatchatiramData'
import type { ChaldeanResult, VedicResult } from '@/utils/numerologyCalc'
import type { HoraLagnaResult } from '@/utils/horaLagnaCalc'
import type { DomainResult } from '@/utils/domainScores'
import type { Prediction, Planet } from '@/data/astrologyData'
import type { FullPariharamPlan } from '@/utils/pariharamEngine'
import type { SaniCycleResult } from '@/utils/saniCycleCalc'

export interface JathagamResult {
  input: FormData
  chaldean: ChaldeanResult
  vedic: VedicResult
  horaLagna: HoraLagnaResult
  domains: DomainResult[]
  predictions: Prediction[]
  warnings: Prediction[]
  pariharam: FullPariharamPlan
  saniCycle: SaniCycleResult
  reportText: string
}

function StarField() {
  return (
    <div className="star-field" aria-hidden="true">
      {STAR_DATA.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            '--duration': `${s.duration}s`,
            '--delay': `${s.delay}s`,
            opacity: s.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

export default function App() {
  const [result, setResult] = useState<JathagamResult | null>(null)

  function handleFormSubmit(formData: FormData) {
    const chaldean = calcChaldean(formData.fullName)
    const vedic = calcVedic(formData.dob, formData.gender)
    const horaLagna = calcHoraLagna(formData.dob, formData.timeOfBirth)
    const domains = calcDomainScores(vedic.moolank, vedic.bhagyank, horaLagna.horaLord, horaLagna.lagnaRuler)
    const saniCycle = calcSaniCycle(formData.rasi, formData.natchatiram)
    const natcData = NATCHATIRAM_DATA.find(n => n.tamilName === formData.natchatiram)
    const natcRulingPlanet = natcData?.rulingPlanet as Planet | undefined
    const predictions = selectPredictions(vedic.moolank, vedic.bhagyank, horaLagna.horaLord, horaLagna.lagnaRuler, true, 10, formData.rasi, natcRulingPlanet, saniCycle.currentSaniType)
    const warnings = selectPredictions(vedic.moolank, vedic.bhagyank, horaLagna.horaLord, horaLagna.lagnaRuler, false, 10, formData.rasi, natcRulingPlanet, saniCycle.currentSaniType)
    const pariharam = buildPariharamPlan(horaLagna.horaLord, vedic.moolank, domains)

    const partial: Omit<JathagamResult, 'reportText'> = {
      input: formData, chaldean, vedic, horaLagna, domains, predictions, warnings, pariharam, saniCycle,
    }
    const reportText = compileReport({ ...partial, reportText: '' })
    setResult({ ...partial, reportText })

    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
  }

  return (
    <PaymentGate>
      <StarField />
      <div className="app-container">
        {!result ? (
          <InputForm onSubmit={handleFormSubmit} />
        ) : (
          <div className="report-container">
            {/* Report Header */}
            <div className="report-header">
              <div className="report-header__left">
                <h1 className="report-header__name cinzel-heading">{result.input.fullName}</h1>
                <p className="report-header__meta">
                  {result.input.dob} · {result.input.timeOfBirth} · {result.input.gender}
                  {result.input.rasi && ` · ${result.input.rasi} Rasi · ${result.input.natchatiram}`}
                </p>
              </div>
              <button className="btn-new-reading cinzel-heading" onClick={() => setResult(null)}>
                ↩ New Reading
              </button>
            </div>

            <ChaldeanNumerology data={result.chaldean} name={result.input.fullName} />
            <VedicNumerology data={result.vedic} />
            <HoraLagna data={result.horaLagna} timeOfBirth={result.input.timeOfBirth} />
            <LifeDomains domains={result.domains} />
            <PositivePredictions predictions={result.predictions} />
            <Warnings warnings={result.warnings} />
            <DosDontsRemedies
              dominantPlanet={result.horaLagna.horaLord}
              moolank={result.vedic.moolank}
              bhagyank={result.vedic.bhagyank}
            />
            <Pariharam pariharam={result.pariharam} />
            <RasiNatchatiram rasiName={result.input.rasi} natchatiramName={result.input.natchatiram} />
            <SaniCycle data={result.saniCycle} />
            <MasterReport result={result} />
          </div>
        )}
      </div>
    </PaymentGate>
  )
}

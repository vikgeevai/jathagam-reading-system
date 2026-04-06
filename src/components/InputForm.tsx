import { useState, useEffect, useCallback } from 'react'
import MandalaDecor from './shared/MandalaDecor'
import { RASI_DATA, NATCHATIRAM_DATA } from '@/data/rasiNatchatiramData'
import { detectRasiNatchatiram, type MoonDetectionResult } from '@/utils/moonCalc'

export interface FormData {
  fullName: string
  dob: string
  timeOfBirth: string
  gender: 'Male' | 'Female'
  rasi: string
  natchatiram: string
}

interface InputFormProps {
  onSubmit: (data: FormData) => void
}

// Filter nakshatras that belong to a given rasi
function getNatchatiramForRasi(rasiName: string) {
  const rasi = RASI_DATA.find(r => r.name === rasiName)
  if (!rasi) return NATCHATIRAM_DATA
  return NATCHATIRAM_DATA.filter(n => n.rasiIndex === rasi.index)
}

// ── Pada suffix ─────────────────────────────────────────────────
const PADA_LABELS = ['', '1st', '2nd', '3rd', '4th']

export default function InputForm({ onSubmit }: InputFormProps) {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    dob: '',
    timeOfBirth: '',
    gender: 'Male',
    rasi: '',
    natchatiram: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [moonResult, setMoonResult] = useState<MoonDetectionResult | null>(null)
  const [autoDetected, setAutoDetected] = useState(false)
  const [overrideMode, setOverrideMode] = useState(false)

  const filteredNatchatirams = form.rasi ? getNatchatiramForRasi(form.rasi) : NATCHATIRAM_DATA

  // ── Auto-detect whenever DOB + time are both valid ────────────
  const tryAutoDetect = useCallback((dob: string, time: string) => {
    const dobValid  = /^\d{2}\/\d{2}\/\d{4}$/.test(dob)
    const timeValid = /^\d{2}:\d{2}$/.test(time)
    if (!dobValid || !timeValid) {
      setMoonResult(null)
      setAutoDetected(false)
      return
    }
    const result = detectRasiNatchatiram(dob, time)
    if (result) {
      setMoonResult(result)
      setForm(f => ({ ...f, rasi: result.rasiName, natchatiram: result.natchatiramName }))
      setAutoDetected(true)
      setOverrideMode(false)
      setErrors(e => {
        const next = { ...e }
        delete next.rasi
        delete next.natchatiram
        return next
      })
    } else {
      setMoonResult(null)
    }
  }, [])

  useEffect(() => {
    if (!overrideMode) {
      tryAutoDetect(form.dob, form.timeOfBirth)
    }
  }, [form.dob, form.timeOfBirth, overrideMode, tryAutoDetect])

  // ── Validation ────────────────────────────────────────────────
  function validate(): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required'
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(form.dob)) errs.dob = 'Format: DD/MM/YYYY'
    if (!/^\d{2}:\d{2}$/.test(form.timeOfBirth)) errs.timeOfBirth = 'Format: HH:MM (24hr)'
    if (!form.rasi) errs.rasi = 'Rasi could not be determined — check your date & time'
    if (!form.natchatiram) errs.natchatiram = 'Natchatiram could not be determined'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (validate()) onSubmit(form)
  }

  function handleDobChange(raw: string) {
    let v = raw.replace(/[^\d/]/g, '')
    if (v.length === 2 && !v.includes('/')) v += '/'
    if (v.length === 5 && v.split('/').length === 2) v += '/'
    setForm(f => ({ ...f, dob: v }))
  }

  function handleTimeChange(raw: string) {
    let v = raw.replace(/[^\d:]/g, '')
    if (v.length === 2 && !v.includes(':')) v += ':'
    setForm(f => ({ ...f, timeOfBirth: v }))
  }

  function handleManualRasiChange(rasiName: string) {
    const natchatirams = getNatchatiramForRasi(rasiName)
    setForm(f => ({
      ...f,
      rasi: rasiName,
      natchatiram: natchatirams.length === 1 ? natchatirams[0].tamilName : '',
    }))
    setAutoDetected(false)
  }

  function enterOverride() {
    setOverrideMode(true)
    setAutoDetected(false)
  }

  function revertToAuto() {
    setOverrideMode(false)
    tryAutoDetect(form.dob, form.timeOfBirth)
  }

  // Detect banner colour
  const bannerClass = moonResult ? 'moon-detect-banner moon-detect-banner--found' : ''

  return (
    <div className="form-page">
      <div className="form-container glass-card glass-card--gold">
        {/* Header */}
        <div className="form-header">
          <MandalaDecor size={200} className="form-mandala" />
          <div className="form-title-block">
            <p className="form-eyebrow">Sacred Vedic System</p>
            <h1 className="form-title cinzel-heading">Jathagam Reading</h1>
            <p className="form-subtitle">
              Enter your birth details — your Rasi &amp; Natchatiram<br />
              will be calculated automatically from the Moon's position
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="jathagam-form" noValidate>
          <div className="form-grid">

            {/* Full Name */}
            <div className="form-group form-group--full">
              <label className="form-label cinzel-heading" htmlFor="fullName">✦ Full Name</label>
              <input
                id="fullName" type="text"
                className={`form-input ${errors.fullName ? 'form-input--error' : ''}`}
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
              />
              {errors.fullName && <span className="form-error">{errors.fullName}</span>}
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label className="form-label cinzel-heading" htmlFor="dob">✦ Date of Birth</label>
              <input
                id="dob" type="text"
                className={`form-input ${errors.dob ? 'form-input--error' : ''}`}
                placeholder="DD/MM/YYYY"
                value={form.dob} maxLength={10}
                onChange={e => handleDobChange(e.target.value)}
              />
              {errors.dob && <span className="form-error">{errors.dob}</span>}
            </div>

            {/* Time of Birth */}
            <div className="form-group">
              <label className="form-label cinzel-heading" htmlFor="time">✦ Time of Birth (IST)</label>
              <input
                id="time" type="text"
                className={`form-input ${errors.timeOfBirth ? 'form-input--error' : ''}`}
                placeholder="HH:MM (24-hr)"
                value={form.timeOfBirth} maxLength={5}
                onChange={e => handleTimeChange(e.target.value)}
              />
              {errors.timeOfBirth && <span className="form-error">{errors.timeOfBirth}</span>}
              <span className="form-hint">Enter time in Indian Standard Time (IST)</span>
            </div>

            {/* Gender */}
            <div className="form-group">
              <label className="form-label cinzel-heading">✦ Gender</label>
              <div className="gender-options">
                {(['Male', 'Female'] as const).map(g => (
                  <label key={g} className={`gender-option ${form.gender === g ? 'gender-option--active' : ''}`}>
                    <input type="radio" name="gender" value={g} checked={form.gender === g}
                      onChange={() => setForm(f => ({ ...f, gender: g }))} />
                    <span>{g === 'Male' ? '♂' : '♀'} {g}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* ── Moon Auto-Detect Result Banner ───────────────────── */}
          {moonResult && !overrideMode && (
            <div className={bannerClass}>
              <div className="moon-detect-icon">🌙</div>
              <div className="moon-detect-content">
                <div className="moon-detect-title cinzel-heading">
                  Moon Position Calculated
                </div>
                <div className="moon-detect-value">
                  <span className="moon-lon-pill">{moonResult.moonLongitudeDisplay}</span>
                  <span className="moon-arrow">→</span>
                  <span className="moon-rasi-pill">
                    {RASI_DATA.find(r => r.name === moonResult.rasiName)?.symbol ?? '🌙'}
                    &nbsp;{moonResult.rasiName}
                  </span>
                  <span className="moon-dot">·</span>
                  <span className="moon-natc-pill">⭐ {moonResult.natchatiramName}</span>
                  <span className="moon-pada">
                    {PADA_LABELS[moonResult.natchatiramPada]} Pada
                  </span>
                </div>
                <div className="moon-detect-sub">
                  Derived from Moon's sidereal longitude using Lahiri Ayanamsa
                </div>
              </div>
              <button
                type="button"
                className="moon-override-btn"
                onClick={enterOverride}
                title="Override with manual selection"
              >
                Override
              </button>
            </div>
          )}

          {/* ── No detection yet — neutral hint ─────────────────── */}
          {!moonResult && !overrideMode && (
            <div className="moon-detect-banner moon-detect-banner--waiting">
              <div className="moon-detect-icon">🌙</div>
              <div className="moon-detect-content">
                <div className="moon-detect-title">Auto-Detection</div>
                <div className="moon-detect-sub">
                  Enter your Date of Birth and Time of Birth above — your Rasi and
                  Natchatiram will be calculated automatically from the Moon's position
                  at the moment you were born.
                </div>
              </div>
            </div>
          )}

          {/* ── Manual override dropdowns ────────────────────────── */}
          {overrideMode && (
            <div className="moon-override-block">
              <div className="moon-override-header">
                <span className="moon-override-label">✎ Manual Override</span>
                <button type="button" className="moon-auto-btn" onClick={revertToAuto}>
                  ↺ Use Auto-Detection
                </button>
              </div>

              <div className="form-grid">
                {/* Rasi override */}
                <div className="form-group">
                  <label className="form-label cinzel-heading" htmlFor="rasi">🌙 Rasi (Moon Sign)</label>
                  <select
                    id="rasi"
                    className={`form-input form-select ${errors.rasi ? 'form-input--error' : ''}`}
                    value={form.rasi}
                    onChange={e => handleManualRasiChange(e.target.value)}
                  >
                    <option value="">— Select your Rasi —</option>
                    {RASI_DATA.map(r => (
                      <option key={r.index} value={r.name}>
                        {r.symbol} {r.name} ({r.english})
                      </option>
                    ))}
                  </select>
                  {errors.rasi && <span className="form-error">{errors.rasi}</span>}
                </div>

                {/* Natchatiram override */}
                <div className="form-group">
                  <label className="form-label cinzel-heading" htmlFor="natchatiram">⭐ Natchatiram (Birth Star)</label>
                  <select
                    id="natchatiram"
                    className={`form-input form-select ${errors.natchatiram ? 'form-input--error' : ''}`}
                    value={form.natchatiram}
                    onChange={e => setForm(f => ({ ...f, natchatiram: e.target.value }))}
                  >
                    <option value="">— Select Natchatiram —</option>
                    {filteredNatchatirams.map(n => (
                      <option key={n.index} value={n.tamilName}>
                        {n.tamilName} ({n.sanskritName}) — {n.rulingPlanet}
                      </option>
                    ))}
                  </select>
                  {errors.natchatiram && <span className="form-error">{errors.natchatiram}</span>}
                  <span className="form-hint">
                    {form.rasi ? `Showing stars for ${form.rasi}.` : 'Select Rasi first to filter.'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Show detected values as read-only summary if auto-detected */}
          {autoDetected && !overrideMode && (
            <div className="moon-confirmed-row">
              <div className="moon-confirmed-item">
                <span className="moon-confirmed-label">RASI</span>
                <span className="moon-confirmed-value">
                  {RASI_DATA.find(r => r.name === form.rasi)?.symbol} {form.rasi}
                  <span className="moon-confirmed-eng">
                    &nbsp;({RASI_DATA.find(r => r.name === form.rasi)?.english})
                  </span>
                </span>
              </div>
              <div className="moon-confirmed-divider">·</div>
              <div className="moon-confirmed-item">
                <span className="moon-confirmed-label">NATCHATIRAM</span>
                <span className="moon-confirmed-value">
                  {form.natchatiram}
                  {moonResult && (
                    <span className="moon-confirmed-eng">
                      &nbsp;· {PADA_LABELS[moonResult.natchatiramPada]} Pada
                    </span>
                  )}
                </span>
              </div>
            </div>
          )}

          <button type="submit" className="btn-generate cinzel-heading">
            ✦ Generate Jathagam ✦
          </button>
        </form>

        {/* Footer decoration */}
        <div className="form-footer-decor">
          <span>ॐ</span>
          <span className="form-footer-line" />
          <span>जन्म पत्रिका</span>
          <span className="form-footer-line" />
          <span>ॐ</span>
        </div>
      </div>
    </div>
  )
}

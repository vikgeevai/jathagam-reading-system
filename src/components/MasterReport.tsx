import { useState } from 'react'
import SectionCard from './shared/SectionCard'
import type { JathagamResult } from '@/App'

interface Props {
  result: JathagamResult
}

export default function MasterReport({ result }: Props) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(result.reportText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <SectionCard
      title="✦ Complete Jathagam Report"
      subtitle="Your full personalised reading compiled for client records"
      sectionIndex={9}
      variant="gold"
    >
      <div className="master-report-preview">
        <pre className="report-text">{result.reportText}</pre>
      </div>
      <button
        className={`btn-copy-report cinzel-heading ${copied ? 'btn-copy-report--copied' : ''}`}
        onClick={handleCopy}
      >
        {copied ? '✅ Copied!' : '📋 Copy Report'}
      </button>
    </SectionCard>
  )
}

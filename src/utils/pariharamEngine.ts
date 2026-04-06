import { PARIHARAM_BY_PLANET, DOMAIN_REMEDIES, MOOLANK_PLANET } from '@/data/astrologyData'
import type { Planet, PariharamPlan, DomainRemedy } from '@/data/astrologyData'
import type { DomainResult } from './domainScores'

export interface WeekRemedy {
  week: number
  label: string
  activities: string[]
}

export interface FullPariharamPlan {
  primaryPlan: PariharamPlan
  secondaryPlan: PariharamPlan
  dominantPlanet: Planet
  moolankPlanet: Planet
  situationalRemedies: { domain: string; remedy: DomainRemedy | undefined }[]
  monthlyCalendar: WeekRemedy[]
}

function buildMonthlyCalendar(primary: PariharamPlan, secondary: PariharamPlan): WeekRemedy[] {
  return [
    {
      week: 1,
      label: 'Week 1 — Mantra & Fasting',
      activities: [
        `Chant "${primary.mantraText}" — ${primary.mantraCount} times at ${primary.mantraBestTime}`,
        `Fast on ${primary.prayerDay} (fruit and water only)`,
        `Light ${primary.lampWicks}-wick ${primary.lampColour} lamp facing ${primary.lampDirection}`,
      ],
    },
    {
      week: 2,
      label: 'Week 2 — Temple Activity',
      activities: [
        `Visit ${primary.templeType} on ${primary.bestDay}`,
        `${primary.templeActivity}`,
        `Perform ${primary.pradakshinaCount} pradakshinam around the sanctum`,
      ],
    },
    {
      week: 3,
      label: 'Week 3 — Offerings Ritual',
      activities: [
        `Offer: ${primary.offerings.slice(0, 3).join(', ')}`,
        `Secondary deity: ${secondary.primaryDeity} — offer ${secondary.offerings[0]}`,
        `Recite: ${primary.mantraName} at ${primary.prayerTime}`,
      ],
    },
    {
      week: 4,
      label: 'Week 4 — Yantra Meditation & Charity',
      activities: [
        `Meditate on ${primary.planet} Yantra for 21 minutes`,
        `Donate: ${secondary.offerings[1] ?? secondary.offerings[0]} to temple or needy`,
        `Chant combined mantra: "${primary.mantraText}" + "${secondary.mantraText}"`,
      ],
    },
  ]
}

export function buildPariharamPlan(
  horaPlanet: Planet,
  moolank: number,
  domainScores: DomainResult[],
): FullPariharamPlan {
  const moolankPlanet = MOOLANK_PLANET[moolank]
  const primaryPlan = PARIHARAM_BY_PLANET[horaPlanet]
  const secondaryPlan = PARIHARAM_BY_PLANET[moolankPlanet]

  const weakDomains = domainScores.filter(d => d.score < 60)
  const situationalRemedies = weakDomains.map(d => ({
    domain: d.label,
    remedy:
      DOMAIN_REMEDIES.find(r => r.domain === d.key && r.planet === horaPlanet) ??
      DOMAIN_REMEDIES.find(r => r.domain === d.key),
  }))

  const monthlyCalendar = buildMonthlyCalendar(primaryPlan, secondaryPlan)

  return {
    primaryPlan,
    secondaryPlan,
    dominantPlanet: horaPlanet,
    moolankPlanet,
    situationalRemedies,
    monthlyCalendar,
  }
}

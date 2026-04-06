// ============================================================
// ASTROLOGY DATA — All lookup tables. Pure data, zero logic.
// ============================================================

export type Planet = 'Sun' | 'Moon' | 'Mars' | 'Mercury' | 'Jupiter' | 'Venus' | 'Saturn' | 'Rahu' | 'Ketu'
export type DomainKey = 'career' | 'health' | 'finance' | 'family' | 'business'

// ── Chaldean Letter Map ──────────────────────────────────────
export const CHALDEAN_MAP: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7,
}

// ── Chaldean Number Interpretations ─────────────────────────
export interface ChaldeanInterpretation {
  rulingPlanet: Planet
  interpretation: string
}
export const CHALDEAN_INTERPRETATIONS: Record<number, ChaldeanInterpretation> = {
  1: { rulingPlanet: 'Sun', interpretation: 'You are a natural leader with a pioneering spirit and strong will. The Sun blesses you with authority, creativity, and the drive to stand apart from the crowd.' },
  2: { rulingPlanet: 'Moon', interpretation: 'You are intuitive, sensitive, and deeply attuned to the emotions of others. The Moon grants you psychic sensitivity, diplomacy, and a nurturing heart.' },
  3: { rulingPlanet: 'Jupiter', interpretation: 'You are optimistic, expressive, and brimming with creative energy. Jupiter showers you with wisdom, good fortune, and the gift of inspiring those around you.' },
  4: { rulingPlanet: 'Rahu', interpretation: 'You are disciplined, hardworking, and build lasting foundations. Rahu pushes you toward unconventional paths and hidden knowledge for material mastery.' },
  5: { rulingPlanet: 'Mercury', interpretation: 'You are versatile, communicative, and thrive on change and adventure. Mercury gifts you with quick intellect, persuasive speech, and adaptability across all fields.' },
  6: { rulingPlanet: 'Venus', interpretation: 'You are harmonious, artistic, and drawn to beauty and domestic life. Venus blesses you with charm, affection, and a natural talent for creating peace and prosperity.' },
  7: { rulingPlanet: 'Ketu', interpretation: 'You are deeply spiritual, analytical, and seek truth beyond the surface. Ketu gives you mystical insight, solitary strength, and a profound connection to the divine.' },
  8: { rulingPlanet: 'Saturn', interpretation: 'You are ambitious, resilient, and destined for great material achievement through effort. Saturn rewards your discipline with lasting power, authority, and karmic justice.' },
  9: { rulingPlanet: 'Mars', interpretation: 'You are courageous, passionate, and driven by humanitarian ideals. Mars fuels your warrior spirit, giving you the strength to overcome all obstacles and inspire others.' },
}

// ── Planet Meta ──────────────────────────────────────────────
export interface PlanetMeta {
  colour: string
  element: string
  gemstone: string
  luckyDays: string[]
  luckyColour: string
  mantra: string
  deity: string
  secondaryDeity: string
  offerings: string[]
  lampColour: string
  lampWicks: number
  lampDirection: 'East' | 'North' | 'Northeast' | 'West' | 'South' | 'Southeast' | 'Southwest'
  fastingDay: string
  yantra: string
  templeType: string
  pradakshinaCount: number
  mantraName: string
  mantraText: string
  mantraBestTime: string
  deityReason: string
  prayerDay: string
  prayerTime: string
  templeActivity: string
}

export const PLANET_META: Record<Planet, PlanetMeta> = {
  Sun: {
    colour: '#FF6B2B',
    element: 'Fire',
    gemstone: 'Ruby',
    luckyDays: ['Sunday'],
    luckyColour: 'Red / Gold',
    mantra: 'Om Suryaya Namaha',
    deity: 'Lord Surya (Sun God)',
    secondaryDeity: 'Lord Shiva',
    offerings: ['🌺 Red Hibiscus', '🫙 Sesame Seeds', '🥛 Wheat Prasad', '🪔 Ghee Lamp', '🌸 Lotus'],
    lampColour: 'Red',
    lampWicks: 1,
    lampDirection: 'East',
    fastingDay: 'Sunday',
    yantra: 'Surya Yantra',
    templeType: 'Sun Temple / Surya Mandapam',
    pradakshinaCount: 7,
    mantraName: 'Aditya Hridayam',
    mantraText: 'Om Hram Hreem Hroum Sah Suryaya Namaha',
    mantraBestTime: 'Sunrise (Brahma Muhurta)',
    deityReason: 'Sun rules your number, bestowing authority and vitality. Surya worship removes obstacles in career and restores health.',
    prayerDay: 'Sunday',
    prayerTime: 'Sunrise (6:00–7:00 AM)',
    templeActivity: 'Offer red hibiscus, perform 7 pradakshinam, donate wheat or jaggery',
  },
  Moon: {
    colour: '#C0C0E0',
    element: 'Water',
    gemstone: 'Pearl / Moonstone',
    luckyDays: ['Monday'],
    luckyColour: 'White / Silver',
    mantra: 'Om Chandraya Namaha',
    deity: 'Lord Chandra (Moon God)',
    secondaryDeity: 'Goddess Parvati',
    offerings: ['🤍 White Flowers', '🥛 Milk', '🍚 White Rice', '🪔 Silver Lamp', '🌊 Water Offering'],
    lampColour: 'White',
    lampWicks: 2,
    lampDirection: 'North',
    fastingDay: 'Monday',
    yantra: 'Chandra Yantra',
    templeType: 'Shiva Temple / Chandra Mandapam',
    pradakshinaCount: 11,
    mantraName: 'Chandra Kavacham',
    mantraText: 'Om Shram Shreem Shroum Sah Chandraya Namaha',
    mantraBestTime: 'Monday evening at moonrise',
    deityReason: 'Moon governs your mind and emotions. Chandra worship stabilises your mental peace, improves relationships, and enhances intuition.',
    prayerDay: 'Monday',
    prayerTime: 'Evening (6:00–7:00 PM) or Moonrise',
    templeActivity: 'Offer milk abhishekam to Shivalinga, donate white cloth, chant 108 times',
  },
  Mars: {
    colour: '#FF2244',
    element: 'Fire',
    gemstone: 'Red Coral',
    luckyDays: ['Tuesday'],
    luckyColour: 'Red / Orange',
    mantra: 'Om Mangalaya Namaha',
    deity: 'Lord Murugan (Kartikeya)',
    secondaryDeity: 'Goddess Durga',
    offerings: ['🌹 Red Roses', '🍎 Red Fruits', '🌿 Vilvam Leaves', '🪔 Red Candle', '⚔️ Vel (Spear) Offering'],
    lampColour: 'Red',
    lampWicks: 3,
    lampDirection: 'South',
    fastingDay: 'Tuesday',
    yantra: 'Mangal Yantra',
    templeType: 'Murugan Temple / Subramanya Swami Kovil',
    pradakshinaCount: 6,
    mantraName: 'Mangala Stotram',
    mantraText: 'Om Kram Kreem Kroum Sah Bhaumaya Namaha',
    mantraBestTime: 'Tuesday at sunrise',
    deityReason: 'Mars rules your courage and action. Murugan worship removes enemies, boosts confidence, and eliminates debt and legal troubles.',
    prayerDay: 'Tuesday',
    prayerTime: 'Sunrise (6:00–7:30 AM)',
    templeActivity: 'Offer vel-shaped garland, perform kavadi or archana, donate red cloth',
  },
  Mercury: {
    colour: '#22BB88',
    element: 'Earth',
    gemstone: 'Emerald / Green Tourmaline',
    luckyDays: ['Wednesday'],
    luckyColour: 'Green',
    mantra: 'Om Budhaya Namaha',
    deity: 'Lord Vishnu',
    secondaryDeity: 'Goddess Saraswati',
    offerings: ['🌿 Tulsi Leaves', '🫘 Green Moong Dal', '🟢 Green Bangles', '🪔 Til Oil Lamp', '📚 Book Offering'],
    lampColour: 'Green',
    lampWicks: 4,
    lampDirection: 'North',
    fastingDay: 'Wednesday',
    yantra: 'Budha Yantra',
    templeType: 'Vishnu Temple / Saraswati Mandapam',
    pradakshinaCount: 17,
    mantraName: 'Budha Stotram',
    mantraText: 'Om Bram Breem Broum Sah Budhaya Namaha',
    mantraBestTime: 'Wednesday morning after bath',
    deityReason: 'Mercury governs intellect and communication. Vishnu worship enhances business acumen, speech clarity, and educational success.',
    prayerDay: 'Wednesday',
    prayerTime: 'Morning (8:00–10:00 AM)',
    templeActivity: 'Offer tulsi garland to Vishnu, read Vishnu Sahasranamam, donate green vegetables',
  },
  Jupiter: {
    colour: '#FFB800',
    element: 'Ether',
    gemstone: 'Yellow Sapphire / Topaz',
    luckyDays: ['Thursday'],
    luckyColour: 'Yellow / Saffron',
    mantra: 'Om Gurave Namaha',
    deity: 'Lord Dakshinamurthy (Shiva as Teacher)',
    secondaryDeity: 'Lord Brahma',
    offerings: ['💛 Yellow Marigold', '🫘 Chickpea Garland', '🟡 Banana', '🪔 Ghee Lamp (5 wicks)', '📿 Turmeric'],
    lampColour: 'Yellow',
    lampWicks: 5,
    lampDirection: 'Northeast',
    fastingDay: 'Thursday',
    yantra: 'Guru Yantra',
    templeType: 'Brihaspati Temple / Dakshinamurthy Shrine',
    pradakshinaCount: 8,
    mantraName: 'Guru Stotram',
    mantraText: 'Om Gram Greem Groum Sah Gurave Namaha',
    mantraBestTime: 'Thursday at sunrise or noon',
    deityReason: 'Jupiter blesses wisdom, prosperity, and children. Dakshinamurthy worship amplifies learning, spiritual growth, and financial abundance.',
    prayerDay: 'Thursday',
    prayerTime: 'Sunrise or Noon (12:00–1:00 PM)',
    templeActivity: 'Offer chickpea garland, pour turmeric water, donate yellow items to temple',
  },
  Venus: {
    colour: '#FF66AA',
    element: 'Water',
    gemstone: 'Diamond / White Sapphire',
    luckyDays: ['Friday'],
    luckyColour: 'White / Pink',
    mantra: 'Om Shukraya Namaha',
    deity: 'Goddess Lakshmi',
    secondaryDeity: 'Goddess Parvati',
    offerings: ['🌸 Pink Lotus', '🍬 Sweets', '🌹 White Roses', '🪔 Rose Oil Lamp', '💎 Silver Offering'],
    lampColour: 'Pink / White',
    lampWicks: 6,
    lampDirection: 'Southeast',
    fastingDay: 'Friday',
    yantra: 'Shukra Yantra',
    templeType: 'Lakshmi Temple / Devi Kovil',
    pradakshinaCount: 3,
    mantraName: 'Shri Sukta',
    mantraText: 'Om Dram Dreem Droum Sah Shukraya Namaha',
    mantraBestTime: 'Friday evening at dusk',
    deityReason: 'Venus rules beauty, love, and prosperity. Lakshmi worship brings marital harmony, artistic success, and material abundance.',
    prayerDay: 'Friday',
    prayerTime: 'Dusk (6:00–7:00 PM)',
    templeActivity: 'Light 8 oil lamps, offer lotus and sweets, donate sugar or white cloth to temple',
  },
  Saturn: {
    colour: '#6644AA',
    element: 'Air',
    gemstone: 'Blue Sapphire / Amethyst',
    luckyDays: ['Saturday'],
    luckyColour: 'Blue / Black',
    mantra: 'Om Shanaishcharaya Namaha',
    deity: 'Lord Shani (Saturn)',
    secondaryDeity: 'Lord Hanuman',
    offerings: ['🌸 Sesame Garland', '🫙 Sesame Oil', '⚫ Black Sesame Seeds', '🪔 Iron Lamp', '🟣 Urad Dal'],
    lampColour: 'Black / Dark Blue',
    lampWicks: 7,
    lampDirection: 'West',
    fastingDay: 'Saturday',
    yantra: 'Shani Yantra',
    templeType: 'Shani Temple / Hanuman Temple',
    pradakshinaCount: 7,
    mantraName: 'Shani Stotram',
    mantraText: 'Om Pram Preem Proum Sah Shanaischaraya Namaha',
    mantraBestTime: 'Saturday at sunset',
    deityReason: 'Saturn governs karma and longevity. Shani worship reduces sade-sati effects, removes delays, and delivers justice through perseverance.',
    prayerDay: 'Saturday',
    prayerTime: 'Sunset (5:30–7:00 PM)',
    templeActivity: 'Pour sesame oil on Shani idol, offer black cloth, feed crows and poor people',
  },
  Rahu: {
    colour: '#444466',
    element: 'Air',
    gemstone: 'Hessonite Garnet (Gomed)',
    luckyDays: ['Saturday', 'Wednesday'],
    luckyColour: 'Smoky Blue / Grey',
    mantra: 'Om Rahave Namaha',
    deity: 'Goddess Durga (Kali form)',
    secondaryDeity: 'Lord Bhairava',
    offerings: ['🖤 Blue Flowers', '🫘 Black Dal', '🌿 Durva Grass', '🪔 Mustard Oil Lamp', '🔮 Coconut Offering'],
    lampColour: 'Dark Blue',
    lampWicks: 8,
    lampDirection: 'Southwest',
    fastingDay: 'Saturday',
    yantra: 'Rahu Yantra',
    templeType: 'Durga Temple / Rahu Shrine',
    pradakshinaCount: 18,
    mantraName: 'Rahu Beej Mantra',
    mantraText: 'Om Bhram Bhreem Bhroum Sah Rahave Namaha',
    mantraBestTime: 'Saturday midnight or Rahu Kaal',
    deityReason: 'Rahu brings sudden changes and karmic lessons. Durga worship transforms obstacles into power and removes hidden enemies and illusions.',
    prayerDay: 'Saturday',
    prayerTime: 'Rahu Kaal (approx. 1.5 hrs after sunrise on Saturday)',
    templeActivity: 'Offer coconut to Durga, donate dark blue cloth, light 18 small lamps',
  },
  Ketu: {
    colour: '#886622',
    element: 'Fire',
    gemstone: "Cat's Eye (Lehsunia)",
    luckyDays: ['Tuesday', 'Thursday'],
    luckyColour: 'Saffron / Brown',
    mantra: 'Om Ketave Namaha',
    deity: 'Lord Ganesha',
    secondaryDeity: 'Lord Chitragupta',
    offerings: ['🌸 Multi-colour Flowers', '🍬 Modak', '🌿 Doob Grass', '🪔 Camphor Lamp', '🧡 Saffron Cloth'],
    lampColour: 'Saffron',
    lampWicks: 9,
    lampDirection: 'Southeast',
    fastingDay: 'Tuesday',
    yantra: 'Ketu Yantra',
    templeType: 'Ganesha Temple / Ganpati Mandir',
    pradakshinaCount: 3,
    mantraName: 'Ketu Beej Mantra',
    mantraText: 'Om Stram Streem Stroum Sah Ketave Namaha',
    mantraBestTime: 'Tuesday at sunrise or Pradosh time',
    deityReason: 'Ketu grants spiritual liberation and removes karmic debt. Ganesha worship clears all obstacles, transforms confusion into clarity.',
    prayerDay: 'Tuesday',
    prayerTime: 'Sunrise or Pradosh (1.5 hrs before sunset)',
    templeActivity: 'Offer 21 modaks, perform Ganesha abhishekam, donate saffron cloth',
  },
}

// ── Vedic Numbers ────────────────────────────────────────────
export interface VedicNumber {
  rulingPlanet: Planet
  element: string
  luckyColour: string
  gemstone: string
  luckyDays: string[]
  interpretation: string
}
export const VEDIC_NUMBERS: Record<number, VedicNumber> = {
  1: { rulingPlanet: 'Sun', element: 'Fire', luckyColour: 'Gold / Red', gemstone: 'Ruby', luckyDays: ['Sunday', 'Monday'], interpretation: 'Number 1 people are natural leaders with tremendous willpower. They are born to lead, innovate, and create — destined for positions of authority.' },
  2: { rulingPlanet: 'Moon', element: 'Water', luckyColour: 'White / Silver', gemstone: 'Pearl', luckyDays: ['Monday', 'Friday'], interpretation: 'Number 2 individuals are highly sensitive and deeply empathetic. They excel in partnerships, diplomacy, and all fields requiring emotional intelligence.' },
  3: { rulingPlanet: 'Jupiter', element: 'Ether', luckyColour: 'Yellow / Saffron', gemstone: 'Yellow Sapphire', luckyDays: ['Thursday', 'Tuesday'], interpretation: 'Number 3 radiates optimism, creativity, and joyful expression. Blessed by Jupiter, they attract abundance, wisdom, and spiritual prosperity.' },
  4: { rulingPlanet: 'Rahu', element: 'Earth', luckyColour: 'Blue / Grey', gemstone: 'Hessonite', luckyDays: ['Saturday', 'Sunday'], interpretation: 'Number 4 is the builder — steady, practical, and disciplined. Rahu gives them unique perspectives and unconventional paths to material success.' },
  5: { rulingPlanet: 'Mercury', element: 'Earth', luckyColour: 'Green / Light Blue', gemstone: 'Emerald', luckyDays: ['Wednesday', 'Friday'], interpretation: 'Number 5 is quick-witted, versatile, and irresistibly magnetic. Mercury blesses them with communication mastery and success in business and travel.' },
  6: { rulingPlanet: 'Venus', element: 'Water', luckyColour: 'Pink / White', gemstone: 'Diamond', luckyDays: ['Friday', 'Wednesday'], interpretation: 'Number 6 is the nurturer and artist, drawn to beauty, harmony, and love. Venus showers them with domestic happiness, creative success, and loyal relationships.' },
  7: { rulingPlanet: 'Ketu', element: 'Water', luckyColour: 'Violet / Sea Green', gemstone: "Cat's Eye", luckyDays: ['Sunday', 'Monday'], interpretation: 'Number 7 is the mystic seeker, drawn inward toward truth and spiritual mastery. Ketu grants profound intuition, research skills, and occult knowledge.' },
  8: { rulingPlanet: 'Saturn', element: 'Air', luckyColour: 'Black / Dark Blue', gemstone: 'Blue Sapphire', luckyDays: ['Saturday', 'Sunday'], interpretation: 'Number 8 carries the weight of karma and the reward of long-term achievement. Saturn grants them power, authority, and material wealth through perseverance.' },
  9: { rulingPlanet: 'Mars', element: 'Fire', luckyColour: 'Red / Crimson', gemstone: 'Red Coral', luckyDays: ['Tuesday', 'Thursday'], interpretation: 'Number 9 is the universal humanitarian and warrior spirit. Mars fuels their courage, ambition, and desire to serve — making them transformative forces in society.' },
}

// ── Zodiac Signs (Lagna) ─────────────────────────────────────
export interface ZodiacSign {
  name: string
  tamilName: string
  symbol: string
  rulingPlanet: Planet
  element: string
  coreTrait: string
}
export const ZODIAC_SIGNS: ZodiacSign[] = [
  { name: 'Aries', tamilName: 'Mesham', symbol: '♈', rulingPlanet: 'Mars', element: 'Fire', coreTrait: 'Dynamic, pioneering, courageous — a natural warrior and leader' },
  { name: 'Taurus', tamilName: 'Rishabam', symbol: '♉', rulingPlanet: 'Venus', element: 'Earth', coreTrait: 'Steadfast, sensual, reliable — builder of lasting comfort and beauty' },
  { name: 'Gemini', tamilName: 'Midhunam', symbol: '♊', rulingPlanet: 'Mercury', element: 'Air', coreTrait: 'Curious, communicative, versatile — master of ideas and connections' },
  { name: 'Cancer', tamilName: 'Kadagam', symbol: '♋', rulingPlanet: 'Moon', element: 'Water', coreTrait: 'Intuitive, nurturing, protective — deeply connected to home and family' },
  { name: 'Leo', tamilName: 'Simmam', symbol: '♌', rulingPlanet: 'Sun', element: 'Fire', coreTrait: 'Radiant, generous, royal — born to shine and inspire others' },
  { name: 'Virgo', tamilName: 'Kanni', symbol: '♍', rulingPlanet: 'Mercury', element: 'Earth', coreTrait: 'Analytical, perfectionist, healing — devoted to service and precision' },
  { name: 'Libra', tamilName: 'Tulam', symbol: '♎', rulingPlanet: 'Venus', element: 'Air', coreTrait: 'Balanced, diplomatic, artistic — seeker of justice and harmonious beauty' },
  { name: 'Scorpio', tamilName: 'Vrichigam', symbol: '♏', rulingPlanet: 'Mars', element: 'Water', coreTrait: 'Intense, transformative, magnetic — master of hidden depths and rebirth' },
  { name: 'Sagittarius', tamilName: 'Dhanusu', symbol: '♐', rulingPlanet: 'Jupiter', element: 'Fire', coreTrait: 'Philosophical, adventurous, expansive — seeker of truth and higher wisdom' },
  { name: 'Capricorn', tamilName: 'Makaram', symbol: '♑', rulingPlanet: 'Saturn', element: 'Earth', coreTrait: 'Disciplined, ambitious, patient — climber of the greatest heights' },
  { name: 'Aquarius', tamilName: 'Kumbam', symbol: '♒', rulingPlanet: 'Saturn', element: 'Air', coreTrait: 'Visionary, humanitarian, original — architect of the future' },
  { name: 'Pisces', tamilName: 'Meenam', symbol: '♓', rulingPlanet: 'Jupiter', element: 'Water', coreTrait: 'Compassionate, dreamy, mystical — bridge between worlds seen and unseen' },
]

// ── Hora Calculation Tables ──────────────────────────────────
// Chaldean planetary hour cycle
export const HORA_CYCLE: Planet[] = ['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars']
// Day-of-week (0=Sun...6=Sat) → starting index in HORA_CYCLE
export const DAY_HORA_START: Record<number, number> = {
  0: 0, // Sunday → Sun
  1: 3, // Monday → Moon
  2: 6, // Tuesday → Mars
  3: 2, // Wednesday → Mercury
  4: 5, // Thursday → Jupiter
  5: 1, // Friday → Venus
  6: 4, // Saturday → Saturn
}

// ── Planet Number (for domain scoring) ──────────────────────
export const PLANET_NUMBER: Record<Planet, number> = {
  Sun: 1, Moon: 2, Mars: 9, Mercury: 5, Jupiter: 3,
  Venus: 6, Saturn: 8, Rahu: 4, Ketu: 7,
}

// ── Moolank → Planet mapping ─────────────────────────────────
export const MOOLANK_PLANET: Record<number, Planet> = {
  1: 'Sun', 2: 'Moon', 3: 'Jupiter', 4: 'Rahu',
  5: 'Mercury', 6: 'Venus', 7: 'Ketu', 8: 'Saturn', 9: 'Mars',
}

// ── Domain Scores: Per-domain moolank reading ────────────────
export const DOMAIN_READINGS: Record<DomainKey, Record<number, string>> = {
  career: {
    1: 'Your natural leadership and authority make you destined for senior roles. Career peaks arrive between ages 35–45 when your Sun energy fully matures.',
    2: 'You thrive in collaborative environments and advisory roles. Career success comes through strong alliances and emotional intelligence in the workplace.',
    3: 'Your expansive thinking and optimistic outlook attract promotions and recognition. Teaching, publishing, and spiritual fields are especially rewarding.',
    4: 'Methodical and reliable, you build careers slowly but with lasting impact. Technical, engineering, and administrative fields suit your disciplined nature.',
    5: 'You excel in communication, media, and sales. Multiple career paths are possible — trust your adaptability and embrace change as a springboard.',
    6: 'Careers in healthcare, arts, hospitality, and social work bring you deep fulfilment. Partnerships in business multiply your success significantly.',
    7: 'Research, spirituality, medicine, and occult sciences are your natural domains. Solo work and specialised expertise bring the most recognition.',
    8: 'You are built for corporate leadership, finance, and large organisations. Delays are temporary — Saturn rewards your discipline with lasting career peaks.',
    9: 'You shine in military, sports, engineering, and social activism. Overseas opportunities and leadership roles bring significant career advancement.',
  },
  health: {
    1: 'Guard against heart and spine issues — maintain regular exercise. Your robust constitution recovers quickly from illness when Sun energy is balanced.',
    2: 'You are prone to emotional-body connections — stress manifests physically. Prioritise sleep, hydration, and lunar cycle awareness for optimal wellbeing.',
    3: 'Watch for liver, weight, and cholesterol concerns as you age. Regular walks, a sattvic diet, and Jupiter-balancing practices keep you vibrant.',
    4: 'Skeletal health and chronic stress require attention. Yoga, structured routines, and avoiding overthinking maintain your physical and mental resilience.',
    5: 'Nervous system and respiratory health are your focal areas. Pranayama, meditation, and reducing multitasking prevent burnout and anxiety.',
    6: 'Guard kidney and reproductive health through balanced diet and stress reduction. Venus energy thrives on beauty, regular rest, and loving relationships.',
    7: 'Mysterious or chronic ailments may surface — trust alternative and holistic medicine. Regular fasting, meditation, and Ketu remedies maintain your vitality.',
    8: 'Saturn governs bones, teeth, and longevity. Structured exercise, calcium-rich diet, and avoiding overwork preserve your health into advanced age.',
    9: 'Fire energy makes you prone to fevers, accidents, and inflammation. Regular detox, anger management, and Mars-cooling practices keep you robust.',
  },
  finance: {
    1: 'Solar energy brings windfalls through leadership roles and government connections. Investments in gold and real estate yield strong long-term returns.',
    2: 'Financial stability comes through partnerships and intuitive business decisions. Avoid impulsive spending — steady savings build a strong lunar foundation.',
    3: 'Jupiter blesses with multiple income streams, inheritances, and business profits. Speculative investments carry risk — trust earned income over quick gains.',
    4: 'Disciplined and patient, your finances grow steadily through property and long-term investment. Rahu can bring sudden gains — stay grounded and avoid schemes.',
    5: 'Mercury blesses with income through commerce, media, and intellect. Multiple revenue streams are your strength — diversify rather than concentrate wealth.',
    6: 'Venus attracts luxury and comfort — you will earn through artistry, beauty, and partnerships. Joint ventures with trusted allies multiply financial returns.',
    7: 'Hidden income through research, occult, and specialised knowledge is favored. Avoid gambling — steady spiritual alignment attracts unexpected financial blessings.',
    8: 'Your financial journey peaks in the second half of life. Saturn rewards patience — avoid shortcuts and build wealth through consistent, disciplined effort.',
    9: 'Mars brings bold financial opportunities. Courage in investments and entrepreneurship pays off — but guard against reckless speculation and impulsive decisions.',
  },
  family: {
    1: 'You are the pillar of your family with strong protective instincts. Avoid domineering tendencies — collaborative leadership strengthens family bonds.',
    2: 'Family is your greatest source of joy and inspiration. Your nurturing nature creates a harmonious home — choose a life partner who shares your emotional depth.',
    3: 'Joy, laughter, and abundance characterise your family life. Jupiter blesses with devoted children and a warm, spiritually enriched household.',
    4: 'You build stable, secure family environments that others rely on. Patience during family tensions yields long-term harmony and mutual respect.',
    5: 'Family life is colourful and dynamic. Embrace open communication and flexibility to maintain harmony across diverse family personalities.',
    6: 'Venus makes you the most devoted family member. Your sacrifice and love for family are returned tenfold — domestic life is your greatest joy.',
    7: 'You may need personal space within family life. Spiritual practice together and honest communication bridge any feelings of isolation or misunderstanding.',
    8: 'Family responsibilities may weigh heavily in youth. Saturn eventually brings deep respect from family elders and lasting intergenerational bonds.',
    9: 'Your passionate nature creates intense family bonds. Channel Mars energy into protection rather than conflict for the most harmonious family outcomes.',
  },
  business: {
    1: 'You are a natural entrepreneur with bold vision. Businesses related to government, mining, leadership training, and technology hold your greatest potential.',
    2: 'Partnership businesses and service industries suit your collaborative Moon energy. Trust your intuition in business decisions — it rarely misleads you.',
    3: 'Education, publishing, travel, and spiritual businesses are your natural domains. Jupiter expands every venture you undertake with genuine enthusiasm.',
    4: 'Construction, real estate, and systematised businesses suit your Rahu-4 nature. Unique or technology-forward business models yield the highest rewards.',
    5: 'Mercury blesses trading, communication, and consulting businesses. Your networking ability opens doors that others cannot — use it strategically.',
    6: 'Beauty, hospitality, art, and wellness businesses align with your Venus nature. Joint ventures with reliable partners amplify your natural business charm.',
    7: 'Niche research, healing, spiritual services, and technology businesses thrive under your Ketu influence. Solo or small-team businesses suit you best.',
    8: 'Large-scale enterprises, mining, manufacturing, and finance are your power domains. Saturn rewards business patience — avoid premature expansion.',
    9: 'Bold entrepreneurship in engineering, sports, real estate, and defence sectors suits your Mars fire. Your competitive spirit is your greatest business asset.',
  },
}

// ── Prediction Pool ──────────────────────────────────────────
export interface Prediction {
  id: string
  icon: string
  headline: string
  elaboration: string
  category: 'career' | 'finance' | 'health' | 'marriage' | 'business' | 'recognition' | 'spiritual' | 'travel' | 'family' | 'property'
  triggerPlanets: Planet[]
  triggerMoolankRange: number[]
  triggerBhagyankRange: number[]
  isPositive: boolean
}

export const PREDICTION_POOL: Prediction[] = [
  // ── POSITIVE ──────────────────────────────────────────────
  { id: 'p01', icon: '🌟', headline: 'Career Peak Approaching', elaboration: 'A major professional elevation is on the horizon — a promotion, appointment, or public recognition awaits. Your skills and long service will finally be acknowledged at the highest level of your organisation.', category: 'career', triggerPlanets: ['Sun', 'Jupiter', 'Mars'], triggerMoolankRange: [1, 3, 9], triggerBhagyankRange: [1, 3, 5, 9], isPositive: true },
  { id: 'p02', icon: '💰', headline: 'Significant Financial Gain', elaboration: 'An unexpected windfall, inheritance, or business profit surge is foreseen within the next 12 months. Past investments will mature and deliver returns that exceed your original expectations.', category: 'finance', triggerPlanets: ['Jupiter', 'Venus', 'Sun'], triggerMoolankRange: [3, 6, 1], triggerBhagyankRange: [3, 6, 1, 8], isPositive: true },
  { id: 'p03', icon: '💚', headline: 'Exceptional Health Vitality', elaboration: 'A period of remarkable physical energy, healing, and stamina is indicated. Chronic issues that have lingered will find natural resolution, and your immune system strengthens considerably.', category: 'health', triggerPlanets: ['Sun', 'Moon', 'Jupiter'], triggerMoolankRange: [1, 2, 3, 6], triggerBhagyankRange: [1, 2, 3, 6], isPositive: true },
  { id: 'p04', icon: '💑', headline: 'Marriage Harmony & Deepened Bond', elaboration: 'Your relationship enters a phase of extraordinary closeness, mutual understanding, and romantic renewal. A marriage proposal, engagement, or renewal of vows is strongly favored.', category: 'marriage', triggerPlanets: ['Venus', 'Moon', 'Jupiter'], triggerMoolankRange: [2, 6, 3], triggerBhagyankRange: [2, 6, 3], isPositive: true },
  { id: 'p05', icon: '🏢', headline: 'Business Expansion Success', elaboration: 'A new branch, partnership, product line, or franchise opportunity will expand your business significantly. The stars align for bold entrepreneurial moves that yield lasting rewards.', category: 'business', triggerPlanets: ['Mercury', 'Jupiter', 'Mars'], triggerMoolankRange: [5, 3, 9, 1], triggerBhagyankRange: [5, 3, 9], isPositive: true },
  { id: 'p06', icon: '🏆', headline: 'Public Recognition & Awards', elaboration: 'Your work will receive public acknowledgement through an award, certification, media feature, or community honour. This recognition opens doors to opportunities previously out of reach.', category: 'recognition', triggerPlanets: ['Sun', 'Jupiter', 'Venus'], triggerMoolankRange: [1, 3, 6], triggerBhagyankRange: [1, 3, 6], isPositive: true },
  { id: 'p07', icon: '🕉️', headline: 'Spiritual Awakening & Divine Grace', elaboration: 'A profound spiritual experience, guru connection, or sacred pilgrimage will transform your consciousness. Divine protection intensifies around you, guiding all major decisions.', category: 'spiritual', triggerPlanets: ['Ketu', 'Jupiter', 'Moon'], triggerMoolankRange: [7, 3, 2], triggerBhagyankRange: [7, 3, 2, 9], isPositive: true },
  { id: 'p08', icon: '✈️', headline: 'Auspicious Foreign Travel', elaboration: 'A significant journey — business or personal — to a foreign land brings life-changing connections and opportunities. Overseas collaborations prove especially lucrative and enduring.', category: 'travel', triggerPlanets: ['Mercury', 'Rahu', 'Jupiter'], triggerMoolankRange: [5, 4, 3], triggerBhagyankRange: [5, 4, 3, 6], isPositive: true },
  { id: 'p09', icon: '👨‍👩‍👧', headline: 'Family Blessings & New Arrivals', elaboration: 'Joyful family events — a birth, marriage, reunion, or ancestral blessing ceremony — bring immense happiness. A new family member brings fortune and renewed energy to your household.', category: 'family', triggerPlanets: ['Moon', 'Jupiter', 'Venus'], triggerMoolankRange: [2, 3, 6], triggerBhagyankRange: [2, 3, 6], isPositive: true },
  { id: 'p10', icon: '🏠', headline: 'Property Acquisition & Real Estate Gains', elaboration: 'Purchase of land, home, or commercial property is strongly favoured. An existing property rises significantly in value, delivering unexpected wealth through real estate.', category: 'property', triggerPlanets: ['Saturn', 'Mars', 'Rahu'], triggerMoolankRange: [8, 9, 4], triggerBhagyankRange: [8, 9, 4, 1], isPositive: true },
  { id: 'p11', icon: '🎯', headline: 'New Leadership Role Emerges', elaboration: 'You are being prepared for a position of greater authority and responsibility. Accept the challenge — your solar energy is at its peak for commanding teams and inspiring loyalty.', category: 'career', triggerPlanets: ['Sun', 'Mars'], triggerMoolankRange: [1, 9, 8], triggerBhagyankRange: [1, 9, 8], isPositive: true },
  { id: 'p12', icon: '💎', headline: 'Luxury & Material Comfort Increases', elaboration: 'Venus showers you with material comforts, beautiful possessions, and elevated lifestyle. A period of enjoying the finer aspects of life is richly deserved and spiritually supported.', category: 'finance', triggerPlanets: ['Venus', 'Jupiter'], triggerMoolankRange: [6, 3], triggerBhagyankRange: [6, 3, 1], isPositive: true },
  { id: 'p13', icon: '🤝', headline: 'Powerful New Alliance Forms', elaboration: 'A significant partnership — professional or personal — with a highly influential individual is imminent. This connection becomes a cornerstone of your future success and protection.', category: 'business', triggerPlanets: ['Mercury', 'Venus', 'Jupiter'], triggerMoolankRange: [5, 6, 3], triggerBhagyankRange: [5, 6, 3], isPositive: true },
  { id: 'p14', icon: '📚', headline: 'Academic & Intellectual Triumph', elaboration: 'Success in examinations, research publications, or prestigious certifications is strongly indicated. Mercury blesses your communication and intellectual output with exceptional clarity.', category: 'recognition', triggerPlanets: ['Mercury', 'Jupiter'], triggerMoolankRange: [5, 3], triggerBhagyankRange: [5, 3, 1], isPositive: true },
  { id: 'p15', icon: '🌙', headline: 'Psychic Gifts & Intuition Amplified', elaboration: 'Your intuitive and empathic abilities reach a heightened level. Dreams carry prophetic messages, and gut feelings about people and decisions prove remarkably accurate.', category: 'spiritual', triggerPlanets: ['Moon', 'Ketu'], triggerMoolankRange: [2, 7], triggerBhagyankRange: [2, 7, 3], isPositive: true },
  { id: 'p16', icon: '🌿', headline: 'Health Recovery & Vitality Restoration', elaboration: 'After a period of physical challenge, your body enters a powerful healing phase. Energy returns, vitality is restored, and a new health regimen brings lasting improvement.', category: 'health', triggerPlanets: ['Sun', 'Jupiter', 'Venus'], triggerMoolankRange: [1, 3, 6, 9], triggerBhagyankRange: [1, 3, 6], isPositive: true },
  { id: 'p17', icon: '🌏', headline: 'International Opportunity Opens', elaboration: 'Doors to international markets, foreign education, or overseas relocation open unexpectedly. Embrace this opportunity — it carries the seed of your most significant life advancement.', category: 'travel', triggerPlanets: ['Rahu', 'Jupiter', 'Mercury'], triggerMoolankRange: [4, 3, 5], triggerBhagyankRange: [4, 3, 5, 9], isPositive: true },
  { id: 'p18', icon: '🎭', headline: 'Creative Expression Breakthrough', elaboration: 'An artistic, musical, or creative project gains extraordinary recognition. Your unique voice reaches a wide audience, establishing your legacy in a creative field.', category: 'recognition', triggerPlanets: ['Venus', 'Moon'], triggerMoolankRange: [6, 2], triggerBhagyankRange: [6, 2, 3], isPositive: true },
  { id: 'p19', icon: '🏅', headline: 'Social Status Elevation', elaboration: 'Your social standing rises through community involvement, charitable acts, or professional achievement. A respected title, position, or role in public life becomes yours.', category: 'recognition', triggerPlanets: ['Jupiter', 'Sun'], triggerMoolankRange: [3, 1], triggerBhagyankRange: [3, 1, 6], isPositive: true },
  { id: 'p20', icon: '💫', headline: 'Lucky Phase Activates', elaboration: 'A highly auspicious dasha period activates in your chart, amplifying luck across all life areas. Initiatives started during this window carry a powerful karmic tailwind.', category: 'spiritual', triggerPlanets: ['Jupiter', 'Venus', 'Sun'], triggerMoolankRange: [3, 6, 1], triggerBhagyankRange: [3, 6, 1, 9], isPositive: true },
  { id: 'p21', icon: '👶', headline: 'Blessed with Progeny', elaboration: 'The blessing of a child or grandchild brings immeasurable joy. The incoming soul is highly evolved and will bring tremendous pride, prosperity, and spiritual elevation to the family.', category: 'family', triggerPlanets: ['Jupiter', 'Moon'], triggerMoolankRange: [3, 2], triggerBhagyankRange: [3, 2, 6], isPositive: true },
  { id: 'p22', icon: '🏗️', headline: 'Construction & Property Success', elaboration: 'A construction project, renovation, or land acquisition proceeds with surprising smoothness and financial reward. Your real estate instincts prove highly accurate during this period.', category: 'property', triggerPlanets: ['Saturn', 'Mars', 'Venus'], triggerMoolankRange: [8, 9, 6], triggerBhagyankRange: [8, 9, 4], isPositive: true },
  { id: 'p23', icon: '🌺', headline: 'Divine Protection Activated', elaboration: 'Invisible forces of protection surround you — negative influences dissolve before they reach you. Guardian energy is particularly strong during pilgrimages and sacred days.', category: 'spiritual', triggerPlanets: ['Ketu', 'Jupiter', 'Sun'], triggerMoolankRange: [7, 3, 1], triggerBhagyankRange: [7, 3, 1, 9], isPositive: true },
  { id: 'p24', icon: '🎓', headline: 'Professional Certification Achieved', elaboration: 'Advanced credentials, a prestigious degree, or a professional license materially upgrades your career trajectory. This achievement opens doors in high-level organisations.', category: 'career', triggerPlanets: ['Mercury', 'Jupiter'], triggerMoolankRange: [5, 3, 1], triggerBhagyankRange: [5, 3, 6], isPositive: true },
  { id: 'p25', icon: '🌸', headline: 'Love & Romance Blossoms', elaboration: 'A period of romantic bliss and emotional fulfilment arrives. For married individuals, a second honeymoon phase restores passion; for singles, a significant romantic connection forms.', category: 'marriage', triggerPlanets: ['Venus', 'Moon'], triggerMoolankRange: [6, 2], triggerBhagyankRange: [6, 2, 1], isPositive: true },
  { id: 'p26', icon: '🔑', headline: 'Key Business Contract Secured', elaboration: 'A major contract, government tender, or corporate deal closes in your favour. This agreement provides stable income and prestigious clientele for years to come.', category: 'business', triggerPlanets: ['Mercury', 'Sun', 'Jupiter'], triggerMoolankRange: [5, 1, 3], triggerBhagyankRange: [5, 1, 3, 8], isPositive: true },
  { id: 'p27', icon: '💼', headline: 'Dream Job Opportunity Arrives', elaboration: 'The career opportunity you have long visualised presents itself through an unexpected channel. Be prepared to act swiftly — this window is brief but potentially life-changing.', category: 'career', triggerPlanets: ['Sun', 'Mercury', 'Rahu'], triggerMoolankRange: [1, 5, 4], triggerBhagyankRange: [1, 5, 4, 9], isPositive: true },
  { id: 'p28', icon: '🛡️', headline: 'Legal Victory & Justice Served', elaboration: 'Outstanding legal matters resolve in your favour. Court cases, disputes, and property matters conclude with a result that vindicates your position and restores your peace.', category: 'recognition', triggerPlanets: ['Saturn', 'Jupiter', 'Sun'], triggerMoolankRange: [8, 3, 1], triggerBhagyankRange: [8, 3, 1], isPositive: true },
  { id: 'p29', icon: '🌍', headline: 'Ancestral Blessings Received', elaboration: 'Pitru (ancestral) karma resolves through a ceremony, dream message, or spontaneous act of gratitude. This clears generational blocks and floods your life line with positive momentum.', category: 'family', triggerPlanets: ['Saturn', 'Ketu', 'Moon'], triggerMoolankRange: [8, 7, 2], triggerBhagyankRange: [8, 7, 2], isPositive: true },
  { id: 'p30', icon: '🚀', headline: 'Entrepreneurial Venture Thrives', elaboration: 'A new business, side venture, or startup you launch during this period gains rapid traction. Your entrepreneurial timing is perfectly aligned with market demand and planetary support.', category: 'business', triggerPlanets: ['Mars', 'Sun', 'Rahu'], triggerMoolankRange: [9, 1, 4], triggerBhagyankRange: [9, 1, 4, 5], isPositive: true },

  // ── WARNINGS ──────────────────────────────────────────────
  { id: 'w01', icon: '⚠️', headline: 'Career Stagnation Risk', elaboration: 'A temporary plateau in career advancement is indicated — promotions may be delayed or recognition withheld. Use this period to upskill, build alliances, and prepare for the next growth wave.', category: 'career', triggerPlanets: ['Saturn', 'Rahu', 'Ketu'], triggerMoolankRange: [8, 4, 7], triggerBhagyankRange: [8, 4, 7], isPositive: false },
  { id: 'w02', icon: '📉', headline: 'Financial Loss Period Ahead', elaboration: 'Guard against impulsive financial decisions, speculative investments, and lending money without security. A period of outflow exceeding inflow requires disciplined budgeting and restraint.', category: 'finance', triggerPlanets: ['Saturn', 'Rahu', 'Ketu'], triggerMoolankRange: [8, 4, 7, 2], triggerBhagyankRange: [8, 4, 7], isPositive: false },
  { id: 'w03', icon: '🏥', headline: 'Health Vulnerability Window', elaboration: 'Pay close attention to your body\'s signals — a period of physical vulnerability requires preventive care. Stress-related ailments, infections, or old injuries may resurface if you ignore warning signs.', category: 'health', triggerPlanets: ['Saturn', 'Rahu', 'Mars'], triggerMoolankRange: [8, 4, 9], triggerBhagyankRange: [8, 4, 9], isPositive: false },
  { id: 'w04', icon: '💔', headline: 'Family Conflict & Tension', elaboration: 'Miscommunication and unresolved emotional issues could strain key family relationships. Approach conflicts with patience and empathy — harsh words during this period cause long-lasting wounds.', category: 'family', triggerPlanets: ['Mars', 'Saturn', 'Rahu'], triggerMoolankRange: [9, 8, 4], triggerBhagyankRange: [9, 8, 4], isPositive: false },
  { id: 'w05', icon: '🤥', headline: 'Business Betrayal Warning', elaboration: 'A trusted associate, partner, or employee may act against your interests for personal gain. Tighten legal agreements, audit financial processes, and avoid sharing business secrets carelessly.', category: 'business', triggerPlanets: ['Rahu', 'Saturn', 'Ketu'], triggerMoolankRange: [4, 8, 7], triggerBhagyankRange: [4, 8, 7], isPositive: false },
  { id: 'w06', icon: '⚖️', headline: 'Legal Risk & Documentation Issues', elaboration: 'Property disputes, contract breaches, or regulatory non-compliance could lead to legal complications. Review all agreements thoroughly and seek qualified legal counsel before signing anything.', category: 'career', triggerPlanets: ['Saturn', 'Rahu'], triggerMoolankRange: [8, 4, 1], triggerBhagyankRange: [8, 4, 1], isPositive: false },
  { id: 'w07', icon: '😰', headline: 'Burnout & Mental Exhaustion Risk', elaboration: 'You are at risk of pushing beyond healthy limits — chronic stress, insomnia, and mental fatigue are warning signs your nervous system needs rest. Schedule deliberate recovery time immediately.', category: 'health', triggerPlanets: ['Mercury', 'Saturn', 'Rahu'], triggerMoolankRange: [5, 8, 4], triggerBhagyankRange: [5, 8, 4], isPositive: false },
  { id: 'w08', icon: '👁️', headline: 'Hidden Enemies Working Against You', elaboration: 'Unseen adversaries in your professional or social circle are subtly undermining your reputation and opportunities. Maintain discretion, observe who benefits from your setbacks, and proceed carefully.', category: 'career', triggerPlanets: ['Rahu', 'Ketu', 'Saturn'], triggerMoolankRange: [4, 7, 8], triggerBhagyankRange: [4, 7, 8], isPositive: false },
  { id: 'w09', icon: '🚗', headline: 'Accident-Prone Phase — Exercise Caution', elaboration: 'Mars energy creates heightened accident risk during travel, sports, and physical activities. Avoid rash decisions, drive defensively, and delay major surgeries until this transit passes.', category: 'health', triggerPlanets: ['Mars', 'Rahu'], triggerMoolankRange: [9, 4], triggerBhagyankRange: [9, 4, 1], isPositive: false },
  { id: 'w10', icon: '💞', headline: 'Relationship Breakdown Risk', elaboration: 'Venus affliction creates misunderstandings, jealousy, or emotional distance in close relationships. Prioritise transparent communication — suppressing emotions now leads to irreparable rifts later.', category: 'marriage', triggerPlanets: ['Rahu', 'Saturn', 'Ketu'], triggerMoolankRange: [4, 8, 7], triggerBhagyankRange: [4, 8, 7], isPositive: false },
  { id: 'w11', icon: '📊', headline: 'Investment Loss Caution', elaboration: 'The stock market, cryptocurrency, or speculative ventures carry amplified downside risk during this phase. Hold cash, preserve capital, and resist pressure from others to invest in unproven schemes.', category: 'finance', triggerPlanets: ['Rahu', 'Saturn', 'Ketu'], triggerMoolankRange: [4, 8, 7, 9], triggerBhagyankRange: [4, 8, 7], isPositive: false },
  { id: 'w12', icon: '🌪️', headline: 'Career Disruption from External Forces', elaboration: 'Organisational restructuring, job market shifts, or a powerful rival may disrupt your career stability. Build your skill portfolio and financial cushion now to weather this transition with confidence.', category: 'career', triggerPlanets: ['Rahu', 'Saturn'], triggerMoolankRange: [4, 8], triggerBhagyankRange: [4, 8, 7], isPositive: false },
  { id: 'w13', icon: '🔥', headline: 'Conflict with Authority Figures', elaboration: 'Tensions with bosses, government officials, or father figures may escalate if not handled diplomatically. Choose your battles wisely — preserving dignity is more important than winning every argument.', category: 'career', triggerPlanets: ['Mars', 'Saturn', 'Rahu'], triggerMoolankRange: [9, 8, 4], triggerBhagyankRange: [9, 8, 4, 1], isPositive: false },
  { id: 'w14', icon: '🏦', headline: 'Cash Flow Disruption Warning', elaboration: 'Unexpected expenses, delayed receivables, or business cost overruns create temporary cash flow strain. Tighten your budget, delay non-essential spending, and maintain a three-month emergency reserve.', category: 'finance', triggerPlanets: ['Saturn', 'Ketu'], triggerMoolankRange: [8, 7], triggerBhagyankRange: [8, 7, 4], isPositive: false },
  { id: 'w15', icon: '🫀', headline: 'Heart & Circulatory System Caution', elaboration: 'Elevated stress, poor diet, and emotional tension place strain on your cardiovascular system. Reduce sodium, prioritise stress management, and schedule a preventive cardiac health check.', category: 'health', triggerPlanets: ['Sun', 'Mars', 'Saturn'], triggerMoolankRange: [1, 9, 8], triggerBhagyankRange: [1, 9, 8], isPositive: false },
  { id: 'w16', icon: '🕳️', headline: 'Trust Misplaced in Business Circle', elaboration: 'Someone in your professional network is projecting loyalty while secretly competing or extracting value. Audit your inner circle, protect intellectual property, and verify credentials thoroughly.', category: 'business', triggerPlanets: ['Rahu', 'Mercury'], triggerMoolankRange: [4, 5], triggerBhagyankRange: [4, 5, 8], isPositive: false },
  { id: 'w17', icon: '💸', headline: 'Unexpected Financial Drain', elaboration: 'Medical expenses, vehicle breakdown, home repair, or family obligation creates an unanticipated financial drain. Building a contingency fund now protects your financial peace during this transit.', category: 'finance', triggerPlanets: ['Saturn', 'Mars', 'Rahu'], triggerMoolankRange: [8, 9, 4], triggerBhagyankRange: [8, 9, 4], isPositive: false },
  { id: 'w18', icon: '🌑', headline: 'Depression & Low Energy Phase', elaboration: 'Ketu\'s influence may bring periods of disillusionment, low motivation, or spiritual dryness. Surround yourself with positive energy, maintain daily spiritual practice, and seek guidance when needed.', category: 'health', triggerPlanets: ['Ketu', 'Saturn'], triggerMoolankRange: [7, 8], triggerBhagyankRange: [7, 8, 4], isPositive: false },
  { id: 'w19', icon: '👊', headline: 'Sibling or Peer Conflict Arises', elaboration: 'A competitive or ego-driven conflict with a sibling, peer, or close associate is likely. Protect your assets, avoid inflammatory rhetoric, and keep important matters confidential from rivals.', category: 'family', triggerPlanets: ['Mars', 'Rahu'], triggerMoolankRange: [9, 4], triggerBhagyankRange: [9, 4, 8], isPositive: false },
  { id: 'w20', icon: '📋', headline: 'Property & Legal Document Risk', elaboration: 'Errors in property deeds, inheritance disputes, or encroachment issues require immediate attention. Verify all land records, update legal documents, and resolve boundary disputes before they escalate.', category: 'property', triggerPlanets: ['Saturn', 'Rahu', 'Ketu'], triggerMoolankRange: [8, 4, 7], triggerBhagyankRange: [8, 4, 7], isPositive: false },
  { id: 'w21', icon: '🩺', headline: 'Digestive & Metabolic Issues', elaboration: 'Jupiter or Rahu affliction triggers digestive imbalance, weight fluctuations, or metabolic disorders. A structured Ayurvedic diet, regular meal times, and liver-supporting herbs restore balance.', category: 'health', triggerPlanets: ['Jupiter', 'Rahu'], triggerMoolankRange: [3, 4], triggerBhagyankRange: [3, 4, 6], isPositive: false },
  { id: 'w22', icon: '💬', headline: 'Communication Misunderstandings Spike', elaboration: 'Mercury challenges create misquotes, misunderstandings, and communication breakdowns at critical moments. Confirm all important agreements in writing and avoid heated exchanges in professional settings.', category: 'career', triggerPlanets: ['Mercury', 'Rahu'], triggerMoolankRange: [5, 4], triggerBhagyankRange: [5, 4, 7], isPositive: false },
  { id: 'w23', icon: '🧠', headline: 'Mental Anxiety & Overthinking', elaboration: 'An overactive mind creates sleep disturbance, decision paralysis, and anxious thinking patterns. Pranayama, nature walks, digital detox, and Moon-balancing remedies calm the nervous system.', category: 'health', triggerPlanets: ['Moon', 'Mercury', 'Rahu'], triggerMoolankRange: [2, 5, 4], triggerBhagyankRange: [2, 5, 4], isPositive: false },
  { id: 'w24', icon: '🤐', headline: 'Confidential Information Leak Risk', elaboration: 'Sensitive professional or personal information is at risk of unauthorised disclosure. Review your digital security, limit who you confide in, and protect business plans from premature exposure.', category: 'business', triggerPlanets: ['Mercury', 'Rahu', 'Ketu'], triggerMoolankRange: [5, 4, 7], triggerBhagyankRange: [5, 4, 7], isPositive: false },
  { id: 'w25', icon: '🔒', headline: 'Partnership Disagreement Warning', elaboration: 'A business or personal partnership may face a contractual, financial, or value-based conflict. Address disagreements early through structured mediation — unresolved disputes escalate rapidly.', category: 'business', triggerPlanets: ['Saturn', 'Venus', 'Rahu'], triggerMoolankRange: [8, 6, 4], triggerBhagyankRange: [8, 6, 4], isPositive: false },
  { id: 'w26', icon: '🌧️', headline: 'Domestic Unrest & Home Disruption', elaboration: 'Household tension, property damage, or a forced relocation disrupts your sense of domestic security. Ground yourself in spiritual practice and maintain calm communication within the family unit.', category: 'family', triggerPlanets: ['Mars', 'Saturn', 'Rahu'], triggerMoolankRange: [9, 8, 4, 7], triggerBhagyankRange: [9, 8, 4], isPositive: false },
  { id: 'w27', icon: '😤', headline: 'Ego Conflict Undermining Opportunities', elaboration: 'Pride and stubbornness in key negotiations may close doors that would otherwise open. Practise conscious humility — the reward of letting go of ego battles is far greater than winning them.', category: 'career', triggerPlanets: ['Sun', 'Mars'], triggerMoolankRange: [1, 9], triggerBhagyankRange: [1, 9, 8], isPositive: false },
  { id: 'w28', icon: '📵', headline: 'Social Isolation & Loneliness Phase', elaboration: 'Ketu\'s isolation energy may create a period of feeling misunderstood, overlooked, or separated from your usual support network. Use this introspective time for inner work rather than external seeking.', category: 'family', triggerPlanets: ['Ketu', 'Saturn'], triggerMoolankRange: [7, 8], triggerBhagyankRange: [7, 8, 4], isPositive: false },
  { id: 'w29', icon: '⚡', headline: 'Sudden Reversal in Fortune', elaboration: 'Rahu\'s volatile energy creates an unexpected change in circumstances — what appears secure may shift rapidly. Maintain adaptability, avoid over-commitment, and keep financial reserves accessible.', category: 'finance', triggerPlanets: ['Rahu', 'Ketu'], triggerMoolankRange: [4, 7], triggerBhagyankRange: [4, 7, 8], isPositive: false },
  { id: 'w30', icon: '😷', headline: 'Respiratory & Immune System Caution', elaboration: 'Mercury and Saturn challenge your respiratory and immune defences. Increase vitamin C, avoid cold and damp environments, and schedule preventive health checks to stay ahead of potential issues.', category: 'health', triggerPlanets: ['Mercury', 'Saturn', 'Ketu'], triggerMoolankRange: [5, 8, 7], triggerBhagyankRange: [5, 8, 7], isPositive: false },
]

// ── Pariharam Plans ──────────────────────────────────────────
export interface PariharamPlan {
  planet: Planet
  primaryDeity: string
  secondaryDeity: string
  deityReason: string
  prayerDay: string
  prayerTime: string
  offerings: string[]
  lampColour: string
  lampWicks: number
  lampDirection: string
  lampChant: string
  templeType: string
  templeActivity: string
  pradakshinaCount: number
  bestDay: string
  mantraName: string
  mantraText: string
  mantraCount: number
  mantraBestTime: string
}
export const PARIHARAM_BY_PLANET: Record<Planet, PariharamPlan> = {
  Sun: {
    planet: 'Sun',
    primaryDeity: 'Lord Surya (Sun God)',
    secondaryDeity: 'Lord Shiva',
    deityReason: 'Surya rules your birth Hora, radiating solar energy of authority, health, and government favour. Worshipping Surya daily removes obstacles in career, boosts vitality, and attracts recognition from powerful figures.',
    prayerDay: 'Sunday',
    prayerTime: 'Sunrise — Brahma Muhurta (4:30–6:00 AM)',
    offerings: ['🌺 Red Hibiscus', '🫙 Wheat Grains', '🥛 Water Offering (Arghya)', '🪔 Ghee Deepam', '🌸 Red Sandalwood Paste'],
    lampColour: 'Red or Saffron',
    lampWicks: 1,
    lampDirection: 'East',
    lampChant: 'Om Hram Hreem Hroum Sah Suryaya Namaha — chant 3 times while lighting',
    templeType: 'Surya Mandapam or Shiva Temple with East-facing Surya icon',
    templeActivity: 'Offer red hibiscus garland, pour water (Arghya) facing east, perform 7 pradakshinam around the sanctum',
    pradakshinaCount: 7,
    bestDay: 'Sunday at sunrise',
    mantraName: 'Aditya Hridayam / Surya Gayatri',
    mantraText: 'Om Bhaskaraya Vidmahe Mahadyutikaraya Dhimahi Tanno Aditya Prachodayat',
    mantraCount: 108,
    mantraBestTime: 'Sunrise on Sunday — facing east after bath',
  },
  Moon: {
    planet: 'Moon',
    primaryDeity: 'Lord Chandra / Goddess Parvati',
    secondaryDeity: 'Lord Shiva (Chandrashekhara form)',
    deityReason: 'Chandra governs your mind, emotions, and relationships. Parvati worship harmonises the feminine energy within, bringing peace of mind, emotional stability, and harmonious domestic life.',
    prayerDay: 'Monday',
    prayerTime: 'Evening Moonrise or Monday evening 6:00–8:00 PM',
    offerings: ['🤍 White Lotus', '🥛 Milk Abhishekam', '🍚 White Rice Offering', '🪔 Silver Oil Lamp', '🌿 White Sandalwood Paste'],
    lampColour: 'White or Silver',
    lampWicks: 2,
    lampDirection: 'North',
    lampChant: 'Om Shram Shreem Shroum Sah Chandraya Namaha — repeat 3 times while lighting',
    templeType: 'Shiva Temple with Chandrashekhara form or Devi Temple',
    templeActivity: 'Perform milk abhishekam on Shivalinga, offer white flowers, light silver lamp, donate white cloth',
    pradakshinaCount: 11,
    bestDay: 'Monday or Pournami (Full Moon) day',
    mantraName: 'Chandra Gayatri / Soma Stotram',
    mantraText: 'Om Ksheerputraya Vidmahe Amruta Tattvaya Dhimahi Tanno Chandra Prachodayat',
    mantraCount: 108,
    mantraBestTime: 'Monday evening after moonrise, facing north',
  },
  Mars: {
    planet: 'Mars',
    primaryDeity: 'Lord Murugan (Kartikeya / Subramanya)',
    secondaryDeity: 'Goddess Durga',
    deityReason: 'Murugan commands the warrior energy of Mars, removing enemies, debts, and legal problems. His Vel (divine spear) cuts through confusion and activates your courage, confidence, and competitive power.',
    prayerDay: 'Tuesday',
    prayerTime: 'Sunrise — Tuesday 6:00–8:00 AM',
    offerings: ['🌹 Red Roses', '🍌 Bananas', '🌿 Vilvam Leaves', '🪔 Red Ghee Lamp', '⚔️ Vel-shaped Garland'],
    lampColour: 'Red',
    lampWicks: 3,
    lampDirection: 'South',
    lampChant: 'Om Saravanabhavaya Namaha — chant 6 times while lighting',
    templeType: 'Murugan Temple / Subramanya Swami Kovil',
    templeActivity: 'Offer Vel-shaped flower arrangement, perform 6 pradakshinam, donate red cloth to temple',
    pradakshinaCount: 6,
    bestDay: 'Tuesday at sunrise or Skanda Sashti',
    mantraName: 'Vel Mayil Muruga / Mangala Stotram',
    mantraText: 'Om Kram Kreem Kroum Sah Bhaumaya Namaha — Saravanabhava (6 syllables)',
    mantraCount: 108,
    mantraBestTime: 'Tuesday sunrise, facing south',
  },
  Mercury: {
    planet: 'Mercury',
    primaryDeity: 'Lord Vishnu (Trivikrama form)',
    secondaryDeity: 'Goddess Saraswati',
    deityReason: 'Vishnu blesses intellectual pursuits, business success, and ethical transactions. Saraswati amplifies your communication, learning, and Mercury-ruled creative expression to peak potential.',
    prayerDay: 'Wednesday',
    prayerTime: 'Morning — Wednesday 8:00–10:00 AM',
    offerings: ['🌿 Tulsi Garland', '🫘 Green Moong Dal', '📚 Book Offering (for Saraswati)', '🪔 Til Oil Lamp', '🟢 Green Coconut Water'],
    lampColour: 'Green',
    lampWicks: 4,
    lampDirection: 'North',
    lampChant: 'Om Namo Bhagavate Vasudevaya — 4 times while lighting',
    templeType: 'Vishnu Temple / Saraswati Temple on Wednesdays',
    templeActivity: 'Offer Tulsi garland to Vishnu, read Vishnu Sahasranamam, donate books or stationery',
    pradakshinaCount: 17,
    bestDay: 'Wednesday morning or Saraswati Puja days',
    mantraName: 'Budha Stotram / Saraswati Vandana',
    mantraText: 'Om Bram Breem Broum Sah Budhaya Namaha — Ya Kundendu Tushara (Saraswati Vandana)',
    mantraCount: 108,
    mantraBestTime: 'Wednesday morning after bath, facing north',
  },
  Jupiter: {
    planet: 'Jupiter',
    primaryDeity: 'Lord Dakshinamurthy (Shiva as Guru)',
    secondaryDeity: 'Lord Brahma / Brihaspati',
    deityReason: 'Dakshinamurthy is the ultimate Guru — the silent, all-knowing teacher. Jupiter worship amplifies wisdom, blesses children, removes financial obstacles, and grants auspicious timings for all new beginnings.',
    prayerDay: 'Thursday',
    prayerTime: 'Sunrise or Noon — Thursday 6:00–8:00 AM or 12:00–1:00 PM',
    offerings: ['💛 Yellow Marigold Garland', '🫘 Chickpea Garland', '🟡 Banana Stem', '🪔 5-Wick Ghee Lamp', '📿 Turmeric and Sandalwood'],
    lampColour: 'Yellow',
    lampWicks: 5,
    lampDirection: 'Northeast',
    lampChant: 'Om Gram Greem Groum Sah Gurave Namaha — 5 times while lighting',
    templeType: 'Dakshinamurthy Temple or Brihaspati Shrine',
    templeActivity: 'Offer chickpea garland, pour turmeric water, perform 8 pradakshinam, donate yellow items',
    pradakshinaCount: 8,
    bestDay: 'Thursday — especially Guru Purnima',
    mantraName: 'Guru Stotram / Dakshinamurthy Stotram',
    mantraText: 'Om Gram Greem Groum Sah Gurave Namaha — Guru Brahma Guru Vishnu shloka',
    mantraCount: 108,
    mantraBestTime: 'Thursday sunrise or noon, facing northeast',
  },
  Venus: {
    planet: 'Venus',
    primaryDeity: 'Goddess Mahalakshmi',
    secondaryDeity: 'Goddess Parvati (Kamakshi form)',
    deityReason: 'Mahalakshmi governs all Venus-ruled domains: wealth, beauty, love, and luxury. Her worship removes Venus afflictions and floods your life with abundance, marital happiness, and artistic success.',
    prayerDay: 'Friday',
    prayerTime: 'Evening Dusk — Friday 6:00–7:30 PM',
    offerings: ['🌸 Pink Lotus', '🍬 Sweet Pongal', '🌹 White Roses', '🪔 Rose Oil Lamp', '💎 Silver Coin Offering'],
    lampColour: 'Pink or White',
    lampWicks: 6,
    lampDirection: 'Southeast',
    lampChant: 'Om Shrim Mahalakshmiyei Namaha — 6 times while lighting',
    templeType: 'Lakshmi Temple or Devi Kovil (Kamakshi, Meenakshi, Akilandeswari)',
    templeActivity: 'Light 8 oil lamps, offer lotus and rose garland, perform 3 pradakshinam, donate white cloth or sugar',
    pradakshinaCount: 3,
    bestDay: 'Friday — especially Varalakshmi Puja or Diwali',
    mantraName: 'Sri Sukta / Shukra Stotram',
    mantraText: 'Om Dram Dreem Droum Sah Shukraya Namaha — Hira Hiranyayai Namaha (Sri Sukta verse)',
    mantraCount: 108,
    mantraBestTime: 'Friday dusk, facing southeast',
  },
  Saturn: {
    planet: 'Saturn',
    primaryDeity: 'Lord Shani (Saturn)',
    secondaryDeity: 'Lord Hanuman',
    deityReason: 'Shani is the lord of karma, discipline, and justice. Hanuman is the supreme protector against Saturn\'s harsh aspects. Together they reduce the intensity of Sade Sati, remove delays, and deliver well-deserved karmic rewards.',
    prayerDay: 'Saturday',
    prayerTime: 'Evening Sunset — Saturday 5:30–7:00 PM',
    offerings: ['🌸 Sesame Garland', '🫙 Sesame Oil Offering', '⚫ Black Sesame Seeds', '🪔 Iron Lamp with Sesame Oil', '🟣 Urad Dal (Black Lentils)'],
    lampColour: 'Dark Blue or Black',
    lampWicks: 7,
    lampDirection: 'West',
    lampChant: 'Om Pram Preem Proum Sah Shanaischaraya Namaha — 7 times while lighting',
    templeType: 'Shani Temple or Hanuman Temple',
    templeActivity: 'Pour sesame oil on Shani idol, offer black cloth, perform 7 pradakshinam, feed crows and the poor',
    pradakshinaCount: 7,
    bestDay: 'Saturday — especially Shani Amavasya or Shani Jayanti',
    mantraName: 'Shani Stotram / Hanuman Chalisa',
    mantraText: 'Om Pram Preem Proum Sah Shanaischaraya Namaha — Shanaishcharaya Namaste tu Soorya Putrahya Dhimahi',
    mantraCount: 108,
    mantraBestTime: 'Saturday sunset, facing west',
  },
  Rahu: {
    planet: 'Rahu',
    primaryDeity: 'Goddess Durga (Kali form)',
    secondaryDeity: 'Lord Bhairava (fierce Shiva)',
    deityReason: 'Durga in her Kali aspect is the supreme force against Rahu\'s illusions, obsessions, and hidden enemies. Kali cuts through maya (illusion) and transforms Rahu\'s disruptive energy into fearless power.',
    prayerDay: 'Saturday',
    prayerTime: 'Rahu Kaal — Saturday (consult daily Rahu Kaal chart) or Saturday midnight',
    offerings: ['🖤 Blue Flowers', '🫘 Black Urad Dal', '🌿 Durva Grass', '🪔 Mustard Oil Lamp', '🔮 Coconut with Kumkum'],
    lampColour: 'Dark Blue or Purple',
    lampWicks: 8,
    lampDirection: 'Southwest',
    lampChant: 'Om Bhram Bhreem Bhroum Sah Rahave Namaha — 8 times while lighting',
    templeType: 'Durga or Kali Temple / Rahu Shrine in Navagraha temple',
    templeActivity: 'Offer coconut to Durga, light 18 small lamps, perform 18 pradakshinam, donate dark blue cloth',
    pradakshinaCount: 18,
    bestDay: 'Saturday during Rahu Kaal',
    mantraName: 'Rahu Beej Mantra / Durga Saptashati',
    mantraText: 'Om Bhram Bhreem Bhroum Sah Rahave Namaha — Sarva Mangala Mangalye (Durga shloka)',
    mantraCount: 108,
    mantraBestTime: 'Saturday during Rahu Kaal, facing southwest',
  },
  Ketu: {
    planet: 'Ketu',
    primaryDeity: 'Lord Ganesha',
    secondaryDeity: 'Lord Chitragupta (keeper of karma)',
    deityReason: 'Ganesha removes Ketu\'s obstacles, confusion, and karmic knots at the root. Chitragupta balances the karma ledger, relieving ancestral debts and granting clear karmic resolution.',
    prayerDay: 'Tuesday',
    prayerTime: 'Sunrise or Pradosh time — Tuesday 6:00–7:30 AM or 1.5 hours before sunset',
    offerings: ['🌸 Multi-colour Flowers', '🍬 Modak (21 pieces)', '🌿 Doob Grass', '🪔 Camphor Lamp', '🧡 Saffron and Sindoor'],
    lampColour: 'Saffron or Orange',
    lampWicks: 9,
    lampDirection: 'Southeast',
    lampChant: 'Om Stram Streem Stroum Sah Ketave Namaha — 9 times while lighting',
    templeType: 'Ganesha Temple / Vinayaka Kovil',
    templeActivity: 'Offer 21 modaks, pour panchamrit on Ganesha, perform 3 pradakshinam, donate saffron cloth',
    pradakshinaCount: 3,
    bestDay: 'Tuesday — especially Ganesh Chaturthi or Vinayaka Chaturthi',
    mantraName: 'Ketu Beej Mantra / Ganesha Pancharatna',
    mantraText: 'Om Stram Streem Stroum Sah Ketave Namaha — Vakratunda Mahakaya (Ganesha invocation)',
    mantraCount: 108,
    mantraBestTime: 'Tuesday sunrise, facing southeast',
  },
}

// ── Domain Remedies (targeted by domain + planet) ────────────
export interface DomainRemedy {
  domain: DomainKey
  planet: Planet
  remedy: string
}
export const DOMAIN_REMEDIES: DomainRemedy[] = [
  // Career remedies
  { domain: 'career', planet: 'Sun', remedy: 'Offer red hibiscus to Surya every Sunday and chant Aditya Hridayam. Wear Ruby or Sunstone to amplify solar authority and unlock blocked career advancement.' },
  { domain: 'career', planet: 'Moon', remedy: 'Meditate on career intentions during the waxing moon phase. Wear pearl on the right index finger on Monday to activate clarity and professional relationships.' },
  { domain: 'career', planet: 'Mars', remedy: 'Offer red flowers to Murugan on Tuesday and chant "Om Saravanabhavaya Namaha" 108 times. Red Coral worn on Tuesday activates Mars career power.' },
  { domain: 'career', planet: 'Mercury', remedy: 'Keep a green Budha Yantra at your workspace and chant the Budha Beej Mantra 108 times on Wednesday. Wear Emerald to boost communication and business acumen.' },
  { domain: 'career', planet: 'Jupiter', remedy: 'Offer chickpea garland to Dakshinamurthy on Thursday. Wear Yellow Sapphire to attract promotions, mentor connections, and career expansion.' },
  { domain: 'career', planet: 'Venus', remedy: 'Wear white on Friday and offer lotus to Lakshmi. Venus-ruled careers in arts, beauty, and hospitality flourish when Diamond or White Sapphire is worn on Friday.' },
  { domain: 'career', planet: 'Saturn', remedy: 'Serve the elderly or differently-abled on Saturday. Light a sesame oil lamp facing west and wear Blue Sapphire or Amethyst to activate Saturn\'s career rewards.' },
  { domain: 'career', planet: 'Rahu', remedy: 'Donate dark blue cloth on Saturday and visit a Durga temple during Rahu Kaal. Hessonite (Gomed) stone redirects Rahu\'s disruptive energy into career breakthroughs.' },
  { domain: 'career', planet: 'Ketu', remedy: 'Perform Ganesha archana on Tuesday and chant "Om Gam Ganapataye Namaha" 108 times. Cat\'s Eye stone helps Ketu release career blocks and karmic delays.' },
  // Health remedies
  { domain: 'health', planet: 'Sun', remedy: 'Practice Surya Namaskar 12 rounds at sunrise facing east. Drink copper-infused water at sunrise and donate wheat or jaggery to temples on Sundays.' },
  { domain: 'health', planet: 'Moon', remedy: 'Drink moon-charged water (left in moonlight overnight) on full moon days. Wear pearl and practise cooling pranayama to soothe Moon-related emotional and physical health.' },
  { domain: 'health', planet: 'Mars', remedy: 'Consume red lentils on Tuesdays and perform Hanuman puja. Red Coral stone prevents accidents and Mars-related inflammatory conditions when worn on Tuesday.' },
  { domain: 'health', planet: 'Mercury', remedy: 'Practise daily pranayama (Nadi Shodhana) to support Mercury-ruled nervous and respiratory health. Wear Emerald and eat moong dal on Wednesdays.' },
  { domain: 'health', planet: 'Jupiter', remedy: 'Fast partially on Thursdays (consume only fruit) and chant the Guru Stotram. Yellow Sapphire and turmeric milk support Jupiter-governed liver and metabolic health.' },
  { domain: 'health', planet: 'Venus', remedy: 'Increase water intake and avoid sugar excess. Worship Lakshmi on Fridays, wear Diamond, and consume shatavari herb to protect Venus-ruled kidney and reproductive health.' },
  { domain: 'health', planet: 'Saturn', remedy: 'Oil massage (Abhyanga) on Saturdays with sesame oil protects Saturn-ruled bones and joints. Donate iron items and wear Blue Sapphire for Shani\'s protection of longevity.' },
  { domain: 'health', planet: 'Rahu', remedy: 'Consume tulsi water during Rahu Kaal and avoid eating at Rahu Kaal times. Hessonite stone and Durga puja neutralise Rahu\'s unpredictable health disruptions.' },
  { domain: 'health', planet: 'Ketu', remedy: 'Practise deep meditation and maintain a sattvic (pure vegetarian) diet on Tuesdays. Cat\'s Eye stone and Ganesha worship clear Ketu\'s mysterious and chronic health patterns.' },
  // Finance remedies
  { domain: 'finance', planet: 'Sun', remedy: 'Donate gold-coloured items and wheat on Sundays. Keep a Surya Yantra in your safe or cash box facing east to activate solar financial authority and government contracts.' },
  { domain: 'finance', planet: 'Moon', remedy: 'Light a white candle near your cash box on Mondays. Pearl worn on Monday attracts steady cash flow and Moon-aligned intuitive financial decisions.' },
  { domain: 'finance', planet: 'Mars', remedy: 'Donate red lentils to the poor on Tuesdays. Red Coral prevents financial losses from rash decisions and activates Mars-driven business profit opportunities.' },
  { domain: 'finance', planet: 'Mercury', remedy: 'Keep a Budha Yantra in your wallet and avoid signing major financial contracts on Mercury retrograde days. Emerald activates wealth through trade, communication, and intellectual work.' },
  { domain: 'finance', planet: 'Jupiter', remedy: 'Offer turmeric and ghee to Dakshinamurthy on Thursdays. Yellow Sapphire is the most powerful gem for attracting Jupiter\'s abundant financial blessings and eliminating debt.' },
  { domain: 'finance', planet: 'Venus', remedy: 'Place a Shri Yantra (Lakshmi Yantra) in your home facing east. Diamond or White Sapphire activates Venus financial gains through partnerships, luxury, and artistic success.' },
  { domain: 'finance', planet: 'Saturn', remedy: 'Donate black sesame seeds and mustard oil on Saturdays. Saturn\'s delayed but lasting financial rewards come through consistent discipline, saving habits, and Saturn Yantra.' },
  { domain: 'finance', planet: 'Rahu', remedy: 'Feed homeless people on Saturdays and donate dark blue cloth. Hessonite stone channels Rahu\'s disruptive energy into sudden windfalls and unconventional wealth opportunities.' },
  { domain: 'finance', planet: 'Ketu', remedy: 'Perform ancestral (Pitru) tarpan on Amavasya (new moon) days. Cat\'s Eye stone releases inherited financial karma and unblocks hidden streams of income and ancestral wealth.' },
  // Family remedies
  { domain: 'family', planet: 'Sun', remedy: 'Perform Surya Namaskar with your family on Sunday mornings. Lighting a single ghee lamp together at sunrise strengthens solar family bonds and paternal blessings.' },
  { domain: 'family', planet: 'Moon', remedy: 'Cook and share a family meal under the full moon. Pearl stone and Parvati worship heal Moon-related emotional wounds and restore maternal harmony within the household.' },
  { domain: 'family', planet: 'Mars', remedy: 'Resolve family conflicts directly and courageously — avoid suppression. Tuesday Murugan puja and Red Coral activate Mars protective energy, keeping the family safe from external harm.' },
  { domain: 'family', planet: 'Mercury', remedy: 'Practise family communication rituals — daily shared conversations without devices. Mercury Yantra in the family living space enhances understanding and harmony among siblings.' },
  { domain: 'family', planet: 'Jupiter', remedy: 'Host a family gathering on Guru Purnima (full moon in June-July). Yellow Sapphire and Dakshinamurthy worship bless the family with wisdom, healthy children, and generational prosperity.' },
  { domain: 'family', planet: 'Venus', remedy: 'Celebrate family milestones with beauty and art — music, dance, and shared creative activities. Friday Lakshmi puja with the family brings Venus harmony, love, and domestic abundance.' },
  { domain: 'family', planet: 'Saturn', remedy: 'Honour your elders with seva (service) every Saturday. Shani puja together as a family dissolves generational karma and activates Saturn\'s blessing of long-lived, strong family structures.' },
  { domain: 'family', planet: 'Rahu', remedy: 'Donate collectively as a family on Saturdays. Performing family Rahu remedies together — Durga puja and dark blue cloth donation — neutralises family-disrupting Rahu influences.' },
  { domain: 'family', planet: 'Ketu', remedy: 'Perform a family ancestral ceremony (Pitru Puja) on Amavasya. Ganesha puja together removes Ketu\'s isolating energy and reconnects family members at the soul level.' },
  // Business remedies
  { domain: 'business', planet: 'Sun', remedy: 'Place a Surya Yantra at your business entrance facing east. Sunday archana to Surya and leadership mentoring activates Solar business authority and government contracts.' },
  { domain: 'business', planet: 'Moon', remedy: 'Trust intuition in business — launch new products on waxing moon days. Pearl gem and Monday Shiva puja attract loyal customers and emotionally intelligent business partnerships.' },
  { domain: 'business', planet: 'Mars', remedy: 'Act boldly in business negotiations on Tuesdays. Red Coral and Murugan puja eliminate competition, debt, and business enemies — fuelling entrepreneurial courage.' },
  { domain: 'business', planet: 'Mercury', remedy: 'Register business documents and sign contracts on Wednesdays. Emerald stone and Budha worship activate Mercury-governed communication, trading success, and business networking.' },
  { domain: 'business', planet: 'Jupiter', remedy: 'Expand your business on Thursdays — launch dates aligned with Jupiter bring long-term success. Yellow Sapphire and Dakshinamurthy puja attract wise advisors and profitable joint ventures.' },
  { domain: 'business', planet: 'Venus', remedy: 'Beautify your business environment — aesthetics attract Venus customers. Friday Lakshmi puja and Diamond stone activate business in beauty, hospitality, arts, and luxury markets.' },
  { domain: 'business', planet: 'Saturn', remedy: 'Adopt disciplined business practices — structured audits, clear processes, and patient growth strategies. Saturday Shani puja and Blue Sapphire ensure Saturn-rewarded business longevity.' },
  { domain: 'business', planet: 'Rahu', remedy: 'Explore unconventional or technology-forward business models favoured by Rahu. Hessonite stone and Saturday Durga puja harness Rahu\'s disruptive energy for innovation and market disruption.' },
  { domain: 'business', planet: 'Ketu', remedy: 'Build a niche, specialised business rather than broad general offering. Cat\'s Eye stone and Tuesday Ganesha puja activate Ketu\'s gift for unique, spiritually-aligned business ventures.' },
]

// ── Star Field Data (deterministic — no Math.random in render) ─
export const STAR_DATA = Array.from({ length: 80 }, (_, i) => ({
  left: ((i * 127 + 31) % 100),
  top: ((i * 89 + 17) % 100),
  size: 1 + ((i * 53) % 3),
  duration: 3 + ((i * 37) % 5),
  delay: ((i * 73) % 6),
  opacity: 0.3 + ((i * 41) % 7) * 0.1,
}))

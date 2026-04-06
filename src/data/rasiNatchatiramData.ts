// ================================================================
// RASI & NATCHATIRAM DATA — Tamil Hindu Astrology
// All 12 Rasis, 27 Nakshatras, Saturn transit table, Sani cycle data
// ================================================================

import type { Planet } from './astrologyData'

// ── Rasi (Tamil Zodiac) ─────────────────────────────────────────
export interface RasiData {
  index: number       // 0-based (Mesha=0 ... Meenam=11)
  name: string        // Tamil name
  sanskrit: string    // Sanskrit name
  english: string     // English name
  symbol: string      // Unicode symbol
  rulingPlanet: Planet
  element: 'Fire' | 'Earth' | 'Air' | 'Water'
  quality: 'Movable' | 'Fixed' | 'Dual'
  bodyPart: string
  character: string         // 2-sentence personality
  strengths: string[]       // 3 key strengths
  challenges: string[]      // 2 key challenges
  compatibleRasis: string[] // Best compatible
  luckyColour: string
  luckyNumber: number
  luckyDay: string
  gemstone: string
  deity: string
  generalFortune: string    // 2-sentence overview
}

export const RASI_DATA: RasiData[] = [
  {
    index: 0, name: 'Mesham', sanskrit: 'Mesha', english: 'Aries', symbol: '♈',
    rulingPlanet: 'Mars', element: 'Fire', quality: 'Movable',
    bodyPart: 'Head and Brain',
    character: 'Mesham people are fearless pioneers who charge forward with boundless energy and initiative. They are natural leaders who inspire through action rather than words, driven by a burning desire to be first in everything.',
    strengths: ['Bold leadership', 'Courageous initiative', 'Passionate drive'],
    challenges: ['Impulsiveness', 'Short temper'],
    compatibleRasis: ['Simmam', 'Dhanusu', 'Midhunam'],
    luckyColour: 'Red', luckyNumber: 9, luckyDay: 'Tuesday', gemstone: 'Red Coral',
    deity: 'Lord Murugan',
    generalFortune: 'Mesham Rasi people enjoy periods of dynamic success in careers requiring leadership and courage. Financial gains come through bold entrepreneurial ventures and government or military connections.',
  },
  {
    index: 1, name: 'Rishabam', sanskrit: 'Vrishabha', english: 'Taurus', symbol: '♉',
    rulingPlanet: 'Venus', element: 'Earth', quality: 'Fixed',
    bodyPart: 'Face, Neck, and Throat',
    character: 'Rishabam people are steadfast, patient, and deeply sensual with an innate love of beauty and comfort. They build slowly but create lasting foundations in all areas of life — wealth, relationships, and legacy.',
    strengths: ['Patient persistence', 'Financial acumen', 'Artistic talent'],
    challenges: ['Stubbornness', 'Possessiveness'],
    compatibleRasis: ['Kanni', 'Makaram', 'Kadagam'],
    luckyColour: 'White / Pink', luckyNumber: 6, luckyDay: 'Friday', gemstone: 'Diamond',
    deity: 'Goddess Lakshmi',
    generalFortune: 'Rishabam Rasi people accumulate wealth steadily through disciplined effort and intelligent investment. Love and partnerships play a central role in their life satisfaction and overall prosperity.',
  },
  {
    index: 2, name: 'Midhunam', sanskrit: 'Mithuna', english: 'Gemini', symbol: '♊',
    rulingPlanet: 'Mercury', element: 'Air', quality: 'Dual',
    bodyPart: 'Arms, Shoulders, and Lungs',
    character: 'Midhunam people are brilliant communicators and intellectuals with a gift for connecting ideas and people across diverse fields. Their versatility and curiosity make them magnetic personalities who thrive in dynamic, social environments.',
    strengths: ['Communication mastery', 'Quick intellect', 'Adaptability'],
    challenges: ['Inconsistency', 'Restlessness'],
    compatibleRasis: ['Thulam', 'Kumbam', 'Mesham'],
    luckyColour: 'Green', luckyNumber: 5, luckyDay: 'Wednesday', gemstone: 'Emerald',
    deity: 'Lord Vishnu',
    generalFortune: 'Midhunam Rasi people succeed brilliantly in communication, media, teaching, and business. Multiple income streams and intellectual partnerships amplify their financial success and social standing.',
  },
  {
    index: 3, name: 'Kadagam', sanskrit: 'Karka', english: 'Cancer', symbol: '♋',
    rulingPlanet: 'Moon', element: 'Water', quality: 'Movable',
    bodyPart: 'Chest, Breasts, and Stomach',
    character: 'Kadagam people are deeply intuitive, nurturing souls with an extraordinary capacity for emotional understanding and loyalty. Their psychic sensitivity and devotion to family create an unshakeable foundation for all their relationships.',
    strengths: ['Deep intuition', 'Nurturing care', 'Emotional intelligence'],
    challenges: ['Moodiness', 'Over-sensitivity'],
    compatibleRasis: ['Vrichigam', 'Meenam', 'Rishabam'],
    luckyColour: 'White / Silver', luckyNumber: 2, luckyDay: 'Monday', gemstone: 'Pearl',
    deity: 'Goddess Parvati',
    generalFortune: 'Kadagam Rasi people find their greatest fulfilment and prosperity through nurturing professions, hospitality, and real estate. Home and family remain their source of both strength and vulnerability throughout life.',
  },
  {
    index: 4, name: 'Simmam', sanskrit: 'Simha', english: 'Leo', symbol: '♌',
    rulingPlanet: 'Sun', element: 'Fire', quality: 'Fixed',
    bodyPart: 'Heart, Spine, and Upper Back',
    character: 'Simmam people radiate regal authority, warmth, and generosity that draws others naturally to their orbit. Born leaders, they command respect effortlessly and thrive in positions where their brilliance and magnanimity can shine.',
    strengths: ['Natural authority', 'Creative brilliance', 'Generous leadership'],
    challenges: ['Pride', 'Need for recognition'],
    compatibleRasis: ['Mesham', 'Dhanusu', 'Midhunam'],
    luckyColour: 'Gold / Orange', luckyNumber: 1, luckyDay: 'Sunday', gemstone: 'Ruby',
    deity: 'Lord Surya',
    generalFortune: 'Simmam Rasi people are destined for prominence in government, arts, management, and politics. Their solar energy attracts wealth and respect, peaking in the second half of their forties.',
  },
  {
    index: 5, name: 'Kanni', sanskrit: 'Kanya', english: 'Virgo', symbol: '♍',
    rulingPlanet: 'Mercury', element: 'Earth', quality: 'Dual',
    bodyPart: 'Digestive System and Intestines',
    character: 'Kanni people are meticulous perfectionists with an extraordinary eye for detail and a deep desire to be of service to others. Their analytical minds and dedication to quality make them invaluable in any professional environment.',
    strengths: ['Analytical precision', 'Dedicated service', 'Practical wisdom'],
    challenges: ['Over-criticism', 'Worry tendency'],
    compatibleRasis: ['Makaram', 'Rishabam', 'Kadagam'],
    luckyColour: 'Blue / Green', luckyNumber: 5, luckyDay: 'Wednesday', gemstone: 'Emerald',
    deity: 'Goddess Saraswati',
    generalFortune: 'Kanni Rasi people excel in healthcare, research, law, and technical fields where their precision and analytical depth are valued. Financial stability builds steadily through consistent, disciplined effort.',
  },
  {
    index: 6, name: 'Thulam', sanskrit: 'Tula', english: 'Libra', symbol: '♎',
    rulingPlanet: 'Venus', element: 'Air', quality: 'Movable',
    bodyPart: 'Kidneys and Lower Back',
    character: 'Thulam people are the natural diplomats and aesthetes of the zodiac, seeking beauty, justice, and harmonious balance in all relationships. Their charm and fairness make them beloved mediators who build bridges between opposing forces.',
    strengths: ['Diplomatic grace', 'Artistic sensibility', 'Fairness'],
    challenges: ['Indecisiveness', 'People-pleasing'],
    compatibleRasis: ['Kumbam', 'Midhunam', 'Simmam'],
    luckyColour: 'Light Blue / Pink', luckyNumber: 6, luckyDay: 'Friday', gemstone: 'Diamond',
    deity: 'Goddess Lakshmi',
    generalFortune: 'Thulam Rasi people find their highest success in partnerships, law, arts, and diplomacy. Marriage and business alliances bring both personal fulfilment and significant material prosperity.',
  },
  {
    index: 7, name: 'Vrichigam', sanskrit: 'Vrishchika', english: 'Scorpio', symbol: '♏',
    rulingPlanet: 'Mars', element: 'Water', quality: 'Fixed',
    bodyPart: 'Reproductive and Elimination Organs',
    character: 'Vrichigam people possess an intense, transformative power that is both magnetic and mysterious — they see through all deception and have an uncanny ability to regenerate from the most challenging circumstances. Their depth of passion and fierce loyalty make them extraordinary partners and allies.',
    strengths: ['Transformative depth', 'Fierce loyalty', 'Penetrating insight'],
    challenges: ['Jealousy tendency', 'Unforgiving nature'],
    compatibleRasis: ['Kadagam', 'Meenam', 'Kanni'],
    luckyColour: 'Dark Red / Maroon', luckyNumber: 9, luckyDay: 'Tuesday', gemstone: 'Red Coral',
    deity: 'Lord Shiva',
    generalFortune: 'Vrichigam Rasi people are destined for deep transformation and eventual mastery in their chosen field. Hidden resources, inheritances, and occult knowledge contribute significantly to their life\'s fortune.',
  },
  {
    index: 8, name: 'Dhanusu', sanskrit: 'Dhanu', english: 'Sagittarius', symbol: '♐',
    rulingPlanet: 'Jupiter', element: 'Fire', quality: 'Dual',
    bodyPart: 'Thighs, Hips, and Liver',
    character: 'Dhanusu people are philosophical adventurers and truth-seekers who shoot their arrows toward the highest ideals and never settle for mediocrity. Their boundless optimism, generosity, and love of freedom inspire all who cross their path.',
    strengths: ['Philosophical wisdom', 'Adventurous optimism', 'Generous spirit'],
    challenges: ['Overconfidence', 'Lack of follow-through'],
    compatibleRasis: ['Mesham', 'Simmam', 'Thulam'],
    luckyColour: 'Yellow / Saffron', luckyNumber: 3, luckyDay: 'Thursday', gemstone: 'Yellow Sapphire',
    deity: 'Lord Dakshinamurthy',
    generalFortune: 'Dhanusu Rasi people attract abundance through education, international ventures, spirituality, and higher learning. Jupiter\'s grace ensures that generosity and righteousness are consistently rewarded.',
  },
  {
    index: 9, name: 'Makaram', sanskrit: 'Makara', english: 'Capricorn', symbol: '♑',
    rulingPlanet: 'Saturn', element: 'Earth', quality: 'Movable',
    bodyPart: 'Knees, Bones, and Skin',
    character: 'Makaram people are the ultimate disciplined climbers of the zodiac — patient, ambitious, and structured in their approach to achieving the pinnacles of success. Their karmic diligence and practical wisdom ensure that they outlast all competition.',
    strengths: ['Disciplined ambition', 'Practical wisdom', 'Long-term endurance'],
    challenges: ['Over-seriousness', 'Pessimism tendency'],
    compatibleRasis: ['Rishabam', 'Kanni', 'Meenam'],
    luckyColour: 'Black / Dark Blue', luckyNumber: 8, luckyDay: 'Saturday', gemstone: 'Blue Sapphire',
    deity: 'Lord Shani',
    generalFortune: 'Makaram Rasi people achieve their greatest success after age 35 when Saturn\'s rewards fully materialise. Real estate, law, government, and corporate leadership are their natural domains of mastery.',
  },
  {
    index: 10, name: 'Kumbam', sanskrit: 'Kumbha', english: 'Aquarius', symbol: '♒',
    rulingPlanet: 'Saturn', element: 'Air', quality: 'Fixed',
    bodyPart: 'Ankles, Calves, and Circulation',
    character: 'Kumbam people are visionary humanitarians who think in terms of the collective good rather than personal gain — they are decades ahead of their time in understanding societal needs and innovation. Their original thinking and social conscience make them the revolutionaries of the zodiac.',
    strengths: ['Visionary thinking', 'Humanitarian ideals', 'Original intellect'],
    challenges: ['Emotional detachment', 'Unpredictable behavior'],
    compatibleRasis: ['Midhunam', 'Thulam', 'Mesham'],
    luckyColour: 'Electric Blue', luckyNumber: 8, luckyDay: 'Saturday', gemstone: 'Blue Sapphire',
    deity: 'Lord Brahma',
    generalFortune: 'Kumbam Rasi people make their mark through innovation, technology, social reform, and humanitarian causes. Their unconventional path brings unexpected prosperity and widespread recognition.',
  },
  {
    index: 11, name: 'Meenam', sanskrit: 'Meena', english: 'Pisces', symbol: '♓',
    rulingPlanet: 'Jupiter', element: 'Water', quality: 'Dual',
    bodyPart: 'Feet and Lymphatic System',
    character: 'Meenam people are the most spiritually evolved and compassionate souls of the zodiac — empathic dreamers who feel the joys and sorrows of all beings as their own. Their boundless imagination and connection to the divine give them gifts of healing, art, and mystical insight.',
    strengths: ['Deep compassion', 'Spiritual intuition', 'Creative imagination'],
    challenges: ['Over-idealism', 'Escapism tendency'],
    compatibleRasis: ['Kadagam', 'Vrichigam', 'Makaram'],
    luckyColour: 'Aqua / Sea Green', luckyNumber: 3, luckyDay: 'Thursday', gemstone: 'Yellow Sapphire',
    deity: 'Lord Vishnu',
    generalFortune: 'Meenam Rasi people find their highest expression in healing, spirituality, the arts, and service. Their karmic generosity in past lives returns as unexpected blessings and divine protection throughout this life.',
  },
]

// ── Natchatiram (27 Nakshatras) ─────────────────────────────────
export interface NatchatiramData {
  index: number         // 0-based (Ashwini=0 ... Revati=26)
  tamilName: string     // Tamil name
  sanskritName: string  // Sanskrit/standard name
  rulingPlanet: Planet  // Vimshottari dasha lord
  dashaYears: number    // Vimshottari dasha period
  rasi: string          // Rasi this nakshatra falls in
  rasiIndex: number     // 0-based rasi index
  startDegree: number   // Start degree in zodiac (0-360)
  deity: string
  symbol: string
  character: string     // 2-sentence personality
  positiveTraits: string[]
  negativeTraits: string[]
  careerAptitude: string
  health: string
  spiritualPath: string
  mantra: string
  luckyColour: string
  luckyNumber: number
  bodyPart: string
  soundSyllables: string // Naming syllables for this nakshatra
}

export const NATCHATIRAM_DATA: NatchatiramData[] = [
  {
    index: 0, tamilName: 'Aswini', sanskritName: 'Ashwini', rulingPlanet: 'Ketu', dashaYears: 7,
    rasi: 'Mesham', rasiIndex: 0, startDegree: 0, deity: 'Ashwini Kumaras (Divine Physicians)',
    symbol: 'Horse\'s Head', character: 'Aswini people are dynamic initiators with healing gifts and an exceptional capacity to act swiftly without hesitation. They carry the divine energy of the cosmic physicians and excel wherever speed, courage, and healing are needed.',
    positiveTraits: ['Swift action', 'Healing ability', 'Courage'],
    negativeTraits: ['Impatience', 'Recklessness'],
    careerAptitude: 'Medicine, surgery, sports, military, veterinary sciences, transportation',
    health: 'Prone to head injuries and nervous disorders — preventive care and regular rest are essential',
    spiritualPath: 'Service through healing and swift decisive action in alignment with dharma',
    mantra: 'Om Ashwinyai Namaha', luckyColour: 'Red', luckyNumber: 9, bodyPart: 'Head', soundSyllables: 'Chu, Che, Cho, La',
  },
  {
    index: 1, tamilName: 'Bharani', sanskritName: 'Bharani', rulingPlanet: 'Venus', dashaYears: 20,
    rasi: 'Mesham', rasiIndex: 0, startDegree: 13.33, deity: 'Yama (Lord of Death and Dharma)',
    symbol: 'Yoni (Symbol of Creation)', character: 'Bharani people carry the intense creative and destructive power of Yama — they are fierce protectors of dharma with an overwhelming passion for truth and justice. Their capacity to absorb immense suffering and transform it into wisdom is extraordinary.',
    positiveTraits: ['Creative intensity', 'Dharmic protection', 'Magnetic passion'],
    negativeTraits: ['Possessiveness', 'Extremism'],
    careerAptitude: 'Law, medicine, occult science, entertainment, sports, caregiving professions',
    health: 'Reproductive health and hormonal balance require attention — emotional regulation is key',
    spiritualPath: 'Learning to balance creation and destruction — channelling passion into dharmic service',
    mantra: 'Om Bharanyai Namaha', luckyColour: 'Blood Red', luckyNumber: 6, bodyPart: 'Head (Lower)', soundSyllables: 'Li, Lu, Le, Lo',
  },
  {
    index: 2, tamilName: 'Karthigai', sanskritName: 'Krittika', rulingPlanet: 'Sun', dashaYears: 6,
    rasi: 'Mesham', rasiIndex: 0, startDegree: 26.66, deity: 'Agni (God of Fire)',
    symbol: 'Razor / Flame', character: 'Karthigai people are sharp, incisive, and penetrating — like the flame of Agni, they illuminate truth and burn away impurity with their razor-sharp discernment. Their inner fire gives them tremendous willpower, dignity, and a fierce protective instinct for those they love.',
    positiveTraits: ['Penetrating intelligence', 'Willpower', 'Protective nature'],
    negativeTraits: ['Harshness', 'Restless ambition'],
    careerAptitude: 'Military, politics, metallurgy, cooking, engineering, government leadership',
    health: 'Fevers, eye problems, and pitta (fire) imbalances — cooling diet and practices recommended',
    spiritualPath: 'Purification through fire — burning away ego to reveal the divine light within',
    mantra: 'Om Krittikaayai Namaha', luckyColour: 'Gold / Yellow', luckyNumber: 1, bodyPart: 'Head (Upper)', soundSyllables: 'A, I, U, E',
  },
  {
    index: 3, tamilName: 'Rohini', sanskritName: 'Rohini', rulingPlanet: 'Moon', dashaYears: 10,
    rasi: 'Rishabam', rasiIndex: 1, startDegree: 40, deity: 'Brahma (Creator)',
    symbol: 'Cart / Chariot', character: 'Rohini is the most beloved nakshatra of the Moon — people born here are exquisitely beautiful in soul, deeply sensual, and gifted with extraordinary creative power. They are natural artists and nurturers whose presence nourishes everyone around them.',
    positiveTraits: ['Creative beauty', 'Magnetic charm', 'Nurturing warmth'],
    negativeTraits: ['Possessiveness', 'Excessive sensuality'],
    careerAptitude: 'Arts, music, fashion, food, agriculture, hospitality, romantic literature',
    health: 'Throat and neck health; tendency toward overindulgence requiring mindful dietary habits',
    spiritualPath: 'Channelling earthly beauty into devotional offering — seeing the divine in all creation',
    mantra: 'Om Rohinyai Namaha', luckyColour: 'White', luckyNumber: 2, bodyPart: 'Forehead', soundSyllables: 'O, Va, Vi, Vu',
  },
  {
    index: 4, tamilName: 'Mirugasirisham', sanskritName: 'Mrigashira', rulingPlanet: 'Mars', dashaYears: 7,
    rasi: 'Rishabam', rasiIndex: 1, startDegree: 53.33, deity: 'Soma (Moon God / Nectar)',
    symbol: 'Deer\'s Head', character: 'Mirugasirisham people are eternally curious seekers whose gentle, inquisitive deer-like nature leads them on a perpetual quest for beauty, love, and the elusive perfection they sense just beyond the horizon. Their sensitive souls are gifted with creative insight and a deeply poetic nature.',
    positiveTraits: ['Gentle curiosity', 'Artistic sensitivity', 'Romantic idealism'],
    negativeTraits: ['Restless seeking', 'Nervous temperament'],
    careerAptitude: 'Travel, research, teaching, writing, marketing, textile/fashion design, real estate',
    health: 'Nervous system and shoulders require attention — regular rest and nature exposure are healing',
    spiritualPath: 'Transforming the restless search for earthly perfection into the quest for divine union',
    mantra: 'Om Mrigashirshaayai Namaha', luckyColour: 'Silver / White', luckyNumber: 7, bodyPart: 'Eyes', soundSyllables: 'Ve, Vo, Ka, Ke',
  },
  {
    index: 5, tamilName: 'Thiruvadhirai', sanskritName: 'Ardra', rulingPlanet: 'Rahu', dashaYears: 18,
    rasi: 'Midhunam', rasiIndex: 2, startDegree: 66.66, deity: 'Rudra (Fierce Shiva)',
    symbol: 'Teardrop / Diamond', character: 'Thiruvadhirai people are intensely intellectual forces of transformation who channel the stormy energy of Rudra into revolutionary thinking and profound breakthroughs in knowledge. Their capacity for deep grief and equally deep renewal gives them extraordinary empathy and psychological insight.',
    positiveTraits: ['Transformative intellect', 'Deep empathy', 'Innovative thinking'],
    negativeTraits: ['Emotional turbulence', 'Destructive impulses'],
    careerAptitude: 'Research, surgery, psychology, engineering, mathematics, technology, investigative journalism',
    health: 'Respiratory and immune system — Rahu\'s influence requires grounding practices and clean diet',
    spiritualPath: 'Embracing storms of transformation as the grace of Rudra clearing the path to liberation',
    mantra: 'Om Ardraayai Namaha', luckyColour: 'Black / Grey', luckyNumber: 4, bodyPart: 'Arms', soundSyllables: 'Ku, Gha, Ng, Ja',
  },
  {
    index: 6, tamilName: 'Punarpoosam', sanskritName: 'Punarvasu', rulingPlanet: 'Jupiter', dashaYears: 16,
    rasi: 'Midhunam', rasiIndex: 2, startDegree: 80, deity: 'Aditi (Mother of Gods)',
    symbol: 'Quiver of Arrows', character: 'Punarpoosam people carry the boundless, abundant energy of Aditi — they embody renewal, restoration, and the unconditional generosity of the cosmic mother who provides endlessly for all her children. Their optimistic resilience allows them to return from any setback with greater wisdom and joy.',
    positiveTraits: ['Joyful resilience', 'Generous spirit', 'Philosophical depth'],
    negativeTraits: ['Restlessness', 'Over-simplification'],
    careerAptitude: 'Teaching, counselling, spiritual leadership, business, hospitality, philosophy, writing',
    health: 'Liver health and over-extension of energy — Jupiter\'s excess requires moderation in all things',
    spiritualPath: 'Embodying the Mother\'s unconditional abundance — giving without expectation of return',
    mantra: 'Om Punarvasyai Namaha', luckyColour: 'Yellow', luckyNumber: 3, bodyPart: 'Shoulder', soundSyllables: 'Ke, Ko, Ha, Hi',
  },
  {
    index: 7, tamilName: 'Poosam', sanskritName: 'Pushya', rulingPlanet: 'Saturn', dashaYears: 19,
    rasi: 'Kadagam', rasiIndex: 3, startDegree: 93.33, deity: 'Brihaspati (Divine Teacher)',
    symbol: 'Cow\'s Udder / Lotus', character: 'Poosam people are the nourishing, nurturing forces of the zodiac — deeply connected to the divine teacher Brihaspati, they have an innate wisdom and capacity for care that sustains entire communities. Their patient, steady energy is considered the most auspicious of all nakshatras for beginnings.',
    positiveTraits: ['Nurturing wisdom', 'Auspicious energy', 'Patient care'],
    negativeTraits: ['Dogmatism', 'Possessiveness'],
    careerAptitude: 'Teaching, counselling, nursing, social work, religion, food industry, government',
    health: 'Digestive and chest health — emotional eating patterns require mindful awareness',
    spiritualPath: 'Becoming the nourishing teacher — feeding all beings with wisdom, food, and love',
    mantra: 'Om Pushyaayai Namaha', luckyColour: 'Red', luckyNumber: 8, bodyPart: 'Chest', soundSyllables: 'Hu, He, Ho, Da',
  },
  {
    index: 8, tamilName: 'Ayilyam', sanskritName: 'Ashlesha', rulingPlanet: 'Mercury', dashaYears: 17,
    rasi: 'Kadagam', rasiIndex: 3, startDegree: 106.66, deity: 'Sarpas (Serpent Gods)',
    symbol: 'Coiled Serpent', character: 'Ayilyam people possess the coiled kundalini power of the serpent — magnetic, perceptive, and capable of profound transformation through the rising of inner wisdom energy. Their penetrating intelligence and psychic sensitivity give them access to hidden knowledge that others cannot perceive.',
    positiveTraits: ['Psychic perception', 'Transformative power', 'Penetrating wisdom'],
    negativeTraits: ['Deception tendency', 'Manipulativeness'],
    careerAptitude: 'Medicine, pharmacy, psychology, occult sciences, research, investigative work, politics',
    health: 'Digestive and nervous system — kundalini energy requires conscious channelling through yoga',
    spiritualPath: 'Awakening the serpent fire of kundalini for divine illumination rather than worldly power',
    mantra: 'Om Ashleshayai Namaha', luckyColour: 'Black', luckyNumber: 5, bodyPart: 'Ear (Lower)', soundSyllables: 'Di, Du, De, Do',
  },
  {
    index: 9, tamilName: 'Magam', sanskritName: 'Magha', rulingPlanet: 'Ketu', dashaYears: 7,
    rasi: 'Simmam', rasiIndex: 4, startDegree: 120, deity: 'Pitris (Ancestral Spirits)',
    symbol: 'Royal Throne / Palanquin', character: 'Magam people carry the royal energy of the ancestral divine — they are born with an innate sense of dignity, authority, and connection to the higher lineage of their soul\'s journey. Their natural leadership and respect for tradition make them guardians of cultural and spiritual heritage.',
    positiveTraits: ['Regal dignity', 'Ancestral wisdom', 'Natural authority'],
    negativeTraits: ['Pride', 'Excessive traditionalism'],
    careerAptitude: 'Politics, government, corporate leadership, history, heritage, cultural preservation',
    health: 'Heart and spine — the royal body requires dignity in diet and lifestyle to maintain vitality',
    spiritualPath: 'Honouring ancestral lineage and fulfilling the highest karmic purpose of the soul\'s royal heritage',
    mantra: 'Om Maghaayai Namaha', luckyColour: 'Ivory / Cream', luckyNumber: 1, bodyPart: 'Chin / Lips', soundSyllables: 'Ma, Mi, Mu, Me',
  },
  {
    index: 10, tamilName: 'Pooram', sanskritName: 'Purva Phalguni', rulingPlanet: 'Venus', dashaYears: 20,
    rasi: 'Simmam', rasiIndex: 4, startDegree: 133.33, deity: 'Bhaga (God of Prosperity)',
    symbol: 'Front Legs of a Bed / Hammock', character: 'Pooram people are blessed by Bhaga with the gifts of pleasure, prosperity, and an irresistible charm that draws all good things into their orbit. They are natural performers and lovers who understand that the sacred and the sensual are not opposed but are two expressions of divine abundance.',
    positiveTraits: ['Radiant charm', 'Artistic talent', 'Prosperity consciousness'],
    negativeTraits: ['Laziness', 'Over-indulgence'],
    careerAptitude: 'Entertainment, arts, luxury industries, hospitality, romance, music, acting',
    health: 'Heart and back health — balancing pleasure-seeking with physical care is essential',
    spiritualPath: 'Offering all pleasures as gratitude to Bhaga — seeing divine abundance in every enjoyment',
    mantra: 'Om Purva Phalgunyai Namaha', luckyColour: 'Light Pink', luckyNumber: 6, bodyPart: 'Genitals', soundSyllables: 'Mo, Ta, Ti, Tu',
  },
  {
    index: 11, tamilName: 'Uttaram', sanskritName: 'Uttara Phalguni', rulingPlanet: 'Sun', dashaYears: 6,
    rasi: 'Simmam', rasiIndex: 4, startDegree: 146.66, deity: 'Aryaman (God of Contracts & Unions)',
    symbol: 'Back Legs of a Bed', character: 'Uttaram people are the benevolent patrons and connectors of the zodiac — they honour their commitments with solar intensity and derive deep satisfaction from facilitating the success of others. Their powerful sense of responsibility and generosity makes them trusted leaders in community and family.',
    positiveTraits: ['Reliable commitment', 'Benevolent leadership', 'Union-building'],
    negativeTraits: ['Stubbornness', 'Over-reliance on others'],
    careerAptitude: 'Law, social work, education, spiritual leadership, marriage counselling, government',
    health: 'Digestive and spine health — structured daily routine and sunlight exposure are healing',
    spiritualPath: 'Fulfilling dharmic contracts with honour — serving as the divine bridge between separated souls',
    mantra: 'Om Uttara Phalgunyai Namaha', luckyColour: 'Bright Blue', luckyNumber: 1, bodyPart: 'Left Hand', soundSyllables: 'Te, To, Pa, Pi',
  },
  {
    index: 12, tamilName: 'Hastham', sanskritName: 'Hasta', rulingPlanet: 'Moon', dashaYears: 10,
    rasi: 'Kanni', rasiIndex: 5, startDegree: 160, deity: 'Savitar (Sun God of Skill)',
    symbol: 'Open Hand / Fist', character: 'Hastham people are the skilled craftspeople and healers of the zodiac — their hands carry divine healing energy and the ability to create and restore with extraordinary precision. Their warm, helpful nature and practical intelligence make them indispensable in any environment.',
    positiveTraits: ['Skilled hands', 'Practical intelligence', 'Healing warmth'],
    negativeTraits: ['Cunning', 'Restlessness'],
    careerAptitude: 'Surgery, craftsmanship, writing, counselling, healing arts, trade, textile work',
    health: 'Digestive health and skin — Moon\'s influence requires emotional stability for physical wellbeing',
    spiritualPath: 'Offering the skill of one\'s hands as sacred service — every act of creation as worship',
    mantra: 'Om Hastaayai Namaha', luckyColour: 'Green', luckyNumber: 2, bodyPart: 'Right Hand', soundSyllables: 'Pu, Sha, Na, Tha',
  },
  {
    index: 13, tamilName: 'Chithirai', sanskritName: 'Chitra', rulingPlanet: 'Mars', dashaYears: 7,
    rasi: 'Kanni', rasiIndex: 5, startDegree: 173.33, deity: 'Vishwakarma (Divine Architect)',
    symbol: 'Bright Jewel / Pearl', character: 'Chithirai people are the architects and artists of the cosmos — gifted with Vishwakarma\'s divine aesthetic vision, they see the hidden blueprint of beauty in all things and possess the skill to manifest it into breathtaking physical reality. Their brilliance shines like their nakshatra\'s star — the brightest in the sky.',
    positiveTraits: ['Aesthetic mastery', 'Architectural vision', 'Brilliant creativity'],
    negativeTraits: ['Vanity', 'Combativeness'],
    careerAptitude: 'Architecture, design, jewellery, arts, fashion, engineering, interior design',
    health: 'Kidney and lower abdomen — Mars energy requires physical expression through sport or exercise',
    spiritualPath: 'Creating beauty as an act of divine remembrance — mirroring the sacred architecture of the cosmos',
    mantra: 'Om Chitraayai Namaha', luckyColour: 'Black / Gold', luckyNumber: 9, bodyPart: 'Forehead', soundSyllables: 'Pe, Po, Ra, Ri',
  },
  {
    index: 14, tamilName: 'Swathi', sanskritName: 'Swati', rulingPlanet: 'Rahu', dashaYears: 18,
    rasi: 'Thulam', rasiIndex: 6, startDegree: 186.66, deity: 'Vayu (God of Wind)',
    symbol: 'Young Sprout / Sword', character: 'Swathi people have the free, independent, and adaptive spirit of Vayu — they move through all environments with a graceful flexibility that allows them to thrive amid constant change. Their diplomatic intelligence and desire for independence give them a unique ability to negotiate successfully across all social boundaries.',
    positiveTraits: ['Diplomatic flexibility', 'Independent spirit', 'Adaptability'],
    negativeTraits: ['Indecisiveness', 'Scattered energy'],
    careerAptitude: 'Trade, commerce, diplomacy, music, teaching, writing, international business',
    health: 'Respiratory and skin health — Vayu\'s air energy needs grounding through routine and stability',
    spiritualPath: 'Finding stillness at the centre of movement — like the eye of a cyclone, being peace within change',
    mantra: 'Om Swathaayai Namaha', luckyColour: 'Black / Smoke', luckyNumber: 4, bodyPart: 'Chest', soundSyllables: 'Ru, Re, Ro, Ta',
  },
  {
    index: 15, tamilName: 'Visakam', sanskritName: 'Vishakha', rulingPlanet: 'Jupiter', dashaYears: 16,
    rasi: 'Thulam', rasiIndex: 6, startDegree: 200, deity: 'Indra & Agni (Lightning and Fire)',
    symbol: 'Triumphal Archway / Potter\'s Wheel', character: 'Visakam people are driven, purposeful achievers who carry the combined powers of Indra (conquest) and Agni (purification) — they set goals with fierce determination and pursue them with relentless, transformative fire. Their ambition is not ego-driven but dharmic — they fight for a higher cause.',
    positiveTraits: ['Focused ambition', 'Transformative drive', 'Purposeful clarity'],
    negativeTraits: ['Jealousy', 'Obsessive focus'],
    careerAptitude: 'Politics, business leadership, law, research, spiritual teaching, social activism',
    health: 'Lower abdomen and kidney — competitive drive needs healthy outlets to prevent tension',
    spiritualPath: 'Directing all ambition toward moksha — the ultimate triumph over the cycle of birth and death',
    mantra: 'Om Vishakhaayai Namaha', luckyColour: 'Golden Yellow', luckyNumber: 3, bodyPart: 'Arms', soundSyllables: 'Ti, Tu, Te, To',
  },
  {
    index: 16, tamilName: 'Anusham', sanskritName: 'Anuradha', rulingPlanet: 'Saturn', dashaYears: 19,
    rasi: 'Vrichigam', rasiIndex: 7, startDegree: 213.33, deity: 'Mitra (God of Friendship & Divine Contracts)',
    symbol: 'Lotus Flower / Staff of Honour', character: 'Anusham people carry the sacred energy of Mitra — they are the cosmic friends and steadfast alliance-builders who honour all relationships with deep integrity, loyalty, and compassionate power. Their extraordinary capacity for devotion, combined with Saturn\'s discipline, makes them capable of achieving remarkable success through long-term committed effort and trustworthy alliances.',
    positiveTraits: ['Devoted loyalty', 'Disciplined achievement', 'Compassionate wisdom'],
    negativeTraits: ['Obstinacy', 'Jealousy in close bonds'],
    careerAptitude: 'Research, organisational leadership, occult sciences, international collaboration, diplomacy, medicine',
    health: 'Reproductive organs and spine — Saturn\'s influence requires structured exercise and emotional boundaries',
    spiritualPath: 'Cultivating Mitra\'s sacred friendship with the divine — seeing God in every trusted relationship',
    mantra: 'Om Anuradhaayai Namaha', luckyColour: 'Red Brown / Maroon', luckyNumber: 8, bodyPart: 'Stomach', soundSyllables: 'Na, Ni, Nu, Ne',
  },
  {
    index: 17, tamilName: 'Kettai', sanskritName: 'Jyeshtha', rulingPlanet: 'Mercury', dashaYears: 17,
    rasi: 'Vrichigam', rasiIndex: 7, startDegree: 226.66, deity: 'Indra (King of Gods)',
    symbol: 'Circular Amulet / Umbrella', character: 'Kettai people carry the protective, sovereign energy of Indra — they are natural protectors and guardians who take responsibility for others with a fierce, heroic sense of duty. Their seniority, intelligence, and protective power make them natural leaders who carry their burdens with quiet, uncompromising strength.',
    positiveTraits: ['Protective leadership', 'Senior wisdom', 'Courageous responsibility'],
    negativeTraits: ['Arrogance', 'Over-protectiveness'],
    careerAptitude: 'Military, government, policing, administration, financial management, occult leadership',
    health: 'Neck and reproductive health — guardianship responsibility requires stress management',
    spiritualPath: 'Transforming personal sovereignty into universal service — protecting all beings as one\'s own',
    mantra: 'Om Jyeshthaayai Namaha', luckyColour: 'Red', luckyNumber: 5, bodyPart: 'Right Arm', soundSyllables: 'No, Ya, Yi, Yu',
  },
  {
    index: 18, tamilName: 'Moolam', sanskritName: 'Mula', rulingPlanet: 'Ketu', dashaYears: 7,
    rasi: 'Dhanusu', rasiIndex: 8, startDegree: 240, deity: 'Nirriti (Goddess of Dissolution)',
    symbol: 'Bundle of Roots / Elephant Goad', character: 'Moolam people are fearless investigators who go to the very root of all things — they have an extraordinary capacity to pull up and dissolve the deepest, most entrenched patterns in order to allow completely new growth. Their philosophical courage in facing the abyss gives them profound spiritual authority.',
    positiveTraits: ['Investigative courage', 'Root wisdom', 'Transformative dissolution'],
    negativeTraits: ['Destructiveness', 'Denial of feelings'],
    careerAptitude: 'Research, medicine, philosophy, spiritual teaching, archaeology, botany, investigation',
    health: 'Feet and hips — Ketu\'s dissolving energy requires grounding through physical activity and nature',
    spiritualPath: 'Going to the absolute root — dissolving every illusion to stand in the naked truth of pure awareness',
    mantra: 'Om Mulayai Namaha', luckyColour: 'Yellow Brown', luckyNumber: 7, bodyPart: 'Left Foot', soundSyllables: 'Ye, Yo, Ba, Bi',
  },
  {
    index: 19, tamilName: 'Pooradam', sanskritName: 'Purva Ashadha', rulingPlanet: 'Venus', dashaYears: 20,
    rasi: 'Dhanusu', rasiIndex: 8, startDegree: 253.33, deity: 'Apas (Water Goddess / Purification)',
    symbol: 'Elephant Tusk / Fan', character: 'Pooradam people have the purifying, life-giving energy of water — they persist through all obstacles with fluid determination, gradually wearing away resistance to reach their goal with an unstoppable, invincible inner strength. Their philosophical optimism and love of victory make them powerful competitors.',
    positiveTraits: ['Invincible persistence', 'Purifying energy', 'Philosophical optimism'],
    negativeTraits: ['Arrogance in victory', 'Stubbornness'],
    careerAptitude: 'Law, teaching, writing, travel, international business, water-related industries',
    health: 'Hip and thigh health — Jupiter\'s excess needs moderation to prevent liver and weight issues',
    spiritualPath: 'Aligning personal victory with divine will — winning battles that serve the collective good',
    mantra: 'Om Purva Ashadhaayai Namaha', luckyColour: 'Dark Brown', luckyNumber: 6, bodyPart: 'Thighs', soundSyllables: 'Bu, Dha, Pha, Da',
  },
  {
    index: 20, tamilName: 'Uttaradam', sanskritName: 'Uttara Ashadha', rulingPlanet: 'Sun', dashaYears: 6,
    rasi: 'Dhanusu', rasiIndex: 8, startDegree: 266.66, deity: 'Vishwadevas (Universal Gods)',
    symbol: 'Elephant Tusk / Planks of Bed', character: 'Uttaradam people carry the energy of the universal gods — they are here to achieve permanent, lasting victories that benefit all of humanity. Their perseverance, righteousness, and capacity for long-term commitment make their achievements exceptional and enduring beyond ordinary lifetimes.',
    positiveTraits: ['Lasting achievement', 'Universal vision', 'Righteous perseverance'],
    negativeTraits: ['Inability to compromise', 'Isolation'],
    careerAptitude: 'Leadership, government, military, law, spiritual guidance, international diplomacy',
    health: 'Knees and lower back — structured exercise and posture awareness prevent chronic issues',
    spiritualPath: 'Winning the ultimate victory — the permanent, irreversible liberation of consciousness',
    mantra: 'Om Uttara Ashadhaayai Namaha', luckyColour: 'Copper', luckyNumber: 1, bodyPart: 'Thigh (Upper)', soundSyllables: 'Be, Bo, Ja, Ji',
  },
  {
    index: 21, tamilName: 'Thiruvonam', sanskritName: 'Shravana', rulingPlanet: 'Moon', dashaYears: 10,
    rasi: 'Makaram', rasiIndex: 9, startDegree: 280, deity: 'Vishnu (Preserver)',
    symbol: 'Ear / Three Footprints', character: 'Thiruvonam people are blessed by Vishnu\'s preserving grace with an extraordinary gift for listening, learning, and transmitting the highest wisdom across all cultures and traditions. Their ability to hear what is unsaid and connect disparate wisdom traditions makes them powerful educators and cultural bridges.',
    positiveTraits: ['Sacred listening', 'Cultural wisdom', 'Preserving grace'],
    negativeTraits: ['Gossip tendency', 'Over-sensitivity to criticism'],
    careerAptitude: 'Education, media, cultural studies, counselling, music, translation, religious leadership',
    health: 'Ear and knee health — Moon\'s influence benefits from regular water therapy and sound healing',
    spiritualPath: 'Becoming the perfect listener of divine wisdom — transmitting Vishnu\'s preserving consciousness',
    mantra: 'Om Shravaayai Namaha', luckyColour: 'Light Blue', luckyNumber: 2, bodyPart: 'Ears', soundSyllables: 'Ju, Je, Jo, Kha',
  },
  {
    index: 22, tamilName: 'Avittam', sanskritName: 'Dhanishtha', rulingPlanet: 'Mars', dashaYears: 7,
    rasi: 'Makaram', rasiIndex: 9, startDegree: 293.33, deity: 'Ashta Vasus (Eight Elemental Gods)',
    symbol: 'Drum / Flute', character: 'Avittam people carry the rhythmic power of the eight elemental Vasus — they have an exceptional sense of timing, musicality, and the ability to move in perfect rhythm with the cosmic pulse of creation. Their Mars energy gives them courageous ambition while Saturn\'s discipline ensures they build something truly lasting.',
    positiveTraits: ['Musical timing', 'Courageous ambition', 'Elemental power'],
    negativeTraits: ['Boastfulness', 'Materialism'],
    careerAptitude: 'Music, entertainment, military, sports, real estate, government administration, technology',
    health: 'Ankles and circulatory system — rhythmic exercise such as dance or swimming is deeply healing',
    spiritualPath: 'Aligning personal rhythm with the cosmic drum of creation — Shiva\'s dance of universal perfection',
    mantra: 'Om Dhanisthayai Namaha', luckyColour: 'Silver', luckyNumber: 9, bodyPart: 'Back', soundSyllables: 'Ga, Gi, Gu, Ge',
  },
  {
    index: 23, tamilName: 'Sathayam', sanskritName: 'Shatabhisha', rulingPlanet: 'Rahu', dashaYears: 18,
    rasi: 'Kumbam', rasiIndex: 10, startDegree: 306.66, deity: 'Varuna (God of Cosmic Law)',
    symbol: 'Empty Circle / Thousand Flowers', character: 'Sathayam people carry the mysterious, cosmic healing power of the star cluster named the "Hundred Physicians" — they are born with extraordinary capacity for healing, metaphysical research, and understanding the hidden laws that govern cosmic existence. Their scientific and mystical minds bridge the seen and unseen worlds.',
    positiveTraits: ['Healing power', 'Scientific mysticism', 'Cosmic law awareness'],
    negativeTraits: ['Secretiveness', 'Harsh truthfulness'],
    careerAptitude: 'Medicine, research, astrology, occult sciences, philosophy, astronomy, healing arts',
    health: 'Circulation and ankles — Rahu\'s energy requires structured detox practices and clean environment',
    spiritualPath: 'Discovering and living by Varuna\'s cosmic law — serving as a transparent channel of divine order',
    mantra: 'Om Shatabhishaayai Namaha', luckyColour: 'Blue-Green', luckyNumber: 4, bodyPart: 'Right Thigh', soundSyllables: 'Go, Sa, Si, Su',
  },
  {
    index: 24, tamilName: 'Pooratathi', sanskritName: 'Purva Bhadrapada', rulingPlanet: 'Jupiter', dashaYears: 16,
    rasi: 'Kumbam', rasiIndex: 10, startDegree: 320, deity: 'Aja Ekapada (One-Footed Goat / Lightning Serpent)',
    symbol: 'Front of Funeral Cot / Two-Faced Man', character: 'Pooratathi people carry the intense transformative lightning energy of Aja Ekapada — they are powerful shamanic forces who work with the energies of life and death, transformation and transcendence, with ferocious courage. Their capacity to stand at the threshold between worlds gives them extraordinary spiritual and psychological depth.',
    positiveTraits: ['Transformative courage', 'Shamanic depth', 'Passionate intensity'],
    negativeTraits: ['Extremism', 'Aggressive impulsiveness'],
    careerAptitude: 'Occult sciences, research, psychology, alternative medicine, philosophy, spiritual leadership',
    health: 'Ribs and feet — Jupiter\'s fiery aspect here needs cooling practices and philosophical moderation',
    spiritualPath: 'Embracing radical transformation as the lightning path to liberation — burning completely to be reborn',
    mantra: 'Om Purva Bhadrapadaayai Namaha', luckyColour: 'Gold', luckyNumber: 3, bodyPart: 'Ribs', soundSyllables: 'Se, So, Da, Di',
  },
  {
    index: 25, tamilName: 'Uttaratathi', sanskritName: 'Uttara Bhadrapada', rulingPlanet: 'Saturn', dashaYears: 19,
    rasi: 'Meenam', rasiIndex: 11, startDegree: 333.33, deity: 'Ahir Budhnya (Serpent of the Deep)',
    symbol: 'Back of Funeral Cot / Twin Cobras', character: 'Uttaratathi people carry the profound, still depths of Ahir Budhnya — the cosmic serpent who rests in the primordial waters of the deep unconscious. Their extraordinary patience, wisdom, and compassion make them powerful healers of the deepest karmic wounds in others.',
    positiveTraits: ['Deep compassion', 'Profound patience', 'Karmic healing wisdom'],
    negativeTraits: ['Laziness', 'Excessive withdrawal'],
    careerAptitude: 'Spiritual counselling, healing arts, marine biology, philosophy, social work, meditation teaching',
    health: 'Feet and lymphatic — Saturn\'s deep water energy needs movement and regular detoxification',
    spiritualPath: 'Sinking into the primordial depth of being — dissolving into the infinite compassion of the cosmic serpent',
    mantra: 'Om Uttara Bhadrapadaayai Namaha', luckyColour: 'Purple', luckyNumber: 8, bodyPart: 'Ankles', soundSyllables: 'Du, Tha, Jha, Na',
  },
  {
    index: 26, tamilName: 'Revathi', sanskritName: 'Revati', rulingPlanet: 'Mercury', dashaYears: 17,
    rasi: 'Meenam', rasiIndex: 11, startDegree: 346.66, deity: 'Pushan (God of Safe Travel)',
    symbol: 'Fish / Drum', character: 'Revathi people are guided by Pushan\'s protective grace on the final and most sacred stage of the cosmic journey — they are gentle, compassionate shepherds who guide souls safely home. Their nurturing wisdom and psychic sensitivity make them extraordinary healers, carers, and spiritual guides for those at life\'s thresholds.',
    positiveTraits: ['Gentle guidance', 'Psychic sensitivity', 'Nurturing compassion'],
    negativeTraits: ['Over-sensitivity', 'Impracticality'],
    careerAptitude: 'Spiritual guidance, counselling, social work, travel, animal care, arts, healing, midwifery',
    health: 'Feet and immune system — Mercury\'s compassionate mind needs boundaries to prevent depletion',
    spiritualPath: 'Being Pushan\'s guide — safely escorting all beings across the final threshold into liberation',
    mantra: 'Om Revathaayai Namaha', luckyColour: 'Beige / Warm White', luckyNumber: 5, bodyPart: 'Left Foot', soundSyllables: 'De, Do, Cha, Chi',
  },
]

// ── Saturn Sidereal Transit Table (Hindu Zodiac) ─────────────────
// Approximate entry/exit dates for Saturn in each sidereal Rasi
export interface SaturnTransit {
  rasiIndex: number   // 0-based rasi index
  rasiName: string
  entryYear: number
  entryMonth: number  // 1-12
  exitYear: number
  exitMonth: number
  entryLabel: string  // Human-readable
  exitLabel: string
}

export const SATURN_TRANSITS: SaturnTransit[] = [
  // Historical and future transits (sidereal / Hindu ayanamsha)
  { rasiIndex: 7, rasiName: 'Vrichigam', entryYear: 2014, entryMonth: 11, exitYear: 2017, exitMonth: 10, entryLabel: 'Nov 2014', exitLabel: 'Oct 2017' },
  { rasiIndex: 8, rasiName: 'Dhanusu',   entryYear: 2017, entryMonth: 10, exitYear: 2020, exitMonth: 1,  entryLabel: 'Oct 2017', exitLabel: 'Jan 2020' },
  { rasiIndex: 9, rasiName: 'Makaram',   entryYear: 2020, entryMonth: 1,  exitYear: 2022, exitMonth: 4,  entryLabel: 'Jan 2020', exitLabel: 'Apr 2022' },
  { rasiIndex: 10, rasiName: 'Kumbam',   entryYear: 2022, entryMonth: 4,  exitYear: 2025, exitMonth: 3,  entryLabel: 'Apr 2022', exitLabel: 'Mar 2025' },
  { rasiIndex: 11, rasiName: 'Meenam',   entryYear: 2025, entryMonth: 3,  exitYear: 2027, exitMonth: 6,  entryLabel: 'Mar 2025', exitLabel: 'Jun 2027' },
  { rasiIndex: 0,  rasiName: 'Mesham',   entryYear: 2027, entryMonth: 6,  exitYear: 2029, exitMonth: 8,  entryLabel: 'Jun 2027', exitLabel: 'Aug 2029' },
  { rasiIndex: 1,  rasiName: 'Rishabam', entryYear: 2029, entryMonth: 8,  exitYear: 2031, exitMonth: 10, entryLabel: 'Aug 2029', exitLabel: 'Oct 2031' },
  { rasiIndex: 2,  rasiName: 'Midhunam', entryYear: 2031, entryMonth: 10, exitYear: 2033, exitMonth: 12, entryLabel: 'Oct 2031', exitLabel: 'Dec 2033' },
  { rasiIndex: 3,  rasiName: 'Kadagam',  entryYear: 2033, entryMonth: 12, exitYear: 2036, exitMonth: 1,  entryLabel: 'Dec 2033', exitLabel: 'Jan 2036' },
  { rasiIndex: 4,  rasiName: 'Simmam',   entryYear: 2036, entryMonth: 1,  exitYear: 2038, exitMonth: 3,  entryLabel: 'Jan 2036', exitLabel: 'Mar 2038' },
  { rasiIndex: 5,  rasiName: 'Kanni',    entryYear: 2038, entryMonth: 3,  exitYear: 2040, exitMonth: 5,  entryLabel: 'Mar 2038', exitLabel: 'May 2040' },
  { rasiIndex: 6,  rasiName: 'Thulam',   entryYear: 2040, entryMonth: 5,  exitYear: 2042, exitMonth: 7,  entryLabel: 'May 2040', exitLabel: 'Jul 2042' },
  { rasiIndex: 7,  rasiName: 'Vrichigam',entryYear: 2042, entryMonth: 7,  exitYear: 2044, exitMonth: 10, entryLabel: 'Jul 2042', exitLabel: 'Oct 2044' },
  { rasiIndex: 8,  rasiName: 'Dhanusu',  entryYear: 2044, entryMonth: 10, exitYear: 2046, exitMonth: 12, entryLabel: 'Oct 2044', exitLabel: 'Dec 2046' },
]

// ── Sani Period Interpretations ──────────────────────────────────
export type SaniType = 'sade_sati_rising' | 'sade_sati_peak' | 'sade_sati_setting' | 'ashtama_sani' | 'ardhastama_sani' | 'clear'

export interface SaniPeriodInfo {
  type: SaniType
  tamilName: string
  englishName: string
  duration: string
  intensity: 'Very High' | 'High' | 'Moderate' | 'Clear'
  overview: string
  lifeAreas: string[]
  remedies: string[]
  mantra: string
  colour: 'red' | 'amber' | 'yellow' | 'green'
}

export const SANI_PERIOD_INFO: Record<SaniType, SaniPeriodInfo> = {
  sade_sati_rising: {
    type: 'sade_sati_rising', tamilName: 'Elarai Sani — Udhaya Parvam (Rising Phase)', englishName: 'Sade Sati — Phase 1 (Rising)',
    duration: '~2.5 years', intensity: 'High',
    overview: 'Saturn approaches from the 12th house, creating subtle but persistent pressure on mental peace, sleep, expenditure, and foreign travel. This phase initiates a period of deep introspection and gradual release of what no longer serves your highest good.',
    lifeAreas: ['Increased expenses', 'Sleep disturbances', 'Foreign travel or relocation', 'Mental unrest', 'Subtle career pressures'],
    remedies: ['Light sesame oil lamp on Saturdays', 'Donate black sesame to Shani temple', 'Fast on Saturdays (or eat sesame-based food)', 'Visit Hanuman temple on Saturdays'],
    mantra: 'Om Shram Shreem Shroum Sah Shanaischaraya Namaha',
    colour: 'amber',
  },
  sade_sati_peak: {
    type: 'sade_sati_peak', tamilName: 'Elarai Sani — Janma Parvam (Peak Phase)', englishName: 'Sade Sati — Phase 2 (Peak / Janma Sani)',
    duration: '~2.5 years', intensity: 'Very High',
    overview: 'Saturn transits directly over your birth Rasi in the most intense phase of Sade Sati — testing your identity, health, career, and core relationships at the deepest level. This is the forge of transformation: everything that is not genuine is burned away so your true self can emerge stronger.',
    lifeAreas: ['Identity and self-concept challenges', 'Major health issues possible', 'Career shifts or setbacks', 'Relationship tensions', 'Spiritual awakening through hardship'],
    remedies: ['Daily chanting of Shani Stotram (108 times)', 'Weekly sesame oil abhishekam at Shani shrine', 'Donate iron, sesame oil, and black items on Saturdays', 'Recite Hanuman Chalisa daily for protection'],
    mantra: 'Om Pram Preem Proum Sah Shanaischaraya Namaha (108 times daily)',
    colour: 'red',
  },
  sade_sati_setting: {
    type: 'sade_sati_setting', tamilName: 'Elarai Sani — Asta Parvam (Setting Phase)', englishName: 'Sade Sati — Phase 3 (Setting)',
    duration: '~2.5 years', intensity: 'High',
    overview: 'Saturn moves to the 2nd house, creating financial pressures, family tensions, and speech-related issues — but also signalling that the most intense phase has passed. Discipline in finances and family communication during this phase leads to the full restoration of stability as Saturn moves on.',
    lifeAreas: ['Financial strain and budget pressure', 'Family disagreements', 'Speech and communication issues', 'Food and diet disruptions', 'Gradual recovery beginning'],
    remedies: ['Donate food to the poor on Saturdays', 'Light 7-wick sesame oil lamp facing west', 'Chant Shani mantra at sunset every Saturday', 'Avoid lending money without documentation'],
    mantra: 'Om Shanaishcharaya Namaha (at sunset, 7 times)',
    colour: 'amber',
  },
  ashtama_sani: {
    type: 'ashtama_sani', tamilName: 'Ashtama Sani (Kantaka Sani)', englishName: 'Ashtama Sani — 8th House Saturn',
    duration: '~2.5 years', intensity: 'High',
    overview: 'Saturn\'s transit through the 8th house from your Rasi creates intense challenges in hidden matters, sudden reversals, chronic health issues, and obstacles in long-standing projects. This period tests your resilience in the face of unexpected change and forces confrontation with deep-seated fears.',
    lifeAreas: ['Sudden unexpected reversals', 'Hidden health issues emerging', 'Obstacles in inheritance or shared finance', 'Secret enemies active', 'Transformation through loss'],
    remedies: ['Visit Shani temple on Saturdays and pour sesame oil', 'Fast on Saturdays or eat sesame-based food only', 'Donate dark blue cloth and iron items', 'Strengthen Hanuman devotion for protection'],
    mantra: 'Om Neelanjana Samaabhasam Raviputram Yamagrajam — Chhaya Martanda Sambhutam Tam Namami Shanaiswaram',
    colour: 'amber',
  },
  ardhastama_sani: {
    type: 'ardhastama_sani', tamilName: 'Ardhastama Sani (4th House Sani)', englishName: 'Ardhastama Sani — 4th House Saturn',
    duration: '~2.5 years', intensity: 'Moderate',
    overview: 'Saturn in the 4th house creates domestic disruptions, property-related pressures, vehicle problems, and potential mother\'s health concerns. This is a moderately challenging transit that requires attention to home, heart, and maternal relationships.',
    lifeAreas: ['Domestic unrest', 'Property or vehicle issues', 'Mother\'s health concerns', 'Loss of comforts', 'Heart and emotional pressure'],
    remedies: ['Perform home puja daily during this period', 'Light sesame oil lamp in the southwest of home', 'Donate milk and food to the needy', 'Strengthen relationship with mother'],
    mantra: 'Om Shanaishcharaya Namaha — 19 times on Saturday morning',
    colour: 'yellow',
  },
  clear: {
    type: 'clear', tamilName: 'Shani Anugrahakala (Saturn\'s Blessing Period)', englishName: 'Favourable Saturn Period',
    duration: 'Current transit period', intensity: 'Clear',
    overview: 'Saturn is currently in a neutral to favourable position relative to your birth Rasi — you are in a period where Saturn\'s challenging energies are not directly activated. This is a time to build, consolidate, and prepare for future planetary cycles with disciplined effort and spiritual practice.',
    lifeAreas: ['Stable progress in career', 'Gradual wealth building', 'Good health maintenance', 'Harmonious family life', 'Spiritual growth opportunities'],
    remedies: ['Continue regular Saturday Shani puja as preventive measure', 'Maintain disciplined routine and hard work — Saturn blesses effort', 'Donate to the elderly or disabled on Saturdays'],
    mantra: 'Om Shanaishcharaya Namaha — regular Saturday chanting',
    colour: 'green',
  },
}

// ── Rasi-based Saturn predictions ───────────────────────────────
export const RASI_SANI_PREDICTIONS: Record<string, Record<SaniType, string>> = {
  Mesham: {
    sade_sati_rising: 'Mesham Rasi enters Sade Sati with Saturn approaching from Meenam. Unexpected expenses, travel, and sleep disruptions test your resilience. Murugan puja and Red Coral strengthen your Mars energy against Saturn\'s pressure.',
    sade_sati_peak: 'Janma Sani for Mesham creates intense pressure on career, health, and personal identity. Your pioneering spirit is being tested — persevere with discipline. This phase transforms impulsive Mesham energy into mature, enduring leadership.',
    sade_sati_setting: 'The setting phase affects Mesham finances and family communication. Guard against hasty spending and impulsive words in family matters. Consistent discipline now leads to full recovery and renewed energy.',
    ashtama_sani: 'Saturn in Vrichigam creates sudden obstacles for Mesham in research, hidden matters, and inheritance. Avoid major financial risks and protect health with preventive care. Murugan puja on Tuesdays provides strong protective energy.',
    ardhastama_sani: 'Saturn in Kadagam creates domestic tensions and property-related pressures for Mesham. Focus on strengthening family bonds and maintaining home stability. Mars-based remedies and Murugan worship provide support.',
    clear: 'Mesham Rasi currently enjoys Saturn\'s neutral to positive influence. Your Mars-ruled courageous energy flows freely — use this window to launch bold initiatives and build durable foundations that will sustain future Sani periods.',
  },
  Rishabam: {
    sade_sati_rising: 'Rishabam enters Sade Sati with gradual financial and health pressures emerging. Your natural patience serves you well — disciplined saving and Lakshmi puja on Fridays strengthen Venus against Saturn\'s testing.',
    sade_sati_peak: 'Janma Sani challenges Rishabam\'s core stability — financial losses, health issues, and relationship pressures test your legendary endurance. This phase ultimately delivers profound wisdom about true versus false security.',
    sade_sati_setting: 'The setting phase pressures Rishabam finances and family harmony. Your Venus-ruled diplomacy helps navigate family tensions. Strict budgeting and Lakshmi puja ensure financial recovery begins firmly.',
    ashtama_sani: 'Saturn in Dhanusu creates challenges for Rishabam in inheritance and philosophical matters. Hidden financial issues may surface. Lakshmi puja and Diamond or White Sapphire provide Venus-powered protective strength.',
    ardhastama_sani: 'Saturn in Simmam creates domestic pressure and reduced comforts for Rishabam. Your love of home is tested — use this time to deepen spiritual practice and reduce material attachment. Lakshmi worship brings relief.',
    clear: 'Rishabam Rasi currently enjoys Saturn\'s harmonious positioning. Your Venus-ruled beauty and stability attract financial abundance. Build durable wealth, strengthen relationships, and invest in long-term security during this favoured period.',
  },
  Midhunam: {
    sade_sati_rising: 'Midhunam enters Sade Sati with Mercury-Saturn tension creating communication challenges and increased expenses. Your adaptability helps navigate early Sade Sati — Budha puja on Wednesdays and Emerald stone provide support.',
    sade_sati_peak: 'Janma Sani challenges Midhunam\'s intellectual agility with career obstacles and health pressures. This phase slows your naturally rapid Mercury energy — the wisdom of patience and methodical effort is Saturn\'s gift to you.',
    sade_sati_setting: 'The setting phase creates family and financial communication tensions for Midhunam. Your natural verbal skills help resolve conflicts. Mercury-Saturn alignment brings analytical wisdom from this testing period.',
    ashtama_sani: 'Saturn in Makaram creates career and government-related challenges for Midhunam. Hidden professional obstacles require careful navigation. Mercury-based remedies and Budha puja protect your intellectual and business interests.',
    ardhastama_sani: 'Saturn in Kanni creates domestic disruptions and digestive health issues for Midhunam. Structured daily routines and analytical problem-solving help stabilise home life during this transit.',
    clear: 'Midhunam Rasi currently benefits from Saturn\'s constructive positioning. Your Mercury-ruled communication and intellectual gifts flourish — launch new business ideas, writing projects, and educational ventures with confidence now.',
  },
  Kadagam: {
    sade_sati_rising: 'Kadagam enters Sade Sati with Moon-Saturn tension creating emotional sensitivity, sleep issues, and subtle family pressures. Moon-based remedies including milk offerings and Pearl strengthen your emotional foundation.',
    sade_sati_peak: 'Janma Sani is most emotionally intense for Kadagam — home, family, and nurturing relationships all face pressure. This period forces emotional boundaries and mature self-care. Parvati puja and Moon remedies provide deep support.',
    sade_sati_setting: 'The setting phase creates financial pressures and family communication challenges for Kadagam. Your natural caregiving instinct helps maintain family bonds. Careful budgeting and consistent Moon remedies ensure recovery.',
    ashtama_sani: 'Saturn in Kumbam creates sudden disruptions for Kadagam in hidden matters and domestic stability. Property and inheritance issues may arise. Pearl and Chandra puja offer protective stabilising energy.',
    ardhastama_sani: 'Saturn in Thulam creates home-related tensions and relationship pressures for Kadagam. Focus on harmonising family dynamics and maintaining domestic peace through honest communication.',
    clear: 'Kadagam Rasi currently enjoys Saturn\'s supportive positioning. Your Moon-ruled intuition and nurturing gifts attract family blessings and property gains. Use this stable period to strengthen home, savings, and family relationships.',
  },
  Simmam: {
    sade_sati_rising: 'Simmam enters Sade Sati with subtle career and recognition pressures beginning. Saturn challenges your Sun-ruled pride — humility and service become your greatest shields. Ruby and Surya Namaskar strengthen solar energy.',
    sade_sati_peak: 'Janma Sani is highly significant for Simmam as Saturn directly challenges the Sun-ruled royal identity. Government and career setbacks test leadership. This transformative period produces profound wisdom about true versus ego-driven authority.',
    sade_sati_setting: 'The setting phase creates financial and family pressures for Simmam. Your natural generosity may be temporarily constrained — wise financial management is essential. Solar remedies and maintaining spiritual dignity ensure full recovery.',
    ashtama_sani: 'Saturn in Meenam creates sudden challenges for Simmam in hidden health matters and spiritual life. Unexpected expenses or health issues may arise. Sun-strengthening remedies and reduced ego-driven decisions provide protection.',
    ardhastama_sani: 'Saturn in Vrichigam creates domestic intensity and emotional depth challenges for Simmam. This period forces confrontation with shadow aspects of personality. Surya puja and Ruby stone maintain solar protective energy.',
    clear: 'Simmam Rasi currently basks in Saturn\'s constructive positioning. Your Sun-ruled authority, creativity, and leadership naturally attract recognition and success. Use this favoured period to build lasting achievements and consolidate power.',
  },
  Kanni: {
    sade_sati_rising: 'Kanni enters Sade Sati with mental anxiety and health concerns beginning subtly. Mercury-Saturn creates analytical overthinking — structured meditation and Budha puja with Emerald stone provide effective protection and grounding.',
    sade_sati_peak: 'Janma Sani for Kanni intensifies health, career, and service-related pressures. Your perfectionist nature is challenged by unavoidable imperfection — this phase teaches wise surrender and trust in cosmic timing over human control.',
    sade_sati_setting: 'The setting phase creates financial precision challenges and family health concerns for Kanni. Your analytical skills help identify solutions — budgeting excellence and service-oriented charity ensure steady recovery.',
    ashtama_sani: 'Saturn in Mesham creates sudden career disruptions and health surprises for Kanni. Hidden issues in work environment may surface. Mercury remedies and Budha puja maintain your analytical protective intelligence.',
    ardhastama_sani: 'Saturn in Dhanusu creates domestic philosophical tensions for Kanni. Balance analytical tendencies with broader perspective. Saraswati puja and digestive health care provide support during this transit.',
    clear: 'Kanni Rasi currently benefits from Saturn\'s disciplined harmony with your Mercury nature. Your analytical precision, service ethic, and health consciousness flourish — advance professional goals, health optimisation, and technical expertise now.',
  },
  Thulam: {
    sade_sati_rising: 'Thulam enters Sade Sati with relationship and financial balance pressures beginning. Venus-Saturn tension challenges your natural harmony-seeking — Lakshmi puja on Fridays and Diamond stone maintain Venus protective energy.',
    sade_sati_peak: 'Janma Sani creates profound pressure on Thulam\'s core partnerships, legal matters, and financial balance. This period tests your capacity for genuine fairness in all relationships — the outcome is deeper, more authentic bonds.',
    sade_sati_setting: 'The setting phase creates financial communication and family relationship tensions for Thulam. Your diplomatic nature helps navigate carefully — Lakshmi puja and Venus remedies ensure recovery of relationship harmony.',
    ashtama_sani: 'Saturn in Rishabam creates sudden financial reversals and partnership challenges for Thulam. Hidden contractual issues may surface. Venus-based remedies and Lakshmi puja provide powerful protective support.',
    ardhastama_sani: 'Saturn in Makaram creates home comfort reductions and domestic tensions for Thulam. Your Venus-ruled love of comfort is temporarily tested — use this time to develop deeper inner contentment beyond external luxury.',
    clear: 'Thulam Rasi currently enjoys Saturn\'s favourable positioning. Your Venus-ruled diplomacy, charm, and fairness attract partnership successes, legal victories, and financial harmony. Advance key alliances and creative projects boldly now.',
  },
  Vrichigam: {
    sade_sati_rising: 'Vrichigam enters Sade Sati with Thulam transit creating subtle financial pressures and relationship recalibration. Your natural resilience and Mars depth serve you — Shiva puja and Red Coral maintain Mars protective energy through this opening phase.',
    sade_sati_peak: 'Janma Sani intensely tests Vrichigam\'s transformative core — career, health, and intimate relationships all face profound restructuring. This is your deepest alchemical phase: everything that is not authentic and enduring is dissolved and reborn in purified form.',
    sade_sati_setting: 'The setting phase challenges Vrichigam finances and family communication in Dhanusu transit. Your depth and resilience help navigate the final phase of Sade Sati — consistent Shiva puja and disciplined financial management complete your transformation.',
    ashtama_sani: 'Saturn in Midhunam creates communication disruptions and hidden obstacles in career for Vrichigam. Mercury-Saturn opposition challenges your normally penetrating directness. Shiva puja and Red Coral maintain protective Mars energy.',
    ardhastama_sani: 'Saturn in Kumbam creates domestic disruptions and sudden changes in home life for Vrichigam. Your fixed nature resists unwanted change — but flexibility and Shiva-Shakti puja enable smooth navigation of this transit.',
    clear: 'Vrichigam Rasi currently enjoys a constructive Saturn positioning. Your Mars-ruled depth, research ability, and transformative power flow freely — advance occult knowledge, deep research, business ventures, and strategic alliances with confidence.',
  },
  Dhanusu: {
    sade_sati_rising: 'Dhanusu enters Sade Sati with subtle foreign travel disruptions and philosophical pressures beginning. Jupiter-Saturn creates wisdom-testing challenges — Dakshinamurthy puja and Yellow Sapphire strengthen your Guru energy through the opening phase.',
    sade_sati_peak: 'Janma Sani challenges Dhanusu\'s optimistic freedom and philosophical certainty — career, health, and educational setbacks test Jupiterian expansion. This phase teaches the wisdom of sustainable growth versus reckless overextension.',
    sade_sati_setting: 'The setting phase challenges Dhanusu finances and family relationships in Kumbam. Your philosophical nature finds meaning even in constraint — regular Jupiter remedies and generous charitable giving ensure full recovery.',
    ashtama_sani: 'Saturn in Kadagam creates sudden emotional disruptions and hidden family issues for Dhanusu. Your naturally adventurous freedom is constrained — home and emotional grounding become essential. Guru puja provides protective wisdom.',
    ardhastama_sani: 'Saturn in Meenam creates domestic spiritual pressures and foot health concerns for Dhanusu. This introspective period invites deeper philosophical exploration — Dakshinamurthy puja transforms challenges into wisdom.',
    clear: 'Dhanusu Rasi currently benefits from Saturn\'s constructive positioning. Your Jupiter-ruled wisdom, optimism, and philosophical vision attract educational success, international opportunities, and spiritual advancement. Expand boldly and generously now.',
  },
  Makaram: {
    sade_sati_rising: 'Makaram enters Sade Sati as Saturn approaches from Dhanusu — as Saturn\'s own sign, this transit is particularly significant. Expenses and hidden expenses begin — Shani puja and Blue Sapphire are essential protective measures.',
    sade_sati_peak: 'Janma Sani for Makaram is a deeply karmic period — Saturn is in its own sign testing your disciplined ambition at the deepest level. Career restructuring, health challenges, and karmic debt clearing are common. Saturn rewards genuine discipline with eventual mastery.',
    sade_sati_setting: 'The setting phase in Kumbam continues Saturn\'s testing of Makaram in the 2nd house — finances and family speech require careful management. Your disciplined Saturn nature and consistent Shani remedies ensure full karmic resolution.',
    ashtama_sani: 'Saturn in Simmam creates sudden career and recognition disruptions for Makaram. Government and authority figures may create obstacles. Shani puja and Blue Sapphire provide essential karmic protection during this transit.',
    ardhastama_sani: 'Saturn in Mesham creates domestic tension and property pressures for Makaram. Your natural discipline helps maintain order — consistent Shani worship and Saturn Yantra provide stabilising karmic support.',
    clear: 'Makaram Rasi currently enjoys Saturn\'s most constructive positioning. As Saturn\'s own sign, this favourable transit delivers outstanding career advancement, financial gains, and the recognition of long-standing efforts. This is your power period — act decisively.',
  },
  Kumbam: {
    sade_sati_rising: 'Kumbam enters Sade Sati with Saturn approaching from Makaram. As Saturn\'s second sign, this Sade Sati carries unusual weight — your revolutionary nature is being called to its deepest transformation. Brahma puja and Blue Sapphire protect through this opening.',
    sade_sati_peak: 'Janma Sani for Kumbam is a profound humanitarian crisis and personal revolution simultaneously — Saturn challenges your visionary social mission at the identity level. This phase dismantles what was built on ego and reveals your true humanitarian purpose.',
    sade_sati_setting: 'The setting Sade Sati phase in Meenam tests Kumbam finances and family bonds. Your progressive ideas meet conservative family resistance — patience and Brahma puja ensure successful navigation and completion of the transformative cycle.',
    ashtama_sani: 'Saturn in Kanni creates hidden health and career perfectionism challenges for Kumbam. Mercury-Saturn tension creates analytical anxiety — grounding practices and Shani worship provide support and clarity.',
    ardhastama_sani: 'Saturn in Rishabam creates financial and material comfort pressures for Kumbam. Your idealistic nature resists material constraints — balancing idealism with practical financial discipline ensures stability.',
    clear: 'Kumbam Rasi currently benefits from Saturn\'s harmonious positioning. Your Saturn-ruled visionary intelligence and humanitarian mission attract collective recognition, innovative success, and breakthrough opportunities. Advance bold ideas now.',
  },
  Meenam: {
    sade_sati_rising: 'Meenam enters Sade Sati with Saturn in Kumbam creating subtle pressures on spiritual peace and hidden expenses. Your compassionate Jupiter energy needs practical grounding — Vishnu puja and Yellow Sapphire maintain protective divine grace.',
    sade_sati_peak: 'Janma Sani for Meenam tests the deepest spiritual and emotional dimensions — your compassionate openness is challenged by karmic demands and boundary violations. This phase teaches the wisdom of sacred boundaries while maintaining compassion.',
    sade_sati_setting: 'The setting phase in Mesham challenges Meenam finances and family communication with Mars-Saturn tension. Your gentle nature needs courageous boundaries in financial matters — Vishnu puja and consistent remedies complete the healing cycle.',
    ashtama_sani: 'Saturn in Thulam creates sudden partnership and relationship disruptions for Meenam. Hidden relationship issues surface for resolution — Vishnu puja and Yellow Sapphire provide Jupiter\'s protective grace during this challenging transit.',
    ardhastama_sani: 'Saturn in Midhunam creates domestic communication pressures and siblings issues for Meenam. Your sensitive nature amplifies family tensions — Vishnu puja and Yellow Sapphire maintain the compassionate protective energy you need.',
    clear: 'Meenam Rasi currently enjoys Saturn\'s constructive positioning. Your Jupiter-ruled compassion, spiritual depth, and creative imagination attract divine blessings, spiritual advancement, and healing success. This is your period of divine favour — receive fully.',
  },
}

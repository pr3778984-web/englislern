import { ChartTopic, NounItem, PluralPair } from '../types';

export const chartTopics: ChartTopic[] = [
  {
    id: 'use-of-i',
    titleEnglish: 'Use of "I"',
    titleGujarati: '"I" નો ઉપયોગ',
    badge: 'I = હું',
    ruleGujarati: '"I" નો ઉપયોગ બોલનાર વ્યક્તિ પોતાને માટે કરે છે. (Singular - એકવચન: હું)',
    summaryGujarati: 'પોતાના વિશે વાત કરતી વખતે હંમેશા "I" નો ઉપયોગ થાય છે. તેની સાથે સામાન્ય રીતે "am" કે "have" વપરાય છે.',
    memoryBox: {
      title: 'યાદ રાખો (Remember)',
      points: [
        'I = હું (Singular - એક વ્યક્તિ)',
        'I am = હું છું',
        'I have = મારી પાસે છે',
        'I સાથે ક્યારેય is કે has આવતું નથી!'
      ]
    },
    examples: [
      { id: 'i1', english: 'I am a boy.', gujarati: 'હું એક છોકરો છું.', icon: '👦', highlightWord: 'I am' },
      { id: 'i2', english: 'I am a student.', gujarati: 'હું એક વિદ્યાર્થી છું.', icon: '🎒', highlightWord: 'I am' },
      { id: 'i3', english: 'I have a book.', gujarati: 'મારી પાસે એક પુસ્તક છે.', icon: '📖', highlightWord: 'I have' },
      { id: 'i4', english: 'I like to play.', gujarati: 'મને રમવું ગમે છે.', icon: '⚽', highlightWord: 'I like' },
      { id: 'i5', english: 'I live in India.', gujarati: 'હું ભારતમાં રહું છું.', icon: '🇮🇳', highlightWord: 'I live' },
      { id: 'i6', english: 'I can read English.', gujarati: 'હું અંગ્રેજી વાંચી શકું છું.', icon: '📚', highlightWord: 'I can' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  },
  {
    id: 'use-of-he',
    titleEnglish: 'Use of "He"',
    titleGujarati: '"He" નો ઉપયોગ',
    badge: 'He = તે (પુરુષ)',
    ruleGujarati: '"He" નો ઉપયોગ કોઈ એક પુરુષ અથવા છોકરા માટે થાય છે. (Singular - એક પુરુષ/છોકરો)',
    summaryGujarati: 'He = તે (પુરુષ). He સાથે સામાન્ય રીતે "is" અથવા "has" વપરાય છે.',
    memoryBox: {
      title: 'યાદ રાખો (Remember)',
      points: [
        'He પુરુષ (છોકરો / પુરુષ) માટે વપરાય છે.',
        'He એક વ્યક્તિ (Singular) માટે વપરાય છે.',
        'He is = તે છે',
        'He has = તેની પાસે છે'
      ]
    },
    examples: [
      { id: 'he1', english: 'He is a boy.', gujarati: 'તે એક છોકરો છે.', icon: '👦', highlightWord: 'He is' },
      { id: 'he2', english: 'He is a student.', gujarati: 'તે એક વિદ્યાર્થી છે.', icon: '🎒', highlightWord: 'He is' },
      { id: 'he3', english: 'He has a bag.', gujarati: 'તેની પાસે એક બેગ છે.', icon: '🎒', highlightWord: 'He has' },
      { id: 'he4', english: 'He likes to play.', gujarati: 'તેને રમવું ગમે છે.', icon: '⚽', highlightWord: 'He likes' },
      { id: 'he5', english: 'He lives in a house.', gujarati: 'તે એક ઘરમાં રહે છે.', icon: '🏠', highlightWord: 'He lives' },
      { id: 'he6', english: 'He is my brother.', gujarati: 'તે મારો ભાઈ છે.', icon: '🤝', highlightWord: 'He is' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  },
  {
    id: 'use-of-she',
    titleEnglish: 'Use of "She"',
    titleGujarati: '"She" નો ઉપયોગ',
    badge: 'She = તે (સ્ત્રી)',
    ruleGujarati: '"She" નો ઉપયોગ માત્ર એક સ્ત્રી (છોકરી અથવા મહિલા) માટે થાય છે. (Singular - એક સ્ત્રી)',
    summaryGujarati: 'She = તે / તેણી (સ્ત્રી). She સાથે "is" અને "has" નો પ્રયોગ થાય છે.',
    memoryBox: {
      title: 'યાદ રાખો (Remember)',
      points: [
        'She નો ઉપયોગ માત્ર છોકરી અથવા મહિલાઓ માટે થાય છે.',
        'She = એક વ્યક્તિ (સ્ત્રી) (Singular)',
        'She is a teacher = તે એક શિક્ષિકા છે.',
        'She has a book = તેની પાસે એક પુસ્તક છે.'
      ]
    },
    examples: [
      { id: 'she1', english: 'She is a girl.', gujarati: 'તે એક છોકરી છે.', icon: '👧', highlightWord: 'She is' },
      { id: 'she2', english: 'She is a teacher.', gujarati: 'તે એક શિક્ષિકા છે.', icon: '👩‍🏫', highlightWord: 'She is' },
      { id: 'she3', english: 'She has a book.', gujarati: 'તેની પાસે એક પુસ્તક છે.', icon: '📖', highlightWord: 'She has' },
      { id: 'she4', english: 'She likes music.', gujarati: 'તેને સંગીત ગમે છે.', icon: '🎵', highlightWord: 'She likes' },
      { id: 'she5', english: 'She plays the piano.', gujarati: 'તે પિયાનો વગાડે છે.', icon: '🎹', highlightWord: 'She plays' },
      { id: 'she6', english: 'She is my sister.', gujarati: 'તે મારી બહેન છે.', icon: '🎀', highlightWord: 'She is' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  },
  {
    id: 'he-she-it',
    titleEnglish: 'He, She, It & They',
    titleGujarati: 'He, She, It (અને બહુવચન They)',
    badge: 'He / She / It',
    ruleGujarati: 'He = છોકરો/પુરુષ, She = છોકરી/સ્ત્રી, It = વસ્તુ કે પ્રાણી. આ ત્રણેયનું બહુવચન "They" (તેઓ/તેઓ બધા) થાય છે.',
    memoryBox: {
      title: 'તફાવત કોષ્ટક (Difference)',
      points: [
        'He is a boy ➔ They are boys (છોકરાઓ)',
        'She is a teacher ➔ They are teachers (શિક્ષિકાઓ)',
        'It is a cat ➔ They are cats (બિલાડીઓ)',
        'It is a book ➔ They are books (પુસ્તકો)'
      ]
    },
    examples: [
      { id: 'hsi1', english: 'He is a doctor. / They are doctors.', gujarati: 'તે ડૉક્ટર છે. / તેઓ ડૉક્ટરો છે.', icon: '👨‍⚕️' },
      { id: 'hsi2', english: 'She is my mother.', gujarati: 'તે મારી માતા છે.', icon: '👩' },
      { id: 'hsi3', english: 'It is a book. / They are books.', gujarati: 'તે એક પુસ્તક છે. / તે પુસ્તકો છે.', icon: '📚' },
      { id: 'hsi4', english: 'It is a ball. / They are balls.', gujarati: 'તે એક બોલ છે. / તે બોલો છે.', icon: '⚽' },
      { id: 'hsi5', english: 'It is a tree. / They are trees.', gujarati: 'તે એક વૃક્ષ છે. / તે વૃક્ષો છે.', icon: '🌳' },
      { id: 'hsi6', english: 'It is a car. / They are cars.', gujarati: 'તે એક કાર છે. / તે કારો છે.', icon: '🚗' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  },
  {
    id: 'this-these-that-those',
    titleEnglish: 'This, These, That, Those',
    titleGujarati: 'This, These, That, Those નો ઉપયોગ',
    badge: 'નજીક vs દૂર',
    ruleGujarati: 'This (નજીકની ૧ વસ્તુ), These (નજીકની વધુ વસ્તુઓ). That (દૂરની ૧ વસ્તુ), Those (દૂરની વધુ વસ્તુઓ).',
    memoryBox: {
      title: 'ઝટપટ યાદ રાખો (Quick Formula)',
      points: [
        'This = આ (નજીકની એક વસ્તુ - Singular)',
        'These = આ (નજીકની એકથી વધુ વસ્તુઓ - Plural)',
        'That = પેલું/તે (દૂરની એક વસ્તુ - Singular)',
        'Those = પેલાં (દૂરની એકથી વધુ વસ્તુઓ - Plural)'
      ]
    },
    examples: [
      { id: 't1', english: 'This is a book. ➔ These are books.', gujarati: 'આ પુસ્તક છે. ➔ આ પુસ્તકો છે. (નજીક)', icon: '📖' },
      { id: 't2', english: 'This is a car. ➔ These are cars.', gujarati: 'આ કાર છે. ➔ આ કારો છે. (નજીક)', icon: '🚗' },
      { id: 't3', english: 'This is a pen. ➔ These are pens.', gujarati: 'આ પેન છે. ➔ આ પેનો છે. (નજીક)', icon: '🖊️' },
      { id: 't4', english: 'That is a house. ➔ Those are houses.', gujarati: 'પેલું ઘર છે. ➔ પેલાં ઘરો છે. (દૂર)', icon: '🏠' },
      { id: 't5', english: 'That is a tree. ➔ Those are trees.', gujarati: 'પેલું ઝાડ છે. ➔ પેલાં ઝાડો છે. (દૂર)', icon: '🌳' },
      { id: 't6', english: 'That is a ball. ➔ Those are balls.', gujarati: 'પેલો બોલ છે. ➔ પેલા બોલો છે. (દૂર)', icon: '⚽' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  },
  {
    id: 'have-and-has',
    titleEnglish: 'HAVE and HAS',
    titleGujarati: 'HAVE અને HAS નો ઉપયોગ',
    badge: 'પાસે હોવું / ધરાવવું',
    ruleGujarati: 'Have અને Has નો ઉપયોગ મુખ્યત્વે કોઈ વસ્તુ "પાસે હોવું / ધરાવવું" બતાવવા માટે થાય છે.',
    memoryBox: {
      title: 'ગોલ્ડન રૂલ (Golden Rule)',
      points: [
        'I / You / We / They ➔ HAVE વપરાય (દા.ત. I have a book)',
        'He / She / It / એકવચન નામ ➔ HAS વપરાય (દા.ત. He has a bicycle)',
        '❌ ખોટું: He have a pen. ➔ ✔ સાચું: He has a pen.',
        '❌ ખોટું: She have a bag. ➔ ✔ સાચું: She has a bag.'
      ]
    },
    examples: [
      { id: 'h1', english: 'I have a book.', gujarati: 'મારી પાસે એક પુસ્તક છે.', icon: '📖', highlightWord: 'have' },
      { id: 'h2', english: 'You have a pen.', gujarati: 'તમારી પાસે એક પેન છે.', icon: '🖊️', highlightWord: 'have' },
      { id: 'h3', english: 'We have a car.', gujarati: 'અમારી પાસે એક કાર છે.', icon: '🚗', highlightWord: 'have' },
      { id: 'h4', english: 'They have a house.', gujarati: 'તેમની પાસે એક ઘર છે.', icon: '🏠', highlightWord: 'have' },
      { id: 'h5', english: 'He has a bicycle.', gujarati: 'તેની પાસે એક સાયકલ છે.', icon: '🚲', highlightWord: 'has' },
      { id: 'h6', english: 'She has a doll.', gujarati: 'તેની પાસે એક ઢીંગલી છે.', icon: '🧸', highlightWord: 'has' },
      { id: 'h7', english: 'It has four legs.', gujarati: 'તેને ચાર પગ છે.', icon: '🐕', highlightWord: 'has' },
      { id: 'h8', english: 'Ravi has a bag.', gujarati: 'રવિ પાસે એક બેગ છે.', icon: '🎒', highlightWord: 'has' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  },
  {
    id: 'articles-a-an-the',
    titleEnglish: 'Articles (A, An, The)',
    titleGujarati: 'ARTICLES (આર્ટિકલ A, An, The)',
    badge: 'A / An / The',
    ruleGujarati: 'A અને An અનિશ્ચિત આર્ટિકલ છે (Indefinite), જ્યારે The નિશ્ચિત આર્ટિકલ (Definite) છે. નિયમ અક્ષર પર નહીં પણ "ઉચ્ચાર" (Sound) પર આધાર રાખે છે!',
    memoryBox: {
      title: 'અવાજનો નિયમ (Sound Rule)',
      points: [
        '"A" નો ઉપયોગ: વ્યંજન ધ્વનિ (Consonant Sound) થી શરૂ થતા એકવચન શબ્દ આગળ (A boy, A car, A tree). અપવાદ: A university ("યુ" વ્યંજન અવાજ છે!)',
        '"An" નો ઉપયોગ: સ્વર ધ્વનિ (Vowel Sound - અ, આ, ઇ, ઈ, ઉ, એ, ઐ, ઓ) આગળ (An apple, An egg, An umbrella). અપવાદ: An hour (H શાંત/silent છે, અવાજ "આવર" થાય છે!)',
        '"The" નો ઉપયોગ: વિશ્વમાં એકમાત્ર વસ્તુઓ (The Sun, The Moon, The Earth), પર્વતો/નદીઓ (The Ganga, The Himalayas) અથવા અગાઉ ઉલ્લેખાયેલ ખાસ વસ્તુ માટે.'
      ]
    },
    examples: [
      { id: 'a1', english: 'An apple a day.', gujarati: 'એક સફરજન (સ્વર અવાજ "એ")', icon: '🍎' },
      { id: 'a2', english: 'An umbrella.', gujarati: 'એક છત્રી (સ્વર અવાજ "અ")', icon: '☂️' },
      { id: 'a3', english: 'An hour.', gujarati: 'એક કલાક (H સાઇલન્ટ - અવાજ "આવર")', icon: '⏳' },
      { id: 'a4', english: 'An honest man.', gujarati: 'એક પ્રામાણિક માણસ (H સાઇલન્ટ)', icon: '👨' },
      { id: 'a5', english: 'A university.', gujarati: 'એક યુનિવર્સિટી ("યુ" વ્યંજન ઉચ્ચાર છે)', icon: '🏛️' },
      { id: 'a6', english: 'The Sun shines bright.', gujarati: 'સૂર્ય (વિશ્વમાં એકમાત્ર માટે The)', icon: '☀️' },
      { id: 'a7', english: 'The Himalayas are huge.', gujarati: 'હિમાલય પર્વતમાળા આગળ The વપરાય.', icon: '🏔️' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  },
  {
    id: 'singular-plural-rules',
    titleEnglish: 'Singular & Plural Rules',
    titleGujarati: 'Singular & Plural ના ૭ નિયમો',
    badge: 'એકવચન અને બહુવચન',
    ruleGujarati: 'એકવચનમાંથી બહુવચન બનાવવા માટે અંગ્રેજીમાં ૭ મહત્વના નિયમો છે.',
    memoryBox: {
      title: '૭ નિયમોનું લિસ્ટ (7 Rules)',
      points: [
        '૧. સામાન્ય રીતે અંતે "s" લાગે: Book ➔ Books, Boy ➔ Boys',
        '૨. અંતે ss, sh, ch, s, o, x હોય તો "es" લાગે: Dish ➔ Dishes, Box ➔ Boxes, Mango ➔ Mangoes',
        '૩. અંતે o પહેલાં સ્વર (a,e,i,o,u) હોય તો માત્ર "s" લાગે: Radio ➔ Radios, Studio ➔ Studios',
        '૪. અંતે f કે fe હોય તો તે દૂર કરી "ves" લાગે: Leaf ➔ Leaves, Life ➔ Lives, Wife ➔ Wives',
        '૫. અંતે y પહેલાં સ્વર હોય તો માત્ર "s" લાગે: Boy ➔ Boys, Key ➔ Keys, Day ➔ Days',
        '૬. અંતે y પહેલાં વ્યંજન હોય તો y ની જગ્યાએ "ies" લાગે: Baby ➔ Babies, City ➔ Cities, Story ➔ Stories',
        '૭. અનિયમિત બહુવચન (Irregular): Man ➔ Men, Woman ➔ Women, Tooth ➔ Teeth, Foot ➔ Feet, Mouse ➔ Mice, Child ➔ Children'
      ]
    },
    examples: [
      { id: 'sp1', english: 'Box ➔ Boxes', gujarati: 'બોક્સ ➔ બોક્સિસ (નિયમ ૨: x હોવાથી es)', icon: '📦' },
      { id: 'sp2', english: 'Leaf ➔ Leaves', gujarati: 'પાંદડું ➔ પાંદડાં (નિયમ ૪: f દૂર કરી ves)', icon: '🍃' },
      { id: 'sp3', english: 'Baby ➔ Babies', gujarati: 'બાળક ➔ બાળકો (નિયમ ૬: consonant+y ➔ ies)', icon: '👶' },
      { id: 'sp4', english: 'Boy ➔ Boys', gujarati: 'છોકરો ➔ છોકરાઓ (નિયમ ૫: vowel+y ➔ s)', icon: '👦' },
      { id: 'sp5', english: 'Tooth ➔ Teeth', gujarati: 'દાંત ➔ દાંતો (નિયમ ૭: અનિયમિત બદલાવ)', icon: '🦷' },
      { id: 'sp6', english: 'Child ➔ Children', gujarati: 'બાળક ➔ બાળકો (નિયમ ૭: અનિયમિત)', icon: '🧒' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  },
  {
    id: 'short-vowels-a',
    titleEnglish: 'Short Vowel Sound "A"',
    titleGujarati: 'A - Short Vowel Sound (ફોનિક્સ)',
    badge: 'અવાજ: "એ"',
    ruleGujarati: 'જો ત્રણ અક્ષરના સ્પેલિંગમાં વચ્ચે "a" આવે તો સામાન્ય રીતે તેનો ઉચ્ચાર "એ" પ્રમાણે થાય છે.',
    memoryBox: {
      title: 'અક્ષર જોડી શબ્દ બનાવો (Word Breakdown)',
      points: [
        'R + A + T ➔ RAT ➔ રેટ (ઉંદર)',
        'C + A + T ➔ CAT ➔ કેટ (બિલાડી)',
        'B + A + T ➔ BAT ➔ બેટ (બેટ / ચામાચીડિયું)',
        'B + A + G ➔ BAG ➔ બેગ (દફતર / થેલો)',
        'F + A + N ➔ FAN ➔ ફેન (પંખો)',
        'M + A + N ➔ MAN ➔ મેન (માણસ)'
      ]
    },
    examples: [
      { id: 'va1', english: 'Rat', gujarati: 'રેટ (ઉંદર)', icon: '🐀' },
      { id: 'va2', english: 'Cat', gujarati: 'કેટ (બિલાડી)', icon: '🐱' },
      { id: 'va3', english: 'Bat', gujarati: 'બેટ (બેટ)', icon: '🏏' },
      { id: 'va4', english: 'Bag', gujarati: 'બેગ (દફતર)', icon: '🎒' },
      { id: 'va5', english: 'Fan', gujarati: 'ફેન (પંખો)', icon: '🪭' },
      { id: 'va6', english: 'Cap', gujarati: 'કેપ (ટોપી)', icon: '🧢' }
    ],
    gradeLevel: ['std6', 'std7', 'std8']
  }
];

export const fiftyNouns: NounItem[] = [
  // People
  { id: 1, english: 'Boy', pronunciationGujarati: 'બોય', meaningGujarati: 'છોકરો', category: 'people', icon: '👦' },
  { id: 2, english: 'Girl', pronunciationGujarati: 'ગર્લ', meaningGujarati: 'છોકરી', category: 'people', icon: '👧' },
  { id: 3, english: 'Man', pronunciationGujarati: 'મેન', meaningGujarati: 'પુરુષ', category: 'people', icon: '👨' },
  { id: 4, english: 'Woman', pronunciationGujarati: 'વુમન', meaningGujarati: 'સ્ત્રી', category: 'people', icon: '👩' },
  { id: 5, english: 'Child', pronunciationGujarati: 'ચાઇલ્ડ', meaningGujarati: 'બાળક', category: 'people', icon: '🧒' },
  { id: 6, english: 'Teacher', pronunciationGujarati: 'ટીચર', meaningGujarati: 'શિક્ષક', category: 'people', icon: '👩‍🏫' },
  { id: 7, english: 'Student', pronunciationGujarati: 'સ્ટુડન્ટ', meaningGujarati: 'વિદ્યાર્થી', category: 'people', icon: '🧑‍🎓' },
  { id: 8, english: 'Friend', pronunciationGujarati: 'ફ્રેન્ડ', meaningGujarati: 'મિત્ર', category: 'people', icon: '🧑‍🤝‍🧑' },
  { id: 9, english: 'Father', pronunciationGujarati: 'ફાધર', meaningGujarati: 'પિતા', category: 'people', icon: '🧔' },
  { id: 10, english: 'Mother', pronunciationGujarati: 'મધર', meaningGujarati: 'માતા', category: 'people', icon: '👩' },
  { id: 11, english: 'Brother', pronunciationGujarati: 'બ્રધર', meaningGujarati: 'ભાઈ', category: 'people', icon: '👦' },
  { id: 12, english: 'Sister', pronunciationGujarati: 'સિસ્ટર', meaningGujarati: 'બહેન', category: 'people', icon: '👧' },
  
  // Home & School
  { id: 13, english: 'House', pronunciationGujarati: 'હાઉસ', meaningGujarati: 'ઘર', category: 'home_school', icon: '🏠' },
  { id: 14, english: 'School', pronunciationGujarati: 'સ્કૂલ', meaningGujarati: 'શાળા', category: 'home_school', icon: '🏫' },
  { id: 15, english: 'Classroom', pronunciationGujarati: 'ક્લાસરુમ', meaningGujarati: 'વર્ગખંડ', category: 'home_school', icon: '🏫' },
  { id: 16, english: 'Book', pronunciationGujarati: 'બુક', meaningGujarati: 'પુસ્તક', category: 'home_school', icon: '📖' },
  { id: 17, english: 'Pen', pronunciationGujarati: 'પેન', meaningGujarati: 'પેન', category: 'home_school', icon: '🖊️' },
  { id: 18, english: 'Pencil', pronunciationGujarati: 'પેન્સિલ', meaningGujarati: 'પેન્સિલ', category: 'home_school', icon: '✏️' },
  { id: 19, english: 'Bag', pronunciationGujarati: 'બેગ', meaningGujarati: 'દફતર', category: 'home_school', icon: '🎒' },
  { id: 20, english: 'Chair', pronunciationGujarati: 'ચેર', meaningGujarati: 'ખુરશી', category: 'home_school', icon: '🪑' },
  { id: 21, english: 'Table', pronunciationGujarati: 'ટેબલ', meaningGujarati: 'મેજ / ટેબલ', category: 'home_school', icon: '🪵' },
  { id: 22, english: 'Door', pronunciationGujarati: 'ડોર', meaningGujarati: 'બારણું', category: 'home_school', icon: '🚪' },
  { id: 23, english: 'Window', pronunciationGujarati: 'વિન્ડો', meaningGujarati: 'બારી', category: 'home_school', icon: '🪟' },
  
  // Nature & Food
  { id: 24, english: 'Ball', pronunciationGujarati: 'બોલ', meaningGujarati: 'દડો', category: 'objects', icon: '⚽' },
  { id: 25, english: 'Kite', pronunciationGujarati: 'કાઇટ', meaningGujarati: 'પતંગ', category: 'objects', icon: '🪁' },
  { id: 26, english: 'Tree', pronunciationGujarati: 'ટ્રી', meaningGujarati: 'ઝાડ', category: 'nature', icon: '🌳' },
  { id: 27, english: 'Flower', pronunciationGujarati: 'ફ્લાવર', meaningGujarati: 'ફૂલ', category: 'nature', icon: '🌸' },
  { id: 28, english: 'Leaf', pronunciationGujarati: 'લીફ', meaningGujarati: 'પાન', category: 'nature', icon: '🍃' },
  { id: 29, english: 'Fruit', pronunciationGujarati: 'ફ્રૂટ', meaningGujarati: 'ફળ', category: 'nature', icon: '🍎' },
  { id: 30, english: 'Mango', pronunciationGujarati: 'મેંગો', meaningGujarati: 'કેરી', category: 'nature', icon: '🥭' },
  { id: 31, english: 'Apple', pronunciationGujarati: 'એપલ', meaningGujarati: 'સફરજન', category: 'nature', icon: '🍎' },
  { id: 32, english: 'Banana', pronunciationGujarati: 'બનાના', meaningGujarati: 'કેળું', category: 'nature', icon: '🍌' },
  { id: 33, english: 'Sun', pronunciationGujarati: 'સન', meaningGujarati: 'સૂર્ય', category: 'nature', icon: '☀️' },
  { id: 34, english: 'Moon', pronunciationGujarati: 'મૂન', meaningGujarati: 'ચંદ્ર', category: 'nature', icon: '🌙' },
  { id: 35, english: 'Star', pronunciationGujarati: 'સ્ટાર', meaningGujarati: 'તારો', category: 'nature', icon: '⭐' },
  { id: 36, english: 'River', pronunciationGujarati: 'રિવર', meaningGujarati: 'નદી', category: 'nature', icon: '🌊' },
  { id: 37, english: 'Mountain', pronunciationGujarati: 'માઉન્ટેન', meaningGujarati: 'પર્વત', category: 'nature', icon: '⛰️' },

  // Animals
  { id: 38, english: 'Cat', pronunciationGujarati: 'કેટ', meaningGujarati: 'બિલાડી', category: 'animals', icon: '🐱' },
  { id: 39, english: 'Dog', pronunciationGujarati: 'ડોગ', meaningGujarati: 'કૂતરો', category: 'animals', icon: '🐕' },
  { id: 40, english: 'Cow', pronunciationGujarati: 'કાઉ', meaningGujarati: 'ગાય', category: 'animals', icon: '🐄' },
  { id: 41, english: 'Lion', pronunciationGujarati: 'લાયન', meaningGujarati: 'સિંહ', category: 'animals', icon: '🦁' },
  { id: 42, english: 'Bird', pronunciationGujarati: 'બર્ડ', meaningGujarati: 'પક્ષી', category: 'animals', icon: '🐦' },
  { id: 43, english: 'Fish', pronunciationGujarati: 'ફિશ', meaningGujarati: 'માછલી', category: 'animals', icon: '🐟' },

  // Vehicles & Objects
  { id: 44, english: 'Road', pronunciationGujarati: 'રોડ', meaningGujarati: 'રસ્તો', category: 'vehicles', icon: '🛣️' },
  { id: 45, english: 'Car', pronunciationGujarati: 'કાર', meaningGujarati: 'ગાડી / કાર', category: 'vehicles', icon: '🚗' },
  { id: 46, english: 'Bus', pronunciationGujarati: 'બસ', meaningGujarati: 'બસ', category: 'vehicles', icon: '🚌' },
  { id: 47, english: 'Train', pronunciationGujarati: 'ટ્રેન', meaningGujarati: 'રેલગાડી', category: 'vehicles', icon: '🚆' },
  { id: 48, english: 'Bicycle', pronunciationGujarati: 'બાઇસિકલ', meaningGujarati: 'સાયકલ', category: 'vehicles', icon: '🚲' },
  { id: 49, english: 'Clock', pronunciationGujarati: 'ક્લોક', meaningGujarati: 'ઘડિયાળ', category: 'objects', icon: '⏰' },
  { id: 50, english: 'Computer', pronunciationGujarati: 'કમ્પ્યુટર', meaningGujarati: 'કમ્પ્યુટર', category: 'objects', icon: '💻' }
];

export const pluralPairs: PluralPair[] = [
  { id: 'p1', singular: 'Book', plural: 'Books', gujarati: 'પુસ્તક ➔ પુસ્તકો', ruleExplanation: 'સામાન્ય નિયમ: ફક્ત "s" ઉમેરો', icon: '📚' },
  { id: 'p2', singular: 'Box', plural: 'Boxes', gujarati: 'ખોખું ➔ ખોખાં', ruleExplanation: 'અંતે "x" હોવાથી "es" લાગે', icon: '📦' },
  { id: 'p3', singular: 'Mango', plural: 'Mangoes', gujarati: 'કેરી ➔ કેરીઓ', ruleExplanation: 'અંતે "o" હોવાથી "es" લાગે', icon: '🥭' },
  { id: 'p4', singular: 'Leaf', plural: 'Leaves', gujarati: 'પાંદડું ➔ પાંદડાં', ruleExplanation: '"f" દૂર કરીને "ves" લાગે', icon: '🍃' },
  { id: 'p5', singular: 'City', plural: 'Cities', gujarati: 'શહેર ➔ શહેરો', ruleExplanation: 'વ્યંજન + y હોવાથી y દૂર કરી "ies" લાગે', icon: '🏙️' },
  { id: 'p6', singular: 'Boy', plural: 'Boys', gujarati: 'છોકરો ➔ છોકરાઓ', ruleExplanation: 'સ્વર (o) + y હોવાથી માત્ર "s" લાગે', icon: '👦' },
  { id: 'p7', singular: 'Man', plural: 'Men', gujarati: 'પુરુષ ➔ પુરુષો', ruleExplanation: 'અનિયમિત: અંદરના સ્વરમાં ફેરફાર (a ➔ e)', icon: '👨' },
  { id: 'p8', singular: 'Tooth', plural: 'Teeth', gujarati: 'દાંત ➔ દાંતો', ruleExplanation: 'અનિયમિત: oo ➔ ee માં બદલાય છે', icon: '🦷' },
  { id: 'p9', singular: 'Mouse', plural: 'Mice', gujarati: 'ઉંદર ➔ ઉંદરો', ruleExplanation: 'અનિયમિત બહુવચન (Mouse ➔ Mice)', icon: '🐁' },
  { id: 'p10', singular: 'Child', plural: 'Children', gujarati: 'બાળક ➔ બાળકો', ruleExplanation: 'અનિયમિત: -ren ઉમેરાય છે', icon: '🧒' }
];

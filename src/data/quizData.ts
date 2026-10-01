import { QuizQuestion, SentencePuzzle } from '../types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'pronouns',
    questionEnglish: '____ is a teacher. (તેણી એક શિક્ષિકા છે)',
    questionGujarati: 'શિક્ષિકા (સ્ત્રી) માટે યોગ્ય સર્વનામ પસંદ કરો:',
    blankWord: 'She',
    options: ['He', 'She', 'It', 'They'],
    correctAnswer: 'She',
    explanationGujarati: 'સ્ત્રી કે છોકરી માટે હંમેશા "She" વપરાય છે.',
    visualHint: '👩‍🏫',
    grade: 'std6'
  },
  {
    id: 'q2',
    category: 'have_has',
    questionEnglish: 'He ____ a new bicycle. (તેની પાસે નવી સાયકલ છે)',
    questionGujarati: 'He સાથે શું વપરાય?',
    blankWord: 'has',
    options: ['have', 'has', 'is', 'are'],
    correctAnswer: 'has',
    explanationGujarati: 'He, She, It અને એકવચન નામ સાથે હંમેશા "has" વપરાય છે.',
    visualHint: '🚲',
    grade: 'std6'
  },
  {
    id: 'q3',
    category: 'this_that',
    questionEnglish: 'Look at the birds high in the sky! ____ are birds.',
    questionGujarati: 'દૂર આકાશમાં ઊડતા ઘણાં પક્ષીઓ (બહુવચન) માટે શું વપરાય?',
    blankWord: 'Those',
    options: ['This', 'These', 'That', 'Those'],
    correctAnswer: 'Those',
    explanationGujarati: 'દૂરની એકથી વધુ વસ્તુઓ/પક્ષીઓ દર્શાવવા "Those" વપરાય છે.',
    visualHint: '🕊️',
    grade: 'std7'
  },
  {
    id: 'q4',
    category: 'articles',
    questionEnglish: 'He will arrive in ____ hour. (તે એક કલાકમાં પહોંચશે)',
    questionGujarati: '"Hour" શબ્દ આગળ કયો આર્ટિકલ આવે?',
    blankWord: 'an',
    options: ['a', 'an', 'the', 'no article'],
    correctAnswer: 'an',
    explanationGujarati: 'Hour માં "H" સાઇલન્ટ (શાંત) છે અને ઉચ્ચાર સ્વર "આવર" થાય છે, તેથી "an" આવે.',
    visualHint: '⏳',
    grade: 'std7'
  },
  {
    id: 'q5',
    category: 'plurals',
    questionEnglish: 'The wind blew and many ____ fell from the tree.',
    questionGujarati: '"Leaf" (પાંદડું) નું સાચું બહુવચન શું થાય?',
    blankWord: 'leaves',
    options: ['leafs', 'leafes', 'leaves', 'leafies'],
    correctAnswer: 'leaves',
    explanationGujarati: 'નિયમ ૪ મુજબ, જો શબ્દના અંતે f કે fe હોય તો f દૂર કરીને "ves" લાગે છે (Leaf ➔ Leaves).',
    visualHint: '🍃',
    grade: 'std7'
  },
  {
    id: 'q6',
    category: 'articles',
    questionEnglish: 'Mr. Sharma is ____ honest police officer.',
    questionGujarati: '"Honest" શબ્દ આગળ શું વપરાય?',
    blankWord: 'an',
    options: ['a', 'an', 'the', 'some'],
    correctAnswer: 'an',
    explanationGujarati: 'Honest માં "H" નો ઉચ્ચાર થતો નથી, શરૂઆત "ઓ" (સ્વર અવાજ) થી થાય છે, માટે "an" આવે.',
    visualHint: '👮‍♂️',
    grade: 'std8'
  },
  {
    id: 'q7',
    category: 'articles',
    questionEnglish: 'My brother studies in ____ university in Ahmedabad.',
    questionGujarati: '"University" શબ્દ આગળ કયો આર્ટિકલ આવે?',
    blankWord: 'a',
    options: ['a', 'an', 'the', 'none'],
    correctAnswer: 'a',
    explanationGujarati: 'University ની શરૂઆત "U" અક્ષરથી થાય છે પણ ઉચ્ચાર "યુ" (વ્યંજન ધ્વનિ) થાય છે, તેથી "a" આવે!',
    visualHint: '🏛️',
    grade: 'std8'
  },
  {
    id: 'q8',
    category: 'have_has',
    questionEnglish: 'They ____ two cars in their garage.',
    questionGujarati: '"They" (તેઓ) સાથે શું વપરાય?',
    blankWord: 'have',
    options: ['has', 'have', 'having', 'is'],
    correctAnswer: 'have',
    explanationGujarati: 'I, We, You, They સાથે હંમેશા "have" નો ઉપયોગ થાય છે.',
    visualHint: '🚗',
    grade: 'std6'
  },
  {
    id: 'q9',
    category: 'plurals',
    questionEnglish: 'Remember to brush all your ____ twice a day.',
    questionGujarati: '"Tooth" નું સાચું બહુવચન શું થાય?',
    blankWord: 'teeth',
    options: ['tooths', 'toothes', 'teeth', 'teeths'],
    correctAnswer: 'teeth',
    explanationGujarati: 'Tooth નું બહુવચન અનિયમિત છે: Tooth ➔ Teeth (oo બદલાઈને ee થાય છે).',
    visualHint: '🦷',
    grade: 'std7'
  },
  {
    id: 'q10',
    category: 'this_that',
    questionEnglish: 'Holding in my hand: ____ is my favorite pencil.',
    questionGujarati: 'હાથમાં રહેલી નજીકની એક પેન્સિલ માટે શું કહેવાય?',
    blankWord: 'This',
    options: ['This', 'That', 'These', 'Those'],
    correctAnswer: 'This',
    explanationGujarati: 'નજીકની એકવચન વસ્તુ દર્શાવવા "This" વપરાય છે.',
    visualHint: '✏️',
    grade: 'std6'
  },
  {
    id: 'q11',
    category: 'articles',
    questionEnglish: '____ Sun rises in the East.',
    questionGujarati: 'સૂર્ય (વિશ્વમાં એકમાત્ર કુદરતી પદાર્થ) આગળ કયો આર્ટિકલ આવે?',
    blankWord: 'The',
    options: ['A', 'An', 'The', 'None'],
    correctAnswer: 'The',
    explanationGujarati: 'વિશ્વની અજોડ વસ્તુઓ આગળ હંમેશા નિશ્ચિત આર્ટિકલ "The" વપરાય છે (The Sun, The Moon).',
    visualHint: '☀️',
    grade: 'std6'
  },
  {
    id: 'q12',
    category: 'plurals',
    questionEnglish: 'The mother put the ____ to sleep.',
    questionGujarati: '"Baby" નું સાચું બહુવચન શોધો:',
    blankWord: 'babies',
    options: ['babys', 'babyes', 'babies', 'babiez'],
    correctAnswer: 'babies',
    explanationGujarati: 'શબ્દના અંતે y પહેલાં વ્યંજન (b) હોવાથી y નો લોપ થઈ "ies" લાગે છે (Baby ➔ Babies).',
    visualHint: '👶',
    grade: 'std7'
  }
];

export interface ArticleBlastItem {
  id: string;
  word: string;
  meaningGujarati: string;
  correctArticle: 'a' | 'an' | 'the';
  reasonGujarati: string;
  icon: string;
}

export const articleBlastItems: ArticleBlastItem[] = [
  { id: 'ab1', word: 'Apple', meaningGujarati: 'સફરજન', correctArticle: 'an', reasonGujarati: 'સ્વર ધ્વનિ "એ" થી શરૂ થાય છે.', icon: '🍎' },
  { id: 'ab2', word: 'Elephant', meaningGujarati: 'હાથી', correctArticle: 'an', reasonGujarati: 'સ્વર ધ્વનિ "એ" થી શરૂ થાય છે.', icon: '🐘' },
  { id: 'ab3', word: 'Boy', meaningGujarati: 'છોકરો', correctArticle: 'a', reasonGujarati: 'વ્યંજન ધ્વનિ "બ" થી શરૂ થાય છે.', icon: '👦' },
  { id: 'ab4', word: 'Hour', meaningGujarati: 'કલાક', correctArticle: 'an', reasonGujarati: 'H સાઇલન્ટ છે, ઉચ્ચાર "આવર" થાય છે.', icon: '⌛' },
  { id: 'ab5', word: 'Honest man', meaningGujarati: 'પ્રામાણિક વ્યક્તિ', correctArticle: 'an', reasonGujarati: 'H સાઇલન્ટ છે, ઉચ્ચાર "ઓનેસ્ટ" થાય છે.', icon: '👨' },
  { id: 'ab6', word: 'University', meaningGujarati: 'યુનિવર્સિટી', correctArticle: 'a', reasonGujarati: '"યુ" વ્યંજન અવાજ છે.', icon: '🏛️' },
  { id: 'ab7', word: 'Umbrella', meaningGujarati: 'છત્રી', correctArticle: 'an', reasonGujarati: 'સ્વર ધ્વનિ "અ" થી શરૂ થાય છે.', icon: '☂️' },
  { id: 'ab8', word: 'Sun', meaningGujarati: 'સૂર્ય', correctArticle: 'the', reasonGujarati: 'વિશ્વમાં એકમાત્ર કુદરતી પિંડ માટે "The" વપરાય છે.', icon: '☀️' },
  { id: 'ab9', word: 'Ganga', meaningGujarati: 'ગંગા નદી', correctArticle: 'the', reasonGujarati: 'પવિત્ર નદીઓના નામ આગળ "The" વપરાય.', icon: '🌊' },
  { id: 'ab10', word: 'Himalayas', meaningGujarati: 'હિમાલય પર્વતમાળા', correctArticle: 'the', reasonGujarati: 'પર્વતમાળાના નામ આગળ "The" વપરાય.', icon: '🏔️' },
  { id: 'ab11', word: 'Car', meaningGujarati: 'ગાડી', correctArticle: 'a', reasonGujarati: 'વ્યંજન ધ્વનિ "ક" થી શરૂ થાય છે.', icon: '🚗' },
  { id: 'ab12', word: 'Egg', meaningGujarati: 'ઈંડું', correctArticle: 'an', reasonGujarati: 'સ્વર ધ્વનિ "ઈ" થી શરૂ થાય છે.', icon: '🥚' },
  { id: 'ab13', word: 'House', meaningGujarati: 'ઘર', correctArticle: 'a', reasonGujarati: 'વ્યંજન ધ્વનિ "હ" થી શરૂ થાય છે.', icon: '🏠' },
  { id: 'ab14', word: 'European', meaningGujarati: 'યુરોપિયન', correctArticle: 'a', reasonGujarati: 'ઉચ્ચાર "યુ" (વ્યંજન) થી શરૂ થાય છે.', icon: '🌍' }
];

export const sentencePuzzles: SentencePuzzle[] = [
  {
    id: 'sp1',
    gujarati: 'હું એક વિદ્યાર્થી છું.',
    englishFull: 'I am a student.',
    scrambledWords: ['am', 'a', 'I', 'student.'],
    correctOrder: ['I', 'am', 'a', 'student.'],
    grammarTip: 'વાક્યમાં સૌથી પહેલાં કર્તા (I) પછી ક્રિયાપદ (am) આવે છે.'
  },
  {
    id: 'sp2',
    gujarati: 'તે એક શિક્ષિકા છે.',
    englishFull: 'She is a teacher.',
    scrambledWords: ['is', 'She', 'teacher.', 'a'],
    correctOrder: ['She', 'is', 'a', 'teacher.'],
    grammarTip: 'સ્ત્રી માટે "She" અને તેની સાથે "is" નો પ્રયોગ થાય છે.'
  },
  {
    id: 'sp3',
    gujarati: 'મારી પાસે એક પુસ્તક છે.',
    englishFull: 'I have a book.',
    scrambledWords: ['have', 'book.', 'I', 'a'],
    correctOrder: ['I', 'have', 'a', 'book.'],
    grammarTip: 'I સાથે "have" નો ઉપયોગ થાય છે.'
  },
  {
    id: 'sp4',
    gujarati: 'તેની પાસે એક સાયકલ છે.',
    englishFull: 'He has a bicycle.',
    scrambledWords: ['has', 'a', 'bicycle.', 'He'],
    correctOrder: ['He', 'has', 'a', 'bicycle.'],
    grammarTip: 'He સાથે પાસે હોવા માટે "has" વપરાય છે.'
  },
  {
    id: 'sp5',
    gujarati: 'આ મારા પુસ્તકો છે.',
    englishFull: 'These are my books.',
    scrambledWords: ['are', 'These', 'books.', 'my'],
    correctOrder: ['These', 'are', 'my', 'books.'],
    grammarTip: 'નજીકના બહુવચન માટે "These are" વપરાય છે.'
  },
  {
    id: 'sp6',
    gujarati: 'પેલું એક સુંદર ઘર છે.',
    englishFull: 'That is a beautiful house.',
    scrambledWords: ['is', 'house.', 'That', 'a', 'beautiful'],
    correctOrder: ['That', 'is', 'a', 'beautiful', 'house.'],
    grammarTip: 'દૂરની એક વસ્તુ માટે "That is" વપરાય છે.'
  }
];

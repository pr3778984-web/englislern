import React, { useState } from 'react';
import { sentencePuzzles } from '../../data/quizData';
import { SentencePuzzle } from '../../types';
import { soundEngine } from '../../utils/audio';
import { VoiceBadge } from '../VoiceBadge';
import confetti from 'canvas-confetti';
import { CheckCircle2, RotateCcw, Volume2, Sparkles, ArrowRight } from 'lucide-react';

interface SentenceBuilderProps {
  onAddStar: (count?: number) => void;
}

export const SentenceBuilder: React.FC<SentenceBuilderProps> = ({ onAddStar }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [placedWords, setPlacedWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentPuzzle: SentencePuzzle = sentencePuzzles[currentIndex];

  // Available words are the scrambled words minus placed words
  const availableWords = [...currentPuzzle.scrambledWords];
  // Remove placed instances
  placedWords.forEach((pw) => {
    const idx = availableWords.indexOf(pw);
    if (idx !== -1) availableWords.splice(idx, 1);
  });

  const handleWordClick = (word: string) => {
    soundEngine.playSfx('click');
    soundEngine.speak(word);

    const newPlaced = [...placedWords, word];
    setPlacedWords(newPlaced);

    // Check if sentence is full length
    if (newPlaced.length === currentPuzzle.correctOrder.length) {
      const isMatch = newPlaced.every((w, i) => w === currentPuzzle.correctOrder[i]);
      if (isMatch) {
        setIsCorrect(true);
        soundEngine.playSfx('correct');
        onAddStar(2);
        // Pronounce full sentence aloud!
        soundEngine.speak(currentPuzzle.englishFull);
      } else {
        soundEngine.playSfx('wrong');
      }
    }
  };

  const handleRemovePlacedWord = (index: number) => {
    if (isCorrect) return;
    soundEngine.playSfx('click');
    const newPlaced = [...placedWords];
    newPlaced.splice(index, 1);
    setPlacedWords(newPlaced);
  };

  const handleNext = () => {
    soundEngine.playSfx('click');
    if (currentIndex + 1 < sentencePuzzles.length) {
      setCurrentIndex(currentIndex + 1);
      setPlacedWords([]);
      setIsCorrect(false);
    } else {
      setIsCompleted(true);
      soundEngine.playSfx('complete');
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 }
      });
    }
  };

  const handleResetPuzzle = () => {
    soundEngine.playSfx('click');
    setPlacedWords([]);
    setIsCorrect(false);
  };

  if (isCompleted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-amber-300 p-8 text-center max-w-lg mx-auto shadow-lg space-y-5">
        <div className="text-5xl animate-bounce">🎖️</div>
        <h3 className="text-2xl font-black text-amber-950">
          વાક્ય રચના ચેમ્પિયન!
        </h3>
        <p className="text-slate-600 font-medium">
          તમે બધાં અંગ્રેજી વાક્યો સાચા ક્રમમાં સફળતાપૂર્વક ગોઠવી લીધા છે!
        </p>
        <button
          type="button"
          onClick={() => {
            setCurrentIndex(0);
            setPlacedWords([]);
            setIsCorrect(false);
            setIsCompleted(false);
          }}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold cursor-pointer transition-transform active:scale-95 shadow-md"
        >
          <RotateCcw size={16} />
          <span>ફરીથી રમો (Play Again)</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-amber-100/90 px-4 py-2 rounded-xl border border-amber-200 font-bold text-xs sm:text-sm text-amber-900">
        <div>વાક્ય રચના (Sentence Builder) • {currentIndex + 1} / {sentencePuzzles.length}</div>
        <button
          type="button"
          onClick={handleResetPuzzle}
          className="flex items-center gap-1 text-xs text-amber-800 hover:text-amber-950 cursor-pointer"
        >
          <RotateCcw size={14} />
          <span>ફરી કરો</span>
        </button>
      </div>

      {/* Target Gujarati sentence prompt */}
      <div className="bg-white rounded-2xl border-3 border-amber-300 shadow-md p-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            ગુજરાતી વાક્ય
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
            "{currentPuzzle.gujarati}"
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            નીચે આપેલા શબ્દોને સાચા ક્રમમાં ગોઠવી અંગ્રેજી વાક્ય બનાવો:
          </p>
        </div>

        {/* Sentence Assembly Drop-zone */}
        <div className="min-h-16 p-3.5 bg-amber-50/70 border-2 border-dashed border-amber-300 rounded-xl flex flex-wrap items-center justify-center gap-2">
          {placedWords.length === 0 ? (
            <span className="text-xs sm:text-sm font-semibold text-amber-800/60">
              શબ્દો પર ટેપ કરો જેથી તેઓ અહીં ગોઠવાશે...
            </span>
          ) : (
            placedWords.map((word, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleRemovePlacedWord(idx)}
                className={`px-3.5 py-2 rounded-lg font-bold text-base sm:text-lg font-english shadow-xs cursor-pointer transition-all active:scale-95 ${
                  isCorrect
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white text-amber-950 border border-amber-300 hover:bg-rose-50 hover:border-rose-300 hover:text-rose-900'
                }`}
                title="પાછું મૂકવા માટે ટેપ કરો"
              >
                {word}
              </button>
            ))
          )}
        </div>

        {/* Available Scrambled Word Tiles */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-600 text-center">
            ઉપલબ્ધ શબ્દો:
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {availableWords.map((word, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleWordClick(word)}
                className="px-4 py-2.5 bg-amber-100 hover:bg-amber-200 border-2 border-amber-300 text-amber-950 rounded-xl font-bold text-lg font-english shadow-xs cursor-pointer transition-transform active:scale-95"
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Result & Grammar tip on completion */}
        {placedWords.length === currentPuzzle.correctOrder.length && (
          <div
            className={`p-4 rounded-xl border-2 space-y-2 animate-fadeIn ${
              isCorrect
                ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                : 'bg-rose-50 border-rose-300 text-rose-950'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-base">
                {isCorrect ? (
                  <>
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    <span>વાહ! એકદમ સાચું વાક્ય રચાયું!</span>
                  </>
                ) : (
                  <span>ક્રમ ખોટો છે, 'ફરી કરો' દબાવી પ્રયાસ કરો.</span>
                )}
              </div>

              {isCorrect && (
                <VoiceBadge text={currentPuzzle.englishFull} size="sm" label="ફરી સાંભળો" />
              )}
            </div>

            <p className="text-xs sm:text-sm font-semibold">
              💡 વ્યાકરણ નિયમ: {currentPuzzle.grammarTip}
            </p>

            {isCorrect && (
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl cursor-pointer shadow-md transition-transform active:scale-95"
                >
                  <span>આગળનું વાક્ય</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

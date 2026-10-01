import React, { useState } from 'react';
import { articleBlastItems, ArticleBlastItem } from '../../data/quizData';
import { soundEngine } from '../../utils/audio';
import { VoiceBadge } from '../VoiceBadge';
import confetti from 'canvas-confetti';
import { Sparkles, HelpCircle, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface ArticleHunterProps {
  onAddStar: (count?: number) => void;
}

export const ArticleHunter: React.FC<ArticleHunterProps> = ({ onAddStar }) => {
  const [items] = useState<ArticleBlastItem[]>(articleBlastItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<'a' | 'an' | 'the' | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentItem = items[currentIndex];

  const handleChoose = (article: 'a' | 'an' | 'the') => {
    if (isAnswered) return;
    setSelectedArticle(article);
    setIsAnswered(true);

    const isCorrect = article === currentItem.correctArticle;
    if (isCorrect) {
      soundEngine.playSfx('correct');
      setScore(score + 1);
      onAddStar(1);
      // Speak the correct full phrase
      soundEngine.speak(`${article} ${currentItem.word}`);
    } else {
      soundEngine.playSfx('wrong');
    }
  };

  const handleNext = () => {
    soundEngine.playSfx('click');
    if (currentIndex + 1 < items.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedArticle(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      soundEngine.playSfx('complete');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    soundEngine.playSfx('click');
    setCurrentIndex(0);
    setSelectedArticle(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="bg-white rounded-2xl border-2 border-amber-300 p-8 text-center max-w-lg mx-auto shadow-lg space-y-5">
        <div className="text-5xl animate-bounce">🌟</div>
        <h3 className="text-2xl font-black text-amber-950">
          આર્ટિકલ ચેલેન્જ સફળતાપૂર્વક પૂર્ણ!
        </h3>
        <p className="text-slate-600 font-medium">
          તમારો સ્કોર: <span className="text-amber-600 font-extrabold text-2xl tabular-nums">{score}</span> / {items.length}
        </p>

        <div className="p-3 bg-amber-50 rounded-xl text-xs sm:text-sm text-amber-900 border border-amber-200">
          હવે તમે જાણો છો કે ક્યારે <strong>A</strong>, <strong>An</strong> કે <strong>The</strong> નો ઉપયોગ કરવો!
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold cursor-pointer transition-transform active:scale-95 shadow-md"
        >
          <RotateCcw size={16} />
          <span>ફરી રમો (Play Again)</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-4">
      {/* Header bar */}
      <div className="flex items-center justify-between bg-amber-100/90 px-4 py-2 rounded-xl border border-amber-200 font-bold text-xs sm:text-sm text-amber-900">
        <div className="flex items-center gap-2">
          <span>આર્ટિકલ શિકારી (A, An, The)</span>
          <span className="text-amber-400">|</span>
          <span>{currentIndex + 1} / {items.length}</span>
        </div>
        <div className="text-emerald-700">સાચા: {score}</div>
      </div>

      {/* Target Word Card */}
      <div className="bg-white rounded-2xl border-3 border-amber-300 shadow-md p-6 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-4xl shadow-inner">
            {currentItem.icon}
          </div>
        </div>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-black font-english text-amber-950 tracking-wide">
              ____ {currentItem.word}
            </span>
            <VoiceBadge text={currentItem.word} size="md" />
          </div>
          <p className="text-sm font-semibold text-slate-500">
            અર્થ: {currentItem.meaningGujarati}
          </p>
        </div>

        <p className="text-xs sm:text-sm font-bold text-amber-800">
          આ શબ્દ આગળ કયો આર્ટિકલ આવશે? નીચેથી એક પસંદ કરો:
        </p>

        {/* 3 Large Choice Buttons: A / An / The */}
        <div className="grid grid-cols-3 gap-3">
          {(['a', 'an', 'the'] as const).map((art) => {
            const isSelected = selectedArticle === art;
            const isCorrect = art === currentItem.correctArticle;

            let btnStyle = 'bg-amber-50 hover:bg-amber-100 text-amber-950 border-amber-300';
            if (isAnswered) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-500 text-white border-emerald-600 ring-2 ring-emerald-300 shadow-md';
              } else if (isSelected) {
                btnStyle = 'bg-rose-500 text-white border-rose-600 ring-2 ring-rose-200';
              } else {
                btnStyle = 'bg-stone-100 text-stone-400 border-stone-200 opacity-50';
              }
            }

            return (
              <button
                key={art}
                type="button"
                disabled={isAnswered}
                onClick={() => handleChoose(art)}
                className={`py-4 rounded-xl border-2 font-black text-2xl uppercase tracking-wider transition-all cursor-pointer active:scale-95 shadow-xs ${btnStyle}`}
              >
                {art}
              </button>
            );
          })}
        </div>

        {/* Rule Explanation on Answer */}
        {isAnswered && (
          <div className="p-4 bg-amber-50/90 rounded-xl border border-amber-300 text-left space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2 font-bold text-sm">
              {selectedArticle === currentItem.correctArticle ? (
                <span className="text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 size={18} />
                  એકદમ સાચું! ({currentItem.correctArticle.toUpperCase()} {currentItem.word})
                </span>
              ) : (
                <span className="text-rose-700 flex items-center gap-1">
                  <XCircle size={18} />
                  સાચો જવાબ: <strong>{currentItem.correctArticle.toUpperCase()} {currentItem.word}</strong>
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm font-semibold text-amber-950">
              💡 કારણ: {currentItem.reasonGujarati}
            </p>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl cursor-pointer shadow-xs active:scale-95"
              >
                <span>આગળનો શબ્દ</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { QuizQuestion, GradeLevel } from '../../types';
import { quizQuestions } from '../../data/quizData';
import { soundEngine } from '../../utils/audio';
import { VoiceBadge } from '../VoiceBadge';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, Sparkles, RefreshCw, Volume2, HelpCircle, ArrowRight } from 'lucide-react';

interface QuizMasterProps {
  gradeLevel: GradeLevel;
  onAddStar: (count?: number) => void;
}

export const QuizMaster: React.FC<QuizMasterProps> = ({ gradeLevel, onAddStar }) => {
  const filteredQuestions = quizQuestions.filter(
    (q) => gradeLevel === 'all' || q.grade === gradeLevel
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    const isCorrect = option.toLowerCase() === currentQ.correctAnswer.toLowerCase();
    if (isCorrect) {
      soundEngine.playSfx('correct');
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      onAddStar(1);

      if (newStreak % 3 === 0) {
        soundEngine.playSfx('streak');
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      }

      // Voice pronounce complete sentence with filled blank
      const fullSentence = currentQ.questionEnglish.replace('____', currentQ.correctAnswer);
      soundEngine.speak(fullSentence);
    } else {
      soundEngine.playSfx('wrong');
      setStreak(0);
    }
  };

  const handleNext = () => {
    soundEngine.playSfx('click');
    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      soundEngine.playSfx('complete');
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    soundEngine.playSfx('click');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setIsFinished(false);
  };

  if (!currentQ || isFinished) {
    return (
      <div className="bg-white rounded-2xl border-2 border-amber-300 p-8 text-center max-w-xl mx-auto shadow-lg space-y-6">
        <div className="text-6xl animate-bounce">🏆</div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
          અદ્ભુત! ક્વિઝ પૂર્ણ થઈ!
        </h3>
        <p className="text-slate-600 font-medium">
          તમારો સ્કોર: <span className="font-extrabold text-amber-600 text-2xl tabular-nums">{score}</span> / {filteredQuestions.length}
        </p>

        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-sm text-amber-900 font-semibold">
          {score >= filteredQuestions.length * 0.8
            ? 'શાબાશ! તમે ધોરણ ૬-૮ અંગ્રેજી ગ્રામર ખૂબ સરસ રીતે શીખી રહ્યા છો! 🌟'
            : 'ખૂબ સરસ પ્રયાસ! ચાર્ટ્સ ફરી જોઈને વધુ સ્ટાર્સ મેળવો.'}
        </div>

        <button
          type="button"
          onClick={handleRestart}
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-base shadow-md cursor-pointer transition-transform active:scale-95"
        >
          <RefreshCw size={18} />
          <span>ફરીથી રમો (Play Again)</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Quiz Progress & Stats */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-amber-900 bg-amber-100/80 px-4 py-2 rounded-xl border border-amber-200">
        <div className="flex items-center gap-2">
          <span>પ્રશ્ન {currentIndex + 1} / {filteredQuestions.length}</span>
          <span className="text-amber-400">|</span>
          <span className="text-emerald-700">સાચા: {score}</span>
        </div>

        {streak > 1 && (
          <div className="flex items-center gap-1 text-amber-600 bg-white px-2 py-0.5 rounded-lg shadow-2xs">
            <Sparkles size={14} className="text-amber-500" />
            <span>{streak} સ્ટ્રીક! 🔥</span>
          </div>
        )}
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border-3 border-amber-300 shadow-md p-6 space-y-5">
        {/* Visual Icon & Gujarati Hint */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
              {currentQ.category.toUpperCase()}
            </span>
            <p className="text-sm font-semibold text-slate-700">
              {currentQ.questionGujarati}
            </p>
          </div>

          {currentQ.visualHint && (
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-2xl shadow-xs shrink-0">
              {currentQ.visualHint}
            </div>
          )}
        </div>

        {/* English Question Sentence */}
        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-center justify-between gap-3">
          <p className="text-lg sm:text-xl font-extrabold text-amber-950 font-english">
            {currentQ.questionEnglish}
          </p>
          <VoiceBadge text={currentQ.questionEnglish.replace('____', 'blank')} size="md" />
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = option.toLowerCase() === currentQ.correctAnswer.toLowerCase();

            let optionStyle = 'bg-stone-50 hover:bg-amber-100/60 text-slate-800 border-amber-200';
            if (isAnswered) {
              if (isCorrectOption) {
                optionStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 ring-2 ring-emerald-300';
              } else if (isSelected) {
                optionStyle = 'bg-rose-100 border-rose-400 text-rose-950 ring-2 ring-rose-200';
              } else {
                optionStyle = 'bg-stone-100/50 text-stone-400 border-stone-200 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={isAnswered}
                onClick={() => handleSelectOption(option)}
                className={`flex items-center justify-between p-3.5 rounded-xl border-2 font-bold text-base cursor-pointer transition-all active:scale-98 ${optionStyle}`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-white border border-amber-200 text-xs flex items-center justify-center font-bold text-amber-800">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-english text-lg">{option}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <VoiceBadge text={option} size="sm" />
                  {isAnswered && isCorrectOption && (
                    <CheckCircle2 size={18} className="text-emerald-600" />
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <XCircle size={18} className="text-rose-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback & Explanation Banner */}
        {isAnswered && (
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 space-y-2 animate-fadeIn">
            <div className="flex items-center gap-2">
              {selectedAnswer?.toLowerCase() === currentQ.correctAnswer.toLowerCase() ? (
                <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                  <CheckCircle2 size={18} />
                  સાચો જવાબ! (Well Done!)
                </span>
              ) : (
                <span className="text-rose-700 font-extrabold flex items-center gap-1">
                  <XCircle size={18} />
                  સાચો જવાબ: <span className="font-bold underline">{currentQ.correctAnswer}</span>
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm font-semibold text-amber-950">
              💡 {currentQ.explanationGujarati}
            </p>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-xl shadow-xs transition-transform active:scale-95 cursor-pointer"
              >
                <span>આગળનો પ્રશ્ન</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

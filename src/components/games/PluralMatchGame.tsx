import React, { useState, useEffect } from 'react';
import { pluralPairs } from '../../data/chartsData';
import { PluralPair } from '../../types';
import { soundEngine } from '../../utils/audio';
import { VoiceBadge } from '../VoiceBadge';
import confetti from 'canvas-confetti';
import { Check, Sparkles, RefreshCw, Info } from 'lucide-react';

interface PluralMatchGameProps {
  onAddStar: (count?: number) => void;
}

export const PluralMatchGame: React.FC<PluralMatchGameProps> = ({ onAddStar }) => {
  const [pairs] = useState<PluralPair[]>(pluralPairs);
  const [selectedSingular, setSelectedSingular] = useState<PluralPair | null>(null);
  const [selectedPlural, setSelectedPlural] = useState<PluralPair | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [lastMatchedRule, setLastMatchedRule] = useState<string | null>(null);
  const [shuffledPlurals, setShuffledPlurals] = useState<PluralPair[]>([]);

  useEffect(() => {
    // Shuffle plural cards
    const shuffled = [...pairs].sort(() => Math.random() - 0.5);
    setShuffledPlurals(shuffled);
  }, [pairs]);

  const handleSelectSingular = (pair: PluralPair) => {
    if (matchedIds.includes(pair.id)) return;
    soundEngine.playSfx('click');
    soundEngine.speak(pair.singular);
    setSelectedSingular(pair);

    if (selectedPlural) {
      checkMatch(pair, selectedPlural);
    }
  };

  const handleSelectPlural = (pair: PluralPair) => {
    if (matchedIds.includes(pair.id)) return;
    soundEngine.playSfx('click');
    soundEngine.speak(pair.plural);
    setSelectedPlural(pair);

    if (selectedSingular) {
      checkMatch(selectedSingular, pair);
    }
  };

  const checkMatch = (sing: PluralPair, plur: PluralPair) => {
    if (sing.id === plur.id) {
      // Match found!
      soundEngine.playSfx('correct');
      const newMatched = [...matchedIds, sing.id];
      setMatchedIds(newMatched);
      setLastMatchedRule(`${sing.singular} ➔ ${sing.plural} (${sing.ruleExplanation})`);
      onAddStar(1);

      setSelectedSingular(null);
      setSelectedPlural(null);

      if (newMatched.length === pairs.length) {
        soundEngine.playSfx('complete');
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    } else {
      // Wrong match
      soundEngine.playSfx('wrong');
      setTimeout(() => {
        setSelectedSingular(null);
        setSelectedPlural(null);
      }, 500);
    }
  };

  const handleReset = () => {
    soundEngine.playSfx('click');
    setMatchedIds([]);
    setSelectedSingular(null);
    setSelectedPlural(null);
    setLastMatchedRule(null);
    setShuffledPlurals([...pairs].sort(() => Math.random() - 0.5));
  };

  const isCompleted = matchedIds.length === pairs.length;

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Header Bar */}
      <div className="flex items-center justify-between bg-amber-100/90 px-4 py-2.5 rounded-xl border border-amber-200">
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-amber-950">
            સિંગ્યુલર-પ્લુરલ જોડી બનાવો (Match Game)
          </h3>
          <p className="text-xs text-amber-800">
            ડાબી બાજુથી એકવચન અને જમણી બાજુથી તેનું સાચું બહુવચન પસંદ કરો.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-lg">
            જોડીઓ: {matchedIds.length} / {pairs.length}
          </span>
          <button
            type="button"
            onClick={handleReset}
            title="ફરીથી ગોઠવો"
            className="p-1.5 bg-white text-amber-900 hover:bg-amber-50 border border-amber-300 rounded-lg cursor-pointer transition-colors"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {/* Latest Rule Feedback Callout */}
      {lastMatchedRule && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-xs sm:text-sm font-bold text-emerald-950 flex items-center gap-2 animate-fadeIn">
          <Info size={16} className="text-emerald-600 shrink-0" />
          <span>સાચી જોડી! 💡 {lastMatchedRule}</span>
        </div>
      )}

      {/* Matching Columns */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column: Singular Words */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wider text-center py-1 bg-amber-200/60 rounded-lg">
            એકવચન (Singular)
          </div>

          <div className="space-y-2">
            {pairs.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedSingular?.id === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={isMatched}
                  onClick={() => handleSelectSingular(item)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border-2 font-bold text-sm sm:text-base transition-all cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-100/70 border-emerald-400 text-emerald-900 opacity-60'
                      : isSelected
                      ? 'bg-amber-500 text-white border-amber-600 shadow-md scale-102 ring-2 ring-amber-300'
                      : 'bg-white hover:bg-amber-50 text-slate-800 border-amber-200 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-english font-bold">{item.singular}</span>
                  </div>

                  {isMatched && <Check size={18} className="text-emerald-700" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Plural Words (Shuffled) */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-amber-900 uppercase tracking-wider text-center py-1 bg-amber-200/60 rounded-lg">
            બહુવચન (Plural)
          </div>

          <div className="space-y-2">
            {shuffledPlurals.map((item) => {
              const isMatched = matchedIds.includes(item.id);
              const isSelected = selectedPlural?.id === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  disabled={isMatched}
                  onClick={() => handleSelectPlural(item)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border-2 font-bold text-sm sm:text-base transition-all cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-100/70 border-emerald-400 text-emerald-900 opacity-60'
                      : isSelected
                      ? 'bg-amber-500 text-white border-amber-600 shadow-md scale-102 ring-2 ring-amber-300'
                      : 'bg-white hover:bg-amber-50 text-slate-800 border-amber-200 shadow-2xs'
                  }`}
                >
                  <span className="font-english font-bold">{item.plural}</span>
                  {isMatched && <Check size={18} className="text-emerald-700" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Completion Modal / Banner */}
      {isCompleted && (
        <div className="p-6 bg-white border-2 border-emerald-400 rounded-2xl text-center space-y-4 shadow-lg animate-fadeIn">
          <div className="text-5xl animate-bounce">🎉</div>
          <h4 className="text-xl font-black text-emerald-900">
            તમામ ૧૦ બહુવચન જોડીઓ એકદમ સાચી પડી!
          </h4>
          <p className="text-xs sm:text-sm text-slate-600">
            તમે Singular & Plural ના ૭ નિયમો સફળતાપૂર્વક સમજી લીધા છે!
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold cursor-pointer transition-transform active:scale-95 shadow-md"
          >
            ફરીથી રમો
          </button>
        </div>
      )}
    </div>
  );
};

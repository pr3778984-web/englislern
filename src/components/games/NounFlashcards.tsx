import React, { useState } from 'react';
import { fiftyNouns } from '../../data/chartsData';
import { NounItem } from '../../types';
import { soundEngine } from '../../utils/audio';
import { VoiceBadge } from '../VoiceBadge';
import { Search, Volume2, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

interface NounFlashcardsProps {
  onAddStar: (count?: number) => void;
}

export const NounFlashcards: React.FC<NounFlashcardsProps> = ({ onAddStar }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [practicedIds, setPracticedIds] = useState<number[]>([]);

  const categories = [
    { id: 'all', label: 'બધાં (૫૦ નામ)' },
    { id: 'people', label: 'વ્યક્તિઓ (People)' },
    { id: 'home_school', label: 'ઘર અને શાળા (Home & School)' },
    { id: 'nature', label: 'કુદરત અને ફળો (Nature)' },
    { id: 'animals', label: 'પ્રાણીઓ (Animals)' },
    { id: 'vehicles', label: 'વાહનો (Vehicles)' },
    { id: 'objects', label: 'રોજિંદી વસ્તુઓ (Objects)' },
  ];

  const filteredNouns = fiftyNouns.filter((n) => {
    const matchesCat = activeCategory === 'all' || n.category === activeCategory;
    const matchesQuery =
      n.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.meaningGujarati.includes(searchQuery) ||
      n.pronunciationGujarati.includes(searchQuery);
    return matchesCat && matchesQuery;
  });

  const handleCardClick = (noun: NounItem) => {
    soundEngine.speak(noun.english);
    if (!practicedIds.includes(noun.id)) {
      setPracticedIds([...practicedIds, noun.id]);
      if ((practicedIds.length + 1) % 5 === 0) {
        onAddStar(1);
        soundEngine.playSfx('star');
      }
    }
  };

  return (
    <div className="space-y-5">
      {/* Top Banner & Search */}
      <div className="bg-white rounded-2xl border-2 border-amber-300 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-amber-500 text-white rounded-md font-bold text-xs">
              ચાર્ટ ૧૦
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-amber-950">
              ૫૦ મહત્વના નામ (NOUNS) શબ્દભંડોળ
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
            અંગ્રેજી સ્પેલિંગ, ગુજરાતી ઉચ્ચાર, ગુજરાતી અર્થ અને સાચો અવાજ સાંભળો.
          </p>
        </div>

        {/* Search input */}
        <div className="relative min-w-56">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-700" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="શબ્દ શોધો (Search)..."
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-amber-50/60 border border-amber-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-amber-400 font-medium"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              soundEngine.playSfx('click');
              setActiveCategory(cat.id);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-all border ${
              activeCategory === cat.id
                ? 'bg-amber-600 text-white border-amber-700 shadow-xs'
                : 'bg-white text-amber-900 border-amber-200 hover:bg-amber-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Nouns Grid (Cards exactly like the laminates) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {filteredNouns.map((item) => {
          const isPracticed = practicedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group relative bg-white hover:bg-amber-50/70 border-2 border-amber-200/90 hover:border-amber-400 rounded-xl p-3 text-center cursor-pointer transition-all shadow-2xs hover:shadow-sm active:scale-98 flex flex-col justify-between"
            >
              {/* Top row: id badge and check */}
              <div className="flex items-center justify-between text-[11px] font-bold text-amber-700 mb-1">
                <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center font-bold text-[10px]">
                  {item.id}
                </span>
                {isPracticed && (
                  <span title="સાંભળ્યું છે">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                  </span>
                )}
              </div>

              {/* Visual Icon */}
              <div className="text-3xl my-1 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              {/* English Name */}
              <div className="font-extrabold text-base sm:text-lg text-slate-900 font-english group-hover:text-amber-900">
                {item.english}
              </div>

              {/* Gujarati Pronunciation & Meaning */}
              <div className="mt-1 pt-1 border-t border-amber-100 space-y-0.5">
                <div className="text-xs font-bold text-amber-800">
                  {item.pronunciationGujarati}
                </div>
                <div className="text-[11px] font-semibold text-slate-500">
                  {item.meaningGujarati}
                </div>
              </div>

              {/* Audio button */}
              <div className="mt-2 flex justify-center">
                <VoiceBadge text={item.english} size="sm" />
              </div>
            </div>
          );
        })}
      </div>

      {filteredNouns.length === 0 && (
        <div className="p-8 bg-white rounded-xl border border-amber-200 text-center text-slate-500 font-medium">
          કોઈ શબ્દ મળ્યો નથી. કૃપા કરીને અન્ય શોધ શબ્દ લખો.
        </div>
      )}
    </div>
  );
};

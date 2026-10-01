import React, { useState } from 'react';
import { TabType, GradeLevel } from '../types';
import { Volume2, VolumeX, Sparkles, BookOpen, HelpCircle, Layers, Split, Type, BookmarkCheck, Gauge } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface HeaderProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  stars: number;
  gradeLevel: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  stars,
  gradeLevel,
  onGradeChange,
}) => {
  const [sfxOn, setSfxOn] = useState(soundEngine.sfxEnabled);
  const [speechSpeed, setSpeechSpeed] = useState<'slow' | 'normal'>('slow');

  const toggleSfx = () => {
    soundEngine.sfxEnabled = !sfxOn;
    soundEngine.voiceEnabled = !sfxOn;
    setSfxOn(!sfxOn);
    if (!sfxOn) {
      soundEngine.playSfx('click');
    }
  };

  const toggleSpeed = () => {
    const newSpeed = speechSpeed === 'slow' ? 'normal' : 'slow';
    setSpeechSpeed(newSpeed);
    soundEngine.speechRate = newSpeed === 'slow' ? 0.8 : 1.0;
    soundEngine.playSfx('click');
    soundEngine.speak(newSpeed === 'slow' ? 'Slow voice mode enabled.' : 'Normal speed enabled.');
  };

  const navItems: { id: TabType; labelGujarati: string; labelEnglish: string; icon: React.ReactNode }[] = [
    { id: 'charts', labelGujarati: 'ચાર્ટ્સ', labelEnglish: 'Charts', icon: <BookmarkCheck size={16} /> },
    { id: 'quiz', labelGujarati: 'ક્વિઝ', labelEnglish: 'Quiz', icon: <HelpCircle size={16} /> },
    { id: 'article-game', labelGujarati: 'A, An, The', labelEnglish: 'Articles', icon: <Sparkles size={16} /> },
    { id: 'plural-game', labelGujarati: 'બહુવચન', labelEnglish: 'Plurals', icon: <Split size={16} /> },
    { id: 'sentence-game', labelGujarati: 'વાક્ય રચના', labelEnglish: 'Sentences', icon: <Layers size={16} /> },
    { id: 'noun-bank', labelGujarati: '૫૦ શબ્દો', labelEnglish: '50 Nouns', icon: <Type size={16} /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs">
      {/* Top Main Row - Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xl shadow-xs ring-2 ring-amber-300">
            ઇંગ્લિશ
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-amber-950 leading-none">
              English Gurukul
            </h1>
            <p className="text-xs text-amber-700/90 font-medium">
              ધોરણ ૬ થી ૮ અંગ્રેજી શીખવાનો ખજાનો
            </p>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 bg-amber-100/70 rounded-xl border border-amber-200">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  soundEngine.playSfx('click');
                  onTabChange(item.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-amber-900 hover:bg-amber-200/60'
                }`}
              >
                {item.icon}
                <span>{item.labelGujarati}</span>
                <span className="text-[10px] opacity-75 font-normal">({item.labelEnglish})</span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions & Controls (Audio, Speed, Grade, Stars) */}
        <div className="flex items-center gap-2">
          {/* Grade Selector */}
          <div className="flex items-center bg-amber-50 border border-amber-300 rounded-lg p-0.5 text-xs">
            <button
              type="button"
              onClick={() => onGradeChange('all')}
              className={`px-2 py-1 rounded font-medium cursor-pointer transition-colors ${
                gradeLevel === 'all' ? 'bg-amber-500 text-white shadow-xs' : 'text-amber-900 hover:bg-amber-100'
              }`}
            >
              બધાં
            </button>
            <button
              type="button"
              onClick={() => onGradeChange('std6')}
              className={`px-2 py-1 rounded font-medium cursor-pointer transition-colors ${
                gradeLevel === 'std6' ? 'bg-amber-500 text-white shadow-xs' : 'text-amber-900 hover:bg-amber-100'
              }`}
            >
              ધો. ૬
            </button>
            <button
              type="button"
              onClick={() => onGradeChange('std7')}
              className={`px-2 py-1 rounded font-medium cursor-pointer transition-colors ${
                gradeLevel === 'std7' ? 'bg-amber-500 text-white shadow-xs' : 'text-amber-900 hover:bg-amber-100'
              }`}
            >
              ધો. ૭
            </button>
            <button
              type="button"
              onClick={() => onGradeChange('std8')}
              className={`px-2 py-1 rounded font-medium cursor-pointer transition-colors ${
                gradeLevel === 'std8' ? 'bg-amber-500 text-white shadow-xs' : 'text-amber-900 hover:bg-amber-100'
              }`}
            >
              ધો. ૮
            </button>
          </div>

          {/* Voice Speed Toggle */}
          <button
            type="button"
            onClick={toggleSpeed}
            title={speechSpeed === 'slow' ? 'અવાજ ગતિ: ધીમી (બાળકો માટે સરસ)' : 'અવાજ ગતિ: સામાન્ય'}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold cursor-pointer"
          >
            <Gauge size={14} className="text-amber-700" />
            <span>{speechSpeed === 'slow' ? 'ધીમો અવાજ' : 'સામાન્ય'}</span>
          </button>

          {/* Audio Mute/Unmute */}
          <button
            type="button"
            onClick={toggleSfx}
            title={sfxOn ? 'અવાજ ચાલુ છે (Audio ON)' : 'અવાજ બંધ છે (Audio OFF)'}
            aria-label="Toggle Sound"
            className={`p-2 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
              sfxOn
                ? 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200'
                : 'bg-stone-200 text-stone-600 border-stone-300'
            }`}
          >
            {sfxOn ? <Volume2 size={18} className="text-amber-800" /> : <VolumeX size={18} />}
          </button>

          {/* Stars Counter */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-white rounded-lg shadow-xs font-bold text-sm">
            <Sparkles size={16} className="text-amber-100 animate-spin [animation-duration:8s]" />
            <span className="tabular-nums">{stars}</span>
            <span className="text-xs font-medium text-amber-100">તારા</span>
          </div>
        </div>
      </div>

      {/* Mobile Secondary Navigation Row */}
      <div className="lg:hidden px-4 py-2 border-t border-amber-100 overflow-x-auto scrollbar-none flex items-center gap-1.5 bg-amber-50/70">
        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                soundEngine.playSfx('click');
                onTabChange(item.id);
              }}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md whitespace-nowrap cursor-pointer transition-all ${
                isActive
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-amber-900 hover:bg-amber-200/50 bg-white border border-amber-200'
              }`}
            >
              {item.icon}
              <span>{item.labelGujarati}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};

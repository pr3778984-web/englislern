import React, { useState, useEffect } from 'react';
import { TabType, GradeLevel } from './types';
import { Header } from './components/Header';
import { ChartViewer } from './components/ChartViewer';
import { QuizMaster } from './components/games/QuizMaster';
import { ArticleHunter } from './components/games/ArticleHunter';
import { PluralMatchGame } from './components/games/PluralMatchGame';
import { SentenceBuilder } from './components/games/SentenceBuilder';
import { NounFlashcards } from './components/games/NounFlashcards';
import { soundEngine } from './utils/audio';
import { 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  Split, 
  Layers, 
  Volume2, 
  Type, 
  GraduationCap
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('charts');
  const [gradeLevel, setGradeLevel] = useState<GradeLevel>('all');
  const [stars, setStars] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('english_gurukul_stars');
      return saved ? parseInt(saved, 10) : 5;
    } catch {
      return 5;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('english_gurukul_stars', stars.toString());
    } catch {
      // ignore
    }
  }, [stars]);

  const handleAddStar = (count: number = 1) => {
    setStars((prev) => prev + count);
  };

  const handleSpeakTitle = () => {
    soundEngine.speak('Welcome to English Gurukul. Let us learn English with fun games!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/40 text-slate-800">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        stars={stars}
        gradeLevel={gradeLevel}
        onGradeChange={setGradeLevel}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Welcome Hero Card for Std 6-8 */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white rounded-2xl p-5 sm:p-6 shadow-md border-2 border-amber-400/80 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-900/40 text-amber-100 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs">
                <GraduationCap size={14} className="text-amber-300" />
                <span>ધોરણ ૬, ૭ અને ૮ ના બાળકો માટે ખાસ તૈયાર કરેલ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                અંગ્રેજી શીખો અવાજ (Voice) અને ચિત્રો સાથે!
              </h2>
              <p className="text-amber-100 text-xs sm:text-sm font-medium leading-relaxed">
                ચાર્ટ્સ જુઓ, સાચો અંગ્રેજી ઉચ્ચાર સાંભળો, અને મજેદાર ગેમ્સ રમીને ગોલ્ડન સ્ટાર્સ જીતો.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={handleSpeakTitle}
                className="flex items-center gap-2 px-4 py-2.5 bg-white text-amber-900 hover:bg-amber-50 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
              >
                <Volume2 size={16} className="text-amber-700" />
                <span>અવાજ સાંભળો (Listen)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundEngine.playSfx('click');
                  setCurrentTab('quiz');
                }}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-amber-900/80 hover:bg-amber-950 text-white rounded-xl font-bold text-xs sm:text-sm border border-amber-300/40 shadow-xs transition-transform active:scale-95 cursor-pointer"
              >
                <Sparkles size={16} className="text-amber-300" />
                <span>રમત રમો (Play Quiz)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Navigation Cards (Quick Shortcuts) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
          {[
            {
              id: 'charts' as TabType,
              titleGujarati: 'ચાર્ટ્સ અભ્યાસ',
              titleEnglish: 'Study Charts',
              icon: <BookOpen className="text-amber-600" size={18} />,
              activeBg: 'bg-amber-600 text-white',
            },
            {
              id: 'quiz' as TabType,
              titleGujarati: 'ગ્રામર ક્વિઝ',
              titleEnglish: 'Grammar Quiz',
              icon: <HelpCircle className="text-amber-600" size={18} />,
              activeBg: 'bg-amber-600 text-white',
            },
            {
              id: 'article-game' as TabType,
              titleGujarati: 'A, An, The ગેમ',
              titleEnglish: 'Article Blast',
              icon: <Sparkles className="text-amber-600" size={18} />,
              activeBg: 'bg-amber-600 text-white',
            },
            {
              id: 'plural-game' as TabType,
              titleGujarati: 'બહુવચન જોડી',
              titleEnglish: 'Plural Match',
              icon: <Split className="text-amber-600" size={18} />,
              activeBg: 'bg-amber-600 text-white',
            },
            {
              id: 'sentence-game' as TabType,
              titleGujarati: 'વાક્ય રચના',
              titleEnglish: 'Sentence Builder',
              icon: <Layers className="text-amber-600" size={18} />,
              activeBg: 'bg-amber-600 text-white',
            },
            {
              id: 'noun-bank' as TabType,
              titleGujarati: '૫૦ નામ બેંક',
              titleEnglish: '50 Nouns',
              icon: <Type className="text-amber-600" size={18} />,
              activeBg: 'bg-amber-600 text-white',
            },
          ].map((card) => {
            const isActive = currentTab === card.id;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => {
                  soundEngine.playSfx('click');
                  setCurrentTab(card.id);
                }}
                className={`p-3 rounded-xl border-2 text-left cursor-pointer transition-all active:scale-95 shadow-2xs ${
                  isActive
                    ? 'bg-amber-600 border-amber-700 text-white shadow-xs'
                    : 'bg-white border-amber-200/90 text-slate-800 hover:bg-amber-50/70'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-amber-700 text-white' : 'bg-amber-100 text-amber-800'}`}>
                    {card.icon}
                  </div>
                </div>
                <div className="font-extrabold text-sm leading-tight">
                  {card.titleGujarati}
                </div>
                <div className={`text-[10px] font-medium ${isActive ? 'text-amber-100' : 'text-slate-500'}`}>
                  {card.titleEnglish}
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Specific Content */}
        <div className="pt-2">
          {currentTab === 'charts' && (
            <ChartViewer
              gradeLevel={gradeLevel}
              onStartQuiz={() => setCurrentTab('quiz')}
              onAddStar={handleAddStar}
            />
          )}

          {currentTab === 'quiz' && (
            <QuizMaster
              gradeLevel={gradeLevel}
              onAddStar={handleAddStar}
            />
          )}

          {currentTab === 'article-game' && (
            <ArticleHunter onAddStar={handleAddStar} />
          )}

          {currentTab === 'plural-game' && (
            <PluralMatchGame onAddStar={handleAddStar} />
          )}

          {currentTab === 'sentence-game' && (
            <SentenceBuilder onAddStar={handleAddStar} />
          )}

          {currentTab === 'noun-bank' && (
            <NounFlashcards onAddStar={handleAddStar} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-amber-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-900">ઇંગ્લિશ ગુરુકુળ (English Gurukul)</span>
            <span>·</span>
            <span>ધોરણ ૬ થી ૮ અંગ્રેજી વ્યાકરણ અને અવાજ શિક્ષણ</span>
          </div>
          <div className="text-amber-800/80 font-medium">
            ગુજરાતી માધ્યમના વિદ્યાર્થીઓ માટે ખાસ રચાયેલ
          </div>
        </div>
      </footer>
    </div>
  );
}

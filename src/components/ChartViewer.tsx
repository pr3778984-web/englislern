import React, { useState } from 'react';
import { ChartTopic, GradeLevel } from '../types';
import { chartTopics } from '../data/chartsData';
import { VoiceBadge } from './VoiceBadge';
import { soundEngine } from '../utils/audio';
import { Lightbulb, Play, Volume2, Sparkles, BookOpen, CheckCircle2, Award } from 'lucide-react';

interface ChartViewerProps {
  gradeLevel: GradeLevel;
  onStartQuiz: () => void;
  onAddStar: () => void;
}

export const ChartViewer: React.FC<ChartViewerProps> = ({
  gradeLevel,
  onStartQuiz,
  onAddStar,
}) => {
  const filteredTopics = chartTopics.filter(
    (t) => gradeLevel === 'all' || t.gradeLevel.includes(gradeLevel as 'std6' | 'std7' | 'std8')
  );

  const [selectedTopicId, setSelectedTopicId] = useState<string>(filteredTopics[0]?.id || chartTopics[0].id);
  const [isPlayingAll, setIsPlayingAll] = useState(false);

  const activeTopic = chartTopics.find((t) => t.id === selectedTopicId) || chartTopics[0];

  const handlePlayAll = async () => {
    if (isPlayingAll) {
      soundEngine.stopSpeaking();
      setIsPlayingAll(false);
      return;
    }

    setIsPlayingAll(true);
    soundEngine.playSfx('click');

    for (let i = 0; i < activeTopic.examples.length; i++) {
      const ex = activeTopic.examples[i];
      await new Promise<void>((resolve) => {
        soundEngine.speak(ex.english, 'en', () => {
          setTimeout(resolve, 600);
        });
      });
    }

    setIsPlayingAll(false);
    soundEngine.playSfx('star');
    onAddStar();
  };

  return (
    <div className="space-y-6">
      {/* Topic Switcher Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filteredTopics.map((topic) => {
          const isSelected = topic.id === selectedTopicId;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => {
                soundEngine.playSfx('click');
                setSelectedTopicId(topic.id);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-all border ${
                isSelected
                  ? 'bg-amber-600 text-white border-amber-700 shadow-md scale-102'
                  : 'bg-white text-amber-950 border-amber-200 hover:bg-amber-100/60 shadow-xs'
              }`}
            >
              <span>{topic.badge}</span>
              <span className="font-semibold text-xs opacity-90">{topic.titleGujarati}</span>
            </button>
          );
        })}
      </div>

      {/* Main Laminated Chart Visual Box */}
      <div className="relative bg-white rounded-2xl border-4 border-amber-300 shadow-xl overflow-hidden">
        {/* Top Header replicating the laminated poster style */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-white text-amber-900 rounded-lg font-black text-lg tracking-wide shadow-xs">
              {activeTopic.badge}
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide drop-shadow-xs">
                {activeTopic.titleGujarati}
              </h2>
              <p className="text-amber-100 text-xs sm:text-sm font-medium">
                {activeTopic.titleEnglish} • ધોરણ ૬-૮ અભ્યાસ ચાર્ટ
              </p>
            </div>
          </div>

          {/* Quick Play All Audio Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePlayAll}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md ${
                isPlayingAll
                  ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse'
                  : 'bg-white text-amber-900 hover:bg-amber-50'
              }`}
            >
              <Volume2 size={16} />
              <span>{isPlayingAll ? 'અવાજ રોકો' : 'બધાં વાક્યો સાંભળો'}</span>
            </button>
          </div>
        </div>

        {/* Rule Banner */}
        <div className="bg-amber-50/90 border-b border-amber-200 px-6 py-3">
          <div className="flex items-start gap-2.5">
            <span className="p-1 rounded-md bg-amber-200 text-amber-900 shrink-0 font-bold text-xs">
              નિયમ
            </span>
            <p className="text-sm sm:text-base font-semibold text-amber-950 leading-relaxed">
              {activeTopic.ruleGujarati}
            </p>
          </div>
        </div>

        {/* Examples Grid (Mirroring Chart numbered rows) */}
        <div className="p-4 sm:p-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-amber-800 pb-1 border-b border-amber-200">
            <span>ઉદાહરણો (Examples):</span>
            <span className="text-[11px] text-amber-700">🔊 સાંભળવા માટે વાક્ય પર ટેપ કરો</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeTopic.examples.map((ex, index) => (
              <div
                key={ex.id}
                onClick={() => soundEngine.speak(ex.english)}
                className="group flex items-center justify-between p-3.5 bg-amber-50/50 hover:bg-amber-100/70 border border-amber-200/90 rounded-xl transition-all cursor-pointer shadow-2xs hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  {/* Number Badge */}
                  <div className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                    {index + 1}
                  </div>

                  {/* Character/Object Visual Icon */}
                  {ex.icon && (
                    <div className="w-10 h-10 rounded-lg bg-white border border-amber-200 flex items-center justify-center text-xl shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                      {ex.icon}
                    </div>
                  )}

                  {/* Text Content */}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-900 transition-colors font-english">
                      {ex.english}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-amber-900/90">
                      {ex.gujarati}
                    </p>
                  </div>
                </div>

                <VoiceBadge text={ex.english} size="sm" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Memory Box & Summary */}
        <div className="p-4 sm:p-6 bg-gradient-to-b from-amber-50/70 to-amber-100/50 border-t border-amber-200 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Memory Box (યાદ રાખો) */}
          {activeTopic.memoryBox && (
            <div className="bg-white p-4 rounded-xl border border-amber-300 shadow-xs">
              <div className="flex items-center gap-2 text-amber-800 font-extrabold text-sm mb-2">
                <Lightbulb size={18} className="text-amber-500 fill-amber-300" />
                <span>{activeTopic.memoryBox.title}</span>
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-800 font-medium">
                {activeTopic.memoryBox.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Practice & Take Quiz Prompt */}
          <div className="bg-amber-600 text-white p-4 rounded-xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-bold text-sm mb-1">
                <Award size={18} className="text-amber-200" />
                <span>ચાર્ટ શીખ્યા પછી જાતે ચકાસો!</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                આ વિષય પર આધારિત મજેદાર ક્વિઝ રમો અને ગોલ્ડન સ્ટાર્સ જીતો!
              </p>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playSfx('correct');
                  onStartQuiz();
                }}
                className="px-4 py-2 bg-white text-amber-900 hover:bg-amber-50 rounded-lg font-bold text-xs sm:text-sm shadow-md transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>ક્વિઝ શરૂ કરો</span>
                <span>➔</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

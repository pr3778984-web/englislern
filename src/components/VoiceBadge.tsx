import React, { useState } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { soundEngine } from '../utils/audio';

interface VoiceBadgeProps {
  text: string;
  lang?: 'en' | 'gu';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
  autoPlayOnClick?: boolean;
}

export const VoiceBadge: React.FC<VoiceBadgeProps> = ({
  text,
  lang = 'en',
  size = 'md',
  label,
  className = '',
  autoPlayOnClick = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!soundEngine.voiceEnabled) return;

    soundEngine.playSfx('click');
    setIsPlaying(true);
    soundEngine.speak(text, lang, () => {
      setIsPlaying(false);
    });
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs gap-1',
    md: 'px-2.5 py-1.5 text-sm gap-1.5',
    lg: 'px-3.5 py-2 text-base gap-2',
  }[size];

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  }[size];

  return (
    <button
      type="button"
      onClick={handlePlay}
      title={`સાંભળો (Listen to: "${text}")`}
      aria-label={`Listen to ${text}`}
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-all active:scale-95 cursor-pointer ${
        isPlaying
          ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300'
          : 'bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300/80 shadow-xs'
      } ${sizeClasses} ${className}`}
    >
      {isPlaying ? (
        <span className="flex items-center gap-1">
          <span className="flex gap-0.5 items-end h-3">
            <span className="w-0.5 h-2 bg-white animate-bounce" />
            <span className="w-0.5 h-3 bg-white animate-bounce [animation-delay:0.15s]" />
            <span className="w-0.5 h-1.5 bg-white animate-bounce [animation-delay:0.3s]" />
          </span>
          {label && <span className="font-semibold">{label}</span>}
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <Volume2 size={iconSizes} className="text-amber-800 shrink-0" />
          {label && <span className="font-semibold text-amber-950">{label}</span>}
        </span>
      )}
    </button>
  );
};

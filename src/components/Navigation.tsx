import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}
export function Navigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev
}: NavigationProps) {
  const progress = (currentSlide + 1) / totalSlides * 100;
  return <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 p-4 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm font-medium text-slate-500">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 transition-all duration-300 ease-out" style={{
            width: `${progress}%`
          }} />
          </div>
          <span>{totalSlides}</span>
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={onPrev} disabled={currentSlide === 0} className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-900" aria-label="Previous slide">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={onNext} disabled={currentSlide === totalSlides - 1} className="p-2 rounded-full hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-900" aria-label="Next slide">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>;
}
import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
export function Slide01Cover() {
  return <SlideLayout className="text-center items-center">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm tracking-wider uppercase mb-4">
          Pitch Deck 2024
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter">
          5200AI
        </h1>

        <p className="text-2xl md:text-3xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
          AI-Powered E-Learning Platform focused on{' '}
          <span className="text-blue-600 font-medium">
            real learning outcomes
          </span>
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-400 rounded-full my-8" />

        <p className="text-lg text-slate-500 italic">
          "Building a fair, transparent and quality-first online learning
          ecosystem"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left bg-slate-50 p-8 rounded-2xl w-full max-w-4xl border border-slate-100">
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
              Founder
            </div>
            <div className="font-medium text-slate-900">Nguyễn Đức Minh</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
              Location
            </div>
            <div className="font-medium text-slate-900">Vietnam</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
              Stage
            </div>
            <div className="font-medium text-slate-900">
              Pre-launch / Early-stage
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
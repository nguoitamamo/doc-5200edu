import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { Sprout } from 'lucide-react';
export function Slide16FundraisingStage() {
  return <SlideLayout title="Giai đoạn Gọi vốn" subtitle="Cấu trúc vòng gọi vốn">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
          <Sprout className="w-10 h-10 text-emerald-600" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
          Pre-Seed / Early Seed
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center">
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-4">
              Nhà đầu tư mục tiêu
            </h3>
            <ul className="space-y-3 text-slate-700 font-medium">
              <li>Angel Investors</li>
              <li>Chuyên gia EdTech / AI chiến lược</li>
              <li>VC giai đoạn đầu (tập trung SEA)</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center md:col-span-2 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-4">
              Định vị
            </h3>
            <p className="text-2xl text-slate-900 font-bold">
              Tập trung vào traction sớm, <br />
              <span className="text-slate-400 decoration-slate-300 line-through decoration-2">
                không phải giai đoạn ý tưởng
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
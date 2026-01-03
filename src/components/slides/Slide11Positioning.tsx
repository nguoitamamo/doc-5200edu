import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { Layers, Zap } from 'lucide-react';
export function Slide11Positioning() {
  return <SlideLayout title="Positioning" subtitle="Định vị dự án 5200AI">
      <div className="bg-slate-900 text-white p-10 rounded-3xl mb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-50"></div>
        <div className="relative z-10">
          <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Không phải nền tảng học online thông thường
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            AI-powered Knowledge Monetization Infrastructure
          </h3>
          <div className="flex justify-center gap-4 mt-6">
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              Chuẩn hóa tri thức
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              Đóng gói nội dung
            </span>
            <span className="bg-white/10 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              Phân phối & Đo lường
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <Layers className="w-8 h-8 text-slate-400 mb-4" />
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Hạ tầng (Infrastructure)
          </h4>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Hệ thống AI hỗ trợ thiết kế – vận hành
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Đo lường chất lượng học tập
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <Zap className="w-8 h-8 text-emerald-500 mb-4" />
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Cơ chế (Mechanism)
          </h4>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Doanh thu gắn với completion & feedback
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Giảm rủi ro cho người học
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>;
}
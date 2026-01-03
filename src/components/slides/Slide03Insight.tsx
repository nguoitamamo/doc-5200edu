import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { ArrowRight } from 'lucide-react';
export function Slide03Insight() {
  return <SlideLayout title="Core Insight" subtitle="Insight thị trường cốt lõi">
      <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 leading-tight">
          E-Learning chỉ bền vững khi lợi ích của nền tảng – giảng viên – học
          viên được gắn chặt với{' '}
          <span className="text-blue-600 underline decoration-4 decoration-blue-200">
            chất lượng học tập thực
          </span>
          .
        </h3>
      </div>

      <div className="space-y-6">
        <div className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.01]">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl mr-6 flex-shrink-0">
            1
          </div>
          <div className="flex-1">
            <p className="text-lg text-slate-700">
              Nếu học viên không học xong
            </p>
          </div>
          <ArrowRight className="text-slate-300 mx-4" />
          <div className="flex-1 text-right">
            <p className="text-lg font-bold text-red-600">Hệ thống đang sai</p>
          </div>
        </div>

        <div className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.01]">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl mr-6 flex-shrink-0">
            2
          </div>
          <div className="flex-1">
            <p className="text-lg text-slate-700">
              Nếu giảng viên chỉ kiếm tiền bằng marketing
            </p>
          </div>
          <ArrowRight className="text-slate-300 mx-4" />
          <div className="flex-1 text-right">
            <p className="text-lg font-bold text-orange-600">
              Chất lượng sẽ giảm
            </p>
          </div>
        </div>

        <div className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-transform hover:scale-[1.01]">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xl mr-6 flex-shrink-0">
            3
          </div>
          <div className="flex-1">
            <p className="text-lg text-slate-700">
              Nếu nền tảng chỉ thu phí upfront
            </p>
          </div>
          <ArrowRight className="text-slate-300 mx-4" />
          <div className="flex-1 text-right">
            <p className="text-lg font-bold text-slate-600">Niềm tin sẽ mất</p>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
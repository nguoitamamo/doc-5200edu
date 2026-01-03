import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
export function Slide17CapitalAsk() {
  return <SlideLayout title="Số vốn kêu gọi" subtitle="Tổng quan">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        <div>
          <div className="mb-12">
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-2">
              Tổng vốn mục tiêu
            </h3>
            <div className="text-6xl md:text-7xl font-black text-blue-600 tracking-tighter">
              $150,000
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-2">
                Thời gian hoạt động
              </h3>
              <div className="text-4xl font-bold text-slate-900">
                9–12 tháng
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wider mb-2">
                Sử dụng vốn
              </h3>
              <div className="text-4xl font-bold text-slate-900">
                100% Thực thi
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Mục tiêu gọi vốn
          </h3>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Đạt được{' '}
            <span className="text-emerald-600 font-bold">
              tín hiệu Product–Market Fit
            </span>
            , không phải scale sớm.
          </p>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-1/3 animate-pulse"></div>
          </div>
          <p className="text-sm text-slate-400 mt-2 text-right">
            Giai đoạn xác thực
          </p>
        </div>
      </div>
    </SlideLayout>;
}
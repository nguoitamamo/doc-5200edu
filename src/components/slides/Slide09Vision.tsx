import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { Rocket, Globe } from 'lucide-react';
export function Slide09Vision() {
  return <SlideLayout title="Vision" subtitle="Tầm nhìn của 5200AI">
      <div className="flex flex-col items-center justify-center h-full text-center max-w-4xl mx-auto">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 animate-pulse">
          <Rocket className="w-12 h-12 text-blue-600" />
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12 leading-tight">
          Trở thành nền tảng E-Learning đặt{' '}
          <span className="text-blue-600">chất lượng</span> lên trên doanh thu
          ngắn hạn.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <Globe className="w-8 h-8 text-emerald-600 mb-4 mx-auto" />
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              Hệ sinh thái bền vững
            </h4>
            <p className="text-slate-600">
              Nơi tri thức thực sự được trân trọng và lan tỏa
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold">
              $
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              Scalable Business
            </h4>
            <p className="text-slate-600">
              Có thể scale, đóng gói, hoặc exit chiến lược
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
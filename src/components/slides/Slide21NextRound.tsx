import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { ArrowRight } from 'lucide-react';
export function Slide21NextRound() {
  return <SlideLayout title="Con đường tới vòng tiếp theo" subtitle="Điều kiện gọi vốn tiếp">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg border border-slate-100 p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-50"></div>

          <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">
            5200AI sẵn sàng cho vòng Seed / Growth khi:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="flex items-center p-4 bg-slate-50 rounded-xl">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 font-bold">
                ✓
              </div>
              <span className="font-medium text-slate-700">
                Doanh thu hàng tháng dự đoán được
              </span>
            </div>
            <div className="flex items-center p-4 bg-slate-50 rounded-xl">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 font-bold">
                ✓
              </div>
              <span className="font-medium text-slate-700">
                Unit economics dương
              </span>
            </div>
            <div className="flex items-center p-4 bg-slate-50 rounded-xl">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 font-bold">
                ✓
              </div>
              <span className="font-medium text-slate-700">
                Retention &gt; phụ thuộc Acquisition
              </span>
            </div>
            <div className="flex items-center p-4 bg-slate-50 rounded-xl">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 font-bold">
                ✓
              </div>
              <span className="font-medium text-slate-700">
                Chiến lược mở rộng đã xác thực
              </span>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-4 text-slate-500">
            <span>Ra mắt</span>
            <div className="h-0.5 w-24 bg-slate-200"></div>
            <div className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow-md flex items-center">
              12–18 tháng
              <ArrowRight className="ml-2 w-4 h-4" />
            </div>
            <div className="h-0.5 w-24 bg-slate-200"></div>
            <span>Series A</span>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
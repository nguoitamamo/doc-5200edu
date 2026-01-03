import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { GitBranch } from 'lucide-react';
export function Slide24Optionality() {
  return <SlideLayout title="Linh hoạt Chiến lược" subtitle="Tính linh hoạt sau khi xác thực">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative w-full max-w-4xl">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <div className="md:text-right md:pr-8 relative">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 inline-block w-full">
                <span className="font-bold text-slate-900">
                  Tiếp tục tăng trưởng Bootstrap
                </span>
              </div>
              <div className="absolute top-1/2 right-0 w-8 h-1 bg-slate-200 transform translate-x-full hidden md:block"></div>
            </div>

            <div className="md:pl-8 relative">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 inline-block w-full">
                <span className="font-bold text-slate-900">
                  Gọi vòng Seed lớn hơn
                </span>
              </div>
              <div className="absolute top-1/2 left-0 w-8 h-1 bg-slate-200 transform -translate-x-full hidden md:block"></div>
            </div>

            <div className="md:text-right md:pr-8 relative">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 inline-block w-full">
                <span className="font-bold text-slate-900">
                  Đối tác chiến lược
                </span>
              </div>
              <div className="absolute top-1/2 right-0 w-8 h-1 bg-slate-200 transform translate-x-full hidden md:block"></div>
            </div>

            <div className="md:pl-8 relative">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 inline-block w-full">
                <span className="font-bold text-slate-900">
                  Cấp phép nền tảng
                </span>
              </div>
              <div className="absolute top-1/2 left-0 w-8 h-1 bg-slate-200 transform -translate-x-full hidden md:block"></div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg z-10 hidden md:block">
            <GitBranch className="w-8 h-8" />
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Lợi thế cho Nhà đầu tư
          </h3>
          <p className="text-slate-600">
            Nhiều hướng thoát vốn, không phụ thuộc vào một kết quả duy nhất.
          </p>
        </div>
      </div>
    </SlideLayout>;
}
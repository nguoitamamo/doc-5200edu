import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
export function Slide10Market() {
  return <SlideLayout title="Bối cảnh & Cơ hội Thị trường" subtitle="TAM / SAM / SOM">
      <div className="flex flex-col space-y-6">
        {/* TAM */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-8">
          <div className="absolute top-0 right-0 p-32 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">TAM (EdTech Toàn cầu)</h3>
              <p className="text-slate-400">Học online, LMS, công cụ creator</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-4xl font-bold text-blue-400">$340B+</div>
              <div className="text-sm text-slate-400">CAGR ~13-15%</div>
            </div>
          </div>
        </div>

        {/* SAM */}
        <div className="relative overflow-hidden rounded-2xl bg-blue-800 text-white p-8 ml-0 md:ml-12">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                SAM (Công cụ AI Learning)
              </h3>
              <p className="text-blue-200">
                Creator, nội dung đào tạo, công cụ tri thức
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-4xl font-bold text-blue-300">$18-25B</div>
            </div>
          </div>
        </div>

        {/* SOM */}
        <div className="relative overflow-hidden rounded-2xl bg-emerald-600 text-white p-8 ml-0 md:ml-24 shadow-xl">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">SOM (Đông Nam Á)</h3>
              <p className="text-emerald-100">Việt Nam, Thái Lan, Indonesia</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-4xl font-bold text-white">$120-180M</div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 ml-0 md:ml-24">
          <h4 className="font-bold text-slate-900 mb-2">
            Mục tiêu 5200AI (3 năm):
          </h4>
          <p className="text-slate-700">
            Chiếm <span className="font-bold text-blue-600">0.5–1% SOM</span> →{' '}
            <span className="font-bold text-emerald-600">$0.6 – 1.8M ARR</span>{' '}
            khả thi.
          </p>
        </div>
      </div>
    </SlideLayout>;
}
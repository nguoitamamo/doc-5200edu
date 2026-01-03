import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
export function Slide12Costs() {
  return <SlideLayout title="Development Costs" subtitle="Công bố chi phí phát triển dự án">
      <div className="flex flex-col items-center mb-12">
        <div className="text-6xl md:text-8xl font-black text-slate-900 mb-2 tracking-tighter">
          $150,000
        </div>
        <div className="text-xl text-slate-500 font-medium uppercase tracking-widest">
          Lean but Scalable
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Mục tiêu ngân sách
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center text-lg text-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold mr-4 text-sm">
                1
              </div>
              Ra thị trường (Go-to-market)
            </li>
            <li className="flex items-center text-lg text-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold mr-4 text-sm">
                2
              </div>
              Có doanh thu thật
            </li>
            <li className="flex items-center text-lg text-slate-700">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold mr-4 text-sm">
                3
              </div>
              Có data thật để scale
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 flex items-center justify-center">
          <p className="text-center text-slate-600 italic text-lg">
            "Xây dựng phiên bản đủ mạnh để tồn tại và phát triển, không lãng phí
            vào những thứ chưa cần thiết."
          </p>
        </div>
      </div>
    </SlideLayout>;
}
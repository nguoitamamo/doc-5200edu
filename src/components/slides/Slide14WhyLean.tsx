import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { Ban, LineChart } from 'lucide-react';
export function Slide14WhyLean() {
  return <SlideLayout title="Why Lean?" subtitle="Vì sao $150,000 là LEAN nhưng đủ SCALE?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <div className="flex items-center mb-6">
            <Ban className="w-8 h-8 text-red-500 mr-4" />
            <h3 className="text-2xl font-bold text-slate-900">
              Không xây thứ chưa cần
            </h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center text-slate-700 bg-white p-3 rounded-lg shadow-sm">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
              Không app mobile ngay
            </li>
            <li className="flex items-center text-slate-700 bg-white p-3 rounded-lg shadow-sm">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
              Không feature "nice-to-have"
            </li>
            <li className="flex items-center text-slate-700 bg-white p-3 rounded-lg shadow-sm">
              <span className="w-2 h-2 bg-red-400 rounded-full mr-3" />
              Không mở rộng thị trường sớm
            </li>
          </ul>
        </div>

        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
          <div className="flex items-center mb-6">
            <LineChart className="w-8 h-8 text-emerald-600 mr-4" />
            <h3 className="text-2xl font-bold text-slate-900">
              Scale dựa trên data
            </h3>
          </div>
          <p className="mb-4 text-slate-600">
            Mỗi USD chi ra đều phải đo lường được:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl text-center shadow-sm">
              <div className="font-bold text-emerald-600 text-xl">CAC</div>
              <div className="text-xs text-slate-400">Acquisition Cost</div>
            </div>
            <div className="bg-white p-4 rounded-xl text-center shadow-sm">
              <div className="font-bold text-emerald-600 text-xl">LTV</div>
              <div className="text-xs text-slate-400">Lifetime Value</div>
            </div>
            <div className="bg-white p-4 rounded-xl text-center shadow-sm">
              <div className="font-bold text-emerald-600 text-xl">Rate</div>
              <div className="text-xs text-slate-400">Completion Rate</div>
            </div>
            <div className="bg-white p-4 rounded-xl text-center shadow-sm">
              <div className="font-bold text-emerald-600 text-xl">Quality</div>
              <div className="text-xs text-slate-400">Feedback Score</div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
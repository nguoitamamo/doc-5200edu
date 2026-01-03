import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { ShieldCheck, XCircle, Unlock } from 'lucide-react';
export function Slide05Differentiation() {
  return <SlideLayout title="Core Differentiation" subtitle="Điểm khác biệt cốt lõi">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 opacity-75">
          <XCircle className="w-8 h-8 text-slate-400 mb-4" />
          <h3 className="text-lg font-bold text-slate-700 mb-2">
            Không marketplace đại trà
          </h3>
          <p className="text-slate-500 text-sm">
            Curated quality over quantity
          </p>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 opacity-75">
          <XCircle className="w-8 h-8 text-slate-400 mb-4" />
          <h3 className="text-lg font-bold text-slate-700 mb-2">
            Không "bán khóa học là xong"
          </h3>
          <p className="text-slate-500 text-sm">Commitment to outcomes</p>
        </div>

        <div className="bg-blue-600 p-6 rounded-xl shadow-lg transform md:-translate-y-4">
          <ShieldCheck className="w-8 h-8 text-white mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">
            Bảo chứng chất lượng
          </h3>
          <p className="text-blue-100 text-sm">Platform as a guarantor</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-10 rounded-2xl border border-emerald-100 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <Unlock className="w-6 h-6 text-emerald-600 mr-3" />
            Doanh thu giảng viên chỉ unlock khi:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center text-lg text-slate-700">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
              Học viên hoàn tất khóa học
            </li>
            <li className="flex items-center text-lg text-slate-700">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
              Có đánh giá chất lượng tích cực
            </li>
          </ul>
        </div>

        <div className="mt-8 md:mt-0 md:ml-12 bg-white p-6 rounded-xl shadow-sm border border-slate-100 max-w-xs text-center">
          <p className="font-bold text-slate-900 text-lg">5200AI</p>
          <p className="text-slate-500 mt-2">
            Align incentive của tất cả các bên
          </p>
        </div>
      </div>
    </SlideLayout>;
}
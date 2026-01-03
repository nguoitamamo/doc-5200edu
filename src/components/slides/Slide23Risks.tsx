import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { Shield } from 'lucide-react';
export function Slide23Risks() {
  return <SlideLayout title="Quản lý Rủi ro" subtitle="Rủi ro chính & Giải pháp">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-bold text-slate-900">
              Rủi ro Thị trường
            </h4>
            <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">
              Bên ngoài
            </span>
          </div>
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-slate-600 text-sm">
              <span className="font-bold text-slate-700">Giải pháp:</span> Tập
              trung thị trường beachhead (SEA) để thiết lập vị thế vững chắc
              trước khi mở rộng.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-bold text-slate-900">
              Rủi ro Sản phẩm
            </h4>
            <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">
              Nội bộ
            </span>
          </div>
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-slate-600 text-sm">
              <span className="font-bold text-slate-700">Giải pháp:</span>{' '}
              Phương pháp MVP-first với chu kỳ lặp dựa trên feedback nhanh.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-bold text-slate-900">
              Rủi ro Tài chính
            </h4>
            <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">
              Nội bộ
            </span>
          </div>
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-slate-600 text-sm">
              <span className="font-bold text-slate-700">Giải pháp:</span> Chi
              tiêu theo từng mốc đảm bảo hiệu quả vốn.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <h4 className="text-lg font-bold text-slate-900">
              Rủi ro Thực thi
            </h4>
            <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">
              Nội bộ
            </span>
          </div>
          <div className="flex items-start">
            <Shield className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-slate-600 text-sm">
              <span className="font-bold text-slate-700">Giải pháp:</span> Sở
              hữu kỹ thuật nội bộ và đội ngũ tinh gọn, có trách nhiệm.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { Check } from 'lucide-react';
export function Slide25Closing() {
  return <SlideLayout className="text-center">
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12">
          Tóm tắt Đầu tư
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mb-16">
          <div className="flex items-center p-4 bg-slate-50 rounded-xl">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-medium text-slate-800 text-left">
              Cơ hội thị trường rõ ràng
            </span>
          </div>
          <div className="flex items-center p-4 bg-slate-50 rounded-xl">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-medium text-slate-800 text-left">
              Cấu trúc chi phí tinh gọn nhưng có thể scale
            </span>
          </div>
          <div className="flex items-center p-4 bg-slate-50 rounded-xl">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-medium text-slate-800 text-left">
              Logic kiếm tiền dựa trên kết quả
            </span>
          </div>
          <div className="flex items-center p-4 bg-slate-50 rounded-xl">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span className="font-medium text-slate-800 text-left">
              Hiệu quả vốn mạnh mẽ
            </span>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl max-w-3xl w-full shadow-xl">
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            "5200AI được xây dựng để{' '}
            <span className="text-blue-400">tồn tại trước</span>,{' '}
            <span className="text-emerald-400">scale sau</span>, và{' '}
            <span className="text-purple-400">mở rộng có trách nhiệm</span>."
          </p>
        </div>

        <div className="mt-12 text-slate-400 text-sm">
          © 2024 5200AI. Bản quyền thuộc về 5200AI.
        </div>
      </div>
    </SlideLayout>;
}
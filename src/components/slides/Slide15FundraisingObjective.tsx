import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
export function Slide15FundraisingObjective() {
  return <SlideLayout title="Mục tiêu Gọi vốn" subtitle="Tại sao 5200AI gọi vốn?">
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl text-slate-600 mb-12 text-center leading-relaxed">
          5200AI gọi vốn{' '}
          <span className="font-bold text-slate-900">
            không phải để thử nghiệm
          </span>
          , mà để:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600 shadow-sm">
            <h4 className="font-bold text-lg text-slate-900 mb-2">
              Tăng tốc ra thị trường
            </h4>
            <p className="text-slate-500">
              Tốc độ là yếu tố quan trọng trong kỷ nguyên AI
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm">
            <h4 className="font-bold text-lg text-slate-900 mb-2">
              Xác thực mô hình kiếm tiền
            </h4>
            <p className="text-slate-500">
              Chứng minh mô hình kinh doanh hoạt động ở quy mô lớn
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
            <h4 className="font-bold text-lg text-slate-900 mb-2">
              Xây dựng hạ tầng
            </h4>
            <p className="text-slate-500">Tạo ra rào cản công nghệ bền vững</p>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-4 border-orange-500 shadow-sm">
            <h4 className="font-bold text-lg text-slate-900 mb-2">
              Chiếm lĩnh thị phần
            </h4>
            <p className="text-slate-500">Dẫn đầu khu vực Đông Nam Á từ sớm</p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold uppercase tracking-widest text-slate-400 mb-4">
            Nguyên tắc cốt lõi
          </h3>
          <p className="text-2xl md:text-3xl font-serif italic">
            "Vốn được sử dụng để xác thực thực tế kinh doanh, không phải để trợ
            cấp giả định."
          </p>
        </div>
      </div>
    </SlideLayout>;
}
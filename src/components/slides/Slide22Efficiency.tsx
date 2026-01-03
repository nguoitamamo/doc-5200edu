import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { TrendingDown } from 'lucide-react';
export function Slide22Efficiency() {
  return <SlideLayout title="Hiệu quả Vốn" subtitle="Tại sao 5200AI hiệu quả vốn?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
              <span className="font-bold">VN</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900">
                Đội ngũ kỹ thuật tại Việt Nam
              </h4>
              <p className="text-sm text-slate-500">
                Chất lượng cao, chi phí tối ưu
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">
                Cấu trúc vận hành tinh gọn
              </h4>
              <p className="text-sm text-slate-500">
                Chi phí quản lý tối thiểu
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mr-4">
              <span className="font-bold">PLG</span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900">
                Tăng trưởng dẫn dắt bởi sản phẩm
              </h4>
              <p className="text-sm text-slate-500">
                Không đốt tiền vào branding
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-10 rounded-3xl text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Kết quả</h3>
          <div className="text-5xl font-black mb-4 tracking-tight">
            Burn thấp hơn
          </div>
          <div className="h-1 w-24 bg-white/30 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-blue-100">
            với chất lượng thực thi tương đương các đối thủ khu vực.
          </p>
        </div>
      </div>
    </SlideLayout>;
}
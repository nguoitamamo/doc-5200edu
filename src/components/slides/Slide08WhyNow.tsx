import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { TrendingUp, ShieldAlert, Cpu } from 'lucide-react';
export function Slide08WhyNow() {
  return <SlideLayout title="Why Now?" subtitle="Vì sao là bây giờ?">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Market Demand
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Nhu cầu học online tiếp tục tăng trưởng mạnh mẽ sau đại dịch, trở
            thành thói quen tiêu dùng bình thường mới.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
          <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6">
            <ShieldAlert className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            User Behavior
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Người dùng ngày càng cảnh giác với khóa học kém chất lượng ("lùa
            gà").
          </p>
          <div className="bg-orange-50 px-3 py-1 rounded-full text-xs font-bold text-orange-700 inline-block">
            Ưu tiên trải nghiệm & kết quả
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-600">
          <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-6">
            <Cpu className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Technology</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            AI & dữ liệu cho phép đo lường hành vi và cá nhân hóa giáo dục ở quy
            mô lớn (Scale).
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-slate-900">
          Thị trường đã sẵn sàng cho{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
            E-Learning thế hệ tiếp theo
          </span>
        </h3>
      </div>
    </SlideLayout>;
}
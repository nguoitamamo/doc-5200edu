import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { BarChart2, Users, Settings } from 'lucide-react';
export function Slide20Metrics() {
  return <SlideLayout title="Chỉ số quan trọng" subtitle="Các chỉ số nhà đầu tư theo dõi">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Chỉ số Sản phẩm
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
              Tỷ lệ hoàn thành khóa học
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
              Điểm chất lượng feedback
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
              Tỷ lệ kích hoạt giảng viên
            </li>
          </ul>
        </div>

        <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
            <BarChart2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Chỉ số Kinh doanh
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
              CAC / LTV
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
              Doanh thu hàng tháng (MRR)
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
              Doanh thu trên mỗi giảng viên
            </li>
          </ul>
        </div>

        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6 text-slate-600">
            <Settings className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Chỉ số Hệ thống
          </h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2" />
              Hiệu suất tạo nội dung AI
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2" />
              Chi phí hỗ trợ trên người dùng
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>;
}
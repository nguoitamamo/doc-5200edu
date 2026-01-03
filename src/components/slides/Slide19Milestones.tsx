import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
export function Slide19Milestones() {
  return <SlideLayout title="Các mốc quan trọng" subtitle="Logic triển khai vốn">
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

        <div className="space-y-12">
          {/* Phase 1 */}
          <div className="relative pl-24">
            <div className="absolute left-0 top-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
              <span className="font-bold text-blue-600">0-3</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Giai đoạn 1: Xây dựng
                </h3>
                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  Tháng 0-3
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Nền tảng cốt lõi hoạt động</li>
                <li>Tạo khóa học hỗ trợ AI</li>
                <li>Logic thanh toán & hoàn thành</li>
              </ul>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative pl-24">
            <div className="absolute left-0 top-0 w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
              <span className="font-bold text-emerald-600">4-6</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Giai đoạn 2: Xác thực
                </h3>
                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  Tháng 4-6
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Người dùng trả phí đầu tiên</li>
                <li>Onboarding giảng viên</li>
                <li>Đo lường CAC / LTV</li>
              </ul>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative pl-24">
            <div className="absolute left-0 top-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
              <span className="font-bold text-purple-600">7-12</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Giai đoạn 3: Tối ưu
                </h3>
                <span className="text-sm font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  Tháng 7-12
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Tối ưu hóa retention</li>
                <li>Dự đoán doanh thu</li>
                <li>Sẵn sàng mở rộng</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
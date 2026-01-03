import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { UserCheck, Users } from 'lucide-react';
export function Slide06TargetUsers() {
  return <SlideLayout title="Target Users" subtitle="Đối tượng mục tiêu">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Giảng viên */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Giảng viên / Chuyên gia
            </h3>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Họ là ai?
              </h4>
              <p className="text-slate-700 font-medium">
                Người có kinh nghiệm thực tế
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Họ muốn
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
                  Xây dựng thương hiệu cá nhân
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
                  Monetise tri thức dài hạn
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-3">
                Họ KHÔNG muốn
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-500">
                  <span className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2" />
                  Chạy ads phức tạp
                </li>
                <li className="flex items-center text-slate-500">
                  <span className="w-1.5 h-1.5 bg-red-300 rounded-full mr-2" />
                  Bán hàng bằng chiêu trò
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Người học */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 mr-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Người học</h3>
          </div>

          <div className="flex-1 space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Muốn học kỹ năng
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-slate-700">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
                  Ứng dụng được ngay
                </li>
                <li className="flex items-center text-slate-700">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2" />
                  Có đầu ra rõ ràng
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
                Quan tâm nhất
              </h4>
              <div className="flex gap-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 font-medium text-slate-700">
                  Chất lượng
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 font-medium text-slate-700">
                  Giá trị / Chi phí
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
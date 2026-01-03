import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { PenTool, LayoutDashboard, DollarSign, Award, Map, Activity, MessageSquare, UserCircle } from 'lucide-react';
export function Slide07ProductOverview() {
  return <SlideLayout title="Product Overview" subtitle="5200AI cung cấp những gì?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Cho Giảng viên */}
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-6 pb-2 border-b border-blue-100">
            Cho Giảng viên
          </h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <PenTool className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">
                  Công cụ tạo & đóng gói khóa học
                </h4>
                <p className="text-sm text-slate-500">
                  Intuitive course builder
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <LayoutDashboard className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">
                  Dashboard theo dõi học viên
                </h4>
                <p className="text-sm text-slate-500">
                  Analytics & progress tracking
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <DollarSign className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">
                  Cơ chế doanh thu minh bạch
                </h4>
                <p className="text-sm text-slate-500">
                  Transparent revenue sharing
                </p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
              <Award className="w-6 h-6 text-blue-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">
                  Hỗ trợ branding & nội dung
                </h4>
                <p className="text-sm text-slate-500">
                  Marketing & content support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cho Người học */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-800 mb-6 pb-2 border-b border-emerald-100">
            Cho Người học
          </h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <Map className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">
                  Lộ trình học rõ ràng
                </h4>
                <p className="text-sm text-slate-500">Clear learning path</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <Activity className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">Theo dõi tiến độ</h4>
                <p className="text-sm text-slate-500">Real-time progress</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <MessageSquare className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">
                  Đánh giá khóa học minh bạch
                </h4>
                <p className="text-sm text-slate-500">Transparent reviews</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <UserCircle className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold text-slate-900">
                  Trải nghiệm cá nhân hóa
                </h4>
                <p className="text-sm text-slate-500">
                  Personalized experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>;
}
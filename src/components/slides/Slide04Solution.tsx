import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { CheckCircle2, BrainCircuit, BarChart3, Target } from 'lucide-react';
export function Slide04Solution() {
  return <SlideLayout title="Solution: 5200AI" subtitle="Nền tảng E-Learning thế hệ mới">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
            <h3 className="text-xl font-semibold text-emerald-800 mb-4 uppercase tracking-wide">
              Triết lý cốt lõi
            </h3>
            <p className="text-2xl font-bold text-slate-900 leading-relaxed">
              Doanh thu chỉ được ghi nhận khi việc học{' '}
              <span className="text-emerald-600">thực sự hoàn tất</span>.
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-6">
            Kết nối giảng viên có chuyên môn thật với người học có nhu cầu thật.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
            <BrainCircuit className="w-6 h-6 text-blue-600 mr-2" />
            Ứng dụng AI & Hệ thống dữ liệu
          </h3>

          <ul className="space-y-6">
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <Target className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Theo dõi tiến độ học
                </h4>
                <p className="text-sm text-slate-500">
                  Real-time tracking & intervention
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <CheckCircle2 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Đánh giá chất lượng
                </h4>
                <p className="text-sm text-slate-500">
                  Automated quality assurance
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <div className="bg-emerald-100 p-2 rounded-lg mr-4">
                <BarChart3 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Cá nhân hóa trải nghiệm
                </h4>
                <p className="text-sm text-slate-500">
                  Adaptive learning paths
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>;
}
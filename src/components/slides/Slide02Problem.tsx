import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
import { AlertCircle, Users, BookOpen, TrendingDown } from 'lucide-react';
export function Slide02Problem() {
  return <SlideLayout title="The Problem" subtitle="Vấn đề của thị trường E-Learning hiện nay">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Khóa học</h3>
          <ul className="space-y-3">
            <li className="flex items-start text-slate-700">
              <TrendingDown className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Bán được nhiều nhưng tỷ lệ hoàn thành thấp</span>
            </li>
            <li className="flex items-start text-slate-700">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
              <span>Giá trị học tập khó đo lường</span>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
          <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Giảng viên</h3>
          <ul className="space-y-3">
            <li className="flex items-start text-slate-700">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0" />
              <span>Có chuyên môn thật nhưng thiếu nền tảng</span>
            </li>
            <li className="flex items-start text-slate-700">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0" />
              <span>Khó đóng gói & monetise tri thức bền vững</span>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6 text-slate-600">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Người học</h3>
          <ul className="space-y-3">
            <li className="flex items-start text-slate-700">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-2 flex-shrink-0" />
              <span>Mất niềm tin vào chất lượng khóa học online</span>
            </li>
            <li className="flex items-start text-slate-700">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2 mt-2 flex-shrink-0" />
              <span>Trả tiền trước nhưng không được bảo chứng đầu ra</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl text-center">
        <p className="text-lg font-medium">
          Khoảng trống lớn giữa{' '}
          <span className="text-red-400">"bán khóa học"</span> và{' '}
          <span className="text-emerald-400">
            "tạo ra giá trị học tập thực"
          </span>
        </p>
      </div>
    </SlideLayout>;
}
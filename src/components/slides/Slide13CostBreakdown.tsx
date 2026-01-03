import React from 'react';
import { SlideLayout } from '../ui/SlideLayout';
export function Slide13CostBreakdown() {
  const costs = [{
    category: 'Phát triển Nền tảng',
    amount: '$60,000',
    percent: '40%',
    color: 'bg-blue-600'
  }, {
    category: 'Marketing & Bán hàng',
    amount: '$35,000',
    percent: '23%',
    color: 'bg-emerald-500'
  }, {
    category: 'Thiết kế UX / UI',
    amount: '$20,000',
    percent: '13%',
    color: 'bg-purple-500'
  }, {
    category: 'Vận hành',
    amount: '$20,000',
    percent: '13%',
    color: 'bg-orange-500'
  }, {
    category: 'Hạ tầng',
    amount: '$15,000',
    percent: '10%',
    color: 'bg-slate-500'
  }];
  return <SlideLayout title="Chi tiết Ngân sách" subtitle="Phân bổ chi tiết">
      <div className="space-y-6">
        {costs.map((item, index) => <div key={index} className="relative">
            <div className="flex justify-between mb-2">
              <span className="font-bold text-slate-700">{item.category}</span>
              <span className="font-bold text-slate-900">{item.amount}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
              <div className={`h-full ${item.color}`} style={{
            width: item.percent
          }} />
            </div>
            <div className="text-xs text-slate-400 mt-1 text-right">
              {item.percent}
            </div>
          </div>)}
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
        <div className="p-4 bg-slate-50 rounded-xl">
          <strong className="block text-slate-900 mb-1">Phát triển</strong>
          Kiến trúc backend, tích hợp AI, Logic xây dựng khóa học.
        </div>
        <div className="p-4 bg-slate-50 rounded-xl">
          <strong className="block text-slate-900 mb-1">Marketing</strong>
          Go-to-market 6-9 tháng, Paid ads test, Lead generation.
        </div>
        <div className="p-4 bg-slate-50 rounded-xl">
          <strong className="block text-slate-900 mb-1">Thiết kế</strong>
          User flow đa vai trò, Dashboard, Design system.
        </div>
      </div>
    </SlideLayout>;
}
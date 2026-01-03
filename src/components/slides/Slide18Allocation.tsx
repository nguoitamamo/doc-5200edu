import { SlideLayout } from '../ui/SlideLayout';
export function Slide18Allocation() {
  const data = [{
    category: 'Phát triển Cốt lõi',
    amount: '$60,000',
    note: 'Backend, AI, Logic'
  }, {
    category: 'Marketing & Bán hàng',
    amount: '$35,000',
    note: 'GTM, Lead Gen'
  }, {
    category: 'Thiết kế UX / UI',
    amount: '$20,000',
    note: 'Research, Flows'
  }, {
    category: 'Vận hành',
    amount: '$20,000',
    note: 'Team, Legal, Tools'
  }, {
    category: 'Hạ tầng',
    amount: '$15,000',
    note: 'Cloud, API, Security'
  }];
  return <SlideLayout title="Phân bổ ngân sách" subtitle="Chi tiết sử dụng vốn">
      {/* Desktop: Table view */}
      <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                Hạng mục
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                Phân bổ
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                Tập trung
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {data.map((item, idx) => <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">
                  {item.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-mono">
                  {item.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {item.note}
                </td>
              </tr>)}
            <tr className="bg-blue-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900">
                TỔNG CỘNG
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-900 font-mono">
                $150,000
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800 italic">
                Mỗi đồng đều gắn với kết quả
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile: Card view */}
      <div className="md:hidden space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm font-bold text-slate-900 flex-1">
                {item.category}
              </h3>
              <span className="text-sm text-slate-600 font-mono font-semibold ml-4">
                {item.amount}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {item.note}
            </p>
          </div>
        ))}
        
        {/* Total card */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-4 shadow-sm">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-sm font-bold text-blue-900 flex-1">
              TỔNG CỘNG
            </h3>
            <span className="text-sm text-blue-900 font-mono font-bold ml-4">
              $150,000
            </span>
          </div>
          <p className="text-xs text-blue-800 italic mt-1">
            Mỗi đồng đều gắn với kết quả
          </p>
        </div>
      </div>
    </SlideLayout>;
}
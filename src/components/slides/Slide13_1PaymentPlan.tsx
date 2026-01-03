import { SlideLayout } from '../ui/SlideLayout';
import { Calendar, DollarSign, CheckCircle2 } from 'lucide-react';

export function Slide13_1PaymentPlan() {
  const phases = [
    {
      phase: 'Giai đoạn 1',
      title: 'Khởi động & Nền tảng',
      period: 'Tháng 1–2',
      amount: '$50,000',
      percent: '≈33%',
      color: 'blue',
      tasks: [
        'Phát triển nền tảng cốt lõi (backend, logic hệ thống, tích hợp AI bước đầu)',
        'Thiết kế UX/UI nền tảng (user flow chính, dashboard cơ bản)',
        'Thiết lập hạ tầng ban đầu'
      ]
    },
    {
      phase: 'Giai đoạn 2',
      title: 'Phát triển & Mở rộng',
      period: 'Tháng 3–4',
      amount: '$55,000',
      percent: '≈37%',
      color: 'emerald',
      tasks: [
        'Hoàn thiện các module chính của nền tảng',
        'Thiết kế UX/UI chi tiết, design system',
        'Triển khai marketing giai đoạn test (paid ads, lead generation)',
        'Vận hành thử nghiệm hệ thống'
      ]
    },
    {
      phase: 'Giai đoạn 3',
      title: 'Tối ưu & Go-to-Market',
      period: 'Tháng 5–6',
      amount: '$45,000',
      percent: '≈30%',
      color: 'purple',
      tasks: [
        'Tối ưu hiệu năng, bảo mật và hạ tầng',
        'Mở rộng marketing & bán hàng',
        'Hoàn thiện quy trình vận hành',
        'Chuẩn bị scale và bàn giao tổng thể'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-900',
        accent: 'bg-blue-600',
        light: 'text-blue-700'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-900',
        accent: 'bg-emerald-600',
        light: 'text-emerald-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-900',
        accent: 'bg-purple-600',
        light: 'text-purple-700'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <SlideLayout 
      title="Kế hoạch thanh toán theo giai đoạn" 
      subtitle="6 tháng - Thanh toán theo tiến độ triển khai từng hạng mục"
    >
      {/* Summary Section */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-slate-200">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-sm text-slate-600 font-medium">Tổng ngân sách</div>
              <div className="text-3xl font-black text-slate-900">$150,000</div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-sm text-slate-600 font-medium mb-1">Hình thức thanh toán</div>
            <div className="text-base text-slate-800 font-semibold">
              Theo tiến độ triển khai từng hạng mục
            </div>
          </div>
        </div>
      </div>

      {/* Phases - Desktop: Timeline view, Mobile: Stacked cards */}
      <div className="space-y-6">
        {/* Desktop Timeline */}
        <div className="hidden md:block space-y-6">
          {phases.map((phase, index) => {
            const colors = getColorClasses(phase.color);
            return (
              <div key={index} className={`relative ${colors.bg} ${colors.border} border-2 rounded-xl p-6`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-full ${colors.accent} flex items-center justify-center text-white font-bold text-sm`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold ${colors.text}`}>
                          {phase.phase} – {phase.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                          <Calendar className="w-4 h-4" />
                          <span>{phase.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-black ${colors.text}`}>
                      {phase.amount}
                    </div>
                    <div className={`text-sm font-semibold ${colors.light}`}>
                      {phase.percent}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-slate-700 mb-2">Nội dung thực hiện:</div>
                  <ul className="space-y-2">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className={`w-4 h-4 ${colors.light} mt-0.5 flex-shrink-0`} />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Card view */}
        <div className="md:hidden space-y-4">
          {phases.map((phase, index) => {
            const colors = getColorClasses(phase.color);
            return (
              <div key={index} className={`${colors.bg} ${colors.border} border-2 rounded-xl p-4`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-8 h-8 rounded-full ${colors.accent} flex items-center justify-center text-white font-bold text-xs`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className={`text-base font-bold ${colors.text}`}>
                          {phase.phase}
                        </h3>
                        <div className="text-sm font-semibold text-slate-700">
                          {phase.title}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 ml-10">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{phase.period}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-black ${colors.text}`}>
                      {phase.amount}
                    </div>
                    <div className={`text-xs font-semibold ${colors.light}`}>
                      {phase.percent}
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs font-semibold text-slate-700 mb-2">Nội dung thực hiện:</div>
                  <ul className="space-y-1.5">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${colors.light} mt-0.5 flex-shrink-0`} />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideLayout>
  );
}


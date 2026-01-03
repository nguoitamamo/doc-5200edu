import { BookOpen, Layers, Palette, Code2, FileText, Megaphone, Users, Wallet } from "lucide-react";

type DocItem = {
  id: string;
  label: string;
  icon: React.ElementType;
};

const DOC_ITEMS: DocItem[] = [
  { id: "intro", label: "Giới thiệu 5200Edu", icon: BookOpen },
  { id: "platform", label: "Mô hình Two-Sided Platform", icon: Layers },
  { id: "uxui", label: "Development - UX/UI Design", icon: Palette },
  { id: "code", label: "Development - Viết Code", icon: Code2 },
  { id: "policy", label: "Development - Chính sách", icon: FileText },
  { id: "marketing", label: "Development - Marketing", icon: Megaphone },
  { id: "hr", label: "Kế hoạch nhân sự", icon: Users },
  { id: "cost", label: "Kế hoạch chi phí", icon: Wallet },
];

interface Props {
  activeId: string;
  onChange: (id: string) => void;
}

export default function Footer({ activeId, onChange }: Props) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900 mb-4">
        Nội dung tài liệu
      </h3>

      <div className="flex flex-wrap gap-3">
        {DOC_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg border
                text-sm font-medium transition
                ${
                  isActive
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

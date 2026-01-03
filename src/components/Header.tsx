
interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
}

export function Header({ currentSlide, totalSlides }: HeaderProps) {
  // Hardcoded logo URL - replace with actual logo URL later
  const logoUrl = 'https://5200ai.com/logo/Logo.svg';

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href={logoUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
              <img 
                src={logoUrl} 
                alt="5200Edu Logo" 
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  // Fallback to a simple icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>';
                  }
                }}
              />
            </div>
          </a>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-slate-800 uppercase tracking-tight">
              5200Edu
            </h1>
            <p className="text-xs text-slate-500 font-normal">
              Project Documentation
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="px-4 py-1.5 rounded-lg bg-blue-50 text-slate-700 font-medium text-sm">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>
      </div>
    </header>
  );
}


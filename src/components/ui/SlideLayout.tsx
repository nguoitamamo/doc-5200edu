import React from 'react';
import { motion } from 'framer-motion';
interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}
export function SlideLayout({
  children,
  title,
  subtitle,
  className = ''
}: SlideLayoutProps) {
  return <div className={`w-full max-w-6xl mx-auto px-6 py-12 md:px-12 md:py-16 flex flex-col justify-center min-h-[80vh] ${className}`}>
      {(title || subtitle) && <div className="mb-12">
          {title && <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              {title}
            </h2>}
          {subtitle && <p className="text-xl md:text-2xl text-slate-500 font-light">
              {subtitle}
            </p>}
          <div className="h-1 w-24 bg-blue-600 mt-6 rounded-full" />
        </div>}
      <div className="flex-1">{children}</div>
    </div>;
}
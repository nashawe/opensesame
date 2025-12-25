import React from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'brand';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const variants = {
    default: "bg-slate-100 text-slate-800",
    outline: "border border-slate-200 text-slate-600",
    brand: "bg-brand-100 text-brand-900 border border-brand-200"
  };

  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

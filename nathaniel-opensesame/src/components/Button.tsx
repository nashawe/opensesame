import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';
export const Button = ({ className, variant = 'primary', size = 'md', href, children, ...props }: any) => {
  const styles = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
    variant === 'primary' ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm' : 'border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-900',
    size === 'sm' ? 'h-9 px-4 text-sm' : 'h-11 px-6 text-base',
    className
  );
  return href ? <Link to={href} className={styles}>{children}</Link> : <button className={styles} {...props}>{children}</button>;
};

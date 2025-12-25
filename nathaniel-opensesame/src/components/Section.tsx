import React from 'react';
import { cn } from '@/lib/cn';
export const Section = ({ children, className, id, background = 'white' }: any) => (
  <section id={id} className={cn("py-20 md:py-32 scroll-mt-16", background === 'gray' ? "bg-slate-50" : "bg-white", className)}>
    {children}
  </section>
);

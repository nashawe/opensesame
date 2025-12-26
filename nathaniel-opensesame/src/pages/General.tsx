import { useEffect } from 'react';
import { Hero } from '@/sections/general/Hero';
import { Journey } from '@/sections/general/Journey';
import { Strengths } from '@/sections/general/Strengths';
import { Contact } from '@/sections/general/Contact';
import { AIDemo } from '@/sections/AIDemo';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const General = () => {
  useEffect(() => { document.title = "Nathaniel Shawe | Systems Engineer"; }, []);
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Journey />
        <Strengths />
        <div id="projects" className="py-12 bg-slate-50">
          <div className="text-center mb-[-60px]">
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest">Featured Project</h2>
          </div>
          <AIDemo />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

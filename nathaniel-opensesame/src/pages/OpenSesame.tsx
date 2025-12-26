import { useEffect } from 'react';
import { Hero } from '@/sections/opensesame/Hero';
import { Journey } from '@/sections/opensesame/Journey';
import { Strengths } from '@/sections/opensesame/Strengths';
import { Contact } from '@/sections/opensesame/Contact';
import { AIDemo } from '@/sections/AIDemo';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const OpenSesame = () => {
  useEffect(() => { document.title = "Nathaniel Shawe | OpenSesame Applicant"; }, []);
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Journey />
        <Strengths />
        <AIDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

import { useEffect } from 'react';
import { Hero } from '@/sections/Hero';
import { Journey } from '@/sections/Journey';
import { Strengths } from '@/sections/Strengths';
import { AIDemo } from '@/sections/AIDemo';
import { Contact } from '@/sections/Contact';

export const Home = () => {
  useEffect(() => {
    // Set dynamic title
    document.title = "Nathaniel Shawe | OpenSesame Applicant";
  }, []);

  return (
    <main>
      <Hero />
      <Journey />
      <Strengths />
      <AIDemo />
      <Contact />
    </main>
  );
};

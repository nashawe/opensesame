import { Mail, Linkedin, Github } from 'lucide-react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export const Contact = () => (
  <Section id="contact" className="py-24 md:py-32 bg-white">
    <Container>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Let’s Build Something.</h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">I’m always looking for engineering challenges that require system-level thinking.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="mailto:nathaniel@example.com" size="lg" className="gap-2"><Mail className="w-4 h-4" /> Email Me</Button>
          <Button href="https://linkedin.com/in/nathanielshawe" variant="outline" size="lg" target="_blank"><Linkedin className="w-5 h-5 text-[#0077b5]" /> LinkedIn</Button>
          <Button href="https://github.com/nathanielshawe" variant="outline" size="lg" target="_blank"><Github className="w-5 h-5 text-slate-900" /> GitHub</Button>
        </div>
      </div>
    </Container>
  </Section>
);

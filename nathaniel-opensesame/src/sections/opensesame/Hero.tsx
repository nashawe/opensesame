import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Layers } from 'lucide-react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

export const Hero = () => {
  return (
    <Section id="intro" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-50 rounded-full blur-3xl opacity-50 -z-10" />
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900">
                Building Systems <br className="hidden lg:block" />
                <span className="text-brand-600">That Learn.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                I’m a CS undergrad at UW–Madison. I build full-stack platforms and simulation engines. 
                Now, I want to use those skills to help OpenSesame democratize workforce training.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="brand">Built a Neural Net from Scratch</Badge>
              <Badge variant="outline">FastAPI + React</Badge>
              <Badge variant="outline">Event Systems (1k+ events/min)</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button href="/opensesame#ai-demo" size="lg" className="group">
                Try the AI Demo <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="/opensesame#journey" variant="outline" size="lg">See My Work</Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative hidden md:block">
            <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-auto text-xs font-mono text-slate-400">ship_list.yaml</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-brand-600" /> How I Work
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start p-2 rounded-lg hover:bg-slate-50"><Cpu className="w-5 h-5 text-slate-400 mt-1" /><div><p className="font-semibold text-slate-900 text-sm">Predictable State</p><p className="text-sm text-slate-500">I like systems that are easy to debug.</p></div></li>
                <li className="flex gap-4 items-start p-2 rounded-lg hover:bg-slate-50"><Layers className="w-5 h-5 text-slate-400 mt-1" /><div><p className="font-semibold text-slate-900 text-sm">Interactive UX</p><p className="text-sm text-slate-500">Tools should be fun to use.</p></div></li>
                <li className="flex gap-4 items-start p-2 rounded-lg hover:bg-slate-50"><Terminal className="w-5 h-5 text-slate-400 mt-1" /><div><p className="font-semibold text-slate-900 text-sm">Clear Docs</p><p className="text-sm text-slate-500">I write code that explains itself.</p></div></li>
              </ul>
            </div>
            <div className="absolute inset-0 bg-slate-900 rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-5" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

import { Cpu, Layout, BrainCircuit, BookText, Wrench, Zap } from 'lucide-react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';

const STRENGTHS = [
  { label: "System Design", icon: <Cpu className="w-6 h-6 text-brand-600" />, evidence: "Min-heap schedulers & Event buses.", impact: "Handling complexity without breaking." },
  { label: "Full-Stack Dev", icon: <Layout className="w-6 h-6 text-violet-600" />, evidence: "React, TypeScript, FastAPI, Python.", impact: "Vertical feature ownership." },
  { label: "ML Engineering", icon: <BrainCircuit className="w-6 h-6 text-emerald-600" />, evidence: "Custom NN engines & Data pipelines.", impact: "Engineering rigor applied to AI." },
  { label: "Documentation", icon: <BookText className="w-6 h-6 text-amber-600" />, evidence: "Clear technical writing & API docs.", impact: "Reducing knowledge silos." },
  { label: "Automation", icon: <Wrench className="w-6 h-6 text-slate-600" />, evidence: "CI/CD pipelines & Scripting.", impact: "Eliminating manual toil." },
  { label: "Rapid Iteration", icon: <Zap className="w-6 h-6 text-rose-600" />, evidence: "Agile workflows & Fast shipping.", impact: "Learning through shipping." }
];

export const Strengths = () => (
  <Section id="strengths" className="bg-white">
    <Container>
      <div className="max-w-3xl mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-6">Core Competencies</h2><p className="text-lg text-slate-600 leading-relaxed">Technical skills mapped to engineering value.</p></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {STRENGTHS.map((item, index) => (
          <div key={index} className="flex flex-col h-full p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:border-brand-200 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6"><div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">{item.icon}</div><h3 className="font-bold text-slate-900">{item.label}</h3></div>
            <div className="flex-grow space-y-4"><div><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Evidence</p><p className="text-sm text-slate-700 font-medium">{item.evidence}</p></div><div><p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Value</p><p className="text-sm text-slate-600">{item.impact}</p></div></div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

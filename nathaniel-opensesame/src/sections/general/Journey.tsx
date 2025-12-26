import { CheckCircle2, ArrowRight, GitCommit, Database, Brain } from 'lucide-react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Badge } from '@/components/Badge';
import { cn } from '@/lib/cn';

const TIMELINE = [
  { title: "NNLearner", subtitle: "Machine Learning Engineering", icon: <Brain className="w-5 h-5" />, description: "Built a custom neural network engine using only NumPy to understand the math of gradient descent.", learned: "Deep Learning Fundamentals", impact: "Building AI from first principles." },
  { title: "Full-Stack Development", subtitle: "Modern Web Stack", icon: <Database className="w-5 h-5" />, description: "Building scalable web applications using React, TypeScript, and FastAPI.", learned: "System Architecture", impact: "Shipping production-ready code." },
  { title: "OmniSec", subtitle: "Complex Systems", icon: <GitCommit className="w-5 h-5" />, description: "Developing an event-driven cyber conflict simulator handling high-throughput event queues.", learned: "Algorithmic Efficiency", impact: "Managing complexity at scale." },
];

export const Journey = () => (
  <Section id="journey" background="gray">
    <Container>
      <div className="max-w-3xl mx-auto mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-6">Experience & Projects</h2><p className="text-lg text-slate-600 leading-relaxed">My journey in computer science has been defined by building complex systems from the ground up.</p></div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-8 top-4 bottom-4 w-px bg-slate-200 hidden md:block" />
        <div className="space-y-8 md:space-y-12">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
              <div className="flex items-center justify-center w-16 h-16 rounded-full shrink-0 border-4 z-10 relative bg-white border-slate-100 text-slate-500 group-hover:border-brand-100 group-hover:text-brand-600 transition-colors">{item.icon}</div>
              <div className="flex-1 rounded-2xl p-6 md:p-8 border shadow-sm bg-white border-slate-200 hover:border-brand-200 hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4"><div><h3 className="text-xl font-bold text-slate-900">{item.title}</h3><p className="text-sm font-medium text-slate-500">{item.subtitle}</p></div></div>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100"><div><strong className="block text-slate-900 mb-1">Skill:</strong><span className="text-slate-600">{item.learned}</span></div><div><strong className="block text-slate-900 mb-1">Focus:</strong><span className="text-slate-600">{item.impact}</span></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

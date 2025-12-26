import { CheckCircle2, ArrowRight, GitCommit, Database, Brain, BookOpen } from 'lucide-react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Badge } from '@/components/Badge';
import { cn } from '@/lib/cn';

const TIMELINE = [
  { title: "NNLearner", subtitle: "Understanding AI from the math up", icon: <Brain className="w-5 h-5" />, description: "I built a neural network library from scratch (no PyTorch) to really understand how gradient descent works.", learned: "The math behind the magic.", impact: "I can debug models because I know how they break." },
  { title: "Full-Stack Apps", subtitle: "FastAPI + React", icon: <Database className="w-5 h-5" />, description: "I realized the engine didn't matter if no one could use it. I built a full web UI to visualize the training data.", learned: "State management and API design.", impact: "I ship tools that are actually usable." },
  { title: "OmniSec Simulator", subtitle: "Event-Driven Architecture", icon: <GitCommit className="w-5 h-5" />, description: "Currently building a cyber conflict simulator that handles 1,000+ events per minute using a Min-Heap scheduler.", learned: "Data structures and performance optimization.", impact: "I can handle complex, asynchronous logic." },
  { title: "OpenSesame", subtitle: "Summer 2025 Goal", icon: <CheckCircle2 className="w-5 h-5 text-brand-600" />, description: "Combining my systems engineering skills with my interest in how people learn.", learned: "Applying AI responsibly to workforce training.", impact: "Building measurable, human-centric learning tools.", highlight: true }
];

export const Journey = () => (
  <Section id="journey" background="gray">
    <Container>
      <div className="max-w-3xl mx-auto mb-16"><h2 className="text-3xl md:text-4xl font-bold mb-6">My Learning Stack</h2><p className="text-lg text-slate-600 leading-relaxed">I learn by building. Here is what I've built so far and where I want to go next.</p></div>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-8 top-4 bottom-4 w-px bg-slate-200 hidden md:block" />
        <div className="space-y-8 md:space-y-12">
          {TIMELINE.map((item, index) => (
            <div key={index} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
              <div className={cn("flex items-center justify-center w-16 h-16 rounded-full shrink-0 border-4 z-10 relative bg-white transition-colors", item.highlight ? "border-brand-100 text-brand-600 shadow-md ring-4 ring-brand-50" : "border-slate-100 text-slate-500 group-hover:border-brand-100 group-hover:text-brand-600")}>{item.icon}</div>
              <div className={cn("flex-1 rounded-2xl p-6 md:p-8 border shadow-sm transition-all", item.highlight ? "bg-white border-brand-200 shadow-brand-100/50" : "bg-white border-slate-200 hover:border-brand-200 hover:shadow-md")}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4"><div><h3 className="text-xl font-bold text-slate-900">{item.title}</h3><p className="text-sm font-medium text-slate-500">{item.subtitle}</p></div>{item.highlight && <Badge variant="brand">Target</Badge>}</div>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100"><div><strong className="block text-slate-900 mb-1">Takeaway:</strong><span className="text-slate-600">{item.learned}</span></div><div><strong className={cn("block mb-1", item.highlight ? "text-brand-700" : "text-slate-900")}>{item.highlight ? "My Mission:" : "Relevance:"}</strong><span className="text-slate-600">{item.impact}</span></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

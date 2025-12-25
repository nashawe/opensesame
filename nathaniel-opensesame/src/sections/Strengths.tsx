import {
  Cpu,
  Layout,
  BrainCircuit,
  BookText,
  Wrench,
  Zap,
  Target,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";

const STRENGTHS = [
  {
    label: "System Design",
    icon: <Cpu className="w-6 h-6 text-brand-600" />,
    evidence: "Designed the event scheduler for OmniSec.",
    impact: "I build systems that handle complexity without breaking.",
    deliverable: "Optimizing backend job queues.",
  },
  {
    label: "Full-Stack Dev",
    icon: <Layout className="w-6 h-6 text-violet-600" />,
    evidence: "Built the NNLearner dashboard from scratch.",
    impact: "I can own a feature from the database to the UI.",
    deliverable: "Building internal admin dashboards.",
  },
  {
    label: "Understanding AI",
    icon: <BrainCircuit className="w-6 h-6 text-emerald-600" />,
    evidence: "Wrote my own neural net engine to learn the math.",
    impact: "I treat AI like engineering, not magic.",
    deliverable: "Auditing recommendation latency.",
  },
  {
    label: "Documentation",
    icon: <BookText className="w-6 h-6 text-amber-600" />,
    evidence: "I treat docs like a product feature.",
    impact: "I help the team move faster by explaining my code.",
    deliverable: "Writing API integration guides.",
  },
  {
    label: "Automation",
    icon: <Wrench className="w-6 h-6 text-slate-600" />,
    evidence: "Heavy user of Git actions and CI/CD.",
    impact: "I hate repetitive tasks. I script solutions.",
    deliverable: "Automating accessibility checks.",
  },
  {
    label: "Rapid Iteration",
    icon: <Zap className="w-6 h-6 text-rose-600" />,
    evidence: "Constantly refactoring based on feedback.",
    impact: "I ship small and fast to learn what works.",
    deliverable: "Shipping MVPs in < 2 weeks.",
  },
];

export const Strengths = () => {
  return (
    <Section id="strengths" className="bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            From Code to Impact
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I don't just write code; I try to solve problems. Here is how my
            skills map to what OpenSesame needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {STRENGTHS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:border-brand-200 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900">{item.label}</h3>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Evidence
                  </p>
                  <p className="text-sm text-slate-700 font-medium">
                    {item.evidence}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Impact
                  </p>
                  <p className="text-sm text-slate-600">{item.impact}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-200/60">
                <div className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-brand-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-brand-600 block mb-0.5">
                      I could help with:
                    </span>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

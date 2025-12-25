import { useEffect } from "react";
import {
  ArrowLeft,
  Database,
  Ampersands,
  BrainCircuit,
  User,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

export const Demo = () => {
  useEffect(() => {
    document.title = "Technical Deep Dive | Nathaniel Shawe";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <Container>
        {/* Navigation */}
        <div className="mb-8">
          <Button
            variant="ghost"
            href="/#ai-demo"
            className="pl-0 gap-2 hover:bg-transparent hover:text-brand-600"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Project
          </Button>
        </div>

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <Badge variant="brand" className="mb-4">
            System Architecture
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Under the Hood:{" "}
            <span className="text-brand-600">Adaptive Learning Engine</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            The interactive demo on the home page is a deterministic prototype.
            Here is how I would architect the real production system to solve
            the "one-size-fits-none" problem in workplace learning.
          </p>
        </div>

        {/* The Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              The Problem
            </h2>
            <p className="text-slate-600 mb-4">
              Corporate training is usually static. A Senior Engineer and a
              Junior Engineer get assigned the same 2-hour "Security Basics"
              video.
            </p>
            <p className="text-slate-600">
              The Senior is bored (waste of time), and the Junior is overwhelmed
              (lack of context). Completion rates drop, and actual learning
              outcomes are unmeasurable.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              The Solution
            </h2>
            <ul className="space-y-3">
              {[
                "Context-Awareness: Ingest user role, level, and past history.",
                "Format Adaptation: Offer 'Projects' for doers and 'Reading' for skimmers.",
                "Dynamic Gaps: Only assign content for skills the user actually lacks.",
                "Living Catalog: Automatically tag new content with embedding vectors.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600">
                  <span className="text-brand-600 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Architecture Diagram */}
        <Section
          background="white"
          className="rounded-3xl border border-slate-200 py-12 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Data Flow Architecture
            </h2>
            <p className="text-slate-500">
              How data moves from User to Recommendation
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 px-4">
            {/* Block 1 */}
            <ArchBlock
              icon={<User className="w-6 h-6 text-blue-600" />}
              title="User Context"
              desc="Role, Tenure, Goal"
            />
            <Arrow className="rotate-90 lg:rotate-0" />

            {/* Block 2 */}
            <ArchBlock
              icon={<Database className="w-6 h-6 text-purple-600" />}
              title="Vector DB"
              desc="Skill Taxonomy + Content Embeddings"
            />
            <Arrow className="rotate-90 lg:rotate-0" />

            {/* Block 3 */}
            <ArchBlock
              icon={<BrainCircuit className="w-6 h-6 text-emerald-600" />}
              title="Recommender"
              desc="Cosine Similarity & Rules Engine"
              highlight
            />
            <Arrow className="rotate-90 lg:rotate-0" />

            {/* Block 4 */}
            <ArchBlock
              icon={<BarChart3 className="w-6 h-6 text-amber-600" />}
              title="Feedback Loop"
              desc="Completion & Quiz Data"
            />
          </div>
        </Section>

        {/* Code Shape & Safety */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* JSON Structure */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Ampersands className="w-6 h-6 text-blue-600" /> Type Safety
            </h3>
            <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto shadow-xl">
              <pre className="text-sm font-mono leading-relaxed">
                <span className="text-purple-400">interface</span>{" "}
                <span className="text-yellow-200">GeneratedPlan</span> {"{"}
                {"\n"}{" "}
                <span className="text-slate-400">
                  // The "Why" matters as much as the "What"
                </span>
                {"\n"} <span className="text-blue-300">aiReasoning</span>:{" "}
                <span className="text-purple-400">string</span>[];
                {"\n"} <span className="text-blue-300">limitations</span>:{" "}
                <span className="text-purple-400">string</span>[];
                {"\n"}
                {"\n"}{" "}
                <span className="text-slate-400">
                  // Typed output, not random text
                </span>
                {"\n"} <span className="text-blue-300">path</span>: {"{"}
                {"\n"} <span className="text-blue-300">id</span>:{" "}
                <span className="text-purple-400">string</span>;{"\n"}{" "}
                <span className="text-blue-300">type</span>:{" "}
                <span className="text-green-300">'Course'</span> |{" "}
                <span className="text-green-300">'Project'</span>;{"\n"}{" "}
                <span className="text-blue-300">confidence</span>:{" "}
                <span className="text-purple-400">number</span>;{"\n"} {"}"}[];
                {"\n"}
                {"}"}
              </pre>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              By enforcing a strict schema, we prevent the AI from inventing
              non-existent courses or hallucinating features.
            </p>
          </div>

          {/* Safety & Metrics */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Safety & Ethics
              </h3>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg border border-slate-200">
                  <strong className="block text-slate-900 text-sm mb-1">
                    Bias Mitigation
                  </strong>
                  <span className="text-slate-600 text-sm">
                    Regular audits to ensure role recommendations don't
                    stereotype based on implicit demographic data in resumes.
                  </span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-slate-200">
                  <strong className="block text-slate-900 text-sm mb-1">
                    Human-in-the-Loop
                  </strong>
                  <span className="text-slate-600 text-sm">
                    AI suggests the draft; a Manager or L&D Admin must approve
                    the path before assignment.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-brand-600" />
                Evaluation Metrics
              </h3>
              <p className="text-slate-600 mb-4">
                We don't just optimize for "clicks". We optimize for:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Time-to-Competency</Badge>
                <Badge variant="outline">Retention Rate</Badge>
                <Badge variant="outline">Manager Satisfaction</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-slate-200 pt-12 flex justify-between items-center">
          <Button
            variant="ghost"
            href="/"
            className="pl-0 hover:bg-transparent"
          >
            Home
          </Button>
          <Button href="/#contact" className="gap-2">
            Let's Discuss <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Container>
    </main>
  );
};

// --- Subcomponents ---

const ArchBlock = ({
  icon,
  title,
  desc,
  highlight,
}: {
  icon: any;
  title: string;
  desc: string;
  highlight?: boolean;
}) => (
  <div
    className={`
    flex flex-col items-center text-center p-6 rounded-xl border w-full lg:w-48
    ${
      highlight
        ? "bg-brand-50 border-brand-200 shadow-sm"
        : "bg-white border-slate-200"
    }
  `}
  >
    <div className="mb-3 p-2 bg-white rounded-full border border-slate-100 shadow-sm">
      {icon}
    </div>
    <h4 className="font-bold text-slate-900 text-sm mb-1">{title}</h4>
    <p className="text-xs text-slate-500 leading-tight">{desc}</p>
  </div>
);

const Arrow = ({ className }: { className?: string }) => (
  <div className={`text-slate-300 ${className}`}>
    <ArrowRight className="w-6 h-6" />
  </div>
);

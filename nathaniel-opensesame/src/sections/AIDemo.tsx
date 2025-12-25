import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Loader2, 
  Check, 
  Copy, 
  AlertCircle, 
  BookOpen, 
  Clock, 
  BarChart, 
  Info, 
  ArrowRight 
} from 'lucide-react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { generatePlan, type PlanInputs, type Role, type Level, type Goal, type GeneratedPlan } from '@/lib/aiDemo';
import { cn } from '@/lib/cn';

export const AIDemo = () => {
  const [inputs, setInputs] = useState<PlanInputs>({
    role: 'Customer Success Manager',
    level: 'New',
    goal: 'Performance',
    handsOn: true
  });
  
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setPlan(null); // Clear previous results
    
    try {
      const result = await generatePlan(inputs);
      setPlan(result);
      
      // Focus management for accessibility
      setTimeout(() => {
        resultsRef.current?.focus();
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="ai-demo" background="gray">
      <Container>
        <div className="flex flex-col items-center text-center mb-10">
          <Badge variant="brand" className="mb-4">Prototype Demo</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personalized Learning Generator
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mb-6">
            This prototype shows how we can use data to build better learning plans. 
            Select a role and goal below, and it will generate a custom path instantly—no hallucinations, just logic.
          </p>
          
          {/* Link to the Deep Dive Page */}
          <Button href="/demo" variant="outline" size="sm" className="gap-2">
            Read the Technical Deep Dive <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="space-y-6">
              
              <InputGroup label="Target Role">
                <select 
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  value={inputs.role}
                  onChange={(e) => setInputs({...inputs, role: e.target.value as Role})}
                >
                  <option>Customer Success Manager</option>
                  <option>Sales Enablement</option>
                  <option>Software Engineer</option>
                  <option>New Manager</option>
                </select>
              </InputGroup>

              <InputGroup label="Current Level">
                <select 
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  value={inputs.level}
                  onChange={(e) => setInputs({...inputs, level: e.target.value as Level})}
                >
                  <option>New</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </InputGroup>

              <InputGroup label="Primary Goal">
                <select 
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  value={inputs.goal}
                  onChange={(e) => setInputs({...inputs, goal: e.target.value as Goal})}
                >
                  <option>Performance</option>
                  <option>Promotion</option>
                  <option>Role Switch</option>
                </select>
              </InputGroup>

              <div className="flex items-center justify-between pt-2">
                <label className="text-sm font-semibold text-slate-700">Prefer Hands-on?</label>
                <button 
                  role="switch"
                  aria-checked={inputs.handsOn}
                  onClick={() => setInputs(p => ({...p, handsOn: !p.handsOn}))}
                  className={cn(
                    "w-11 h-6 bg-slate-200 rounded-full relative transition-colors focus:ring-2 focus:ring-brand-500 focus:outline-none",
                    inputs.handsOn && "bg-brand-600"
                  )}
                >
                  <span className={cn(
                    "block w-4 h-4 bg-white rounded-full absolute top-1 transition-transform",
                    inputs.handsOn ? "left-6" : "left-1"
                  )} />
                </button>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={loading} 
                className="w-full mt-4" 
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Path
                  </>
                )}
              </Button>

            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              {!plan && !loading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl p-8 bg-slate-50/50"
                >
                  <Sparkles className="w-12 h-12 mb-4 text-slate-300" />
                  <p>Select parameters and click generate.</p>
                </motion.div>
              )}

              {loading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center space-y-4"
                >
                  <Loader2 className="w-8 h-8 text-brand-500 animate-spin" />
                  <p className="text-slate-500 font-medium">Finding the best content...</p>
                </motion.div>
              )}

              {plan && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                  aria-live="polite"
                >
                  {/* Results Header */}
                  <div 
                    ref={resultsRef} 
                    tabIndex={-1} 
                    className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 outline-none"
                  >
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          Recommended Path: {plan.role}
                        </h3>
                        <p className="text-slate-500 text-sm mt-1">
                          Goal: <span className="font-medium text-brand-600">{inputs.goal}</span> • Level: {inputs.level}
                        </p>
                      </div>
                      <CopyButton text={`Plan for ${plan.role}: ${plan.gaps.join(', ')}`} />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {plan.gaps.map(gap => (
                        <Badge key={gap} variant="brand">
                          {gap}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Learning Items */}
                  <div className="space-y-4">
                    {plan.path.map((item, idx) => (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-xl p-5 border border-slate-200 hover:border-brand-200 hover:shadow-md transition-all group"
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex gap-4">
                            <div className="mt-1 p-2 bg-slate-50 rounded-lg group-hover:bg-brand-50 transition-colors">
                              {item.type === 'Course' ? <BookOpen className="w-5 h-5 text-slate-500 group-hover:text-brand-600" /> : 
                               <BarChart className="w-5 h-5 text-slate-500 group-hover:text-brand-600" />}
                            </div>
                            <div>
                              <h4 className="font-bold text-slate-900">{item.title}</h4>
                              <p className="text-sm text-slate-600 mt-1">{item.reason}</p>
                              
                              <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {item.duration}
                                </span>
                                <span className="flex items-center gap-1 font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                  {item.confidence}% Match
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Context & Safeguards */}
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                      <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <Sparkles className="w-3 h-3" /> Why this works
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-blue-800/80">
                        {plan.aiReasoning.map((r, i) => <li key={i}>{r}</li>)}
                      </ul>
                    </div>
                    <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                      <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <AlertCircle className="w-3 h-3" /> Things to watch
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-amber-800/80">
                        {plan.limitations.map((l, i) => <li key={i}>{l}</li>)}
                      </ul>
                    </div>
                  </div>

                  {/* Production Context Accordion */}
                  <details className="group border border-slate-200 rounded-xl bg-slate-50 open:bg-white transition-colors">
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-700 hover:text-slate-900">
                      <span className="flex items-center gap-2">
                        <Info className="w-4 h-4" /> Technical Details (The "How")
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100 mt-2">
                      <p>
                        This would use Vector Embeddings to match content to roles. 
                        Success would be measured by completion rates and manager feedback.
                      </p>
                    </div>
                  </details>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// --- Subcomponents ---

const InputGroup = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <label className="text-sm font-semibold text-slate-700">{label}</label>
    {children}
  </div>
);

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <button 
      onClick={handleCopy}
      className="text-xs font-medium flex items-center gap-1.5 text-slate-500 hover:text-brand-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200"
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? 'Copied' : 'Copy Summary'}
    </button>
  );
};

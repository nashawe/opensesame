import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Check, Copy, AlertCircle, BookOpen, Clock, BarChart, Info, ArrowRight, MousePointer2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Modal } from '@/components/Modal';
import { generatePlan, type PlanInputs, type Role, type Level, type Goal, type GeneratedPlan, type LearningItem } from '@/lib/aiDemo';
import { cn } from '@/lib/cn';

export const AIDemo = () => {
  const [inputs, setInputs] = useState<PlanInputs>({ role: 'Software Engineer', level: 'New', goal: 'Performance', handsOn: true });
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<GeneratedPlan | null>(null);
  const [selectedItem, setSelectedItem] = useState<LearningItem | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setPlan(null);
    try {
      const result = await generatePlan(inputs);
      setPlan(result);
      setTimeout(() => { resultsRef.current?.focus(); resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);
    } finally { setLoading(false); }
  };

  return (
    <Section id="ai-demo" background="gray">
      <Container>
        <div className="flex flex-col items-center text-center mb-10">
          <Badge variant="brand" className="mb-4">Live Tool Prototype</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Personalized Learning Generator</h2>
          <p className="text-lg text-slate-600 max-w-2xl mb-6">Explore custom learning paths. Click on any module below to see a detailed breakdown of what you'll learn.</p>
          <Button href="/demo" variant="outline" size="sm" className="gap-2">See Architecture <ArrowRight className="w-4 h-4" /></Button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-lg border border-slate-200 space-y-6">
            <InputGroup label="1. Target Role"><select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" value={inputs.role} onChange={(e) => setInputs({...inputs, role: e.target.value as Role})}><option>Software Engineer</option><option>New Manager</option><option>Customer Success Manager</option><option>Sales Enablement</option></select></InputGroup>
            <InputGroup label="2. Experience level?"><select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" value={inputs.level} onChange={(e) => setInputs({...inputs, level: e.target.value as Level})}><option>New</option><option>Intermediate</option><option>Advanced</option></select></InputGroup>
            <InputGroup label="3. Primary goal?"><select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" value={inputs.goal} onChange={(e) => setInputs({...inputs, goal: e.target.value as Goal})}><option>Performance</option><option>Promotion</option><option>Role Switch</option></select></InputGroup>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100"><label className="text-sm font-semibold text-slate-700">Prefer Hands-on Projects?</label><button role="switch" aria-checked={inputs.handsOn} onClick={() => setInputs(p => ({...p, handsOn: !p.handsOn}))} className={cn("w-11 h-6 bg-slate-200 rounded-full relative transition-colors focus:ring-2 focus:ring-brand-500 focus:outline-none", inputs.handsOn && "bg-brand-600")}><span className={cn("block w-4 h-4 bg-white rounded-full absolute top-1 transition-transform", inputs.handsOn ? "left-6" : "left-1")} /></button></div>
            <Button onClick={handleGenerate} disabled={loading} className="w-full h-12 text-lg shadow-md" variant="primary">{loading ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Building Path...</> : <><Sparkles className="w-5 h-5 mr-2" />Generate Custom Path</>}</Button>
          </div>

          <div className="lg:col-span-8 min-h-[550px]">
            <AnimatePresence mode="wait">
              {!plan && !loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl p-8 bg-white/50"><MousePointer2 className="w-12 h-12 mb-4 text-slate-300" /><p className="font-medium text-slate-500 text-center">Adjust your profile and click generate to build a personalized learning schedule.</p></motion.div>
              )}
              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col items-center justify-center space-y-4"><div className="relative"><Loader2 className="w-12 h-12 text-brand-500 animate-spin" /><Sparkles className="absolute top-0 right-0 w-4 h-4 text-brand-400 animate-pulse" /></div><p className="text-slate-600 font-semibold animate-pulse text-lg">Analyzing content catalog...</p></motion.div>
              )}
              {plan && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-6" aria-live="polite">
                  <div ref={resultsRef} tabIndex={-1} className="bg-white rounded-2xl p-6 shadow-md border border-brand-100 outline-none">
                    <div className="flex justify-between items-start gap-4 mb-4"><div><h3 className="text-xl font-bold text-slate-900">Custom Path for {plan.role}</h3><p className="text-slate-500 text-sm mt-1">Goal: <span className="text-brand-600 font-bold">{inputs.goal}</span></p></div><CopyButton text={`Learning Plan: ${plan.path.map(p => p.title).join(', ')}`} /></div>
                    <div className="flex flex-wrap gap-2"><span className="text-xs font-bold text-slate-400 uppercase tracking-widest block w-full mb-1">Identified Gaps:</span>{plan.gaps.map(gap => <Badge key={gap} variant="brand" className="px-3 py-1">{gap}</Badge>)}</div>
                  </div>

                  <div className="space-y-4">
                    {plan.path.map((item, idx) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="w-full text-left bg-white rounded-2xl p-5 border border-slate-200 hover:border-brand-300 hover:shadow-lg transition-all group relative overflow-hidden focus:ring-2 focus:ring-brand-500 outline-none"
                      >
                        <div className="flex gap-5">
                          <div className="mt-1 p-3 bg-slate-50 rounded-xl group-hover:bg-brand-50 transition-colors shrink-0">
                            {item.type === 'Project' ? <BarChart className="w-6 h-6 text-brand-600" /> : <BookOpen className="w-6 h-6 text-slate-500 group-hover:text-brand-600" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-bold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">{item.title}</h4>
                              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.reason}</p>
                            <div className="flex items-center gap-6 text-xs font-semibold text-slate-400">
                              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {item.duration}</span>
                              <span className="flex items-center gap-1.5 text-emerald-600"><Check className="w-3.5 h-3.5" /> {item.confidence}% Match</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100"><h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2 underline decoration-blue-200 decoration-2 underline-offset-4"><Sparkles className="w-4 h-4" /> The Logic</h4><ul className="space-y-2 text-blue-800">{plan.aiReasoning.map((r, i) => <li key={i} className="flex gap-2 leading-snug"><span className="text-blue-400 font-bold">•</span>{r}</li>)}</ul></div>
                    <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100"><h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2 underline decoration-amber-200 decoration-2 underline-offset-4"><AlertCircle className="w-4 h-4" /> Things to Watch</h4><ul className="space-y-2 text-amber-800">{plan.limitations.map((l, i) => <li key={i} className="flex gap-2 leading-snug"><span className="text-amber-400 font-bold">•</span>{l}</li>)}</ul></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Modal for Details */}
        <Modal 
          isOpen={!!selectedItem} 
          onClose={() => setSelectedItem(null)} 
          title={selectedItem?.title || ''}
        >
          {selectedItem && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Badge variant="brand">{selectedItem.type}</Badge>
                <span className="text-sm text-slate-500 flex items-center gap-1.5"><Clock className="w-4 h-4" /> {selectedItem.duration} Total Time</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Deep Dive</h4>
                <p className="text-slate-600 leading-relaxed">{selectedItem.longDescription}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Key Topics Covered</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedItem.keyTopics.map(topic => (
                    <div key={topic} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
              <Button onClick={() => setSelectedItem(null)} className="w-full mt-4">Close Preview</Button>
            </div>
          )}
        </Modal>
      </Container>
    </Section>
  );
};

const InputGroup = ({ label, children }: { label: string, children: React.ReactNode }) => (<div className="space-y-2"><label className="text-sm font-bold text-slate-700 ml-1">{label}</label>{children}</div>);
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return <button onClick={handleCopy} className="text-xs font-bold flex items-center gap-2 text-slate-400 hover:text-brand-600 transition-all px-3 py-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100">{copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}{copied ? 'Plan Copied!' : 'Copy Summary'}</button>;
};

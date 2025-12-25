// --- Types ---
export type Role = 'Customer Success Manager' | 'Sales Enablement' | 'Software Engineer' | 'New Manager';
export type Level = 'New' | 'Intermediate' | 'Advanced';
export type Goal = 'Performance' | 'Promotion' | 'Role Switch';

export interface LearningItem {
  id: string;
  title: string;
  type: 'Course' | 'Project' | 'Workshop' | 'Reading';
  duration: string;
  reason: string;
  confidence: number;
}

export interface GeneratedPlan {
  role: Role;
  gaps: string[];
  path: LearningItem[];
  aiReasoning: string[];
  limitations: string[];
}

export interface PlanInputs {
  role: Role;
  level: Level;
  goal: Goal;
  handsOn: boolean;
}

// --- Data ---
const ROLE_SKILLS: Record<Role, string[]> = {
  'Customer Success Manager': ['Client Empathy', 'Product Knowledge', 'Retention Strategy', 'QBR Management'],
  'Sales Enablement': ['Content Strategy', 'Sales Methodology', 'Stakeholder Mgmt', 'Data Analysis'],
  'Software Engineer': ['System Design', 'Clean Code', 'Testing', 'CI/CD Pipelines'],
  'New Manager': ['Delegation', 'Conflict Resolution', 'Performance Reviews', 'Team Culture']
};

const CONTENT_POOL: Record<Role, Record<Level, LearningItem[]>> = {
  'Customer Success Manager': {
    'New': [
      { id: 'csm-1', title: 'Foundations of Customer Success', type: 'Course', duration: '2h', reason: 'Learn the basics before talking to clients', confidence: 98 },
      { id: 'csm-2', title: 'Mock QBR Workshop', type: 'Workshop', duration: '1.5h', reason: 'Practice a real business review', confidence: 92 },
    ],
    'Intermediate': [
      { id: 'csm-3', title: 'Advanced Retention Tactics', type: 'Course', duration: '3h', reason: 'How to stop customers from leaving', confidence: 89 },
      { id: 'csm-4', title: 'Data-Driven Account Health', type: 'Project', duration: '4h', reason: 'Analyze why your accounts are at risk', confidence: 95 },
    ],
    'Advanced': [
      { id: 'csm-5', title: 'Strategic Account Leadership', type: 'Course', duration: '5h', reason: 'Managing the biggest clients', confidence: 91 },
      { id: 'csm-6', title: 'Mentoring Junior CSMs', type: 'Workshop', duration: '2h', reason: 'Teaching others what you know', confidence: 85 },
    ]
  },
  'Software Engineer': {
    'New': [
      { id: 'swe-1', title: 'Git & Version Control Mastery', type: 'Course', duration: '3h', reason: 'You can\'t code without Git', confidence: 99 },
      { id: 'swe-2', title: 'Code Review Etiquette', type: 'Reading', duration: '45m', reason: 'How to critique code nicely', confidence: 88 },
    ],
    'Intermediate': [
      { id: 'swe-3', title: 'Design Patterns in Production', type: 'Course', duration: '4h', reason: 'Writing code that scales', confidence: 94 },
      { id: 'swe-4', title: 'Refactoring Legacy Code', type: 'Project', duration: '6h', reason: 'Cleaning up old messes safely', confidence: 92 },
    ],
    'Advanced': [
      { id: 'swe-5', title: 'Distributed Systems Architecture', type: 'Course', duration: '8h', reason: 'Designing the whole system', confidence: 87 },
      { id: 'swe-6', title: 'Staff Engineer Leadership', type: 'Reading', duration: '2h', reason: 'Influencing technical decisions', confidence: 85 },
    ]
  },
  'Sales Enablement': {
    'New': [{ id: 'se-1', title: 'Sales Cycle 101', type: 'Course', duration: '2h', reason: 'Understanding how sales actually works', confidence: 95 }],
    'Intermediate': [{ id: 'se-2', title: 'Content Audit Strategy', type: 'Project', duration: '4h', reason: 'Fixing your messy content library', confidence: 90 }],
    'Advanced': [{ id: 'se-3', title: 'Revenue Operations Alignment', type: 'Workshop', duration: '3h', reason: 'Proving ROI to leadership', confidence: 88 }]
  },
  'New Manager': {
    'New': [{ id: 'nm-1', title: 'The First 90 Days', type: 'Reading', duration: '3h', reason: 'Stop coding, start leading', confidence: 97 }],
    'Intermediate': [{ id: 'nm-2', title: 'Having Difficult Conversations', type: 'Workshop', duration: '2h', reason: 'Giving feedback without panicking', confidence: 94 }],
    'Advanced': [{ id: 'nm-3', title: 'Building High-Performance Teams', type: 'Course', duration: '5h', reason: 'Hiring and scaling your team', confidence: 91 }]
  }
};

// --- Generator Function ---
export async function generatePlan(inputs: PlanInputs): Promise<GeneratedPlan> {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 800));

  const baseSkills = ROLE_SKILLS[inputs.role];
  let gaps: string[] = [];
  
  if (inputs.level === 'New') gaps = [baseSkills[0], baseSkills[1], 'Onboarding'];
  else if (inputs.level === 'Intermediate') gaps = [baseSkills[2], 'Process Improvement', 'Communication'];
  else gaps = [baseSkills[3], 'Strategy', 'Mentorship'];

  if (inputs.goal === 'Promotion') gaps.push('Leadership');
  if (inputs.goal === 'Role Switch') gaps.unshift('Transferable Skills');

  const rawContent = CONTENT_POOL[inputs.role][inputs.level] || CONTENT_POOL[inputs.role]['New'];
  
  const path = rawContent.map(item => ({
    ...item,
    type: inputs.handsOn && item.type === 'Course' ? 'Project' as const : item.type,
    duration: inputs.handsOn ? '1.5x duration (Interactive)' : item.duration,
    reason: inputs.goal === 'Performance' ? `${item.reason} (Fast Track)` : item.reason
  }));

  if (path.length < 3) {
    path.push({
      id: 'gen-1',
      title: inputs.handsOn ? 'Applied Capstone Project' : 'Advanced Certification',
      type: inputs.handsOn ? 'Project' : 'Course',
      duration: '4h',
      reason: 'Proving you actually learned it',
      confidence: 85
    });
  }

  return {
    role: inputs.role,
    gaps,
    path,
    aiReasoning: [
      `It looked at the requirements for a ${inputs.level} ${inputs.role}.`,
      `It swapped generic videos for ${inputs.handsOn ? 'hands-on projects' : 'guided courses'} because you asked for it.`,
    ],
    limitations: [
      "We need to make sure the data doesn't favor one demographic.",
      "A real manager should still review this plan before it's assigned."
    ]
  };
}

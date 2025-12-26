export type Role = 'Software Engineer' | 'New Manager' | 'Customer Success Manager' | 'Sales Enablement';
export type Level = 'New' | 'Intermediate' | 'Advanced';
export type Goal = 'Performance' | 'Promotion' | 'Role Switch';

export interface LearningItem {
  id: string;
  title: string;
  type: 'Course' | 'Project' | 'Workshop' | 'Reading';
  duration: string;
  reason: string;
  confidence: number;
  longDescription: string;
  keyTopics: string[];
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

const CONTENT_CATALOG: Record<Role, Record<Level, LearningItem[]>> = {
  'Software Engineer': {
    'New': [
      { 
        id: 'swe-n1', title: 'Clean Code & SOLID Principles', type: 'Course', duration: '4h', reason: 'Critical for team velocity.', confidence: 99,
        longDescription: 'Learn to write code that is easy to read and maintain. This course covers the core principles of software craftsmanship in a team environment.',
        keyTopics: ['Naming Conventions', 'Single Responsibility', 'Dependency Injection', 'Dry vs Wet Code']
      },
      { 
        id: 'swe-n2', title: 'Test-Driven Development (TDD)', type: 'Project', duration: '6h', reason: 'Practice writing robust tests.', confidence: 94,
        longDescription: 'Shift to a test-first mindset. This project guides you through the Red-Green-Refactor cycle while building a reliable API client.',
        keyTopics: ['Jest & Vitest', 'Mocking Dependencies', 'Edge Case Detection', 'Integration Testing']
      }
    ],
    'Intermediate': [
      { 
        id: 'swe-i1', title: 'Distributed Systems Architecture', type: 'Course', duration: '8h', reason: 'Scaling applications beyond a single server.', confidence: 92,
        longDescription: 'Explore the challenges of high-availability systems. We cover data consistency, load balancing, and microservice trade-offs.',
        keyTopics: ['CAP Theorem', 'Load Balancing', 'Message Queues', 'Database Sharding']
      },
      { 
        id: 'swe-i2', title: 'CI/CD Pipeline Optimization', type: 'Project', duration: '5h', reason: 'Speeding up automated deployments.', confidence: 95,
        longDescription: 'Build a production-ready pipeline that automates testing, security scanning, and multi-region deployment.',
        keyTopics: ['GitHub Actions', 'Docker Containerization', 'Blue/Green Deployment', 'Rollback Strategies']
      }
    ],
    'Advanced': [
      { 
        id: 'swe-a1', title: 'Staff Engineer Leadership', type: 'Workshop', duration: '4h', reason: 'Driving technical direction.', confidence: 85,
        longDescription: 'Learn to influence technical decisions across multiple teams and mentor senior developers effectively.',
        keyTopics: ['RFC Processes', 'Architecture Reviews', 'Technical Debt Strategy', 'Cross-team Alignment']
      },
      { 
        id: 'swe-a2', title: 'System Design for Global Scale', type: 'Course', duration: '12h', reason: 'Handling millions of concurrent users.', confidence: 93,
        longDescription: 'Deep dive into geo-distributed databases, global CDN caching, and high-concurrency event processing.',
        keyTopics: ['Anycast Routing', 'Consistency Models', 'Eventual Consistency', 'Multi-region Failover']
      }
    ]
  },
  'New Manager': {
    'New': [
      { 
        id: 'nm-n1', title: 'The Manager Transition', type: 'Course', duration: '3h', reason: 'Shifting from individual output to team enablement.', confidence: 97,
        longDescription: 'The biggest challenge for new managers is letting go of the keyboard. Learn situational leadership and delegation frameworks.',
        keyTopics: ['Delegation', 'Situational Leadership', 'One-on-One Frameworks', 'Active Listening']
      }
    ],
    'Intermediate': [
      { 
        id: 'nm-i1', title: 'Performance Management Lab', type: 'Workshop', duration: '3h', reason: 'Delivering difficult feedback effectively.', confidence: 91,
        longDescription: 'Learn to manage high and low performers. We practice delivering hard feedback while maintaining psychological safety.',
        keyTopics: ['Radical Candor', 'PIP Management', 'Career Pathing', 'Bias in Reviews']
      }
    ],
    'Advanced': [
      { 
        id: 'nm-a1', title: 'Scaling Team Culture', type: 'Course', duration: '6h', reason: 'Maintaining values during hyper-growth.', confidence: 88,
        longDescription: 'How to hire and retain talent when the team size doubles. Includes hiring rubric design and values-based interviewing.',
        keyTopics: ['Hiring Bars', 'Inclusive Culture', 'Retention Metrics', 'Org Structure Design']
      }
    ]
  },
  'Customer Success Manager': {
    'New': [
      { 
        id: 'csm-n1', title: 'Client Relationship Foundations', type: 'Course', duration: '3h', reason: 'Establishing trust with new accounts.', confidence: 96,
        longDescription: 'Master the first 90 days of the customer lifecycle. Learn to identify key stakeholders and map their success criteria.',
        keyTopics: ['Active Listening', 'Success Mapping', 'Onboarding Frameworks', 'Email Etiquette']
      }
    ],
    'Intermediate': [
      { 
        id: 'csm-i1', title: 'Data-Driven Retention', type: 'Project', duration: '6h', reason: 'Using usage metrics to prevent churn.', confidence: 93,
        longDescription: 'Identify account health signals before they become problems. Learn to build "at-risk" dashboards using product data.',
        keyTopics: ['Usage Analytics', 'Churn Indicators', 'Renewal Forecasting', 'Expansion Strategy']
      }
    ],
    'Advanced': [
      { 
        id: 'csm-a1', title: 'Strategic Partnership Strategy', type: 'Workshop', duration: '5h', reason: 'Managing enterprise-level stakeholders.', confidence: 90,
        longDescription: 'Transition from a vendor to a strategic partner. Learn to conduct Executive Business Reviews (EBRs) that demonstrate ROI.',
        keyTopics: ['EBR Delivery', 'ROI Quantification', 'Political Mapping', 'Contract Negotiation']
      }
    ]
  },
  'Sales Enablement': {
    'New': [
      { 
        id: 'se-n1', title: 'Sales Cycle Fundamentals', type: 'Course', duration: '2h', reason: 'Aligning content to the sales journey.', confidence: 98,
        longDescription: 'Understand the standard sales stages from lead to close. Map your existing content library to specific buyer pain points.',
        keyTopics: ['Sales Funnel', 'Buyer Personas', 'Sales Methodology', 'Content Mapping']
      }
    ],
    'Intermediate': [
      { 
        id: 'se-i1', title: 'Competitive Intelligence Mapping', type: 'Project', duration: '4h', reason: 'Enabling reps to win against rivals.', confidence: 92,
        longDescription: 'Build "battlecards" that give sales reps the talk tracks they need to handle competitive objections in real-time.',
        keyTopics: ['Battlecard Design', 'Market Analysis', 'Objection Handling', 'Win/Loss Interviews']
      }
    ],
    'Advanced': [
      { 
        id: 'se-a1', title: 'Revenue Operations Alignment', type: 'Workshop', duration: '3h', reason: 'Connecting Sales, Marketing, and Success data.', confidence: 85,
        longDescription: 'Learn to align your training programs with actual revenue data. Measure the "Time to Productivity" for new sales hires.',
        keyTopics: ['RevOps Data', 'Sales Onboarding Metrics', 'LMS Integration', 'ROI of Learning']
      }
    ]
  }
};

export async function generatePlan(inputs: PlanInputs): Promise<GeneratedPlan> {
  await new Promise(resolve => setTimeout(resolve, 800));

  let gaps: string[] = [];
  if (inputs.level === 'New') gaps = ['Core Workflow', 'Tool Proficiency', 'Standard Process'];
  else if (inputs.level === 'Intermediate') gaps = ['Process Optimization', 'Collaboration', 'Analytics'];
  else gaps = ['Strategic Impact', 'Leadership', 'Organizational Design'];

  if (inputs.goal === 'Promotion') gaps.push('Executive Presence');
  if (inputs.goal === 'Role Switch') gaps.unshift('Transferable Theory');

  // Logic: Try to get data for specific level, if empty try 'New' for that role, if still empty use global fallback.
  const roleData = CONTENT_CATALOG[inputs.role];
  let rawPath = roleData[inputs.level];
  
  if (!rawPath || rawPath.length === 0) {
    rawPath = roleData['New'] || [];
  }

  // Final emergency fallback if the role/level combo is totally missing
  if (rawPath.length === 0) {
    rawPath = [{
        id: 'fallback-1',
        title: `Professional Foundations: ${inputs.role}`,
        type: 'Course',
        duration: '3h',
        reason: 'Essential skills for your current role and level.',
        confidence: 85,
        longDescription: 'A curated overview of the core competencies required to succeed in this role at your experience level.',
        keyTopics: ['Core Methodology', 'Communication', 'Industry Standards']
    }];
  }

  const path = rawPath.map(item => ({
    ...item,
    type: inputs.handsOn && item.type === 'Course' ? 'Project' as const : item.type,
    duration: inputs.handsOn ? '1.5x duration (Lab)' : item.duration
  }));

  return {
    role: inputs.role,
    gaps,
    path,
    aiReasoning: [
      `Selected ${inputs.level} modules based on the ${inputs.role} competency model.`,
      `Adjusted for ${inputs.handsOn ? 'active project work' : 'structured guided learning'}.`
    ],
    limitations: ["Based on generalized role definitions."]
  };
}

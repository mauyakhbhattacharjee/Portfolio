
import React from 'react';
import { 
  BarChart3, 
  Search, 
  Globe, 
  Zap, 
  TrendingUp,
  Cpu,
  ShieldCheck,
  Target,
  Layers,
  Activity,
  MessageCircle,
  BookOpen
} from 'lucide-react';
import { Project, Skill, Experience } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Keyword Architecture', level: 95, icon: 'Search' },
  { name: 'Technical SEO Audits', level: 92, icon: 'Cpu' },
  { name: 'Semantic Content Strategy', level: 96, icon: 'BookOpen' },
  { name: 'Marketplace Operations', level: 90, icon: 'Globe' },
  { name: 'Data Analytics (GA4)', level: 88, icon: 'BarChart3' },
  { name: 'Global Communication', level: 98, icon: 'MessageCircle' },
];

export const TOOLS = [
  'SEMrush', 'Ahrefs', 'Search Console', 'GA4', 'Screaming Frog', 'Surfer SEO', 'Seller Central', 'WordPress', 'Rank Math'
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Enterprise Organic Scaling',
    category: 'SEO Strategy',
    description: 'Developed an end-to-end SEO blueprint for a high-growth brand, focusing on keyword cluster dominance and technical remediation.',
    problem: 'Stagnant organic traffic and poor indexing of key high-conversion product pages.',
    strategy: 'Full technical audit + semantic content hub creation leveraging my background in Literature for intent accuracy.',
    result: '140% increase in qualified organic traffic and #1 rankings for 15+ primary commercial keywords.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Technical SEO', 'Semantic Search', 'Growth'],
    stats: [
      { label: 'Traffic Growth', value: '+140%', trend: 'up' },
      { label: 'Keyword Rank', value: '#1', trend: 'up' }
    ]
  },
  {
    id: '2',
    title: 'Global Marketplace Audit',
    category: 'Operational SEO',
    description: 'Optimizing marketplace visibility through data-driven operational rigor learned at Amazon North America.',
    problem: 'Low visibility across competitive marketplace categories despite high inventory quality.',
    strategy: 'Structured metadata overhaul and systematic backend optimization for global search visibility.',
    result: '45% uplift in marketplace-driven revenue and optimized listing performance across regions.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    tags: ['Amazon SEO', 'Data Ops', 'Global Scaling'],
    stats: [
      { label: 'Revenue Impact', value: '+45%', trend: 'up' },
      { label: 'Market Share', value: '+18%', trend: 'up' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Astellica Solutions Private Limited',
    role: 'SEO Intern / Executive',
    period: '2024 - Present',
    location: 'Kolkata, India',
    description: [
      'Orchestrating technical SEO audits and keyword strategies for multiple client projects.',
      'Leveraging semantic analysis to improve content-to-intent matching and organic rankings.',
      'Monitoring performance via GA4 and GSC to drive continuous growth experiments.'
    ]
  },
  {
    company: 'Amazon',
    role: 'Customer Care Executive (Global Marketplace)',
    period: 'Previous Tenure',
    location: 'North America / India Markets',
    description: [
      'Managed global marketplace communications and operational challenges in a high-stakes environment.',
      'Developed elite-level corporate communication skills and problem-solving rigor.',
      'Maintained 99.8% performance efficiency in a KPI-driven ecosystem.'
    ]
  }
];

export const VALUE_PROPS = [
  {
    title: 'Strategic Communication',
    desc: 'My MA in English allows me to bridge the gap between technical data and persuasive, search-optimized storytelling.',
    icon: <BookOpen className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Operational Excellence',
    desc: 'Trained at Amazon, I bring a systematic and highly disciplined approach to every SEO project I manage.',
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />
  },
  {
    title: 'Analytical Rigor',
    desc: 'I transform raw search data into actionable growth strategies that deliver measurable organic ROI.',
    icon: <Activity className="w-6 h-6 text-purple-400" />
  }
];

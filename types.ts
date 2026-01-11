
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  strategy: string;
  result: string;
  image: string;
  tags: string[];
  stats: { label: string; value: string; trend: 'up' | 'down' }[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  location: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string[];
  location: string;
  github: string;
  linkedin: string;
  languages: string[];
  interests: string[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  role: string;
  contributions: string;
  tech: string[];
  links: Record<string, string>;
}

export interface CaseStudy {
  label: string;
  title: string;
  description: string;
  image: string;
  tagColor: string;
  buttonColor: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Work {
  title: string;
  description: string;
  image: string;
  link: string;
}

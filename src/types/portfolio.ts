export type Skill = {
  name: string;
  icon: string;
  level: number;
};

export type SkillCategory = "Frontend" | "Backend" | "Tools";

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
  featured: boolean;
  image?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: "work";
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  type: "education";
};

export type Contact = {
  email: string;
  phone: string;
  location: string;
};

export type Socials = {
  github: string;
  linkedin: string;
  facebook?: string;
  instagram?: string;
};

export type PortfolioConfig = {
  name: string;
  title: string;
  tagline: string;
  typingWords: string[];
  bio: string;
  location: string;
  availableForWork: boolean;
  profileImage: string;
  resumeFile: string;
  contact: Contact;
  socials: Socials;
  skills: Record<SkillCategory, Skill[]>;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  languages: string[];
};

export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: Location;
  linkedin: string;
  github: string;
}

export interface WorkExperience {
  company: string;
  location: string;
  position: string;
  start: string;
  end: string;
  responsiblities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  start: string;
  end: string;
  gpa: string;
}

export interface Project {
  name: string;
  description: string;
  url: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Lanuage {
  language: string;
  proficiency: string;
}

export interface Resume {
  personalDetails: Personal;
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  skills: string[];
  project: Project[];
  certiffications: Certification[];
  languages: Lanuage[];
}

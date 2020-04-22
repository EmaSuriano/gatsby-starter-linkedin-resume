export type ContactType =
  | 'Your Profile'
  | 'Your Profile'
  | 'Websites'
  | 'Phone'
  | 'Address'
  | 'Email'
  | 'Birthday';

export type ContactItem = {
  type: ContactType;
  value: string[];
};

export type ProfileData = {
  name: string;
  headline: string;
  imageurl: string;
  summary: string;
};

export type Position = {
  title: string;
  location: string;
  description: string;
  date1: string;
  date2: string;
  roles?: Position[];
};

export type Education = {
  title: string;
  degree: string;
  fieldofstudy: string;
  date1: number;
  date2: number;
};

export type Skill = {
  title: string;
  count: number;
};

export type Course = {
  name: string;
  year: number;
};

export type LanguageProficiency =
  | 'Full professional proficiency'
  | 'Limited working proficiency'
  | 'Native or bilingual proficiency';

export type Language = {
  name: string;
  proficiency: LanguageProficiency;
};

export type Project = {
  name: string;
  date: string;
  description: string;
  link: string;
};

export type LinkedInSchema = {
  contact: ContactItem[];
  profile: ProfileData;
  positions: Position[];
  educations: Education[];
  skills: Skill[];
  courses: Course[];
  languages: Language[];
  projects: Project[];
};

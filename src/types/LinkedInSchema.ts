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
  values: string[];
};

export type ProfileData = {
  name: string;
  headline: string;
  imageurl: string;
  summary: string;
};

export type PositionInfo = {
  title: string;
  location?: string;
  description: string;
  companyName?: string;
  link?: string;
  date1: string;
  date2: string;
};

export type LinkedInEducation = {
  title: string;
  degree: string;
  fieldOfStudy: string;
  date1: string;
  date2: string;
};

export type Skill = {
  title: string;
  count?: string;
};

export type Course = {
  name: string;
  year: string;
};

export type LanguageProficiency =
  | 'Full professional proficiency'
  | 'Limited working proficiency'
  | 'Native or bilingual proficiency';

export type LinkedInLanguage = {
  name: string;
  proficiency: LanguageProficiency;
};

export type LinkedInProject = {
  name: string;
  date: string;
  description: string;
  link: string;
};

export type LinkedInPosition = PositionInfo & { roles?: PositionInfo[] };

export default interface LinkedInSchema {
  contact: ContactItem[];
  profile: ProfileData;
  positions: LinkedInPosition[];
  educations: LinkedInEducation[];
  skills: Skill[];
  courses: Course[];
  languages: LinkedInLanguage[];
  projects: LinkedInProject[];
}

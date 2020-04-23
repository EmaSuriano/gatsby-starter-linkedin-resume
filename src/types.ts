type ContactType =
  | 'Your Profile'
  | 'Your Profile'
  | 'Websites'
  | 'Phone'
  | 'Address'
  | 'Email'
  | 'Birthday';

type ContactItem = {
  type: ContactType;
  values: string[];
};

type ProfileData = {
  name: string;
  headline: string;
  imageurl: string;
  summary: string;
};

type PositionInfo = {
  title: string;
  location: string;
  description: string;
  companyName?: string;
  date1: string;
  date2: string;
  roles?: PositionInfo[];
};

type Education = {
  title: string;
  degree: string;
  fieldofstudy: string;
  date1: number;
  date2: number;
};

type Skill = {
  title: string;
  count: string;
};

type Course = {
  name: string;
  year: string;
};

type LanguageProficiency =
  | 'Full professional proficiency'
  | 'Limited working proficiency'
  | 'Native or bilingual proficiency';

type Language = {
  name: string;
  proficiency: LanguageProficiency;
};

type Project = {
  name: string;
  date: string;
  description: string;
  link: string;
};

type LinkedInSchema = {
  contact: ContactItem[];
  profile: ProfileData;
  positions: PositionInfo[];
  educations: Education[];
  skills: Skill[];
  courses: Course[];
  languages: Language[];
  projects: Project[];
};

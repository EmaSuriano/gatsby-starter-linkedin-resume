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

type LinkedInLanguage = {
  name: string;
  proficiency: LanguageProficiency;
};

type LinkedInProject = {
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
  languages: LinkedInLanguage[];
  projects: LinkedInProject[];
};

type JsonResumeProfile = {
  network: string;
  username: string;
  url: string;
};

type JsonResumeBasics = {
  name: string;
  label: string;
  image?: string;
  email: string;
  phone?: string;
  url?: string;
  summary: string;
  location: {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
  };
  profiles?: JsonResumeProfile[];
};

type JsonResumeWork = {
  name: string;
  location: string;
  description: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
};

type JsonResumeVolunteer = {
  organization: string;
  position?: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
};

type JsonResumeEducation = {
  institution: string;
  area?: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  courses?: string[];
};

type JsonResumeAward = {
  title: string;
  date: string;
  awarder?: string;
  summary: string;
};

type JsonResumePublication = {
  name: string;
  publisher?: string;
  releaseDate: string;
  url: string;
  summary: string;
};

type JsonResumeSkill = {
  name: string;
  level?: string;
  keywords?: string[];
};

type JsonResumeLanguage = {
  language: string;
  fluency: string;
};

type JsonResumeInterest = {
  name: string;
  keywords?: string[];
};

type JsonResumeReference = {
  name: string;
  reference: string;
};

type JsonResumeProject = {
  name: string;
  description: string;
  highlights: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url: string;
  roles: string[];
  entity: string;
  type: string;
};

type JsonResumeSchema = {
  basics: JsonResumeBasics;
  work: JsonResumeWork[];
  volunteer?: JsonResumeVolunteer[];
  education: JsonResumeEducation[];
  awards?: JsonResumeAward[];
  publications?: JsonResumePublication[];
  skills?: JsonResumeSkill[];
  languages?: JsonResumeLanguage[];
  interests?: JsonResumeInterest[];
  references?: JsonResumeReference[];
  projects?: JsonResumeProject[];
};

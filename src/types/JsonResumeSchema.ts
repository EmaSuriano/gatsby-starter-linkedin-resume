export type JsonResumeProfile = {
  network: string;
  username: string;
  url: string;
};

export type JsonResumeBasics = {
  name: string;
  label: string;
  image?: string;
  email: string;
  phone?: string;
  website?: string;
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

type JsonResumeWorkBase = {
  location?: string;
  company: string;
  website?: string;
};

export type JsonResumePosition = {
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
};

export type JsonResumeWorkSinglePosition = JsonResumePosition &
  JsonResumeWorkBase;

export type JsonResumeWorkMultiPosition = {
  positions: JsonResumePosition[];
} & JsonResumeWorkBase;

export type JsonResumeWork =
  | JsonResumeWorkSinglePosition
  | JsonResumeWorkMultiPosition;

export type JsonResumeVolunteer = {
  organization: string;
  position?: string;
  url?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
};

export type JsonResumeEducation = {
  institution: string;
  area?: string;
  studyType: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  courses?: string[];
};

export type JsonResumeAward = {
  title: string;
  date: string;
  awarder?: string;
  summary: string;
};

export type JsonResumePublication = {
  name: string;
  publisher?: string;
  releaseDate: string;
  website?: string;
  summary: string;
};

export type JsonResumeSkill = {
  name: string;
  level?: string;
  keywords?: string[];
};

export type JsonResumeLanguage = {
  language: string;
  fluency: string;
};

export type JsonResumeInterest = {
  name: string;
  keywords?: string[];
};

export type JsonResumeReference = {
  name: string;
  reference: string;
};

export type JsonResumeProject = {
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

export default interface JsonResumeSchema {
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
}

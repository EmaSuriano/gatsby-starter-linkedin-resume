export declare type JsonResumeProfile = {
    network: string;
    username: string;
    url: string;
};
export declare type JsonResumeBasics = {
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
export declare type JsonResumeWork = {
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
export declare type JsonResumeVolunteer = {
    organization: string;
    position?: string;
    url: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights?: string[];
};
export declare type JsonResumeEducation = {
    institution: string;
    area?: string;
    studyType: string;
    startDate: string;
    endDate?: string;
    gpa?: string;
    courses?: string[];
};
export declare type JsonResumeAward = {
    title: string;
    date: string;
    awarder?: string;
    summary: string;
};
export declare type JsonResumePublication = {
    name: string;
    publisher?: string;
    releaseDate: string;
    url: string;
    summary: string;
};
export declare type JsonResumeSkill = {
    name: string;
    level?: string;
    keywords?: string[];
};
export declare type JsonResumeLanguage = {
    language: string;
    fluency: string;
};
export declare type JsonResumeInterest = {
    name: string;
    keywords?: string[];
};
export declare type JsonResumeReference = {
    name: string;
    reference: string;
};
export declare type JsonResumeProject = {
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

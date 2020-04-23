export declare type ContactType = 'Your Profile' | 'Your Profile' | 'Websites' | 'Phone' | 'Address' | 'Email' | 'Birthday';
export declare type ContactItem = {
    type: ContactType;
    values: string[];
};
export declare type ProfileData = {
    name: string;
    headline: string;
    imageurl: string;
    summary: string;
};
export declare type PositionInfo = {
    title: string;
    location?: string;
    description: string;
    companyName?: string;
    date1: string;
    date2: string;
};
export declare type Education = {
    title: string;
    degree: string;
    fieldofstudy: string;
    date1: string;
    date2: string;
};
export declare type Skill = {
    title: string;
    count?: string;
};
export declare type Course = {
    name: string;
    year: string;
};
export declare type LanguageProficiency = 'Full professional proficiency' | 'Limited working proficiency' | 'Native or bilingual proficiency';
export declare type LinkedInLanguage = {
    name: string;
    proficiency: LanguageProficiency;
};
export declare type LinkedInProject = {
    name: string;
    date: string;
    description: string;
    link: string;
};
export declare type ComboPosition = PositionInfo & {
    roles?: PositionInfo[];
};
export default interface LinkedInSchema {
    contact: ContactItem[];
    profile: ProfileData;
    positions: ComboPosition[];
    educations: Education[];
    skills: Skill[];
    courses: Course[];
    languages: LinkedInLanguage[];
    projects: LinkedInProject[];
}

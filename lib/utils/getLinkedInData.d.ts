import LinkedInSchema from '../types/LinkedInSchema';
declare const getLinkedInData: (email: string, password: string, opts?: Object | undefined) => Promise<LinkedInSchema>;
export default getLinkedInData;

import scrapedin from 'scrapedin';
import { log } from './log';
import LinkedInSchema from '../types/LinkedInSchema';

const LINKED_IN_URL = 'https://www.linkedin.com/in/me';

const getLinkedInData = async (
  email: string,
  password: string,
  opts?: Object,
) => {
  const profileScraper = await scrapedin({
    email,
    password,
    hasToGetContactInfo: true,
    opts,
  });
  log('Logged into LinkedIn');

  return profileScraper(LINKED_IN_URL) as LinkedInSchema;
};

export default getLinkedInData;

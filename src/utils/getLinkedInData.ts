import scrapedin from 'scrapedin';
import { log } from './log';
import LinkedInSchema from '../types/LinkedInSchema';

const PUBLIC_PROFILE_URL = 'https://www.linkedin.com/in/me';

const getLinkedInData = async ({ email, password }: LoginCredentials) => {
  log('Logging into LinkedIn ...');

  const profileScraper = await scrapedin({
    email,
    password,
    hasToGetContactInfo: true,
    hasToLog: true,
  });

  log('Successfully logged!');

  return profileScraper(PUBLIC_PROFILE_URL) as LinkedInSchema;
};

export default getLinkedInData;

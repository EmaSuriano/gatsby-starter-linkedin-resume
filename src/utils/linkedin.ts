import scrapedin from 'scrapedin';
import inquirer from 'inquirer';
import { log } from './log';
import LinkedInSchema from '../types/LinkedInSchema';

const PUBLIC_PROFILE_URL = 'https://www.linkedin.com/in/me';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

type LoginCredentials = {
  email: string;
  password: string;
};

export const inquireLoginData = () =>
  inquirer.prompt<LoginCredentials>([
    {
      name: 'email',
      message: 'Your Email',
      validate: (value: string) => EMAIL_REGEX.test(value) || 'Invalid email',
    },
    {
      name: 'password',
      message: 'Your Password',
      type: 'password',
    },
  ]);

export const getLinkedInData = async ({
  email,
  password,
}: LoginCredentials) => {
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

import scrapedin from 'scrapedin';
import fs from 'fs';
import path from 'path';
require('dotenv').config();

const log = (...args) => console.log('[LOG]: ', ...args);

const { EMAIL, PASS } = process.env;
const EXPORT_PATH = path.join(__dirname, 'export.json');

const main = async () => {
  log('Logging into Linked in');
  const profileScraper = await scrapedin({
    email: EMAIL,
    password: PASS,
    hasToGetContactInfo: true,
    isHeadless: false,
    hasToLog: true,
  });

  log('Getting profile info');
  const profile = await profileScraper(
    'https://www.linkedin.com/in/emanuel-suriano',
  );

  log('Information saved inside: ', EXPORT_PATH);
  fs.writeFileSync(EXPORT_PATH, JSON.stringify(profile, null, 2));
  process.exit(0);
};

main();

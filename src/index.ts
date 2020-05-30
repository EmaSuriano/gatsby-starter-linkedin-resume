import { program } from 'commander';
import fs from 'fs';
import { log } from './utils/log';
import { RESUME_PATH, LINKED_IN_PATH } from './utils/path';
import mapLinkedInToJSONResume from './utils/mapLinkedInToJSONResume';
import inquireLoginData from './utils/inquireLoginData';
import getLinkedInData from './utils/getLinkedInData';
import validateLinkedInSchema from './types/LinkedInSchema.validator';

type CLIParams = {
  renew?: boolean;
};

const main = async ({ renew }: CLIParams) => {
  if (renew || !fs.existsSync(LINKED_IN_PATH)) {
    log('Please provide your LinkedIn credentials:');
    const credentials = await inquireLoginData();
    const profile = await getLinkedInData(credentials);
    fs.writeFileSync(LINKED_IN_PATH, JSON.stringify(profile, null, 2));
    log('LinkedIn Information saved!', LINKED_IN_PATH);
  }

  const linkedInData = validateLinkedInSchema(
    JSON.parse(fs.readFileSync(LINKED_IN_PATH).toString()),
  );

  log('Parsing LinkedIn data into JSON Resume ...');
  const jsonResumeData = mapLinkedInToJSONResume(linkedInData);

  fs.writeFileSync(RESUME_PATH, JSON.stringify(jsonResumeData, null, 2));
  log('Resume successfully generated 🎉', RESUME_PATH);

  process.exit(0);
};

program
  .version('0.0.1')
  .option('-r, --renew', 'renew LinkedIn data')
  .parse(process.argv);

const params: CLIParams = program.opts();
main(params);

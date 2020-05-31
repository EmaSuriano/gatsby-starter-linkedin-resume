import { program } from 'commander';
import { log } from './utils/log';
import { RESUME_PATH, LINKED_IN_PATH } from './utils/path';
import mapLinkedInToJSONResume from './utils/mapLinkedInToJSONResume';
import validateLinkedInSchema from './types/LinkedInSchema.validator';
import { saveJson, readJson } from './utils/file';
import { inquireLoginData, getLinkedInData } from './utils/linkedin';

type CLIParams = {
  renew?: boolean;
};

export const main = async ({ renew }: CLIParams) => {
  if (renew || !readJson(LINKED_IN_PATH)) {
    log('Please provide your LinkedIn credentials:');
    const credentials = await inquireLoginData();
    const profile = await getLinkedInData(credentials);
    log('LinkedIn Information saved.', LINKED_IN_PATH);
    saveJson(LINKED_IN_PATH, profile);
  }

  const linkedInData = readJson(LINKED_IN_PATH);
  const linkedInParsed = validateLinkedInSchema(linkedInData);

  log('Parsing LinkedIn data into JSON Resume ...');
  const jsonResumeData = mapLinkedInToJSONResume(linkedInParsed);

  log('Resume successfully generated 🎉', RESUME_PATH);
  saveJson(RESUME_PATH, jsonResumeData);
};

program
  .version('0.0.1')
  .option('-r, --renew', 'renew LinkedIn data')
  .parse(process.argv);

const params: CLIParams = program.opts();
main(params);

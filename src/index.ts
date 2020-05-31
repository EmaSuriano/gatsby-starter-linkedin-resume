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
    const linkedInData = await getLinkedInData(credentials);

    log('LinkedIn Information saved.', LINKED_IN_PATH);
    saveJson(LINKED_IN_PATH, linkedInData);
  }

  const linkedInParsed = validateLinkedInSchema(readJson(LINKED_IN_PATH));

  log('Parsing LinkedIn data into JSON Resume ...');
  const jsonResumeData = mapLinkedInToJSONResume(linkedInParsed);

  log('Resume successfully generated 🎉', RESUME_PATH);
  saveJson(RESUME_PATH, jsonResumeData);
};

if (!process.env.RUN_IN_JEST) {
  program
    .version('0.0.1')
    .option('-r, --renew', 'renew LinkedIn data')
    .parse(process.argv);

  const params: CLIParams = program.opts();
  main(params).then(() => process.exit(0));
}

import { program } from 'commander';
import fs from 'fs';
import { log } from './utils/log';
import { RESUME_PATH, LINKED_IN_PATH } from './utils/path';
import mapLinkedInToJSONResume from './utils/mapLinkedInToJSONResume';
import inquireLoginData from './utils/inquireLoginData';
import getLinkedInData from './utils/getLinkedInData';
import validateLinkedInSchema from './types/LinkedInSchema.validator';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const { LINKED_IN_JSON } = process.env;

type CLIParams = {
  renew?: boolean;
};

const main = async ({ renew }: CLIParams) => {
  if (LINKED_IN_JSON) {
    log('Downloading the linked in resume from the external resource');
    await fetch(LINKED_IN_JSON)
      .then((x) => x.json())
      .then((json: Object) =>
        fs.writeFileSync(LINKED_IN_PATH, JSON.stringify(json, null, 2)),
      );
  }

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

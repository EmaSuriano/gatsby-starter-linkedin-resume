import fetch from 'node-fetch';
import dotenv from 'dotenv';
import { log } from './utils/log';
import { saveJson } from './utils/file';
import { RESUME_PATH } from './utils/path';

dotenv.config();

type EnvVariables = {
  RESUME_JSON?: string;
};

export const main = async ({ RESUME_JSON }: EnvVariables) => {
  if (RESUME_JSON) {
    log('Downloading the resume from the external resource');
    await fetch(RESUME_JSON)
      .then((x) => x.json())
      .then((json) => saveJson(RESUME_PATH, json));
  }
};

if (!process.env.RUN_IN_JEST) main(process.env).then(() => process.exit(0));

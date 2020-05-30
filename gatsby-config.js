const { existsSync, writeFileSync } = require('fs');
const { default: validate } = require('./lib/types/JsonResumeSchema.validator');
const { RESUME_PATH } = require('./lib/utils/path');
const fetch = require('node-fetch');

require('dotenv').config();

const { RESUME_JSON } = process.env;

if (RESUME_JSON) {
  console.log('Downloading the resume from the external resource');
  fetch(RESUME_JSON)
    .then((x) => x.json())
    .then((json) => writeFileSync(RESUME_PATH, JSON.stringify(json, null, 2)));
}

if (!existsSync(RESUME_PATH)) {
  throw new Error(
    'Please run "yarn generate-resume" to generate your resume information.',
  );
}

const resumeJson = validate(require(RESUME_PATH));

process.env.RESUME_ROUTE = 'index';
const { RESUME_ROUTE: name } = process.env;

const addPdfLink = (resume) => ({
  ...resume,
  basics: { ...resume.basics, pdfLink: `/${name}.pdf` },
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-jsonresume',
      options: {
        resumeJson: addPdfLink(resumeJson),
        name,
        theme: 'standard-resume',
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
};

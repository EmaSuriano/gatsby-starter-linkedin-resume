const { existsSync } = require('fs');
const { default: validate } = require('./lib/types/JsonResumeSchema.validator');
const { RESUME_PATH } = require('./lib/utils/path');
require('dotenv').config();

const { RESUME_ROUTE = 'index' } = process.env;

if (!existsSync(RESUME_PATH)) {
  throw new Error(
    'Please run "yarn generate-resume" to generate your resume information.',
  );
}

const resumeJson = validate(require(RESUME_PATH));

const addPdfLink = (resume) => ({
  ...resume,
  basics: { ...resume.basics, pdfLink: `/${RESUME_ROUTE}.pdf` },
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-jsonresume',
      options: {
        resumeJson: addPdfLink(resumeJson),
        name: RESUME_ROUTE,
        theme: 'standard-resume',
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
};

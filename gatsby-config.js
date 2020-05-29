const { existsSync } = require('fs');
const { default: validate } = require('./lib/types/JsonResumeSchema.validator');
const { RESUME_PATH } = require('./lib/utils/path');

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
      },
    },
    'gatsby-plugin-meta-redirect',
  ],
};

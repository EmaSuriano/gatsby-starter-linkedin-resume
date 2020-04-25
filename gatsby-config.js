const { existsSync } = require('fs');
const { default: validate } = require('./lib/types/JsonResumeSchema.validator');

if (!existsSync('./src/resume.json')) {
  throw new Error(
    'Please run "yarn generate-resume" to generate your resume information.',
  );
}

const resumeJson = validate(require('./src/resume.json'));

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-jsonresume',
      options: {
        resumeJson,
        theme: 'standard-resume',
      },
    },
    'gatsby-plugin-meta-redirect', // remove in case you don't want redirect
  ],
};

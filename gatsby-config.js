const { validate } = require('resume-schema');

if (!require.resolve('./src/resume.json')) {
  throw new Error(
    'Please run `yarn generate-resume` to generate your resume information.',
  );
}

const resumeJson = require('./src/resume.json');
validate(resumeJson, (err, { valid }) => {
  if (err || !valid) throw new Error(err);
});

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-jsonresume',
      options: {
        resumeJson,
        name: 'index',
        theme: 'standard-resume',
      },
    },
  ],
};

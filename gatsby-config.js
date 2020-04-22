if (!require.resolve('./src/resume.json')) {
  throw new Error(
    'Please run `yarn generate-resume` to generate your resume information.',
  );
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: require('./src/resume.json'),
        theme: 'standard-resume',
      },
    },
  ],
};

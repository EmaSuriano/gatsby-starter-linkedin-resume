module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: require('./resume.json'),
        name: 'index',
        theme: 'standard-resume',
      },
    },
  ],
};

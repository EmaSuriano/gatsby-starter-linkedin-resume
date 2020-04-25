// Generally you create redirects while creating pages.
exports.createPages = ({ actions }) => {
  actions.createRedirect({
    fromPath: '/',
    toPath: '/resume.html',
    isPermanent: true,
  });

  actions.createRedirect({
    fromPath: '/pdf',
    toPath: '/resume.pdf',
    isPermanent: true,
  });
};

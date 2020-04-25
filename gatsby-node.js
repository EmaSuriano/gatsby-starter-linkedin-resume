// Generally you create redirects while creating pages.
exports.createPages = ({ actions, siteMetadata, ...rest }) => {
  const { RESUME_ROUTE: route } = process.env;
  actions.createRedirect({
    fromPath: '/html',
    toPath: `/${route}.html`,
    isPermanent: true,
  });

  actions.createRedirect({
    fromPath: '/pdf',
    toPath: `/${route}.pdf`,
    isPermanent: true,
  });
};

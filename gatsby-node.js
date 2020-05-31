require('dotenv').config();

exports.createPages = async ({ actions, siteMetadata, ...rest }) => {
  const { RESUME_ROUTE = 'index' } = process.env;

  actions.createRedirect({
    fromPath: '/html',
    toPath: `/${RESUME_ROUTE}.html`,
    isPermanent: true,
  });

  actions.createRedirect({
    fromPath: '/pdf',
    toPath: `/${RESUME_ROUTE}.pdf`,
    isPermanent: true,
  });
};

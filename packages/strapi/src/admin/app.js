import favicon from './extensions/rebase.jpg';

const config = {
  // Replace the favicon
  head: {
    favicon: favicon,
  },
  // Replace the Strapi logo in auth (login) views
  auth: {
    logo: favicon,
  },
  // Replace the Strapi logo in the main navigation
  menu: {
    logo: favicon,
  },
  // Add a new locale, other than 'en'
  locales: ['zh-Hans'],
  // Override or extend the theme

  // Extend the translations
  translations: {
    'zh-Hans': {},
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { release: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

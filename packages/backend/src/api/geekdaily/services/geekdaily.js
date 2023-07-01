'use strict';

/**
 * geekdaily service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::geekdaily.geekdaily', ({ strapi }) => ({
  // https://docs.strapi.io/dev-docs/backend-customization/services#adding-a-new-service
  async list() {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany('api::geekdaily.geekdaily', {
        fields: ['title', 'episode', 'author', 'url', 'time', 'introduce'],
        populate: {
          cover: {
            fields: ['url'],
          },
          editor: {
            fields: ['name'],
            populate: {
              avatar: { fields: ['url'] },
            },
          },
          category: {
            fields: ['title'],
          },
        },
      });

      return entries;
    } catch (err) {
      console.error(err);
      return err;
    }
  },
}));

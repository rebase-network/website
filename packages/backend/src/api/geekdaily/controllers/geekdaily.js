'use strict';

/**
 * geekdaily controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::geekdaily.geekdaily', ({ strapi }) => ({
  async batchInsert(ctx) {
    const dataToInsert = ctx.request.body;

    try {
      const result = await strapi.db.query('api::geekdaily.geekdaily').createMany({
        data: dataToInsert.data,
      });

      // return {"count":3,"ids":[6,7,8]}
      ctx.send(result);
    } catch (error) {
      console.error(error);
      ctx.throw(500, 'Internal Server Error');
    }
  },

  async list(ctx) {
    console.log(/controller list/);
    const entities = await strapi.service('api::geekdaily.geekdaily').list();
    ctx.send({ data: entities });
  },
}));

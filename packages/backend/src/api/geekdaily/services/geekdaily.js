'use strict';

/**
 * geekdaily service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::geekdaily.geekdaily');

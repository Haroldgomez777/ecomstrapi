'use strict';

/**
 * product-recommendation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-recommendation.product-recommendation');

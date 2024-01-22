'use strict';

/**
 * trek service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trek.trek');

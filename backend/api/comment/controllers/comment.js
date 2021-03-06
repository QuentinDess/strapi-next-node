const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.comment.search(ctx.query);
    } else {
      entities = await strapi.services.comment.find(ctx.query, ['writer']);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.restaurant }));
  },
};

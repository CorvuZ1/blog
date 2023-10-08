"use strict";

/**
 * hello controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::hello.hello", ({ strapi }) => ({
  async index(ctx) {
    try {
      ctx.body = { message: "Hello, World" };
    } catch (error) {
      console.log(error);
    }
  }
}));

const routes = require("next-routes")();

// Name   Page      Pattern
routes
  .add("/campaigns/new", "/campaigns/new")
  .add("/campaigns/:address", "/campaigns/show");

module.exports = routes;

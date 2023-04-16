const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API with Swagger",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from a PostgreSQL database and returns it as JSON.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Swagger",
      url: "https://swagger.io",
      email: "Info@SmartBear.com",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  /**
   * The apis property specifies the paths to the API endpoints with Swagger annotations.
   */
  apis: ["./*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

"use strict";

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger.js");

const app = (module.exports = express());
const port = 3000;

const users = [1, 2];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1", require("./controllers/api_v1"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

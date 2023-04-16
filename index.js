const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger.js");

const app = express();
const port = 3000;

const users = [1, 2];

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Hello World");
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns a list of users
 *     description: Retrieve a list of users from the database
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1000
 *                   name:
 *                     type: string
 *                     example: "aaa"
 */
app.get("/api/users", (req, res) => {
  // code to retrieve list of users
  res.status(200).json(users);
});

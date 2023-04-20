const express = require("express");
const apiv1 = express.Router();

const users = [1, 2];

/**
 * @swagger
 * /users:
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
apiv1.get("/users", (req, res) => {
  // code to retrieve list of users
  res.status(200).json(users);
});

module.exports = apiv1;

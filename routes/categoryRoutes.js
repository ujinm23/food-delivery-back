const express = require("express");

const createCategory = require("../controllers/foodCategory/createCategory");
const getCategory = require("../controllers/foodCategory/getCategory");
const deleteCategory = require("../controllers/foodCategory/deleteCategory");
const updateCategory = require("../controllers/foodCategory/updateCategory");

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategory);
categoryRouter.delete("/", deleteCategory);
categoryRouter.put("/", updateCategory);

module.exports = categoryRouter;

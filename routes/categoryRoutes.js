const express = require("express");

const createCategory = require("../controllers/foodCategory/createCategory");
const getCategory = require("../controllers/foodCategory/getCategory");
const deleteCategory = require("../controllers/foodCategory/deleteCategory");
const updateCategory = require("../controllers/foodCategory/updateCategory");
const verifyJwt = require("../middleware/verifyJWT");

const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.put("/", verifyJwt, updateCategory);
categoryRouter.delete("/:id", verifyJwt, deleteCategory);
categoryRouter.post("/", verifyJwt, createCategory);

module.exports = categoryRouter;

const express = require("express");

const createFoodCategory = require("../controllers/foodCategory/createFoodCategory");
const getFoodCategory = require("../controllers/foodCategory/getFoodCategory");
const deleteFoodCategory = require("../controllers/foodCategory/deleteFoodCategory");
const putFoodCategory = require("../controllers/foodCategory/putFoodCategory");
const verifyJwt = require("../middleware/verifyJWT");

const categoryRouter = express.Router();

categoryRouter.get("/", getFoodCategory);
categoryRouter.put("/", verifyJwt, putFoodCategory);
categoryRouter.delete("/:id",verifyJwt, deleteFoodCategory);
categoryRouter.post("/",verifyJwt, createFoodCategory);

module.exports = categoryRouter;

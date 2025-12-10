const express = require("express");

const createFood = require("../controllers/food/createFood");
const getFood = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const updateFood = require("../controllers/food/updateFood");
const getFoodsByCategoryId = require("../controllers/food/getFoodsByCategoryId");

const FoodRouter = express.Router();

FoodRouter.post("/", createFood);

FoodRouter.get("/", getFood);
FoodRouter.get("/category/:id", getFoodsByCategoryId);

FoodRouter.delete("/", deleteFood);
FoodRouter.put("/", updateFood);

module.exports = FoodRouter;

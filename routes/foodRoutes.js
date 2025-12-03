const express = require("express");

const createFood = require("../controllers/food/createFood");
const getFood = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const updateFood = require("../controllers/food/updateFood");

const FoodRouter = express.Router();

FoodRouter.post("/", createFood);
FoodRouter.get("/", getFood);
FoodRouter.delete("/", deleteFood);
FoodRouter.put("/", updateFood);

module.exports = FoodRouter;

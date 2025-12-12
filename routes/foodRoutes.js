const express = require("express");

const createFood = require("../controllers/food/createFood");
const getFood = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const updateFood = require("../controllers/food/updateFood");
const getFoodsByCategoryId = require("../controllers/food/getFoodsByCategoryId");
const verifyJwt = require("../middleware/verifyJWT");

const FoodRouter = express.Router();

FoodRouter.post("/", verifyJwt, createFood);

FoodRouter.get("/", getFood);
FoodRouter.get("/category/:id", getFoodsByCategoryId);

FoodRouter.delete("/", verifyJwt, deleteFood);
FoodRouter.put("/", verifyJwt, updateFood);

module.exports = FoodRouter;

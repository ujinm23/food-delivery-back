const express = require("express");

const createOrder = require("../controllers/order/createOrder");
const getOrder = require("../controllers/order/getOrder");
const deleteOrder = require("../controllers/order/deleteOrder");
const putOrder = require("../controllers/order/putOrder");
const verifyJwt = require("../middleware/verifyJWT");

const OrderRouter = express.Router();

OrderRouter.post("/", verifyJwt, createOrder);
OrderRouter.get("/", verifyJwt, getOrder);
OrderRouter.delete("/:id", verifyJwt, deleteOrder);
OrderRouter.put("/:id", verifyJwt, putOrder);

module.exports = OrderRouter;

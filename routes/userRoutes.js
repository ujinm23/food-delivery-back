const express = require("express");
const createUser = require("../controllers/user/createUser");
const getUser = require("../controllers/user/getUser");

const userRouter = express.Router();

userRouter.get("/", getUser);

userRouter.put("/", (req, res) => {
  res.json("hello update");
});

userRouter.delete("/", (req, res) => {
  res.json("hello delete");
});

userRouter.post("/", createUser);

module.exports = userRouter;

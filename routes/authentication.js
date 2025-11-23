const express = require("express");

const loginUser = require("../controllers/authentication/loginUser");
const createUser = require("../controllers/user/createUser");
const isEmailExist = require("../middleware/emailExist");
const isUserExist = require("../middleware/isUserExist");

const authenticationRouter = express.Router();

authenticationRouter.get("/login", isUserExist, loginUser);
authenticationRouter.post("/signUp", isEmailExist, createUser);

module.exports = authenticationRouter;

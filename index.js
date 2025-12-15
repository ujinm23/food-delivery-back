const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const userModel = require("./schemas/userSchemas");
const categoryModel = require("./schemas/foodcategoryschemas").default;
const foodModel = require("./schemas/foodSchemas").default;

const dotenv = require("dotenv");
dotenv.config();

const userRouter = require("./routes/userRoutes");
const foodCategoryRouter = require("./routes/foodCategoryRoutes");
const foodRouter = require("./routes/foodRoutes");
const authenticationRouter = require("./routes/authentication");
const OrderRouter = require("./routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRouter);
app.use("/foodcategory", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/authentication", authenticationRouter);

app.get("/", (req, res) => {
  res.send("hello world, running");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});

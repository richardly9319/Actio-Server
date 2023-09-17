const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRouter");

const knex = require("knex")(require("./knexfile.js"));

require("dotenv").config();

const PORT = process.env.PORT || 5050;

// CORS middleware
app.use(cors());

// Body parser middleware
app.use(express.json());

// User routes
app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

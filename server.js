const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRouter");

const knex = require("knex")(require("./knexfile.js"));

require("dotenv").config();

const PORT = process.env.PORT || 5050;

// CORS middleware
app.use(cors());

// Middleware to set the COOP and COEP headers
app.use((req, res, next) => {
  res.header("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.header("Cross-Origin-Embedder-Policy", "require-corp"); // It's good practice to set COEP alongside COOP
  next();
});

// Body parser middleware
app.use(express.json());

// User routes
app.use("/", userRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

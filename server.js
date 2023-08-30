const express = require("express");
const cors = require("cors");
const app = express();
const userRoute = require("./routes/userRouter");

const knex = require("knex")(require("./knexfile.js"));

require("dotenv").config();

const PORT = process.env.PORT || 5050;



app.use(cors());
app.use(express.json());
app.use("/", userRoute);


app.listen(PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
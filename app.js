const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const astroRoute = require("./Routes/astroRoutes");

require("dotenv").config({ path: "./config.env" });

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT;

// Use your password to connect the mongoDb database
const PASSWORD = process.env.MONGO_PASSWORD;

app.use("/api", astroRoute);

// Replace this mongoDb connection url string with your connection url string
mongoose
  .connect(
    `mongodb+srv://ranjeet:${PASSWORD}@cluster0.q06ty.mongodb.net/AstroTak?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      console.log(err);
    }
  )
  .then(() => {
    app.listen(PORT);
    console.log(`App is listening on port ${PORT}`);
  })
  .catch((err) => {
    console.log("Catch error");
    console.log(err);
  });

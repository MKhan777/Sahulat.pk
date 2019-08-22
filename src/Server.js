const express = require("express");
var cors = require("cors");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const sampleApi = require("./backend/sampleApi");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
//mongoose.connect("mongodb+srv://Admin:admin@reactapplication-hbthp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }).then(() => console.log("Connected to Mongo ....")).catch((error) => console.log(error.message));

mongoose
  .connect(
    "mongodb+srv://Admin:system@sahulat-kijbu.mongodb.net/test?retryWrites=true&w=majority",
    {
      // useMongoClient: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("Connected to Mongo ...."))
  .catch(error => console.log(error.message));

app.use(cors());
app.use(bodyParser.json());

console.log("HelloHi");
app.use("/api/sampleApi", sampleApi);
app.use("/", router);

app.listen(5000, () =>
  console.log("Express server is running on localhost:5000")
);

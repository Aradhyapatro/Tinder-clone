const express = require("express");
const app = express();
const Data = require("./model/model");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  Data.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

app.post("/addname", (req, res) => {
  var myData = new Data(req.body[0]);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
      console.log(req.body[0]);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/", (req, res) => {
  Data.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

app.listen(8080, () => {
  console.log("Listening");
});

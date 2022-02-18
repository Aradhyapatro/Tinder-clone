const express = require("express");
const app = express();
const { User } = require("./model/model");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  User.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/addname", (req, res) => {
  var myData = new User(req.body[0]);
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
  User.find((err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.put("/:person", async (req, res) => {
  const personMessage = req.params.person;
  let mess = req.body.mess;
  console.log(mess);
  mess = { name: null, img: null, message: mess };

  try {
    let data = await User.findOne({ name: personMessage });
    data.messages.push(mess);
    console.log("here");
    await data.save();
  } catch (error) {
    console.log(error);
    res.status(500).json({ err });
  }

  res.status(200).json({ success: true });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening");
});

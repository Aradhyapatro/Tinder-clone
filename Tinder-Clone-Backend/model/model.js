const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/Tinder");
}
main();

const DataSchema = new mongoose.Schema({
  name: String,
  img: String,
  heart: { type: Number, default: 0 },
  thunder: { type: Number, default: 0 },
  star: { type: Number, default: 0 },
  messages: { type: Array, default: [] },
});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;

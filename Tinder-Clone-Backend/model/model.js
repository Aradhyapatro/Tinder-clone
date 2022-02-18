const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/Tinder");
}
main();

const finalSchema = new mongoose.Schema({
  name: String,
  img: String,
  messages: { type: Array, default: [] },
});

const final = mongoose.model("final", finalSchema);

module.exports.User = final;

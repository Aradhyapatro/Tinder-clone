const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.MONGO_DB);
}
main();

const finalSchema = new mongoose.Schema({
  name: String,
  img: String,
  messages: { type: Array, default: [] },
});

const final = mongoose.model("final", finalSchema);

module.exports.User = final;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const configSchema = new Schema(
  {
    storeName: {
      type: String,
      required: true
    },
    cashier: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

const configModel = mongoose.model("configs", configSchema);
module.exports = configModel;

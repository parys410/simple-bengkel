const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", usersSchema);
module.exports = userModel;

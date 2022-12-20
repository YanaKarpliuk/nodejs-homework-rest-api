const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contact = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 70
    },
    email: {
      type: String,
      minlength: 3,
      maxlength: 70
    },
    phone: {
      type: String,
      minlength: 10,
      maxlength: 15
    },
    isFavourite: {
      type: Boolean,
      default: false
    }
  },
  { versionKey: false, timestamps: true }
);

const Contact = mongoose.model("contact", contact);

module.exports = Contact;
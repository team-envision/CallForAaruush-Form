const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Form = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  alreadyInAaruush: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Form', Form);

const mongoose = require('mongoose');

const signupmodel = mongoose.model(
  'signup',
  new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    digi: { type: String, required: true },
    passwd: { type: String, required: true },
  })
);

module.exports = signupmodel;

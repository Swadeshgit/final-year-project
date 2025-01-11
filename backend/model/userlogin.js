const mongoose = require('mongoose');
const userloginmodel = mongoose.model(
  'User',
  new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    conpassword: { type: String, required: true },
    // userpic: { type: String, required: true },
  })
);
module.exports = userloginmodel;

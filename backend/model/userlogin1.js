const mongoose = require('mongoose');
const emploginmodel = mongoose.model(
  'employee',
  new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    conpassword: { type: String, required: true },
    // userpic: { type: String, required: true },
    ///
    address: { type: String },
    servicetype: { type: String },
    // userpic: { type: String, required: true },
    ///
    oulification: { type: String },
    exp: { type: String },
    yearexp: { type: String },
    ///
    company: { type: String },
    single: { type: String },
  })
);
module.exports = emploginmodel;

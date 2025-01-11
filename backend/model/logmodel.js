const mongoose = require('mongoose');
const cartmodel = mongoose.model(
  'cart',
  new mongoose.Schema({
    productid: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    digi: { type: String, required: true },
    passwd: { type: String, required: true },
  })
);
module.exports = cartmodel;

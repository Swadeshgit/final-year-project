const mongoose = require('mongoose');

const servicemodel = mongoose.model(
  'service',
  new mongoose.Schema({
    providername: { type: String, required: true },
    servicename: { type: String, required: true },
    discription: { type: String, required: true },
    costmer: { type: String, required: true },
    servicepic: { type: String, required: true },
  })
);

module.exports = servicemodel;

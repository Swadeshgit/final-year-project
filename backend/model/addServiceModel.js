const mongoose = require('mongoose');

const addServiceModel = mongoose.model(
  'Add_service',
  new mongoose.Schema({
    SPid: { type: String, required: true },
    name: { type: String, required: true },
    servicedis: { type: String, required: true },
    otherservice: { type: String, required: true },
    servicepic: { type: String, required: true },
  })
);
module.exports = addServiceModel;

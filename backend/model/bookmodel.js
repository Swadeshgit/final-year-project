const mongoose = require('mongoose');
const bookmodel = mongoose.model(
  'booking',
  new mongoose.Schema({
    CPid: { type: String, required: true },
    CPemail: { type: String, required: true },
    CPcontect: { type: String, required: true },
    CPname: { type: String, required: true },
    CPaddress: { type: String, required: true },
    Bookdate: { type: String, required: true },
    Servicedate: { type: String, required: true },
    Serviceid: { type: String, required: true },
    SPid: { type: String, required: true },
  })
);
module.exports = bookmodel;

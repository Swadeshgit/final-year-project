const mongoose = require('mongoose');
const empblogmodel = mongoose.model(
  'empblog',
  new mongoose.Schema({
    empid: { type: String, required: true },
    userid: { type: String, required: true },
    nextpostid: { type: String, required: true },
    prevpostid: { type: String, required: true },
    comentid: { type: String, required: true },
    date: { type: String, required: true },
    viwes: { type: String, required: true },
    keypoint: { type: String, required: true },

    Pic1: { type: String, required: true },
    titel1: { type: String, required: true },
    para1: { type: String, required: true },
    Pic2: { type: String, required: true },
    titel2: { type: String, required: true },
    para2: { type: String, required: true },
    Pic3: { type: String, required: true },
    titel3: { type: String, required: true },
    para3: { type: String, required: true },
    keypoint: { type: String, required: true },
  })
);
module.exports = empblogmodel;

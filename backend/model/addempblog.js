const mongoose = require('mongoose');

const addempblog = mongoose.model(
  'emp_blog',
  new mongoose.Schema({
    SPid: { type: String, required: true },
    keyword: { type: String, required: true },
    para: { type: String, required: true },
    titel: { type: String, required: true },
    topicimg: { type: String, required: true },
  })
);
module.exports = addempblog;

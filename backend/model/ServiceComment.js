const mongoose = require('mongoose');

const commentService = mongoose.model(
  'commentSer',
  new mongoose.Schema({
    reqid: { type: String, required: true },
    blogid: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String, required: true },
  })
);
module.exports = commentService;

// server/models/Content.js
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  mediaType: String, // e.g., video, article, podcast
  link: String
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;

// models/Article.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  pubyear: {
    type: String
  },
  doi: {
    type: String
  },
  evidence: {
    type: String
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);
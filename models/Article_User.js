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
  sepractice: {
    type: String
  },
  type_of_evidence: {
    type: String
  },
  participant_type: {
    type: String
  }
});

module.exports = Article = mongoose.model('article_user', ArticleSchema);
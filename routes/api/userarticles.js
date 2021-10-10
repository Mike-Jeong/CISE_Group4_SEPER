const express = require("express");
const router = express.Router();

const Article = require("../../models/Article_User");

// @route GET api/test
router.get("/test", (req, res) => res.send("article route testing!"));

// @route GET api/articles
router.get("/", (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch((err) =>
      res.status(404).json({ noarticlesfound: "No Articles found" })
    );
});

// @route GET api/articles/:id
router.get("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) =>
      res.status(404).json({ noarticlefound: "No Article found" })
    );
});

router.get("/option/:sepractice", (req, res) => {
  let typeRequest = req.params.sepractice;
  Article.find({ sepractice: { $eq: typeRequest } })
    .then((article) => res.json(article))
    .catch((err) =>
      res.status(404).json({ noarticlefound: "No Article found" })
    );
});

router.post("/", (req, res) => {
  Article.create(req.body)
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this Article" })
    );
});

router.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then((article) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/articles/:id
router.delete("/:id", (req, res) => {
  Article.findByIdAndRemove(req.params.id, req.body)
    .then((article) => res.json({ mgs: "Article entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a Article" }));
});

module.exports = router;

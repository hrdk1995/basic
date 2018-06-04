var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Company = require("../models/Company.js");
router.get("/", function(req, res, next) {
  Company.find(function(err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
router.get("/:id", function(req, res, next) {
  Company.findById(req.params.id, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.post("/", function(req, res, next) {
  Company.create(req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.put("/:id", function(req, res, next) {
  Company.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.delete("/:id", function(req, res, next) {
  Company.findByIdAndRemove(req.params.id, req.body, function(err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

router.get("/", function(req, res) {
    // burger.all(function(data) {
    //   var hbsObject = {
    //     burger: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    // });
    res.render("index");

  });
  
  router.post("/burgers/create", function(req, res) {
    burger.create();
  });
  
  // router.put("/api/cats/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   console.log("condition", condition);
  
  //   cat.update({
  //     sleepy: req.body.sleepy
  //   }, condition, function(result) {
  //     if (result.changedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });
  
  // router.delete("/api/cats/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  
  //   cat.delete(condition, function(result) {
  //     if (result.affectedRows == 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });


  module.exports = router;





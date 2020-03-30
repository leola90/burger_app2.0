var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgerModel = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burgerModel.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgerModel.createOne([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });  
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    console.log(req.body);
    console.log(req.body.devoured);

    burgerModel.updateOne(
        {devoured: req.body.devoured}, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});


module.exports = router;
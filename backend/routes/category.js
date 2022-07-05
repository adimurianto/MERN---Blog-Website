const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Category = mongoose.model("Category");

router.get("/categories", (req, res) => {
    Category.find()
    .then((categories) => {
        res.json({categories});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.get("/categories-count", (req, res) => {
    Category.count()
    .then((categories) => {
        res.json({categories});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.post("/new-category", (req, res) => {
    const {name} = req.body;

    if(!name) {
        res.json({err: "All fields are required"});
    }

    const category = new Category({
        name
    });

    category
    .save()
    .then(() => {
        res.json({msg: "Category Created"});
    })
    .catch((error) => {
        console.log(error);
    });
});

module.exports = router;
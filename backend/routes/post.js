const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const Category = mongoose.model("Category");

router.get("/posts", (req, res) => {
    Post.find()
    .populate("category", "_id name")
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.get("/featured-posts", (req, res) => {
    Post.find({isFeatured: true})
    .populate("category", "_id name")
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.get("/posts/:id", (req, res) => {
    Post.find({_id: req.params.id})
    .populate("category", "_id name")
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.get("/posts/category/:catId", (req, res) => {
    Post.find({category: {_id: req.params.catId}})
    .populate("category", "_id name")
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.get("/trending-posts", (req, res) => {
    Post.find()
    .sort({numOfLikes: -1})
    .populate("category", "_id name")
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.get("/fresh-stories", (req, res) => {
    Post.find()
    .sort({_id: -1})
    .limit(3)
    .populate("category", "_id name")
    .then((posts) => {
        res.json({posts});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.post("/new-post", (req, res) => {
    const {title, description, imgUrl, category, numOfLikes, isFeatured} = req.body;

    if(!title || !description || !imgUrl || !category || !numOfLikes || !isFeatured) {
        res.json({err: "All fields are required"});
    }

    Category.findOne({ _id: category.id})
    .then((cat) => {
        const post = new Post({
            title,
            description,
            imgUrl,
            category: cat,
            numOfLikes,
            isFeatured
        });
    
        post
        .save()
        .then(() => {
            res.json({msg: "Post Created"});
        })
        .catch((error) => {
            console.log(error);
        });
    })
    .catch(err => {
        console.log(err);
    })
});

module.exports = router;
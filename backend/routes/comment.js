const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
const Post = mongoose.model("Post");

router.get("/comments", (req, res) => {
    Comment.find()
    .populate("post", "_id title")
    .then((comments) => {
        res.json({comments});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.get("/comments/post/:postId", (req, res) => {
    Comment.find({post: {_id: req.params.postId}})
    .populate("post", "_id title")
    .then((comments) => {
        res.json({comments});
    })
    .catch(err => {
        console.log("Post Error : " + err);
    })
});

router.post("/new-comment", (req, res) => {
    const {body, post} = req.body;

    if(!body || !post) {
        res.json({err: "All fields are required"});
    }

    Post.findOne({ _id: post.id})
    .then((post_found) => {
        const comment = new Comment({
            body,
            post: post_found,
        });
    
        comment
        .save()
        .then(() => {
            res.json({msg: "Comment Created"});
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
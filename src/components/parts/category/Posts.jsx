import React from "react";
import Pagination from "./Pagination";
import PostItem from "./PostItem";

const Posts = () => {
    return(
        <div className="col-lg-8">
            <div className="blog-box list-style">
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <Pagination/>
            </div>
        </div>
    );
}

export default Posts;
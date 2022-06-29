import React from "react";
import Header from "../parts/common/Header";
import Footer from "../parts/common/Footer";
import PostDesc from "../parts/single/PostDesc";
import Comment from "../parts/single/Comment";

const Single = () => {
    return(
        <>
        <Header/>
        <section class="blog-section">
			<div class="container">
				<div class="single-post no-sidebar">
                    <PostDesc/>
                    <Comment/>
                </div>
            </div>
        </section>        
        <Footer/>
        </>
    )
}

export default Single;
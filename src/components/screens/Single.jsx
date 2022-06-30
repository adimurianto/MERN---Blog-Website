import React from "react";
import Header from "../parts/common/Header";
import Footer from "../parts/common/Footer";
import PostDesc from "../parts/single/PostDesc";
import Comment from "../parts/single/Comment";

const Single = () => {
    return(
        <>
        <Header/>
        <section className="blog-section">
			<div className="container">
				<div className="single-post no-sidebar">
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
import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Posts from "../parts/Posts";
import Sidebar from "../parts/Sidebar";
import Breadcrumb from "../parts/Breadcrumb";

const Category = () => {
    return(
        <>
        <Header />
        <Breadcrumb/>
        <section class="blog-section">
            <div class="container">
                <div class="row">
                    <Posts/>
                    <Sidebar/>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Category;
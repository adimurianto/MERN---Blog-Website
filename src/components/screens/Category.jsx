import React from "react";
import Header from "../parts/common/Header";
import Footer from "../parts/common/Footer";
import Posts from "../parts/category/Posts";
import Sidebar from "../parts/category/Sidebar";
import Breadcrumb from "../parts/category/Breadcrumb";

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
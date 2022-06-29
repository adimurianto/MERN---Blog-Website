import React, { Component } from "react";
import Header from "../parts/common/Header";
import Slider from "../parts/home/Slider";
import TrendingPosts from "../parts/home/TrendingPosts";
import FreshStories from "../parts/home/FreshStories";
import Footer from "../parts/common/Footer";

const Home = () => {
    return(
        <>
            <Header/>
            <Slider/>
            <TrendingPosts/>
            <FreshStories/>
            <Footer/>
        </>
    )
}

export default Home;
import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";

const Category = () => {
    return(
        <>
            <Header/>
                <div style={{height: '60vh', padding: '3rem'}}>
                    <h1>
                        <center>
                            Category Blog
                        </center>
                    </h1>
                </div>
            <Footer/>
        </>
    )
}

export default Category;
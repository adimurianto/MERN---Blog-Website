import React from "react";
import Header from "../parts/common/Header";
import Footer from "../parts/common/Footer";

const NotFound = () => {
    return(
        <>
        <Header/>
		<section className="page-banner-section">
			<div className="container">
				<center>
					<h1>Page Could Not Be Found</h1>
				</center>
			</div>
		</section>
		<section className="error-section">
			<div className="container">
				<div className="error-box">
					<br/>
					<h1>404</h1>
					<h2>Page Not Found</h2>
					<p>We are sorry. But the page you are looking for cannot be found. </p>
					<a className="button-one" href="/">Go To HomePage</a>
					<br/><br/>
				</div>
			</div>
		</section>
        <Footer/>
        </>
    )
}

export default NotFound;
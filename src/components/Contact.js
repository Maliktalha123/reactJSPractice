import React from "react";
import Home from "./GoToHomePageButton";
import AboutPage from "./GoToAboutPageButton";
import BlogPage from "./GoToBlogPageButton";
import "../App.css";

function Contact() {
  return (
    <div>
      <h1 className="blogHeading">Hello Sir,WElcome to Our Contact Page</h1>
      <Home />
      <AboutPage />
      <BlogPage />
    </div>
  );
}

export default Contact;

import React from "react";
import Home from "../home/home";
import InfoCards from "../infocards/InfoCards";
import AboutUs from "../aboutus/aboutus";
import Footer from "../footer/Footer";

const Main: React.FunctionComponent = () => {
  return (
    <>
      <Home />
      <InfoCards />
      <AboutUs />
      <Footer />
    </>
  );
};

export default Main;

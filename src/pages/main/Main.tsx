import { Grid } from "@mui/material";
import React from "react";
import Home from "../home/home";
import InfoCards from "../infocards/InfoCards";
import AboutUs from "../aboutus/aboutus";

const Main: React.FunctionComponent = () => {
  return (
    <Grid>
      <Home />
      <InfoCards />
      <AboutUs />
    </Grid>
  );
};

export default Main;

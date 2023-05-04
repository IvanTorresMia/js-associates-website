import { Grid } from "@mui/material";
import React from "react";
import Home from "../home/home";
import InfoCards from "../infocards/InfoCards";

const Main: React.FunctionComponent = () => {
  return (
    <Grid>
      <Home />
      <InfoCards />
    </Grid>
  );
};

export default Main;

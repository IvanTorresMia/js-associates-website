import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import customStyles from "../../styles/customStyles.module.css";
import { Link } from "react-scroll";

const Layout: React.FunctionComponent = () => {
  return (
    <Grid>
      <Box
        position={"fixed"}
        left={"0"}
        right={"0"}
        display={"flex"}
        zIndex={"10"}
        justifyContent={"space-between"}
        padding={"15px"}
        className={`${customStyles.boxShadow} ${customStyles.backgroundWhite}`}
      >
        <Box marginLeft={"10px"} marginTop={"2px"}>
          <Typography variant="h6">JB Associates</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box padding={"10px"}>
            <Link
              smooth={true}
              hashSpy={true}
              duration={500}
              offset={-100}
              to="home"
            >
              Home
            </Link>
          </Box>
          <Box padding={"10px"}>
            <Link
              smooth={true}
              hashSpy={true}
              duration={500}
              offset={-100}
              to="learn_more"
            >
              What we do
            </Link>
          </Box>
          <Box padding={"10px"}>
            <Link
              smooth={true}
              hashSpy={true}
              duration={500}
              offset={-50}
              to="aboutus"
            >
              About us
            </Link>
          </Box>
        </Box>
      </Box>
      <Outlet />
    </Grid>
  );
};

export default Layout;

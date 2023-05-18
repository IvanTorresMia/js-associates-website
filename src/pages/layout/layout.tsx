import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import customStyles from "../../styles/customStyles.module.css";
import { Link } from "react-scroll";
import jbLogo from "../../assets/images/jb_logo.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import { colors } from "../../constants/colors";

const Layout: React.FunctionComponent = () => {
  const [navColor, setNavColor] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
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
        bgcolor={navColor ? colors.primaryBlue : ""}
        style={{ transition: "0.5s" }}
      >
        <Box width={"60px"} marginLeft={"10px"} marginTop={"2px"}>
          <img style={{ width: "100%" }} src={jbLogo} alt="jb associates" />
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
          <Box padding={"10px"} onClick={() => navigate("/jobs")}>
            Jobs
          </Box>
        </Box>
      </Box>
      <Outlet />
    </Grid>
  );
};

export default Layout;

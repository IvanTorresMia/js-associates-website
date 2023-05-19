import { Button, Grid, Typography, createTheme } from "@mui/material";
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
              <Typography color={navColor ? colors.primaryWhite : ""}>
                Home
              </Typography>
            </Link>
          </Box>
          <Box padding={"10px"}>
            <Link
              smooth={true}
              hashSpy={true}
              duration={500}
              offset={-73}
              to="learn_more"
            >
              <Typography color={navColor ? colors.primaryWhite : ""}>
                What we do
              </Typography>
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
              <Typography color={navColor ? colors.primaryWhite : ""}>
                About us
              </Typography>
            </Link>
          </Box>
          <Box padding={"10px"} onClick={() => navigate("/jobs")}>
            <Typography color={navColor ? colors.primaryWhite : ""}>
              Jobs
            </Typography>
          </Box>
        </Box>
      </Box>
      <Outlet />
    </Grid>
  );
};

export default Layout;

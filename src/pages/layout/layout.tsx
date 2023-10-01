import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { colors } from "../../constants/colors";
import { theme } from "../../theme";

const Layout: React.FunctionComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [navColor, setNavColor] = useState(false);
  const [currentActiveLink, setCurrentActiveLink] = useState<string>("home");

  const useReactLinks = location.pathname === "/jobs";
  console.log(window.location.href);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }

    const currentPath = window.location.href.split("#")[1];
    setCurrentActiveLink(currentPath);
  };

  window.addEventListener("scroll", changeNavbarColor);

  const underlineColor = navColor ? colors.primaryWhite : colors.primary;
  return (
    <Grid>
      <Box
        position={useReactLinks ? "relative" : "fixed"}
        left={"0"}
        right={"0"}
        display={"flex"}
        zIndex={"10"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={theme.spacing(2)}
        bgcolor={navColor ? colors.primary : ""}
        style={{ transition: "0.5s" }}
      >
        <Box width={theme.spacing(30)} marginLeft={"10px"} marginTop={"2px"}>
          <Button
            variant="text"
            style={{ textTransform: "none" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <Typography
              variant="h3"
              color={`${navColor ? "secondary" : "primary"}`}
            >
              {" "}
              JB associates
            </Typography>
          </Button>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {!useReactLinks && (
            <>
              <Box padding={"10px"}>
                <Link
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  offset={-90}
                  to="home"
                >
                  <Typography
                    variant="subtitle1"
                    color={navColor ? colors.primaryWhite : ""}
                    borderBottom={
                      currentActiveLink === "home"
                        ? `1px solid ${underlineColor}`
                        : ""
                    }
                  >
                    Home
                  </Typography>
                </Link>
              </Box>

              <Box padding={"10px"}>
                <Link
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  offset={-70}
                  to="learn_more"
                >
                  <Typography
                    variant="subtitle1"
                    color={navColor ? colors.primaryWhite : ""}
                    borderBottom={
                      currentActiveLink === "learn_more"
                        ? `1px solid ${underlineColor}`
                        : ""
                    }
                  >
                    What we do
                  </Typography>
                </Link>
              </Box>
              <Box padding={"10px"}>
                <Link
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  offset={-70}
                  to="aboutus"
                >
                  <Typography
                    variant="subtitle1"
                    color={navColor ? colors.primaryWhite : ""}
                    borderBottom={
                      currentActiveLink === "aboutus"
                        ? `1px solid ${underlineColor}`
                        : ""
                    }
                  >
                    About us
                  </Typography>
                </Link>
              </Box>
              <Box padding={"10px"} onClick={() => navigate("/jobs")}>
                <Typography
                  variant="subtitle1"
                  color={navColor ? colors.primaryWhite : ""}
                >
                  Careers
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Outlet />
    </Grid>
  );
};

export default Layout;

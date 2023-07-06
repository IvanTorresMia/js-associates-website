import { Button, Divider, Grid, Typography } from "@mui/material";
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

  const useReactLinks = location.pathname === "/jobs";

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
        padding={theme.spacing(2)}
        bgcolor={navColor ? colors.primary : ""}
        style={{ transition: "0.5s" }}
      >
        <Box width={theme.spacing(30)} marginLeft={"10px"} marginTop={"2px"}>
          {useReactLinks ? (
            <Typography
              paddingTop={theme.spacing(2)}
              variant="h3"
              color={`${navColor ? "secondary" : "primary"}`}
            >
              JB associates
            </Typography>
          ) : (
            <Typography
              variant="h3"
              color={`${navColor ? "secondary" : "primary"}`}
            >
              JB associates
            </Typography>
          )}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          // alignItems={"center"}
        >
          {useReactLinks ? (
            <>
              <Box padding={"20px"}>
                <Button
                  variant="outlined"
                  color={navColor ? "secondary" : "primary"}
                  onClick={() => navigate("/")}
                >
                  <Typography variant="subtitle1">Back to home</Typography>
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box padding={"10px"}>
                <Link
                  smooth={true}
                  hashSpy={true}
                  duration={500}
                  offset={-100}
                  to="home"
                >
                  <Typography
                    variant="subtitle1"
                    color={navColor ? colors.primaryWhite : ""}
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
                  offset={-80}
                  to="learn_more"
                >
                  <Typography
                    variant="subtitle1"
                    color={navColor ? colors.primaryWhite : ""}
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
                  offset={-80}
                  to="aboutus"
                >
                  <Typography
                    variant="subtitle1"
                    color={navColor ? colors.primaryWhite : ""}
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
                  Jobs
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

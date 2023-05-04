import { Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import customStyles from "../../styles/customStyles.module.css";

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
          <Link href="/" padding={"12px"} underline="none" color="inherit">
            Home
          </Link>
          <Link
            href="/about-us"
            padding={"12px"}
            underline="none"
            color="inherit"
          >
            About us
          </Link>
          <Link padding={"12px"} underline="none" color="inherit">
            What we do
          </Link>
        </Box>
      </Box>
      <Outlet />
    </Grid>
  );
};

export default Layout;

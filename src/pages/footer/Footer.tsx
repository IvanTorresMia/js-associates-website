import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FunctionComponent = () => {
  return (
    <Grid
      marginTop={"60px"}
      height={"300px"}
      style={{ backgroundColor: colors.primaryBlue }}
    >
      <Box>
        <Typography
          padding={"30px"}
          textAlign={"center"}
          variant="h3"
          color={colors.primaryWhite}
        >
          A company you can trust
        </Typography>
      </Box>
      <Typography
        textAlign={"center"}
        color={colors.primaryWhite}
        variant="subtitle1"
      >
        Checkout or social media!
      </Typography>
      <Box display={"flex"} justifyContent={"center"}>
        <Box padding={"10px"}>
          <LinkedInIcon />
        </Box>
        <Box padding={"10px"}>
          <TwitterIcon />
        </Box>
      </Box>
      <Box
        borderTop={"1.5px solid black"}
        width={"95%"}
        margin={"60px auto 0 auto"}
      ></Box>
      <Typography
        marginTop={"15px"}
        textAlign={"center"}
        variant="subtitle2"
        style={{ fontSize: "12px", fontWeight: "500" }}
      >
        Copyright © JB Associates Inc. 2023. All Rights Reserved.&nbsp; |&nbsp;{" "}
        <a href="google.com" className="primary-black-text">
          Privacy Policy
        </a>{" "}
        &nbsp;|&nbsp;{" "}
        <a className="primary-black-text" href="mailto:">
          Contact Us
        </a>
      </Typography>
    </Grid>
  );
};

export default Footer;

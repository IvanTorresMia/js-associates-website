import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import heroImage from "../../assets/images/jb_hero.jpeg";
import { colors } from "../../constants/colors";
import customStyles from "../../styles/customStyles.module.css";

const Home: React.FunctionComponent = () => {
  return (
    <Box>
      <Grid
        className={`${customStyles.heroImage}`}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        height={"600px"}
      >
        <Typography
          textAlign={"center"}
          variant="h1"
          color={colors.primaryWhite}
        >
          JB Associates
        </Typography>
        <Typography
          textAlign={"center"}
          variant="h4"
          color={colors.primaryWhite}
        >
          Let us help you
        </Typography>

        <Box textAlign={"center"} marginTop={"15px"}>
          <Button
            variant="contained"
            style={{ backgroundColor: colors.primaryBlue }}
          >
            Get started
          </Button>
          <Box textAlign={"center"} width={"40%"} margin={"20px auto"}>
            <Typography
              textAlign={"center"}
              variant="h4"
              color={colors.primaryWhite}
            >
              Executive Search & Recruitment Wealth Management, Legal and
              Financial Services
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};
export default Home;

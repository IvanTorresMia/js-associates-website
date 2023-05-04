import { Button, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomePageIcon from "../../components/icons/homepage_icon";
import { colors } from "../../constants/colors";
import customStyles from "../../styles/customStyles.module.css";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";

const buttonStyle = {
  backgroundColor: colors.primaryBlue,
  borderRadius: "30px",
};

const Home: React.FunctionComponent = () => {
  return (
    <Box display={"flex"}>
      <Box display={"flex"} width={"50%"}>
        <Box width={"80%"} margin={"auto"}>
          {" "}
          <Typography variant="h2">
            Bridging the gap between talent and opportunity and finance
          </Typography>
          <Box marginTop={"25px"}>
            <Button style={buttonStyle} variant="contained">
              Schedule a meeting!
            </Button>
          </Box>
          <Box marginTop={"20px"} display={"flex"}>
            <Link>Schedule a meeting!</Link>
            <Box marginTop={"-3px"} marginLeft={"6px"}>
              <PersonalVideoIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width={"50%"}
        display={"flex"}
        justifyContent={"center"}
        paddingTop={"130px"}
      >
        <HomePageIcon />
      </Box>
    </Box>
  );
};
export default Home;

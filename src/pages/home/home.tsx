import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomePageIcon from "../../components/icons/homepage_icon";
import { colors } from "../../constants/colors";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-scroll";

const buttonStyle = {
  backgroundColor: colors.primaryBlue,
  borderRadius: "30px",
};

const Home: React.FunctionComponent = () => {
  return (
    <Grid height={"100vh"} id="home">
      <Box display={"flex"} height={"90%"}>
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
              <Button variant="text">Schedule a meeting!</Button>
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
      <Box display={"flex"} justifyContent={"center"}>
        <Link
          smooth={true}
          hashSpy={true}
          duration={500}
          offset={-100}
          to="learn_more"
        >
          <Box display={"flex"}>
            <Typography color={colors.primaryBlue}>Learn More</Typography>
            <Box marginBottom={"-6px"} marginLeft={"5px"}>
              <ArrowDownwardIcon style={{ color: colors.primaryBlue }} />
            </Box>
          </Box>
        </Link>
      </Box>
    </Grid>
  );
};
export default Home;

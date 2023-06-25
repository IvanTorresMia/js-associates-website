import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { colors } from "../../constants/colors";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link } from "react-scroll";
import HomePageIcon from "../../components/icons/homepage_icon";
import customStyles from "../../styles/customStyles.module.css";
import { theme } from "../../theme";
import { MainLogo } from "../../components/icons/logo";

const buttonStyle = {
  backgroundColor: colors.primary,
  borderRadius: "30px",
};

const colorGradient = {
  backgroundImage: `linear-gradient(to right, #fff 0%, ${colors.primary} 100%)`,
};

const Home: React.FunctionComponent = () => {
  const largeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid
      container
      style={colorGradient}
      paddingTop={largeScreen ? theme.spacing(20) : theme.spacing(8)}
      id="home"
    >
      <Grid item xs={12} sm={12} md={12} lg={6} margin={"auto"}>
        {" "}
        <Box width={"80%"} margin={"auto"}>
          <Typography variant="h2">
            Bridging the gap between talent and opportunity and finance
          </Typography>
          <Box marginTop={"25px"}>
            <Button style={buttonStyle} variant="contained">
              Learn more
            </Button>
          </Box>
          <Box marginTop={"20px"} display={"flex"}>
            <Button variant="text" style={{ color: colors.primary }}>
              Schedule a meeting!
            </Button>
            <Box>
              <PersonalVideoIcon
                style={{ marginBottom: "-14px", color: colors.primary }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={6}
        display={"flex"}
        justifyContent={"center"}
      >
       <MainLogo width="600px" height="600px" color={colors.primary} />
      </Grid>

      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        height={"130px"}
      >
        <Link
          smooth={true}
          hashSpy={true}
          duration={500}
          offset={-100}
          to="learn_more"
        >
          <Box display={"flex"}>
            <Typography color={colors.primary}>Learn More</Typography>
            <Box marginLeft={"5px"}>
              <ArrowDownwardIcon style={{ color: colors.primary }} />
            </Box>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};
export default Home;

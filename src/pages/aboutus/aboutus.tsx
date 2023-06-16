import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import daniel from "../../assets/images/daniel.png";
import byron from "../../assets/images/byron.png";

const AboutUs: React.FunctionComponent = () => {
  return (
    <Box paddingTop={"40px"} id="aboutus">
      <Typography marginBottom={"50px"} variant="h1" textAlign={"center"}>
        Meet the team!
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"80%"}
        margin={"auto"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-evenly"}
          marginBottom={"50px"}
        >
          <Box width={"50%"} paddingLeft={"100px"}>
            <Typography variant="h2">Daniel Vargas</Typography>
            <Divider />
            <Typography
              marginBottom={"20px"}
              marginTop={"20px"}
              variant="subtitle1"
            >
              I am Daniel, I crush at drums and do other stuff
            </Typography>
            <Typography variant="subtitle2">
              {" "}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Box>

          <Box width={"50%"}>
            <img style={{ width: "100%" }} src={daniel} alt="daniel vargas" />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-evenly"}>
          <Box width={"50%"}>
            <img style={{ width: "100%" }} src={byron} alt="daniel vargas" />
          </Box>
          <Box width={"50%"} paddingRight={"100px"}>
            <Typography variant="h2">Byron Vargas</Typography>
            <Divider />
            <Typography
              marginBottom={"20px"}
              marginTop={"20px"}
              variant="subtitle1"
            >
              I am Byron, CEO and unfortunately a Barcelona fan
            </Typography>
            <Typography variant="subtitle2">
              {" "}
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;

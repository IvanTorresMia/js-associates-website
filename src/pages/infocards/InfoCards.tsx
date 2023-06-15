import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "../../constants/colors";

const iconStyle = {
  fontSize: "100px",
};

const colorGradient = {
  backgroundImage: `linear-gradient(to right, #fff 0%, ${colors.primary} 100%)`,
};

const cardInfo = [
  {
    title: "Client-Centered",
    text: "Your needs at the heart of our process, customized solutions that put you first.",
    icon: <PersonIcon style={iconStyle} />,
  },
  {
    title: "Engaged Search",
    text: "Active recruiting for exceptional talent. Your path to engaged, committed candidates.",
    icon: <SearchIcon style={iconStyle} />,
  },
  {
    title: "Long-Term Partnerships",
    text: "Building relationships that last, partnering with you for sustained success.",
    icon: <HandshakeIcon style={iconStyle} />,
  },
];

const InfoCards: React.FunctionComponent = () => {
  return (
    <Grid
      container
      paddingTop={"30px"}
      id="learn_more"
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <Typography textAlign={"center"} variant="h3">
          Let use help you!
        </Typography>
      </Grid>

      {cardInfo.map((card, i) => (
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          key={i}
          margin={"80px 20px"}
          width={"20%"}
          height={"250px"}
        >
          <Paper elevation={0} style={{ height: "100%" }}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box>{card.icon}</Box>
              <Typography variant="h2">{card.title}</Typography>
              <Divider />
              <Typography textAlign={"center"} variant="subtitle2">
                {card.text}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoCards;

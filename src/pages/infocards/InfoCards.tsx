import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CoPresentIcon from "@mui/icons-material/CoPresent";

const cardInfo = [
  {
    title: "Client-Centered",
    text: "Your needs at the heart of our process, customized solutions that put you first.",
    icon: <AccessAlarmsIcon />,
  },
  {
    title: "Engaged Search",
    text: "Active recruiting for exceptional talent. Your path to engaged, committed candidates.",
    icon: <CoPresentIcon />,
  },
  {
    title: "Long-Term Partnerships",
    text: "Building relationships that last, partnering with you for sustained success.",
    icon: <CoffeeIcon />,
  },
];

const InfoCards: React.FunctionComponent = () => {
  return (
    <Grid
      paddingTop={"30px"}
      container
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
          margin={"20px"}
          width={"20%"}
          height={"250px"}
        >
          <Card style={{ height: "100%" }}>
            <CardContent>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box>{card.icon}</Box>
                <Typography variant="subtitle1">{card.title}</Typography>
                <Divider />
                <Typography textAlign={"center"} variant="subtitle2">{card.text}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoCards;

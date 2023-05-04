import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CoPresentIcon from "@mui/icons-material/CoPresent";

const cardInfo = [
  {
    title: "We are fast",
    text: "We are some how fast idk",
    icon: <AccessAlarmsIcon />,
  },
  {
    title: "We Partner with you",
    text: "We somehow partner with you",
    icon: <CoPresentIcon />,
  },
  {
    title: "Let's grab coffee",
    text: "What I should say to Hosanna but I'm chickening out",
    icon: <CoffeeIcon />,
  },
];

const InfoCards: React.FunctionComponent = () => {
  return (
    <Box>
      <Typography textAlign={"center"} variant="h3">
        Let use help you!
      </Typography>
      <Box
        display={"flex"}
        width={"80%"}
        margin={"auto"}
        justifyContent={"center"}
        height={400}
        alignItems={"center"}
      >
        {cardInfo.map((card, i) => (
          <Box key={i} margin={"20px"} width={"20%"} height={"250px"}>
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
                  <Typography variant="subtitle2">{card.text}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default InfoCards;

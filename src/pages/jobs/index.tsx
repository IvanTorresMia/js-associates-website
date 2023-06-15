import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../constants/colors";
import { theme } from "../../theme";
import WorkingPeopleImage from "../../assets/images/wokriing_people_jb.jpeg";
import Footer from "../footer/Footer";

interface Props {
  id: number;
  title: string;
  description: string;
  longDescription: string;
}

const jobsAvailable: Props[] = [
  {
    id: 1,
    title: "Sales force",
    description: "you will sell some stuff",
    longDescription: "you will sell even more stuff so go crazy with studying",
  },
  {
    id: 1,
    title: "Sales force",
    description: "you will sell some stuff",
    longDescription: "you will sell even more stuff so go crazy with studying",
  },
  {
    id: 1,
    title: "Sales force",
    description: "you will sell some stuff",
    longDescription: "you will sell even more stuff so go crazy with studying",
  },
  {
    id: 1,
    title: "Sales force",
    description: "you will sell some stuff",
    longDescription: "you will sell even more stuff so go crazy with studying",
  },
];

// service Id service_39bm7as

export const Jobs: React.FunctionComponent = () => {
  return (
    <>
      <Grid container paddingTop={theme.spacing(15)} spacing={2}>
        <Grid
          item
          xs={12}
          style={{ backgroundColor: colors.primary }}
          padding={theme.spacing(4)}
        >
          <Typography textAlign={"center"} color={"secondary"} variant="h1">
            Jobs
          </Typography>
          <Divider />
          <Typography
            paddingTop={theme.spacing(2)}
            textAlign={"center"}
            color={"secondary"}
            variant="subtitle1"
          >
            Join out team and be part of world domination
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} padding={theme.spacing(8)}>
        <Grid item xs={12} xl={6}>
          <img src={WorkingPeopleImage} alt="people working" />
        </Grid>
        <Grid item xs={12} xl={6}>
          <Typography variant="h2">Join us!</Typography>
          <Divider />
          <Typography variant="subtitle2">
            Join the work force and become a sick asset
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6} padding={theme.spacing(8)}>
        <Grid item xs={12}>
          <Typography variant="h1">Positions available</Typography>
        </Grid>

        {jobsAvailable.map((job, i) => (
          <>
            <Grid item xs={8} display={"flex"} justifyContent={"space-between"}>
              <Typography variant="subtitle1" paddingRight={theme.spacing(2)}>
                {job.title}
              </Typography>
              <Typography variant="subtitle2">{job.description}</Typography>
              <input type="file" />
            </Grid>
            <Grid item xs={8}>
              <Divider />
            </Grid>
          </>
        ))}
      </Grid>
      <Footer />
    </>
  );
};

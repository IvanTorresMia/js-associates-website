import { Grid, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../constants/colors";

export const Jobs: React.FunctionComponent = () => {
  return (
    <Grid container paddingTop={"75px"}>
      <Grid item xs={12} style={{backgroundColor: colors.primaryBlue}}>
        <Typography color={colors.primaryWhite} textAlign={"center"} variant="h1">
          Jobs
        </Typography>
      </Grid>
    </Grid>
  );
};

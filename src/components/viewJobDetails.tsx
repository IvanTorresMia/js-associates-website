import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Jobs } from "../types/jobTypes";
import { theme } from "../theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IProps {
  jobDetails: Jobs;
  onClose: () => void;
}

// TODO: implement email js to submit resume and a form.
export function ViewJobDetails({ jobDetails, onClose }: IProps) {
  const [applyingDetails, setApplyingDetails] = useState({
    firstName: "",
    lastName: "",
    coverLetter: "",
    resume: null,
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  console.log(jobDetails);

  const onValidSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Box display={"flex"} alignItems={"center"} marginLeft={theme.spacing(4)}>
        <Box>
          <ArrowBackIcon color="primary" fontSize="small" />
        </Box>

        <Button onClick={onClose}>Back to all jobs</Button>
      </Box>
      <Grid container spacing={2} width={theme.spacing(80)} margin={"auto"}>
        <Grid item xs={12}>
          <Typography textAlign={"center"} variant="h1">
            {jobDetails.title}
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs={12} paddingBottom={theme.spacing(4)}>
          <Typography textAlign={"center"} variant="subtitle1">
            Description
          </Typography>
          <Divider />
          <Typography textAlign={"center"} variant="subtitle2">
            {jobDetails.longDescription}
          </Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onValidSubmit)}>
        <Grid
          container
          width={theme.spacing(80)}
          margin={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          spacing={2}
        >
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              id="outlined-required"
              label="First name"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              id="outlined-required"
              label="Last name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              id="outlined-required"
              label="Anything you'd like to share"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined">Upload Resume</Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

import React from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { app } from "..";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { theme } from "../theme";
import { useNavigate } from "react-router-dom";

export default function CreateJob() {
  const navigate = useNavigate();
  const db = getFirestore(app);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      longDescription: "",
    },
  });

  const onValidSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    await addDoc(collection(db, "jobs"), data);
    navigate("/admin-portal");
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)}>
      <Grid
        container
        spacing={2}
        width={"40%"}
        margin={"auto"}
        padding={theme.spacing(8)}
      >
        <Grid item xs={12}>
          <Typography textAlign={"center"} variant="h1">
            Create Job
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Account name is required" }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                inputRef={ref}
                error={!!errors.title}
                label="Title"
                type="text"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="description"
            control={control}
            rules={{ required: "Account name is required" }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                inputRef={ref}
                error={!!errors.description}
                label="Description"
                type="text"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="longDescription"
            control={control}
            rules={{ required: "Account name is required" }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                inputRef={ref}
                error={!!errors.longDescription}
                label="Long description"
                type="text"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

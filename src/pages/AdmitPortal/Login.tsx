import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { theme } from "../../theme";
import { app } from "../../index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

type InputType = {
  email: string;
  password: string;
  required: string;
};

const LoginToPortal: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>();

  const onValidSubmit: SubmitHandler<InputType> = async (data) => {
    console.log(data);

    try {
      const signIn = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (signIn.user) {
        navigate("/admin-portal");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onValidSubmit)}
      style={{ width: "80%", margin: "auto", padding: theme.spacing(4) }}
    >
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={12} padding={theme.spacing(4)}>
          <Typography textAlign={"center"} variant="h1">
            Sign in to portal
          </Typography>
        </Grid>

        <Grid item xs={7}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Account name is required" }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                inputRef={ref}
                error={!!errors.email}
                label="Account name"
                type="text"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={7}>
          <Controller
            name="password"
            control={control}
            rules={{ required: "Account name is required" }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                inputRef={ref}
                error={!!errors.password}
                label="Account password"
                type="text"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={7}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginToPortal;

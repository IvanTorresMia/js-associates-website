import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Jobs } from "../types/jobTypes";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { theme } from "../theme";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "..";
interface IProps {
  jobDetails: Jobs;
  onClose: () => void;
}

export default function ViewDetailsAdmin({ jobDetails, onClose }: IProps) {
  const db = getFirestore(app);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: jobDetails.title,
      description: jobDetails.description,
      longDescription: jobDetails.longDescription,
    },
  });

  const onValidSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    await updateDoc(doc(db, "jobs", jobDetails.id), data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit)}>
      <Box
        paddingTop={theme.spacing(17)}
        display={"flex"}
        alignItems={"center"}
        marginLeft={theme.spacing(8)}
      >
        <Box>
          <ArrowBackIcon color="primary" fontSize="small" />
        </Box>

        <Button onClick={onClose}>Back to all jobs</Button>
      </Box>

      <Grid container spacing={2} width={"40%"} margin={"auto"}>
        <Grid item xs={12} paddingBottom={theme.spacing(3)}>
          <Typography color={"primary"} textAlign={"center"} variant="h1">
            Job details
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

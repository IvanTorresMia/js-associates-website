import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { useAuth } from "../../providers/authProvider";
import React, { useCallback, useEffect, useState } from "react";
import { app } from "../../index";
import { theme } from "../../theme";

// TODO: create admin portal
type Jobs = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
};

const AdminPortal: React.FunctionComponent = () => {
  const [jobsAvailable, setJobsAvailable] = useState<Jobs[] | []>([]);
  const user = useAuth();

  const fetchJobs = useCallback(() => {
    const db = getFirestore(app);

    onSnapshot(query(collection(db, "jobs")), (snapshot) => {
      const list: Jobs[] = [];
      for (const job of snapshot.docs) {
        const data = { ...(job.data() as any), id: job.id };
        console.log(data);
        list.push(data);
      }
      console.log(list);
      console.log("hello");

      setJobsAvailable(list);
    });
  }, []);

  useEffect(() => {
    return () => fetchJobs();
  }, [fetchJobs]);

  return (
    <Grid container>
      <Grid item xs={12} paddingTop={theme.spacing(12)}>
        <Typography textAlign={"center"} variant="h1">
          Welcome admin
        </Typography>
      </Grid>

      {/* TODO: create form to add */}

      {jobsAvailable.map((job, i) => (
        <Grid item xs={12}>
          <Box
            padding={theme.spacing(4)}
            display={"flex"}
            alignItems={"center"}
          >
            <Typography variant="subtitle1" paddingRight={theme.spacing(20)}>
              {job.title}
            </Typography>
            <Typography variant="subtitle2" paddingRight={theme.spacing(20)}>
              {job.description}
            </Typography>
            <Button variant="outlined">Delete</Button>
          </Box>
          <Divider />
        </Grid>
      ))}
    </Grid>
  );
};

export default AdminPortal;

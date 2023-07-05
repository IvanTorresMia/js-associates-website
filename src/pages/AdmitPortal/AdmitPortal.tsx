import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Box, Button, Divider, Grid, Modal, Typography } from "@mui/material";
import { useAuth } from "../../providers/authProvider";
import React, { useCallback, useEffect, useState } from "react";
import { app } from "../../index";
import { theme } from "../../theme";
import { colors } from "../../constants/colors";
import ViewDetailsAdmin from "../../components/ViewDetailsAdmin";
import { Jobs } from "../../types/jobTypes";
import { useNavigate } from "react-router-dom";
const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// TODO: create admin portal
const AdminPortal: React.FunctionComponent = () => {
  const [jobsAvailable, setJobsAvailable] = useState<Jobs[] | []>([]);
  const [showJobDetails, setShowPlanDetails] = useState<Jobs | null>(null);
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const db = getFirestore(app);
  const navigate = useNavigate();

  const fetchJobs = useCallback(() => {
    onSnapshot(query(collection(db, "jobs")), (snapshot) => {
      const list: Jobs[] = [];
      for (const job of snapshot.docs) {
        const data = { ...(job.data() as any), id: job.id };
        list.push(data);
      }
      console.log(list);
      console.log("hello");

      setJobsAvailable(list);
    });
  }, []);

  const handleViewDetails = (job: Jobs) => {
    setShowPlanDetails(job);
  };

  const handleSetUpDelete = (id: string) => {
    handleOpen();
    setCurrentJobId(id);
  };

  const handleCancel = () => {
    setCurrentJobId(null);
    handleClose();
  };
  const handleDelete = async () => {
    if (!currentJobId) return;
    console.log(currentJobId);
    await deleteDoc(doc(db, "jobs", currentJobId));
    handleClose();
  };

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  if (showJobDetails) {
    return (
      <ViewDetailsAdmin
        jobDetails={showJobDetails}
        onClose={() => setShowPlanDetails(null)}
      />
    );
  }

  if (jobsAvailable.length === 0) return <Grid>No jobs created</Grid>;

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        padding={theme.spacing(2)}
      >
        <Box paddingRight={theme.spacing(2)}>
          <Button variant="contained" onClick={() => navigate("/create-job")}>
            Create a new listing
          </Button>
        </Box>
        <Box>
          <Button variant="outlined">Log out</Button>
        </Box>
      </Box>
      <Grid container padding={theme.spacing(8)} spacing={2}>
        <Grid item xs={12} paddingTop={theme.spacing(12)}>
          <Typography color={"primary"} textAlign={"center"} variant="h1">
            Welcome admin
          </Typography>
        </Grid>
        <Grid item xs={12} paddingTop={theme.spacing(8)}>
          <Typography textAlign={"center"} variant="h3">
            Current Job Listings
          </Typography>
        </Grid>
      </Grid>

      {jobsAvailable.map((job, i) => (
        <Grid
          container
          width={"80%"}
          margin={"auto"}
          justifyContent={"space-around"}
          alignItems={"center"}
          padding={theme.spacing(2)}
        >
          <Grid item xs={12} lg={4} padding={theme.spacing(2)}>
            <Typography
              color={"primary"}
              variant="h3"
              paddingRight={theme.spacing(20)}
            >
              {job.title}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4} padding={theme.spacing(2)}>
            <Typography variant="body1" paddingRight={theme.spacing(20)}>
              {job.description}
            </Typography>
          </Grid>
          <Grid item xs={12} lg={4} padding={theme.spacing(2)}>
            <Button
              style={{ marginRight: theme.spacing(2) }}
              color="error"
              variant="outlined"
              onClick={() => handleSetUpDelete(job.id)}
            >
              Delete
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleViewDetails(job)}
            >
              View
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
      ))}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="subtitle1" component="h2">
            Are you sure you want to delete this listing?
          </Typography>
          <Box display={"flex"} paddingTop={theme.spacing(2)}>
            <Box paddingRight={theme.spacing(2)}>
              <Button variant="outlined" onClick={handleCancel}>
                Cancel
              </Button>
            </Box>

            <Box>
              <Button variant="contained" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AdminPortal;

import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../constants/colors";

export const Jobs: React.FunctionComponent = () => {
  const [fileBase64, setFileBase64] = useState<string>("");

  function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }

  const testFile = () => {
    const formData = new FormData();

    formData.append("file", fileBase64);

    console.log(formData);
  };
  return (
    <Grid container paddingTop={"75px"}>
      <Grid item xs={12} style={{ backgroundColor: colors.primaryBlue }}>
        <Typography
          color={colors.primaryWhite}
          textAlign={"center"}
          variant="h1"
        >
          Jobs
        </Typography>
        <input type="file" onChange={(e) => convertFile(e.target.files)} />
        <Button onClick={testFile} variant="contained">
          Test file submit
        </Button>
      </Grid>

      {fileBase64.indexOf("application/pdf") > -1 && (
        <embed src={fileBase64} width="800px" height="2100px" />
      )}
    </Grid>
  );
};

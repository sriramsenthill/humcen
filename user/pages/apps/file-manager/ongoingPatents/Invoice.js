import React from "react";
import Link from "next/link";
import styles from "@/styles/Patents.module.css";
import style from "@/styles/PageTitle.module.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { jobData } from "./patentData";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/system";
import { OpenInBrowserOutlined } from "@mui/icons-material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  width: "120%",
  height: "60px",
  borderRadius: "100px",
  marginBottom: "30px",
  background: "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
  "&:hover": {
    background: "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
  },
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "400",
}));

const Invoice = ({ jobNumber }) => {
  const job = jobData.find((job) => job.jobNumber === "DEF456");

  if (!job) {
    return <div>No job found with the provided job number.</div>;
  }

  const {
    jobName,
    patentType,
    customerName,
    partnerName,
    location,
    budget,
    assigned,
    status,
  } = job;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          border: "1px solid black",
          p: "0.5% 0.5%",
          mb: "15px",
          width: "100%",
        }}
      >
        <Grid>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td className={styles.label} style={{ padding: "5px" }}>
                  Patent Type
                </td>
                <td className={styles.label} style={{ padding: "5px" }}>
                  Customer Name
                </td>
                <td className={styles.label} style={{ padding: "5px" }}>
                  Partner Name
                </td>
                <td className={styles.label} style={{ padding: "5px" }}>
                  Location
                </td>
                <td className={styles.label} style={{ padding: "5px" }}>
                  Budget
                </td>
                <td className={styles.label} style={{ padding: "5px" }}>
                  Assigned
                </td>
                <td className={styles.label} style={{ padding: "5px" }}>
                  Status
                </td>
                <td className={styles.label} style={{ padding: "5px" }}>
                  Approval
                </td>
                <td
                  className={styles.label}
                  style={{ padding: "5px" }}
                  rowSpan={2}
                >
                  <Button
                    sx={{
                      background: "#00ACF6",
                      color: "white",
                      borderRadius: "100px",
                      width: "100%",
                      height: "80%",
                      textTransform: "none",
                    }}
                  >
                    Download Drafts
                  </Button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "5px" }}>{patentType}</td>
                <td style={{ padding: "5px" }}>{customerName}</td>
                <td style={{ padding: "5px" }}>{partnerName}</td>
                <td style={{ padding: "5px" }}>{location}</td>
                <td style={{ padding: "5px" }}>{budget}</td>
                <td style={{ padding: "5px" }}>{assigned}</td>
                <td style={{ padding: "5px" }}>{status}</td>
                <td style={{ padding: "5px" }}>
                  <CheckCircleIcon color="success" />
                  <CancelIcon
                    sx={{ color: "#D9000D" }}
                    onClick={handleClickOpen}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Type your reasons to inform the IP Partner</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            placeholder="Type your reasons"
          />
        </DialogContent>
        <DialogActions>
          <ColorButton sx={{ width: "15%" }} onClick={handleClose}>
            Submit
          </ColorButton>
        </DialogActions>
      </Dialog>
      ;
    </>
  );
};

export default Invoice;

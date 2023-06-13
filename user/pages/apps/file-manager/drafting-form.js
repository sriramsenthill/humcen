import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import style from "@/styles/PageTitle.module.css";
import LeftSidebar from "@/components/Email/LeftSidebar";
import EmailLists from "@/components/Email/EmailLists";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import SearchForm from "@/components/_App/TopNavbar/SearchForm";
import styles from "@/styles/patent-job.module.css";
import { Button, ButtonProps, Card, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import { Route } from "react-router-dom";
import DefaultSelect from "@/components/Forms/AdvancedElements/DefaultSelect";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import UploadMultipleFiles from "@/components/Forms/FileUploader/UploadMultipleFiles";
import { Checkbox } from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

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

export default function Inbox() {
  return (
    <>
      {/* Page title */}
      <div className={style.pageTitle}>
        <h1>Patent Drafting</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/apps/file-manager">My Patent Services</Link>
          </li>
          <li>Patent Drafting</li>
        </ul>
      </div>

      <p
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "19px",
        }}
      >
        Let's get started with the basic details to create your project
      </p>
      <Card variant="outlined">
        <DefaultSelect />

        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px",
            mb: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              mb: "10px",
            }}
          >
            Select your preferred country format
          </Typography>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            <img
              src="https://hatscripts.github.io/circle-flags/flags/in.svg"
              width="24"
            />
            &nbsp;&nbsp;India
          </Button>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            <img
              src="https://hatscripts.github.io/circle-flags/flags/us.svg"
              width="24"
            />
            &nbsp;&nbsp;United States
          </Button>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            <img
              src="https://hatscripts.github.io/circle-flags/flags/de.svg"
              width="24"
            />
            &nbsp;&nbsp;Germany
          </Button>
        </Card>
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px",
            mb: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              mb: "10px",
            }}
          >
            Enter your proposed invention title
          </Typography>
          <TextField
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            InputProps={{
              style: { borderRadius: 8 },
            }}
          />
        </Card>
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px",
            mb: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              mb: "10px",
            }}
          >
            Upload your invention details
          </Typography>
          <UploadMultipleFiles />
        </Card>
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px",
            mb: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              mb: "10px",
            }}
          >
            Keywords
          </Typography>
          <TextField
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            InputProps={{
              style: { borderRadius: 8 },
            }}
          />
        </Card>
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px",
            mb: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              mb: "10px",
            }}
          >
            Budget
          </Typography>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            250-500$
          </Button>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            500-1000$
          </Button>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            1000-1500$
          </Button>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            1500-2000$
          </Button>
        </Card>
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px",
            mb: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
              mb: "10px",
            }}
          >
            Time of delivery
          </Typography>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            1-2 days
          </Button>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            3-5 days
          </Button>
          <Button
            style={{
              background: "#68BDFD",
              color: "white",
              width: "15%",
              marginRight: "2%",
              height: "40px",
              textTransform: "none",
            }}
          >
            5-7 days
          </Button>
        </Card>
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px",
            mb: "10px",
          }}
        >
          <CheckBox /> I have read and agreed to the following policies - Humcen
          Privacy Policy, Humcen Terms & Conditions, before proceeding.
        </Card>
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "10px",
            p: "25px",
            mb: "10px",
          }}
        >
          <Link
            href="/apps/file-manager/drafting-form"
            style={{ textDecoration: "none" }}
          >
            <ColorButton sx={{ width: "15%" }}>Submit</ColorButton>
          </Link>
        </Card>
      </Card>
    </>
  );
}

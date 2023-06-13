import React, { useState } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [country, setCountry] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [] = useState("");

  const handleDomainChange = (value) => {
    setDomain(value);
  };

  const handleSubmit = (e) => {
    console.log("submitted form");
    console.log("Domain: ", domain);
    console.log("Country: ", country);
    console.log("Title: ", title);

    setIsSubmitted(true);
  };

  const handleOk = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Page title */}
      <div className={style.pageTitle}>
        <h1>Patent Filing</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/apps/file-manager">My Patent Services</Link>
          </li>
          <li>Patent Filing</li>
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
        Let's get started with the Invention Disclosure submission
      </p>
      <form>
        <Card variant="outlined">
          <DefaultSelect domain={domain} onDomainChange={handleDomainChange} />

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
              Select the country
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
              onClick={() => {
                setCountry("India");
              }}
            >
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
              onClick={() => {
                setCountry("United States");
              }}
            >
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
              onClick={() => {
                setCountry("Germany");
              }}
            >
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
              Select your application type
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Complete"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Provisional"
                control={<Radio />}
                label="Provisional Application"
              />
              <FormControlLabel
                value="Complete"
                control={<Radio />}
                label="Complete Application"
              />
            </RadioGroup>
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
              value=""
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
              Upload your list of applicants
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
              Upload your list of investors (if applicable)
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
              onClick={() => {
                setCountry("India");
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
              onClick={() => {
                setCountry("United States");
              }}
            >
              <img
                src="https://hatscripts.github.io/circle-flags/flags/us.svg"
                width="24"
              />
              &nbsp;&nbsp;United States
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
            <CheckBox /> I have read and agreed to the following policies -
            Humcen Privacy Policy, Humcen Terms & Conditions, before proceeding.
            <br />
            Note: If the user expecting shorter time of delivery , the budget
            will be higher
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
              <ColorButton
                sx={{ width: "15%" }}
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </ColorButton>
            </Link>
          </Card>
        </Card>
      </form>

      <Dialog open={isSubmitted}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <p>Your form has been submitted successfully.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

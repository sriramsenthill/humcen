import React, { useState, useRef } from "react";
import Link from "next/link";
import style from "@/styles/PageTitle.module.css";
import { Button, ButtonProps, Card, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import DefaultSelect from "@/components/Forms/AdvancedElements/DefaultSelect";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { CheckBox } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import FileBase64 from "react-file-base64";

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
  const [domain, setDomain] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("");
  const [budget, setBudget] = useState("");
  const [files, setFiles] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const getFiles = (files) => {
    setFiles(files);
  };

  const handleDomainChange = (value) => {
    setDomain(value);
  };
  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Update the title state on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      domain: domain, // Use the actual domain value from the state
      country: country,
      job_title: title,
      keywords: keyword,
      budget: budget,
      time_of_delivery: time,
      service_specific_files: files,
    };

    try {
      const response = await fetch("http://localhost:3000/api/job_order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Form submitted successfully");
      console.log(data); // handle the response data as needed
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleOk = () => {
    setIsSubmitted(false);
  };

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
            <Link href="/patent-services">My Patent Services</Link>
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
      <form onSubmit={handleSubmit}>
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
              Select your preferred country format
            </Typography>
            <Button
              style={{
                background: country === "India" ? "#68BDFD" : "#F8FCFF",
                color: country === "India" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setCountry("India"); // Update the country state on button click
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
                background: country === "United States" ? "#68BDFD" : "#F8FCFF",
                color: country === "United States" ? "white" : "#BFBFBF",
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
            <Button
              style={{
                background: country === "Germany" ? "#68BDFD" : "#F8FCFF",
                color: country === "Germany" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setCountry("Germany");
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
              onChange={handleTitleChange} // Provide the onChange event handler
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
            <FileBase64 multiple={true} onDone={getFiles} />{" "}
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
              onChange={handleKeywordChange} // Provide the onChange event handler
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
                background: budget === "250-500$" ? "#68BDFD" : "#F8FCFF",
                color: budget === "250-500$" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setBudget("250-500$");
              }}
            >
              250-500$
            </Button>
            <Button
              style={{
                background: budget === "500-1000$" ? "#68BDFD" : "#F8FCFF",
                color: budget === "500-1000$" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setBudget("500-1000$");
              }}
            >
              500-1000$
            </Button>
            <Button
              style={{
                background: budget === "1000-1500$" ? "#68BDFD" : "#F8FCFF",
                color: budget === "1000-1500$" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setBudget("1000-1500$");
              }}
            >
              1000-1500$
            </Button>
            <Button
              style={{
                background: budget === "1500-2000$" ? "#68BDFD" : "#F8FCFF",
                color: budget === "1500-2000$" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setBudget("1500-2000$");
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
                background: time === "1-2 days" ? "#68BDFD" : "#F8FCFF",
                color: time === "1-2 days" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setTime("1-2 days");
              }}
            >
              1-2 days
            </Button>
            <Button
              style={{
                background: time === "3-5 days" ? "#68BDFD" : "#F8FCFF",
                color: time === "3-5 days" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setTime("3-5 days");
              }}
            >
              3-5 days
            </Button>
            <Button
              style={{
                background: time === "5-7 days" ? "#68BDFD" : "#F8FCFF",
                color: time === "5-7 days" ? "white" : "#BFBFBF",
                width: "15%",
                marginRight: "2%",
                height: "40px",
                textTransform: "none",
              }}
              onClick={() => {
                setTime("5-7 days");
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
              href="/patent-services/drafting-form"
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

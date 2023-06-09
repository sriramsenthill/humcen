import React, { useState } from "react";
import Link from "next/link";
import style from "@/styles/PageTitle.module.css";
import { Button, ButtonProps, Card, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import DefaultSelect from "@/components/Forms/AdvancedElements/DefaultSelect";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import UploadMultipleFiles from "@/components/Forms/FileUploader/UploadMultipleFiles";
import { FormControlLabel } from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
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
  const [country, setCountry] = useState("");
  const [applicationType, setApplicatonType] = useState("");
  const [title, setTitle] = useState("");
  const [detailsFile, setDetailsFile] = useState(null);
  const [applicantsFile, setApplicantsFile] = useState(null);
  const [investorsFile, setInvestorsFile] = useState(null);
  const [time, setTime] = useState("");
  const [budget, setBudget] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDomainChange = (value) => {
    setDomain(value);
  };

  const handleApplicationTypeChange = (value) => {
    setApplicatonType(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Update the title state on input change
  };

  const handleDetailsFileChange = (files) => {
    setDetailsFile(files);
  };

  const handleApplicantsFileChange = (files) => {
    setApplicantsFile(files);
  };

  const handleInvestorsFileChange = (files) => {
    setInvestorsFile(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      domain: domain, // Use the actual domain value from the state
      country: country,
      job_title: title,
      budget: budget,
      time_of_delivery: time,
      service_specific_files: {
        application_type: applicationType,
        details: detailsFile,
        applicants: applicantsFile,
        investors: investorsFile,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/api/patent_filing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // handle the response data as needed

      console.log("Form submitted successfully");
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
        <h1>Patent Filing</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/patent-services">My Patent Services</Link>
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
              Select the country
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
                setCountry("India");
              }}
            >
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
              value={applicationType}
              name="radio-buttons-group"
              onChange={handleApplicationTypeChange}
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
              autoComplete="name"
              InputProps={{
                style: { borderRadius: 8 },
              }}
              onChange={handleTitleChange} // Provide the onChange event handler
            />
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
              <FileBase64 multiple={true} onDone={handleDetailsFileChange} />{" "}
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
              <FileBase64 multiple={true} onDone={handleApplicantsFileChange} />{" "}
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
              <FileBase64 multiple={true} onDone={handleInvestorsFileChange} />{" "}
            </Card>
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

import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import LeftSidebar from "@/components/Email/LeftSidebar";
import EmailLists from "@/components/Email/EmailLists";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import SearchForm from "@/components/_App/TopNavbar/SearchForm";
import styles from "@/styles/patent-job.module.css";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system"; // Import styled from "@mui/system" instead of "@mui/material/styles"

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  width: "20%",
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
      <div className={styles.container}>
        <img src="/images/patent_filing.png" style={{ marginBottom: "10px" }} />
        <h1>Patent Consultation</h1>
        <p
          style={{
            maxWidth: "60%",
            fontSize: "16px",
            textAlign: "justify",
            marginBottom: "45px",
          }}
        >
          Don't let your revolutionary ideas go unprotected. Our patent filing
          service ensures that your intellectual property is secure and ready
          for market. With our experienced team of patent experts, we guide you
          through the patent application process, handle all the necessary
          paperwork, and keep you informed every step of the way. Let us help
          you turn your ideas into profitable assets with our reliable patent
          filing service.
        </p>
        <ColorButton>Schedule A Consultation</ColorButton>
      </div>
    </>
  );
}

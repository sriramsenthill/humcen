import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import style from '@/styles/PageTitle.module.css';
import LeftSidebar from "@/components/Email/LeftSidebar";
import EmailLists from "@/components/Email/EmailLists";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import SearchForm from "@/components/_App/TopNavbar/SearchForm";
import styles from "@/styles/patent-job.module.css";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system"; // Import styled from "@mui/system" instead of "@mui/material/styles"

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  width: "80%",
  height: "60px",
  borderRadius: "30px",
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
      <h1>Patent Consultation</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/apps/file-manager">My Patent Services</Link>
          </li>
          <li>
            Patent Consultation
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <img
          src="/images/patent_consult.png"
          style={{ marginBottom: "10px" }}
        />
        <p
          style={{
            maxWidth: "60%",
            fontSize: "16px",
            textAlign: "justify",
            marginBottom: "45px",
          }}
        >
          Get expert advice and guidance on protecting your intellectual
          property with our patent consultation service. Our team of experienced
          professionals will help you navigate the complex world of patents and
          provide tailored solutions to safeguard your ideas and inventions.
        </p>
        <Link
          href="/apps/file-manager/consultationform"
        >
          <ColorButton>Schedule A Consultation</ColorButton>
        </Link>
      </div>
    </>
  );
}

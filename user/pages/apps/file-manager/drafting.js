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
import { Route } from "react-router-dom";

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
          <li>
            Patent Consultation
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <img
          src="/images/patent_drafting.png"
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
          Patent drafting is the key to protecting your innovative ideas and
          inventions. Our expert patent drafters can help you secure your
          intellectual property rights and provide you with a competitive edge
          in the market. Trust us to craft a high-quality patent that will
          safeguard your invention and give you peace of mind.
        </p>
        <Link
          href="/apps/file-manager/drafting-form"
          style={{ textDecoration: "none" }}
        >
          <ColorButton>Apply Now</ColorButton>
        </Link>
      </div>
    </>
  );
}

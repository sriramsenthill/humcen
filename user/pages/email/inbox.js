import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import LeftSidebar from "@/components/Email/LeftSidebar";
import EmailLists from "@/components/Email/EmailLists";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import SearchForm from "@/components/_App/TopNavbar/SearchForm";

export default function Inbox() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>My Patents</h1>
        <SearchForm colorCom={"white"} />
      </div>
      <RecentOrders />
    </>
  );
}

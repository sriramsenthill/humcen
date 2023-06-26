import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";

export default function Inbox() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Job Order</li>
        </ul>
      </div>
      <RecentOrders />
    </>
  );
}

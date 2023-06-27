import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import Impressions from "@/components/Dashboard/eCommerce/Impressions";
import Performance from "@/components/Dashboard/eCommerce/Performance";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";

export default function eCommerce() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Welcome Back, Partner!</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>home</li>
        </ul>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={12} md={4}>
              {/* Impressions */}
              <Impressions />
            </Grid>

            <Grid item xs={12} md={12}>
              <RecentOrders />

              {/* RevenuStatus */}
              <Performance />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={4}>
          {/* Ratings */}
        </Grid>
      </Grid>
    </>
  );
}

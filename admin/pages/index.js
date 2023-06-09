import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import Impression1 from "@/components/Dashboard/eCommerce/Impression1";
import Impression2 from "@/components/Dashboard/eCommerce/Impression2";
import Impression3 from "@/components/Dashboard/eCommerce/Impression3";
import Impression4 from "@/components/Dashboard/eCommerce/Impression4";

import NewCustomers from "@/components/Dashboard/eCommerce/NewCustomers";
import BasicTabs from "@/components/UIElements/Tabs/BasicTabs";

export default function eCommerce() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1
          style={{
            fontStyle: "normal",
            fontWeight: "800",
            fontSize: "24px",
            lineHeight: "29px",
          }}
        >
          Hey Bibin Matthew!
        </h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>home</li>
        </ul>
      </div>
      <p style={{ textAlign: "left", fontSize: "18" }}>
        We have some quick updates for you today!
      </p>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={3}>
                <Impression1 />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Impression2 />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Impression3 />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Impression4 />
              </Grid>
            </Grid>
          </Grid>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12} lg={12} xl={9}>
                <BasicTabs />
              </Grid>
              <Grid item xs={12} md={12} lg={12} xl={3}>
                <NewCustomers />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

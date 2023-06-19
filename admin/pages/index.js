import React from "react";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import Features from "@/components/Dashboard/eCommerce/Features";
import Ratings from "@/components/Dashboard/eCommerce/Ratings";
import AudienceOverview from "@/components/Dashboard/eCommerce/AudienceOverview";
import VisitsByDay from "@/components/Dashboard/eCommerce/VisitsByDay";
import Impressions from "@/components/Dashboard/eCommerce/Impressions";
import ActivityTimeline from "@/components/Dashboard/eCommerce/ActivityTimeline";
import Performance from "@/components/Dashboard/eCommerce/Performance";
import SalesByCountries from "@/components/Dashboard/eCommerce/SalesByCountries";
import NewCustomers from "@/components/Dashboard/eCommerce/NewCustomers";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import TeamMembersList from "@/components/Dashboard/eCommerce/TeamMembersList";
import BestSellingProducts from "@/components/Dashboard/eCommerce/BestSellingProducts";
import LiveVisitsOnOurSite from "@/components/Dashboard/eCommerce/LiveVisitsOnOurSite";
import BasicTabs from "@/components/UIElements/Tabs/BasicTabs";

export default function eCommerce() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1
          style={{
            fontStyle: "normal",
            fontWeight: "500",
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
                <Impressions />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Impressions />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Impressions />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Impressions />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={12} md={12} lg={12} xl={6}>
            <BasicTabs />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

import React from "react";
import Grid from "@mui/material/Grid";
import Impressions from "@/components/Dashboard/eCommerce/Impressions";
import BasicTabs from "@/components/UIElements/Tabs/BasicTabs";

export default function eCommerce() {
  return (
    <>
      <h1>Welcome, User!</h1>
      {/* Page title */}

      <Grid item xs={12} md={12} lg={12} xl={8}>
        <Impressions />
        <BasicTabs />
      </Grid>
    </>
  );
}

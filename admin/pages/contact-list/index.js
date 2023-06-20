import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import BestSellingProducts from "@/components/Dashboard/eCommerce/BestSellingProducts";
import RecentOrders from "@/components/Dashboard/eCommerce/RecentOrders";
import Search from "@/components/Dashboard/eCommerce/Search";
import DefaultSelect from "@/components/Forms/AdvancedElements/DefaultSelect";

export default function ContactList() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>On Going Patents</h1>
        <Search />
        <DefaultSelect />
      </div>
      <br></br>
      <RecentOrders />
      <br></br>
    </>
  );
}

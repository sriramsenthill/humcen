import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import BestSellingProducts from "@/components/Dashboard/eCommerce/BestSellingProducts";
import MyIncome from "@/components/MyIncome";

export default function ContactList() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>My Income</li>
        </ul>
      </div>
      <br></br>
      <MyIncome/>
      <br></br>

    </>
  );
}
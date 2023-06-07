import React from 'react';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import LeftSidebar from '@/components/Email/LeftSidebar';
import EmailLists from '@/components/Email/EmailLists';
import RecentOrders from '@/components/Dashboard/eCommerce/RecentOrders';
export default function JobOrder() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Job Order</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Job Order</li>
          
        </ul>
        
      </div>
      <RecentOrders/>
    </>
  );
}

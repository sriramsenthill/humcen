import React from 'react';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import LeftSidebar from '@/components/Email/LeftSidebar';
import EmailLists from '@/components/Email/EmailLists';
 
export default function Inbox() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Email</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Email</li>
        </ul>
      </div>

    </>
  );
}

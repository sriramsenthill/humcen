import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import Grid from "@mui/material/Grid";
import LeftSidebar from '@/components/Apps/FileManager/LeftSidebar';
import MyDrive from '@/components/Apps/FileManager/MyDrive';
import RecentFiles from '@/components/Apps/FileManager/RecentFiles';
import Files from '@/components/Apps/FileManager/Files';

export default function FileManager() {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>File Manager</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            File Manager
          </li>
        </ul>
      </div>

      
    </>
  );
}

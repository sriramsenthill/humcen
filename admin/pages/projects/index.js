import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import AllProjects from '@/components/Projects/AllProjects';
import FileManager from 'pages/apps/file-manager';
import Card from '@/components/UIElements/Cards/Media';
import Grid from "@mui/material/Grid";
import RecentPartners from '@/components/Dashboard/eCommerce/RecentPartner';



const Projects = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Partners</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Partners</li>
        </ul>
      </div>
      <RecentPartners/>
    </>
  )
}

export default Projects;
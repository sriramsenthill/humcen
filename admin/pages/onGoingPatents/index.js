import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Patents.module.css';
import style from "@/styles/PageTitle.module.css";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { jobData } from './patentData';

const PatentDeliveryStatus = ({ jobNumber }) => {
  const job = jobData.find((job) => job.jobNumber === "DEF456");

  if (!job) {
    return <div>No job found with the provided job number.</div>;
  }

  const {
    jobName,
    patentType,
    customerName,
    partnerName,
    location,
    budget,
    assigned,
    status,
  } = job;

  return (
    <>
        {/* Page title */}
        <div className={style.pageTitle}>
          <h1>Ongoing Patents</h1>
          <ul>
            <li>
              <Link href="/">Dashboard</Link>
            </li>
            <li>Ongoing Patents</li>
            <li>Delivery status</li>
          </ul>
        </div>
      <h1>{jobName}</h1>
      <Grid container spacing={2}>
        <div className={styles.patentDeliveryStatus}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={2} >            
              <div className={styles.field}>
                <span className={styles.label}>Patent Type:</span>
                <span>{patentType}</span>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={2} >
              <div className={styles.field}>
                <span className={styles.label}>Customer Name:</span>
                <span>{customerName}</span>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={2} > 
              <div className={styles.field}>
                <span className={styles.label}>Partner Name:</span>
                <span>{partnerName}</span>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={2} >
              <div className={styles.field}>
                <span className={styles.label}>Location:</span>
                <span>{location}</span>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={2} >
              <div className={styles.field}>
                <span className={styles.label}>Budget:</span>
                <span>{budget}</span>
              </div>
              </Grid>
            <Grid item xs={6} sm={4} md={2} >
              <div className={styles.field}>
                <span className={styles.label}>Assigned:</span>
                <span>{assigned}</span>
              </div>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <div className={styles.field}>
                <span className={styles.label}>Status:</span>
                <span>{status}</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default PatentDeliveryStatus;

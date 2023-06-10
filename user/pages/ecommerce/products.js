import * as React from "react";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
import BasicAccordion from "@/components/UIElements/Accordion/BasicAccordion";
import { Card } from "@mui/material";

export default function Products() {
  return (
    <>
      <Card style={{ padding: "2em" }}>
        {/* Page title */}
        <div className={styles.pageTitle}>
          <h1 className={styles.pageh}>Help & Support</h1>

          <ul>
            <li>
              <Link href="/">Dashboard</Link>
            </li>
            <li>Help & support</li>
          </ul>
        </div>
        <div>
          <h2 className={styles.heading}>Contact Information</h2>
          <hr className={styles.line}></hr>
        </div>
        <div>
          <ul className={styles.list}>
            <li>
              <h2 className={styles.emailheading}>Email</h2>
            </li>
            <li>
              <p className={styles.email}>info@humcen.com</p>
            </li>
          </ul>
          <hr className={styles.line} style={{ width: "70%" }}></hr>
          <ul className={styles.list}>
            <li>
              <h2 className={styles.emailheading}>Phone</h2>
            </li>
            <li>
              <p className={styles.email}>+91 98765-43210</p>
            </li>
          </ul>
          <hr className={styles.line} style={{ width: "70%" }}></hr>
          <div>
            <h2 className={styles.heading}>Frequently Asked Qusetions</h2>
            <hr className={styles.line}></hr>
            <BasicAccordion />
          </div>
        </div>
      </Card>
    </>
  );
}

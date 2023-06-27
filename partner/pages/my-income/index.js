import React from "react";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";
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
      <MyIncome />
      <br></br>
    </>
  );
}

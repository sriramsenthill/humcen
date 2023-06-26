import React from "react";
import Link from "next/link";
import styles from "@/styles/PageTitle.module.css";

const SearchPage = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Patent Search</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/patent-services">My Patent Services</Link>
          </li>
          <li>Patent Search</li>
        </ul>
      </div>

      {/* Content */}
      <div>
        <h2>Patent Search Page</h2>
        {/* Add your content here */}
      </div>
    </>
  );
};

export default SearchPage;

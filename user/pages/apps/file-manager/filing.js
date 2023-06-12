import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

const FilingPage = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Patent Filing</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/apps/file-manager">My Patent Services</Link>
          </li>
          <li>
            Patent Filing
          </li>
        </ul>
      </div>

      {/* Content */}
      <div>
        <h2>Patent Filing Page</h2>
        {/* Add your content here */}
      </div>
    </>
  );
};

export default FilingPage;

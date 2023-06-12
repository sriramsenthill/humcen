import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

const DraftingPage = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Patent Drafting</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/apps/file-manager">My Patent Services</Link>
          </li>
          <li>
            Patent Drafting
          </li>
        </ul>
      </div>

      {/* Content */}
      <div>
        <h2>Patent Drafting Page</h2>
        {/* Add your content here */}
      </div>
    </>
  );
};

export default DraftingPage;

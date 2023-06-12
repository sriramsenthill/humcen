import React from 'react';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

const ConsultationPage = () => {
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Patent Consultation</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/apps/file-manager">My Patent Services</Link>
          </li>
          <li>
            Patent Consultation
          </li>
        </ul>
      </div>

      {/* Content */}
      <div>
        <h2>Patent Consultation Page</h2>
        {/* Add your content here */}
      </div>
    </>
  );
};

export default ConsultationPage;

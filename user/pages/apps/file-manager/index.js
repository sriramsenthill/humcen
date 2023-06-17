import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/PageTitle.module.css";
import Grid from "@mui/material/Grid";
import LeftSidebar from "@/components/Apps/FileManager/LeftSidebar";
import MyDrive from "@/components/Apps/FileManager/MyDrive";
import RecentFiles from "@/components/Apps/FileManager/RecentFiles";
import Files from "@/components/Apps/FileManager/Files";
import Card from "./Cards";

const serviceList = [
  {
    image: "/images/patent_consult.png",
    title: "Patent Consultation",
    desc: "Maximize the value of your invention with expert Patent Consultation from Us",
    link: "/apps/file-manager/consultation",
  },
  {
    image: "/images/patent_drafting.png",
    title: "Patent Drafting",
    desc: "Transform your ideas into strong patents with our expert Patent Drafting service",
    link: "/apps/file-manager/drafting",
  },
  {
    image: "/images/patent_filing.png",
    title: "Patent Filing",
    desc: "Secure your innovative ideas with our hassle-free patent filing service. Let us handle the complexities of the patent application process",
    link: "/apps/file-manager/filing",
  },
  {
    image: "/images/patent_search.png",
    title: "Patent Search",
    desc: "Uncover the potential of your invention with our in-depth Patent Search service.",
    link: "/apps/file-manager/search",
  },
];

export default function FileManager() {
  const router = useRouter();

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>My Patent Services</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>My Patent Services</li>
        </ul>
      </div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {serviceList.map(Card)}
      </Grid>
    </>
  );
}

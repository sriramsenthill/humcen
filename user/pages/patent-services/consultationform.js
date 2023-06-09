// pages/inbox.js

import React, { useState } from "react";
import Link from "next/link";
import style from "@/styles/PageTitle.module.css";
import styles from "@/styles/patent-job.module.css";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system"; // Import styled from "@mui/system" instead of "@mui/material/styles"
import { useRouter } from "next/router";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  width: "50%",
  height: "60px",
  borderRadius: "30px",
  marginBottom: "30px",
  background: "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
  "&:hover": {
    background: "linear-gradient(270deg, #02E1B9 0%, #00ACF6 100%)",
  },
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "400",
}));

export default function Inbox() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [serviceType, setServiceType] = useState(""); // Change initial value to ""
  const [selectedEmail, setSelectedEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const consultationData = {
      userID: 1001,
      service: serviceType,
      email: selectedEmail,
      meeting_date_time: new Date(`${selectedDate} ${selectedTime}`),
    };

    try {
      const response = await fetch("http://localhost:3000/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(consultationData),
      });

      if (response.ok) {
        // Redirect to the home page ("/") and display prompt
        router.push("/");
        alert("A sales executive will contact you shortly.");
      } else {
        // Handle error case
        alert("Failed to schedule consultation. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* Page title */}
      <div className={style.pageTitle}>
        <h1>Patent Consultation</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/patent-services">My Patent Services</Link>
          </li>
          <li>Patent Consultation</li>
        </ul>
      </div>
      <div className={styles.container}>
        <img
          style={{
            maxWidth: "40%",
            fontSize: "16px",
            marginBottom: "45px",
          }}
          src="https://media1.thehungryjpeg.com/thumbs2/800_3746783_7e0fpnjs5z6oprxvmn2lb6ky6tdcc341lczfwkpk_online-video-conference-vector-man-and-chat-director-communicates-with-staff-webinar-business-meeting-consultation-seminar-online-training-concept-flat-cartoon-isolated-illustration.jpg"
        />
        <p
          style={{
            maxWidth: "60%",
            fontSize: "16px",
            textAlign: "justify",
            marginBottom: "45px",
          }}
        >
          Gain valuable insights and expert guidance in safeguarding your
          intellectual property through our patent consultation service. Our
          team of seasoned professionals specializes in the intricate realm of
          patents, offering personalized solutions to protect your innovative
          ideas and inventions. Let us navigate the complexities for you,
          ensuring your intellectual assets are shielded in the ever-evolving
          landscape of intellectual property.
        </p>
        <form onSubmit={handleSubmit}>
          <h1>Choose Your Flexible Date</h1>
          <TextField
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <h1>Choose Your Flexible Time</h1>
          <TextField
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <h1>Choose Service Type</h1>

          <TextField
            select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            fullWidth
            margin="normal"
            required
          >
            <option value="Patent Drafting">Patent Drafting</option>
            <option value="Patent Filing">Patent Filing</option>
            <option value="Patent Marketplace">Patent Marketplace</option>
          </TextField>
          <h1>Provide Your Email Address</h1>
          <TextField
            type="email"
            value={selectedEmail}
            onChange={(e) => setSelectedEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <ColorButton type="submit">Schedule A Consultation</ColorButton>
        </form>
      </div>
    </>
  );
}

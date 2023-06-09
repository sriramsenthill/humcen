import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import RatingsChart from "./RatingsChart";
import NewCustomers from "../NewCustomers";
import DisabledButtons from "@/components/UIElements/Buttons/DisabledButtons";
import Rating from "@mui/material/Rating";

const Ratings = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "40px 150px",
          mb: "15px",
          backgroundColor: "#ECFCFF",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            marginTop: "30px",
            marginLeft: "15px",
          }}
        >
          <NewCustomers />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            marginTop: "13px",
            marginRight: "20px",
          }}
        >
          <DisabledButtons />
        </Box>

        <Box
          sx={{
            marginTop: "80px", // Adjust the top margin to create space below other elements
          }}
        >
          <table style={{ width: "100%" }}>
            <thead>
              <tr style={{ color: "#828282" }}>
                <td style={{ width: "25%", textAlign: "left" }}>
                  10:00am - 10.30am, Friday, May 5, 2023
                </td>
                <td style={{ width: "25%", textAlign: "left" }}>
                  Web Conferencing link will be highlight before meeting
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "25%", textAlign: "left" }}>
                  0:30 mintues
                </td>
                <td style={{ width: "25%", textAlign: "left" }}>
                  India Standard Time
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Card>
    </>
  );
};

export default Ratings;

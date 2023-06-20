import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { FaClock } from "react-icons/fa";

const Impression1 = () => {
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(104.54deg, #00ACF6 -38.83%, #01ADF5 52.84%, #02E1B9 127.84%)",
          backgroundBlendMode: "multiply",
          borderRadius: "10px",
          padding: "20px 25px",
          mb: "15px",
        }}
        className="for-dark-impressions"
      >
        <div style={{ width: "50%" }}>
          <FaClock />
        </div>
        <div style={{ width: "50%" }}>
          <Typography>Patent Currently in Progress</Typography>
        </div>
      </Box>
    </>
  );
};

export default Impression1;

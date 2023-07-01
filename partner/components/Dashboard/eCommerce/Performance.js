import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const RevenuStatus = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  // Chart
  const series = [
    {
      name: "income",
      data: [50, 48, 47, 48, 50, 48, 50, 48, 50, 48, 48],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#00ACF6", "#02E1B9"], // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0.9,
        opacityTo: 0.3,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#A9A9C8",
          fontSize: "12px",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#f6f6f7",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
      y: {
        formatter: function (val) {
          return "$" + val + "k";
        },
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 10px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Performance
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: "14px" }}>
                Select
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange}
                sx={{ fontSize: "14px" }}
                className="select"
              >
                <MenuItem value={0} sx={{ fontSize: "14px" }}>
                  Today
                </MenuItem>
                <MenuItem value={1} sx={{ fontSize: "14px" }}>
                  Last 7 Days
                </MenuItem>
                <MenuItem value={2} sx={{ fontSize: "14px" }}>
                  Last Month
                </MenuItem>
                <MenuItem value={3} sx={{ fontSize: "14px" }}>
                  Last 12 Months
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "14px" }}>
                  All Time
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Chart options={options} series={series} type="area" height={285} />
      </Card>
    </>
  );
};

export default RevenuStatus;

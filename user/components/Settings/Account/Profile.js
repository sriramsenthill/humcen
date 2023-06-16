import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { styled } from "@mui/system";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  width: "80%",
  height: "50px",
  borderRadius: "40px",
  marginTop: "20px",
  marginBottom: "30px",
  background: "#00ACF6",
  "&:hover": {
    background: "#00ACF6",
  },
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "400",
}));

export default function Profile() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          mb: "15px",
          display: "flex",
          p: "12px 12px",
          flexDirection: "column",
          background: "white",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "140%",
          }}
        >
          Summary
        </Typography>
        <br />
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            background: "white",
          }}
        >
          <Table aria-label="simple table" className="dark-table">
            <TableHead></TableHead>

            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="left"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  Service Fee
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  $1500
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  Discount 10%
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  - $150
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  Administrative Fee
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "12px",
                    padding: "8px 10px",
                    fontWeight: "500",
                  }}
                >
                  $200
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              ></TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "18px",
                    padding: "8px 10px",
                    fontWeight: "800",
                    color: "#000",
                  }}
                >
                  Total (USD) :
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "18px",
                    padding: "8px 10px",
                    fontWeight: "800",
                    color: "#000",
                  }}
                >
                  $1550
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  <ColorButton sx={{ background: "#00ACF6", width: "100%" }}>
                    Checkout
                  </ColorButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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

export default function Checkout() {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          mb: "15px",
          display: "flex",
          flexDirection: "column",
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
                  Sub Total :
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
                  $760.00
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
                  Discount :
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
                  $60.00
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
                  Shipping Charge :
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
                  $50.00
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
                  Estimated Tax :
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
                  $00.00
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  Total (USD) :
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13px",
                    padding: "8px 10px",
                    fontWeight: "500",
                    color: "#000",
                  }}
                >
                  $750.00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}

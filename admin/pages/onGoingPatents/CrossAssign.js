import React from 'react';
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CategoriesSelect from '@/components/Projects/ProjectCreate/CategoriesSelect';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';

import dynamic from 'next/dynamic'
import MemberSelect from '@/components/Projects/ProjectCreate/MemberSelect';
import { Margin } from '@mui/icons-material';
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

const CrossAssign = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Select Priority 
  const [priority, setPriority] = React.useState('');
  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container alignItems="center" spacing={2}>
          <Grid xs={12} sm ={4}md={3} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                  mt: "16.5px",
                  ml: "16px"
                }}
              >
                Select Reason
              </Typography>
              
              <FormControl
                 style={{
                  borderRadius: "8px",marginLeft: "16px" ,width: "95%"
                  }}
                fullWidth 
                variant="standard"
                id="standard-required"

               >
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="Select Reason"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>High</MenuItem>
                  <MenuItem value={20}>Medium</MenuItem>
                  <MenuItem value={30}>Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm ={6 }md={4} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Type Your Reason
              </Typography>
              <TextField
                autoComplete="project-name"
                name="projectName"
                required
                fullWidth
                variant="standard"
                id="standard-required"
                label="Your Reason"
                autoFocus
                style={{
                borderRadius: "8px",
                  }}
              />
            </Grid>
            <Grid item xs={12} sm ={6 }md={4} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Any Notes for customer
              </Typography>
              <TextField
                autoComplete="project-name"
                name="projectName"
                required
                fullWidth
                variant="standard"
                id="standard-required"
                label="Type Here"
                autoFocus
                style={{
                borderRadius: "8px",
                  }}
              />
            </Grid>
            <Grid xs={12} sm ={4}md={3} lg={3}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                  mt: "16.5px",
                  ml: "16px"
                }}
              >
                Select Partner
              </Typography>
              
              <FormControl
                 style={{
                  borderRadius: "8px",marginLeft: "16px" ,width: "95%"
                  }}
                fullWidth 
                variant="standard"
                id="standard-required"

               >
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="New Assignee"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>High</MenuItem>
                  <MenuItem value={20}>Medium</MenuItem>
                  <MenuItem value={30}>Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm ={4}md={2} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                  mt: "17.4px"
                }}
              >
                Delivery Date
              </Typography>
              <TextField
                autoComplete="start-date"
                name="startDate"
                required
                variant="standard"
                id="standard-required"
                fullWidth
                id="Delivery Date"
                type="date"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>
            <Grid xs={12} sm ={4}md={2} lg={2}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                  mt: "16.5px",
                  ml: "16px"
                }}
              >
                Select Reason
              </Typography>
              
              <FormControl
                 style={{
                  borderRadius: "8px",marginLeft: "16px" ,width: "95%"
                  }}
                fullWidth 
                variant="standard"
                id="standard-required"

               >
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={priority}
                  label="Select Reason"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>High</MenuItem>
                  <MenuItem value={20}>Medium</MenuItem>
                  <MenuItem value={30}>Low</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm ={6}md={4} lg={4}>
              <Typography
                as="h5"
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  mb: "12px",
                }}
              >
                Budget
              </Typography>
              <TextField
                autoComplete="budget"
                name="budget"
                required
                fullWidth
                variant="standard"
                id="standard-required"
                id="budget"
                label="Enter rate"
                autoFocus
                InputProps={{
                  style: { borderRadius: 8 },
                }}
              />
            </Grid>

            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 1,
                  textTransform: "capitalize",
                  borderRadius: "60px",
                  fontWeight: "500",
                  fontSize: "15px",
                  padding: "12px 20px",
                  color: "#fff !important",
                  width: "140px",
                  height: "46px"
                }}
              >
                Cross Assign
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  ml: "10px",  
                  mt: 1,
                  textTransform: "capitalize",
                  borderRadius: "60px",
                  fontWeight: "550",
                  fontSize: "15px",
                  padding: "12px 20px",
                  color: "#fff !important",
                  width: "140px",
                  height: "46px"
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  )
}

export default CrossAssign;
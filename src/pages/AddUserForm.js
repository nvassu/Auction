import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Stack,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  InputAdornment,
  Input,
  Grid,
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import customFontSize from "../theme/typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/system";

export default function AddUserForm() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [date, setDate] = useState(new Date());
  return (
    <Box sx={{ flexGrow: 1 }} container>
      <Stack spacing={4}>
        <Typography variant="cbody" sx={{ fontSize: "32px" }}>
          Create Auction/J
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack spacing={4}>
              <FormControl>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Auction Name
                </Typography>
                <TextField size="small" id="outlined-basic" />
              </FormControl>
              <FormControl>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Start Date
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={date}
                    inputFormat="dd-MM-yyyy"
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField size="small" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
              <FormControl>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Auction Result Date
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={date}
                    inputFormat="dd-MM-yyyy"
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField size="small" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Extend-Deadline-Within-Type
                </Typography>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>--Select--</MenuItem>
                  <MenuItem value={10}>Test</MenuItem>
                  <MenuItem value={20}>Test</MenuItem>
                  <MenuItem value={30}>Text</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={4}>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Auction Inventory
                </Typography>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>--Select--</MenuItem>
                  <MenuItem value={10}>Test</MenuItem>
                  <MenuItem value={20}>Test</MenuItem>
                  <MenuItem value={30}>Text</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  End Date
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={date}
                    inputFormat="dd-MM-yyyy"
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField size="small" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Extend-Deadline-Within-Value
                </Typography>
                <TextField id="outlined-basic" fullWidth size="small" />
              </FormControl>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Auction Mode
                </Typography>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>--Select--</MenuItem>
                  <MenuItem value={10}>Test</MenuItem>
                  <MenuItem value={20}>Test</MenuItem>
                  <MenuItem value={30}>Text</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={4}>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Viewing Date
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={date}
                    inputFormat="dd-MM-yyyy"
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField size="small" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              </FormControl>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Default Bid Increment By
                </Typography>
                <TextField id="outlined-basic" fullWidth size="small" />
              </FormControl>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  No-Of-Terms-Bid-Extend
                </Typography>
                <TextField id="outlined-basic" fullWidth size="small" />
              </FormControl>
              <FormControl fullWidth>
                <Typography sx={{ width: "250px" }} variant="cbody">
                  Record Status
                </Typography>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  fullWidth
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>--Select--</MenuItem>
                  <MenuItem value={10}>Test</MenuItem>
                  <MenuItem value={20}>Test</MenuItem>
                  <MenuItem value={30}>Text</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xl={8} xs={8} my={3}>
            <FormControl fullWidth>
              <Typography sx={{ width: "250px" }} variant="cbody">
                Description
              </Typography>
              <TextField id="outlined-basic" fullWidth multiline rows={4} />
            </FormControl>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

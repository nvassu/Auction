import { Box, Typography, Tabs, Tab, Grid } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import AddUserForm from "../AddUserForm";
import Page404 from "../ErrorPages/Page404";
import AddIcon from "@mui/icons-material/Add";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     bgcolor: "background.paper",
    //     display: "flex",
    //     width: "100%",
    //   }}
    // >
    <div>
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ borderRight: 1, borderColor: "divider" }}>
          <Tabs
            orientation="vertical"
            //variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            sx={{
              pt: "20px",
            }}
          >
            <Tab label="Create Auction" {...a11yProps(0)} />
            <Tab label="Add User" {...a11yProps(1)} />
            <Tab label="User List" {...a11yProps(2)} />
            <Tab label="Stock" {...a11yProps(3)} />
            <Tab label="Profile" {...a11yProps(4)} />
            <Tab label="Settings" {...a11yProps(5)} />
            <Tab label="About" {...a11yProps(6)} />
            <Tab
              sx={{ marginRight: "40px" }}
              label="Logout"
              {...a11yProps(6)}
            />
          </Tabs>
        </Grid>
        <Grid item xs={10}>
          <TabPanel value={value} index={0}>
            <AddUserForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Page404 />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Page404 />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Page404 />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Page404 />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Page404 />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Page404 />
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}

// export default function Home() {
//   return (
//     <Box>
//       <Grid container spacing={2}>
//         <Grid item xs={2}>
//           hey
//         </Grid>
//         <Grid item xs={10}>
//           Hello
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

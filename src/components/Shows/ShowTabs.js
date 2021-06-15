import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ShowsContent from "./ShowsContent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "3vh",
    paddingLeft: "1vw",
  },
}));

export default function ShowTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{width: "1300px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Show One" {...a11yProps(0)} />
          <Tab label="Show Two" {...a11yProps(1)} />
          <Tab label="Show Three" {...a11yProps(2)} />
          <Tab label="Show Four" {...a11yProps(3)} />
          <Tab label="Show Five" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ShowsContent desIndex={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ShowsContent desIndex={1} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ShowsContent desIndex={2} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ShowsContent desIndex={3} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ShowsContent desIndex={4} />
      </TabPanel>
    </div>
  );
}

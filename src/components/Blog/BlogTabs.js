import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BlogContent from "./BlogContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "3vh",
    paddingLeft: "1vw",
  },
  indicator: {
    backgroundColor: "#8c1aff",
  },
  appBar: {
    width: "90.4vw",
  },
}));

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
          <Typography component="div">{children}</Typography>
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

export default function BlogTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.appBar}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            classes={{
              indicator: classes.indicator,
            }}
            variant="fullWidth"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              label="Blog One"
              {...a11yProps(0)}
              style={{ color: "black" }}
            />
            <Tab
              label="Blog Two"
              {...a11yProps(1)}
              style={{ color: "black" }}
            />
            <Tab
              label="Blog Three"
              {...a11yProps(2)}
              style={{ color: "black" }}
            />
            <Tab
              label="Blog Four"
              {...a11yProps(3)}
              style={{ color: "black" }}
            />
            <Tab
              label="Blog Five"
              {...a11yProps(4)}
              style={{ color: "black" }}
            />
          </Tabs>
        </AppBar>
      </Box>
      <TabPanel value={value} index={0}>
        <BlogContent desIndex={0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BlogContent desIndex={1} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BlogContent desIndex={2} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BlogContent desIndex={3} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <BlogContent desIndex={4} />
      </TabPanel>
    </div>
  );
}

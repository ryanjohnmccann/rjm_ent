import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExploreCategories from "./ExploreCategories";
import { Slide } from "react-awesome-reveal";

// Handles styling
const useStyles = makeStyles((theme) => ({
  exploreTitle: {
    paddingLeft: "1.3vw",
    paddingBottom: "2vh",
  },
}));

export default function Explore() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Slide cascade triggerOnce delay={550}>
        <Typography
          variant="h3"
          component="h1"
          className={classes.exploreTitle}
        >
          Explore
        </Typography>
      </Slide>
      <Slide cascade triggerOnce fraction={0.3}>
        <ExploreCategories />
      </Slide>
      <Divider />
    </React.Fragment>
  );
}

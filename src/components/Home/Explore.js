import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./Explore.module.css";
import ExploreCategories from "./ExploreCategories";
import Divider from "@material-ui/core/Divider";
import { Slide } from "react-awesome-reveal";

export default function Explore() {
  return (
    <React.Fragment>
      <Slide cascade triggerOnce delay={550}>
        <Typography variant="h3" component="h1" className={styles.explore}>
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

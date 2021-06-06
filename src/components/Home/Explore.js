import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "./Explore.module.css";
import ExploreCategories from "./ExploreCategories";

export default function Explore() {
  return (
    <React.Fragment>
      <Typography variant="h3" component="h1" className={styles.explore}>
        Explore
      </Typography>
      <ExploreCategories />
    </React.Fragment>
  );
}

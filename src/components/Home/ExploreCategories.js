import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./ExploreCategories.module.css";
import Grid from "@material-ui/core/Grid";

export default function ExploreCategories() {
  function createCategories(text, color) {
    return { text, color };
  }
  const categories = [
    createCategories("All", "green"),
    createCategories("Shows", "secondary"),
    createCategories("Blog", "primary"),
  ];

  return (
    <Grid className={styles.buttonGrid} container spacing={3}>
      {categories.map((obj) => (
        <Grid item>
          <Button  key={obj.color} className={styles.button} variant="outlined" color={obj.color}>
            {obj.text}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

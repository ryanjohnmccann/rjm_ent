import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./ExploreCategories.module.css";
import Grid from "@material-ui/core/Grid";

export default function ExploreCategories() {
  function createCategories(text, color, buttonKey, gridKey) {
    return { text, color, buttonKey, gridKey };
  }
  const categories = [
    createCategories("All", "default", "categoryButton1", "categoryGridItem1"),
    createCategories("Shows", "secondary", "categoryButton2", "categoryGridItem2"),
    createCategories("Blog", "primary", "categoryButton3", "categoryGridItem3"),
  ];

  return (
    <Grid className={styles.buttonGrid} container spacing={2}>
      {categories.map((obj) => (
        <Grid item key={obj.gridKey}>
          <Button  key={obj.buttonKey} className={styles.button} variant="outlined" color={obj.color}>
            {obj.text}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

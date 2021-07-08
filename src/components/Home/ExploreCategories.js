import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

// Handles styling
const useStyles = makeStyles((theme) => ({
  chipsGrid: {
    paddingTop: "1vh",
    paddingLeft: "1.3vw",
    paddingBottom: "4vh",
  },
}));

export default function ExploreCategories() {
  const classes = useStyles();
  function createCategories(text, color, chipKey, gridKey) {
    return { text, color, chipKey, gridKey };
  }
  const categories = [
    createCategories(
      "All",
      "#1D2EFF",
      "allChipCategory",
      "allChipCategoryGridItem"
    ),
    createCategories(
      "Show",
      "#8c1aff",
      "showChipCategory",
      "showChipCategoryGridItem"
    ),
    createCategories(
      "Blog",
      "#C30101",
      "blogChipCategory",
      "blogChipCategoryGridItem"
    ),
  ];

  // Will come back to this function in the future
  function handleChipClick() {}

  return (
    <Grid className={classes.chipsGrid} container spacing={2}>
      {categories.map((obj) => (
        <Grid item key={obj.gridKey}>
          <Chip
            label={obj.text}
            key={obj.chipKey}
            onClick={handleChipClick}
            variant="outlined"
            style={{
              color: obj.color,
              width: "120px",
              fontSize: "18px",
              borderColor: obj.color,
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Grow from "@material-ui/core/Grow";

// Handles styling
const useStyles = makeStyles((theme) => ({
  chipsGrid: {
    paddingTop: "1vh",
    paddingLeft: "1.3vw",
    paddingBottom: "4vh",
  },
}));

export default function ExploreCategories(props) {
  const classes = useStyles();
  const [allButton, setAllButton] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [blogButton, setBlogButton] = useState(false);
  function createCategories(
    text,
    color,
    backgroundColor,
    chipKey,
    gridKey,
    activeBool,
    activeColor,
    activeBackground
  ) {
    return {
      text,
      color,
      backgroundColor,
      chipKey,
      gridKey,
      activeBool,
      activeColor,
      activeBackground,
    };
  }
  const categories = [
    createCategories(
      "All",
      "#1D2EFF",
      "white",
      "allChipCategory",
      "allChipCategoryGridItem",
      allButton,
      "white",
      "#1D2EFF"
    ),
    createCategories(
      "Blog",
      "#C30101",
      "white",
      "blogChipCategory",
      "blogChipCategoryGridItem",
      blogButton,
      "white",
      "#C30101"
    ),
    createCategories(
      "Show",
      "#8c1aff",
      "white",
      "showChipCategory",
      "showChipCategoryGridItem",
      showButton,
      "white",
      "#8c1aff"
    ),
  ];

  const chipClickHandler = (event) => {
    const desButton = event.target.innerText;
    if (desButton === "All") {
      setAllButton(true);
      setShowButton(false);
      setBlogButton(false);
    }
    if (desButton === "Show") {
      setShowButton(true);
      setAllButton(false);
      setBlogButton(false);
    }
    if (desButton === "Blog") {
      setBlogButton(true);
      setAllButton(false);
      setShowButton(false);
    }
    props.categoryClicked(desButton);
  };

  return (
    <Grid className={classes.chipsGrid} container spacing={2}>
      {categories.map((obj) => (
        <Grid item key={obj.gridKey}>
          <Grow in={true} timeout={2600}>
            <Chip
              label={obj.text}
              key={obj.chipKey}
              onClick={chipClickHandler}
              variant={obj.activeBool ? "default" : "outlined"}
              style={{
                color: obj.activeBool ? obj.activeColor : obj.color,
                width: "120px",
                fontSize: "18px",
                borderColor: obj.color,
                backgroundColor: obj.activeBool
                  ? obj.activeBackground
                  : obj.backgroundColor,
              }}
            />
          </Grow>
        </Grid>
      ))}
    </Grid>
  );
}

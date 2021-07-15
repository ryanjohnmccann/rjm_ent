import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExploreCategories from "./ExploreCategories";
import Grow from "@material-ui/core/Grow";

// Handles styling
const useStyles = makeStyles((theme) => ({
  exploreTitle: {
    paddingLeft: "1.3vw",
    paddingBottom: "2vh",
  },
}));

export default function Explore(props) {
  const classes = useStyles();
  const categoryHandler = (event) => {
    props.categoryClicked(event);
  };
  return (
    <React.Fragment>
      <Grow in={true} timeout={2200}>
        <Typography
          variant="h3"
          component="h1"
          className={classes.exploreTitle}
        >
          Explore
        </Typography>
      </Grow>
      <ExploreCategories categoryClicked={categoryHandler} />
      <Divider />
    </React.Fragment>
  );
}

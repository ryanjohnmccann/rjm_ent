import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  blogBody: {
    maxWidth: "900px",
    marginTop: "15px",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
}));

export default function IndBlogBody(props) {
  const classes = useStyles();
  return (
    <Grid container item className={classes.blogBody} spacing={4}>
      {props.blogContent}
    </Grid>
  );
}

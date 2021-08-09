import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "50px",
    maxWidth: "800px",
    [theme.breakpoints.down("md")]: {
      fontSize: "43px",
      maxWidth: "100%",
    },
  },
  titleDetails: {
    marginTop: "10px",
  },
}));

export default function IndBlogIntro(props) {
  const classes = useStyles();
  const subDetails = props.authorDetails + " | " + props.blogDate;
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Typography component="h1" variant="h2" className={classes.title}>
          {props.mainTitle}
        </Typography>
      </Grid>
      <Grid container item spacing={1} justify="center" xs={12}>
        <Grid item>
          <Avatar src={props.avatar} />
        </Grid>
        <Grid item className={classes.titleDetails}>
          <Typography color="textSecondary">{subDetails}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

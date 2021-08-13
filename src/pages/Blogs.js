import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import BlogsContent from "../components/Blogs/BlogsContent";
import Divider from "@material-ui/core/Divider";

// Handles styling
const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    marginTop: "2vh",
  },
  blogsDetails: {
    maxWidth: "90%",
    paddingTop: "2vh",
  },
}));

export default function Blogs() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item className={classes.header}>
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" style={{ marginLeft: "3vw" }}>
              Blogs
            </Typography>
          </Fade>
          <Fade in={true} timeout={1200}>
            <div>
              <Typography
                className={classes.blogsDetails}
                color="textSecondary"
                variant="subtitle1"
                component="p"
                paragraph
                style={{ marginLeft: "3vw" }}
              >
                RJMC entertainment has many blogs from a diverse set of voices
                around the world. We have content creators in the United States,
                Mexico, and Venezuela. Our bloggers have complete creative
                freedom and write about topics they’re most passionate about.
                Some examples include politics and human rights, philosophy,
                computer science, and many more. If you’d like to reach out to
                any of our content creators or potentially become one, please
                visit the contact page and let us know as soon as you can.
              </Typography>
              <Divider />
            </div>
          </Fade>
        </Grid>
        <Grid item container align="center" justify="center">
          <BlogsContent />
        </Grid>
      </Grid>
    </div>
  );
}

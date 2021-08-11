import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import AboutContent from "../components/About/AboutContent";
import Fade from "@material-ui/core/Fade";

// Handles styling
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "3vw",
    marginTop: "2vh",
    marginBottom: "2.5vh",
  },
  aboutDetails: {
    maxWidth: "90%",
    paddingTop: "2vh",
  },
  secondaryHeader: {
    textAlign: "center",
  },
  divider: {
    margin: "auto",
    width: "200px",
    height: "3px",
    background: "#164AB2",
  },
  gridContainer: {
    marginTop: "30px",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Fade in={true} timeout={1000}>
          <Typography variant="h2">About</Typography>
        </Fade>
        <Fade in={true} timeout={1200}>
          <Typography
            className={classes.aboutDetails}
            color="textSecondary"
            variant="subtitle1"
            component="p"
            paragraph
          >
            RJMC entertainment is a general entertainment website with a wide
            variety of content. It was originally created by Ryan McCann to help
            improve his web development skills and to have a project to showcase to
            future jobs. It has now grown to something much larger than
            previously thought. The content on this website is meant for those
            who have a curious mind and an endless need to learn. It ranges
            anywhere from interviews with local music artists to blog posts from
            foreigners about politics and philosophy. Our main goal is to not
            only try to improve our own writing and speaking skills, but to
            obtain as much knowledge as possible before we check out for good.
            We’re very excited to see where this website takes us and hope you
            all enjoy what we produce.
          </Typography>
        </Fade>
        <Box className={classes.secondaryHeader}>
          <Fade in={true} timeout={1400}>
            <Typography variant="h3">Our Team</Typography>
          </Fade>
          <Fade in={true} timeout={1600}>
            <Divider
              className={classes.divider}
              classes={{ root: classes.divider }}
            />
          </Fade>
        </Box>
      </Box>
      <Grid
        container
        className={classes.gridContainer}
        justify="center"
        align="center"
      >
        <Grid item>
          <AboutContent />
        </Grid>
      </Grid>
    </div>
  );
}

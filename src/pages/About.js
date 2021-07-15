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
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  divider: {
    marginLeft: "5px",
    width: "200px",
    height: "3px",
    color: "purple",
    background: "#164AB2",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
    },
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
            Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet
            deserunt ex proident non dolore. Sunt consectetur incididunt aute
            amet laboris cillum reprehenderit officia fugiat enim excepteur
            reprehenderit. Ut dolor ullamco proident duis minim magna culpa.
            Incididunt mollit labore irure mollit velit ut cillum dolor irure
            commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing
            aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt.
            Eu minim nisi aute nostrud pariatur adipisicing dolore est fugiat
            culpa consectetur. Est in cupidatat culpa minim id ipsum labore do
            ad reprehenderit.
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

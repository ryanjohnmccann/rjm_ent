import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import AboutContent from "../components/About/AboutContent";
import { Fade } from "react-awesome-reveal";

// ! Center accordingly (Not on some screen sizes!) The "Our Team" header

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
  divider: {
    marginLeft: "5px",
    width: "200px",
    height: "3px",
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
        <Fade triggerOnce delay={200}>
          <Typography variant="h2">About</Typography>
        </Fade>
        <Fade triggerOnce delay={400}>
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
        <Fade triggerOnce delay={550}>
          <Typography variant="h3">Our Team</Typography>
          <Divider className={classes.divider} />
        </Fade>
      </Box>
      <Grid
        container
        className={classes.gridContainer}
        justify="center"
        align="center"
      >
        <Grid item>
          <Fade triggerOnce delay={600}>
            <AboutContent />
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}

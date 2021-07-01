import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Fade } from "react-awesome-reveal";
import styles from "../components/About/About.module.css";
import AboutContent from "../components/About/AboutContent";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

export default function About() {
  return (
    <div>
      <Box className={styles.root}>
        <Fade triggerOnce delay={200}>
          <Typography variant="h2">About</Typography>
        </Fade>
        <Fade triggerOnce delay={400}>
          <Typography
            className={styles.aboutDetails}
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
        </Fade>
      </Box>
      <Fade triggerOnce delay={600}>
        <Divider />
      </Fade>
      <Grid container style={{ marginTop: "5vmin", marginLeft: "5.5vmin" }}>
        <Grid item>
          <Fade triggerOnce delay={600}>
            <AboutContent />
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}

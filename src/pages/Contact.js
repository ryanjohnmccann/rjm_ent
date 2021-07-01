import React from "react";
import Typography from "@material-ui/core/Typography";
import { Fade } from "react-awesome-reveal";
import styles from "../components/Contact/Contact.module.css";
import Box from "@material-ui/core/Box";
import ContactLinks from "../components/Contact/ContactLinks.js";
import ContactForm from "../components/Contact/ContactForm.js";
import Grid from "@material-ui/core/Grid";

export default function Contact() {
  return (
    <div>
      <Box className={styles.root}>
        <Fade triggerOnce delay={200}>
          <Typography variant="h2">Contact</Typography>
        </Fade>
        <Fade triggerOnce delay={400}>
          <Typography
            className={styles.contactDetails}
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
      </Box>
      <Fade triggerOnce delay={600}>
        <Grid container spacing={3} style={{ paddingLeft: "30vmin" }}>
          <Grid item>
            <ContactLinks />
          </Grid>
          <Grid item>
            <ContactForm />
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
}

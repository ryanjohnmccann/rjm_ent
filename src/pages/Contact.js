import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ContactLinks from "../components/Contact/ContactLinks.js";
import ContactForm from "../components/Contact/ContactForm.js";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "3vw",
    marginTop: "2vh",
    marginBottom: "2.5vh",
  },
  contactDetails: {
    maxWidth: "85%",
    paddingTop: "2vh",
  },
  linkGrid: {
    marginTop: "5vmin",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.root}>
        <Fade in={true} timeout={1000}>
          <Typography variant="h2">Contact</Typography>
        </Fade>
        <Fade in={true} timeout={1200}>
          <Typography
            className={classes.contactDetails}
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
      <Fade in={true} timeout={1400}>
        <Divider />
      </Fade>
      <Grid container spacing={3} className={classes.linkGrid} justify="center">
        <Grow in={true} timeout={1800}>
          <Grid item>
            <ContactLinks />
          </Grid>
        </Grow>
        <Grow in={true} timeout={1800}>
          <Grid item>
            <ContactForm />
          </Grid>
        </Grow>
      </Grid>
    </div>
  );
}

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
            The best way to contact us is by email, but feel free to use any
            method listed below. Keep in mind there may not be as quick of a
            response when using other methods. If there are any issues specific
            to the website, for example you encountered an error, please either
            email us or fill out the contact form below. When describing an
            issue on the website, try to be as specific as possible and to
            include some screenshots. If you'd like to collaborate or have any
            content suggestions, we'd love to hear them, so don't hesitate to reach
            out!
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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import ShowsContent from "../components/Shows/ShowsContent";

// Handles styling
const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    marginTop: "2vh",
  },
  showsDetails: {
    maxWidth: "90%",
    paddingTop: "2vh",
  },
  divider: {},
}));

export default function Shows() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item className={classes.header}>
          <Fade in={true} timeout={1000}>
            <Typography variant="h2" style={{ marginLeft: "3vw" }}>
              Shows
            </Typography>
          </Fade>
          <Fade in={true} timeout={1200}>
            <div>
              <Typography
                className={classes.showsDetails}
                color="textSecondary"
                variant="subtitle1"
                component="p"
                paragraph
                style={{ marginLeft: "3vw" }}
              >
                RJMC entertainment has a large array of shows from a unique set
                of content creators. Episodes can range anywhere from laid-back
                humorous conversations to more serious topics relating to
                science and engineering. If you’re interested in being on one of
                our shows or want to create your own, please visit the
                contact page and send us an email.
              </Typography>
              <Divider />
            </div>
          </Fade>
        </Grid>
        <Grid item container align="center" justify="center">
          <ShowsContent />
        </Grid>
      </Grid>
    </div>
  );
}

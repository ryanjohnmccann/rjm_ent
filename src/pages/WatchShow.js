import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ContentCard4 from "../components/UI/ContentCards/ContentCard4";
import TheBKRWatchShowData from "../data/WatchShow/TheBKRShow/watch-the-bkr-show-data.js"
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
}));

export default function WatchShow() {
  const params = useParams();
  const classes = useStyles();
  var watchShow;
  if (params.watchShowID.startsWith("the-bkr-watch")) {
    watchShow = TheBKRWatchShowData.find((watchShow) => watchShow.id === params.watchShowID);
  } else {
    watchShow = null;
  }
  return (
    <Grid container className={classes.root} justify="center">
      <Fade in={true} timeout={1600}>
        <Grid item xs={11}>
          <ContentCard4
            url={watchShow.url}
            mainTitle={watchShow.mainTitle}
            details={watchShow.details}
            date={watchShow.date}
          />
        </Grid>
      </Fade>
    </Grid>
  );
}

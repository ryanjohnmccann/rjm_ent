import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ContentCard4 from "../components/UI/ContentCards/ContentCard4";
import watchShowData from "../data/WatchShow/watch-show-data.js";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
  },
}));

export default function IndividualBlog() {
  const params = useParams();
  const classes = useStyles();
  const watchShow = watchShowData.find(
    (watchShow) => watchShow.id === params.watchShowID
  );
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

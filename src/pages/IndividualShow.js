import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import IndShowIntro from "../components/IndividualShows/IndShowIntro.js";
import IndShowExplore from "../components/IndividualShows/IndShowExplore.js";
import individualShowData from "../data/IndividualShow/individual-show-data.js";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5px",
  },
  showPhoto: {
    width: "98%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "500px",
    },
  },
  introGrid: {
    maxWidth: "98%",
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      marginLeft: "10px",
    },
  },
}));

export default function IndividualBlog() {
  const classes = useStyles();
  const params = useParams();
  const show = individualShowData.find((show) => show.id === params.showID);
  return (
    <Fade in={true} timeout={1400}>
      <Grid
        container
        direction="column"
        className={classes.root}
        spacing={2}
        justify="center"
        align="center"
      >
        <Grid item xs={12}>
          <img alt={show.alt} src={show.photo} className={classes.showPhoto} />
        </Grid>
        <Grid
          container
          item
          direction="column"
          className={classes.introGrid}
          spacing={1}
          xs={12}
        >
          <IndShowIntro
            mainTitle={show.mainTitle}
            titleDescription={show.titleDescription}
          />
        </Grid>
        <Grid item xs={12}>
          <IndShowExplore
            showContent={show.ShowContent}
            showGrids={show.ShowGrids}
          />
        </Grid>
      </Grid>
    </Fade>
  );
}

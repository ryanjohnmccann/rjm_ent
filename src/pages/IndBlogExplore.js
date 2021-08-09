import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import IndBlogExpIntro from "../components/IndBlogExplore/IndBlogExpIntro.js";
import IndBlogExplore from "../components/IndBlogExplore/IndBlogExplore.js";
import individualBlogData from "../data/IndBlogExplore/individual-blog-explore-data.js";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5px",
  },
  blogPhoto: {
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
  },
}));

export default function IndividualBlog() {
  const classes = useStyles();
  const params = useParams();
  const blog = individualBlogData.find((blog) => blog.id === params.blogPageID);
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
          <img alt={blog.alt} src={blog.photo} className={classes.blogPhoto} />
        </Grid>
        <Grid
          container
          item
          direction="column"
          className={classes.introGrid}
          spacing={1}
          xs={12}
        >
          <IndBlogExpIntro
            mainTitle={blog.mainTitle}
            titleDescription={blog.titleDescription}
          />
        </Grid>
        <Grid item xs={12}>
          <IndBlogExplore
            blogContent={blog.blogContent}
            blogGrids={blog.blogGrids}
          />
        </Grid>
      </Grid>
    </Fade>
  );
}

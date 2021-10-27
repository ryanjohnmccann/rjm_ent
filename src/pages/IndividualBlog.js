import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import IndBlogIntro from "../components/IndividualBlogs/IndBlogIntro.js";
import IndBlogButtons from "../components/IndividualBlogs/IndBlogButtons.js";
import IndBlogBody from "../components/IndividualBlogs/IndBlogBody.js";
import TheCuriousMindIndBlogs from "../data/IndividualBlog/TheCuriousMindIndBlogs/the-curious-mind-individual-blog-data.js";
import GabyDugarteIndBlogs from "../data/IndividualBlog/GabyDugarteIndBlogs/gaby-dugarte-individual-blog-data.js";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  divider: {
    maxWidth: "60%",
    marginTop: "10px",
    marginBottom: "15px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  blogPhoto: {
    maxWidth: "60%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  blogPhotoDetails: {
    maxWidth: "800px",
    fontStyle: "italic",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      textAlign: "center",
    },
  },
}));

export default function IndividualBlog() {
  const classes = useStyles();
  const params = useParams();
  var blog;
  if (params.blogID.startsWith("the-curious-mind")) {
    blog = TheCuriousMindIndBlogs.find((blog) => blog.id === params.blogID);
  } else if (params.blogID.startsWith("gaby-dugarte")) {
    blog = GabyDugarteIndBlogs.find((blog) => blog.id === params.blogID);
  } else {
    blog = null;
  }
  return (
    <Fade in={true} timeout={1600}>
      <Grid
        container
        className={classes.root}
        spacing={1}
        direction="row"
        justify="center"
        align="center"
      >
        <IndBlogIntro
          mainTitle={blog.title}
          authorDetails={blog.authorDetails}
          blogDate={blog.blogDate}
          avatar={blog.avatar}
        />
        <IndBlogButtons links={blog.links} />
        <Grid item xs={12}>
          <Divider className={classes.divider} />
          <img alt={blog.alt} src={blog.photo} className={classes.blogPhoto} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            color="textSecondary"
            className={classes.blogPhotoDetails}
          >
            {blog.photoDetails}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <IndBlogBody blogContent={blog.blogContent} />
        </Grid>
      </Grid>
    </Fade>
  );
}

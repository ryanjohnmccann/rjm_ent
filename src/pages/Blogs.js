import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import BlogsContent from "../components/Blogs/BlogsContent";

// Handles styling
const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    marginLeft: "3vw",
    marginTop: "2vh",
  },
  blogsDetails: {
    maxWidth: "90%",
    paddingTop: "2vh",
  },
}));

export default function Blogs() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item className={classes.header}>
          <Fade in={true} timeout={1400}>
            <Typography variant="h2">Blogs</Typography>
          </Fade>
          <Fade in={true} timeout={2000}>
            <Typography
              className={classes.blogsDetails}
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
        </Grid>
        <Grid item container align="center" justify="center">
          <BlogsContent />
        </Grid>
      </Grid>
    </div>
  );
}

import { React, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import CircularProgress from "@material-ui/core/CircularProgress";
import SlideShow from "../components/Home/SlideShow";
import Explore from "../components/Home/Explore";
import ExploreContent from "../components/Home/ExploreContent";
import { Fade } from "@material-ui/core";

// // Handles styling
// const useStyles = makeStyles((theme) => ({
//   loader: {
//     color: "#003cb3",
//   },
//   loaderDiv: {
//     textAlign: "center",
//   },
// }));

export default function Home() {
  // const classes = useStyles();
  const [currentCategory, setCurrentCategory] = useState("All");
  // const [isLoading, setIsLoading] = useState(false);
  const categoryHandler = (event) => {
    setCurrentCategory(event);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Fade in={true} timeout={1600}>
          <Grid item xs={12}>
            <SlideShow />
          </Grid>
        </Fade>
        <Grid item xs={12}>
          <Explore categoryClicked={categoryHandler} />
        </Grid>
        <Grid item xs={12}>
          <ExploreContent currentCategory={currentCategory} />
          {/* {isLoading && (
            <div className={classes.loaderDiv}>
              <CircularProgress className={classes.loader} size={60} />
            </div>
          )} */}
        </Grid>
      </Grid>
    </div>
  );
}

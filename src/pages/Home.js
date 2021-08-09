import { React, useState } from "react";
import Grid from "@material-ui/core/Grid";
import SlideShow from "../components/Home/SlideShow";
import Explore from "../components/Home/Explore";
import ExploreContent from "../components/Home/ExploreContent";
import { Fade } from "@material-ui/core";

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState("All");
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
        </Grid>
      </Grid>
    </div>
  );
}

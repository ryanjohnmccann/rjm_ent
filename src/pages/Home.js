import React from "react";
import SlideShow from "../components/Home/SlideShow";
import Grid from "@material-ui/core/Grid";
import Explore from "../components/Home/Explore";
import ExploreContent from "../components/Home/ExploreContent";
import { Fade } from "react-awesome-reveal";

// Remember to fix padding (or margin? I forget) on this page to line up with the slide show

export default function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Fade triggerOnce delay={300}>
            <SlideShow />
          </Fade>
        </Grid>
        <Grid item xs={12}>
          <Explore />
        </Grid>
        <Grid item xs={12}>
          <ExploreContent />
        </Grid>
      </Grid>
    </div>
  );
}

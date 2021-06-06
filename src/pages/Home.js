import React from "react";
import SlideShow from "../components/Home/SlideShow";
import Grid from "@material-ui/core/Grid";
import Explore from "../components/Home/Explore"
import ExploreContent from "../components/Home/ExploreContent";

export default function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SlideShow />
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

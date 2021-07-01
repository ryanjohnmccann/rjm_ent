import React from "react";
import ContentCard3 from "../UI/ContentCards/ContentCard3";
import Grid from "@material-ui/core/Grid";

export default function AboutContent() {
  return (
    <Grid container spacing={10} style={{ marginLeft: "15vmin" }}>
      <Grid item>
        <ContentCard3 />
      </Grid>
      <Grid item>
        <ContentCard3 />
      </Grid>
    </Grid>
  );
}

import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function IndBlogExpIntro(props) {
  return (
    <React.Fragment>
      <Grid item>
        <Typography variant="h2">{props.mainTitle}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">{props.titleDescription}</Typography>
      </Grid>
    </React.Fragment>
  );
}

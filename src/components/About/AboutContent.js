import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentCard3 from "../UI/ContentCards/ContentCard3";
import aboutContentCards from "./create-about-content";

export default function AboutContent() {
  return (
    <Grid container spacing={3} justify="center" align="center">
      {aboutContentCards.map((obj) => (
        <Grid item key={obj.aboutGridKey}>
          <ContentCard3
            img={obj.img}
            name={obj.name}
            position={obj.position}
            summary={obj.summary}
            height={obj.summaryHeight}
            buttons={obj.buttons}
            aboutGridKey={obj.aboutGridKey}
          />
        </Grid>
      ))}
    </Grid>
  );
}

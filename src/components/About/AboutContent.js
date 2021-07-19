import React from "react";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import ContentCard3 from "../UI/ContentCards/ContentCard3";
import aboutContentCards from "../../data/About/create-about-data";

export default function AboutContent() {
  return (
    <Grid container spacing={3} justify="center" align="center">
      {aboutContentCards.map((obj) => (
        <Grow in={true} timeout={1800} key={obj.growKey}>
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
        </Grow>
      ))}
    </Grid>
  );
}

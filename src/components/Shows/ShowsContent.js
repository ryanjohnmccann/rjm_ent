import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard2 from "../UI/ContentCards/ContentCard2";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
import showsContent from "./create-shows-content.js";

// Handles styling
const useStyles = makeStyles((theme) => ({
  rootBox: {},
  childBox: {
    height: "361px",
    overflowY: "auto",
    overflowX: "hidden",
  },
}));

export default function ShowsContent(props) {
  const classes = useStyles();
  function createShowGrid(gridKey, boxKey, loc) {
    return { gridKey, boxKey, loc };
  }

  const showGrids = [
    [
      createShowGrid("randomShowGridKey1", "randomBoxKeyShows1", 0),
      createShowGrid("randomShowGridKey1-2", "randomBoxKeyShows1-2", 0),
    ],
    [createShowGrid("randomShowGridKey2", "randomBoxKeyShows2", 1)],
    [createShowGrid("randomShowGridKey3", "randomBoxKeyShows3", 2)],
    [createShowGrid("randomShowGridKey4", "randomBoxKeyShows4", 3)],
    [createShowGrid("randomShowGridKey5", "randomBoxKeyShows5", 4)],
  ];

  return (
    <Box component="div" className={classes.rootBox}>
      <Carousel autoPlay={false} animation="slide">
        {showGrids[props.desIndex].map((obj, index) => (
          <Box component="div" key={obj.boxKey} className={classes.childBox}>
            <Grid
              container
              spacing={2}
              direction="row"
              key={obj.gridKey}
              justify="center"
              align="center"
            >
              {showsContent[obj.loc][index].map((obj2) => (
                <Grid item key={obj2.gridKey} sm={5} lg={4}>
                  <ContentCard2
                    alt={obj2.alt}
                    image={obj2.image}
                    title={obj2.title}
                    categoryColor={obj2.categoryColor}
                    category={obj2.category}
                    mainTitle={obj2.mainTitle}
                    body={obj2.body}
                    date={obj2.date}
                    key={obj2.contentKey}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

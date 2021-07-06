import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import ContentCard1 from "../UI/ContentCards/ContentCard1";
import contentCards from "./create-content-cards.js";

// Handles styling
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "650px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  gridItem: {
    paddingBottom: "10px"
  },
}));

function createContentGrid(gridKey, boxKey) {
  return { gridKey, boxKey };
}

const contentGrids = [
  createContentGrid("randomContentGrid1", "randomBoxKey1"),
  createContentGrid("randomContentGrid2", "randomBoxKey2"),
];

export default function ContentGrids() {
  const classes = useStyles();
  return (
    <Carousel autoPlay={false} animation="slide">
      {/* ContentGrid data is located in another file for neatness */}
      {contentGrids.map((obj, index) => (
        <Grid
          container
          spacing={1}
          align="center"
          direction="row"
          key={obj.gridKey}
          className={classes.gridContainer}
        >
          {contentCards[index].map((obj2) => (
            <Grid sm={6} md={6} lg={4} item key={obj2.gridKey} className={classes.gridItem}>
              <ContentCard1
                key={obj2.contentKey}
                alt={obj2.alt}
                image={obj2.image}
                title={obj2.title}
                categoryColor={obj2.categoryColor}
                category={obj2.category}
                mainTitle={obj2.mainTitle}
                body={obj2.body}
                isBlog={obj2.isBlog}
                ariaLabel={obj2.ariaLabel}
                avatarImg={obj2.avatarImg}
                headerTitle={obj2.headerTitle}
                headerDate={obj2.headerDate}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
}

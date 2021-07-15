import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import Carousel from "react-material-ui-carousel";
import ContentCard1 from "../UI/ContentCards/ContentCard1";
import createGrids from "./create-content-grids.js";
import manageContentCards from "./create-content-cards.js";

// Handles styling
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "690px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  gridItem: {
    paddingBottom: "10px",
  },
}));

export default function ContentGrids(props) {
  const classes = useStyles();
  const contentCards = manageContentCards(props.currentCategory);
  const contentGrids = createGrids(contentCards);
  return (
    <Carousel autoPlay={false} animation="slide">
      {contentGrids.map((obj, index) => (
        <Grid
          container
          spacing={2}
          align="center"
          justify="flex-start"
          direction="row"
          key={obj.gridKey}
          className={classes.gridContainer}
        >
          {contentCards[index].map((obj2) => (
            <Zoom in={true} timeout={500} key={obj2.zoomKey}>
              <Grid
                sm={6}
                md={6}
                lg={4}
                item
                key={obj2.gridKey}
                className={classes.gridItem}
              >
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
                  isWatch={obj2.isWatch}
                  ariaLabel={obj2.ariaLabel}
                  avatarImg={obj2.avatarImg}
                  headerTitle={obj2.headerTitle}
                  headerDate={obj2.headerDate}
                  pageID={obj2.pageID}
                />
              </Grid>
            </Zoom>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
}

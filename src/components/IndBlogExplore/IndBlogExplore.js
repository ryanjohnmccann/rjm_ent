import React from "react";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard1 from "../UI/ContentCards/ContentCard1.js";

const useStyles = makeStyles((theme) => ({
  carousel: {
    [theme.breakpoints.up("lg")]: {
      width: "1400px",
    },
    marginTop: "10px",
  },
  gridContainer: {
    height: "690px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  gridItem: {
    paddingBottom: "10px",
  },
}));

export default function IndBlogExplore(props) {
  const classes = useStyles();
  const contentGrids = props.blogGrids(props.blogContent);
  return (
    <Carousel autoPlay={false} animation="slide" className={classes.carousel}>
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
          {props.blogContent[index].map((obj2) => (
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
                  isBlogExp={obj2.isBlogExp}
                  ariaLabel={obj2.ariaLabel}
                  avatarImg={obj2.avatarImg}
                  headerTitle={obj2.headerTitle}
                  headerDate={obj2.headerDate}
                  pageID={obj2.pageID}
                  readBlog={obj2.readBlog}
                />
              </Grid>
            </Zoom>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
}

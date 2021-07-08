import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard2 from "../UI/ContentCards/ContentCard2";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
import blogContent from "./create-blog-content";

// Handles styling
const useStyles = makeStyles((theme) => ({
  rootBox: {},
  childBox: {
    height: "361px",
    overflowY: "auto",
    overflowX: "hidden",
  },
}));

export default function BlogContent(props) {
  const classes = useStyles();
  function createShowGrid(gridKey, boxKey, loc) {
    return { gridKey, boxKey, loc };
  }

  const showGrids = [
    [
      createShowGrid("randomBlogGridKey1", "randomBoxKeyBlog1", 0),
      createShowGrid("randomBlogGridKey1-2", "randomBoxKeyBlog1-2", 0),
    ],
    [createShowGrid("randomBlogGridKey2", "randomBoxKeyBlog2", 1)],
    [createShowGrid("randomBlogGridKey3", "randomBoxKeyBlog3", 2)],
    [createShowGrid("randomBlogGridKey4", "randomBoxKeyBlog4", 3)],
    [createShowGrid("randomBlogGridKey5", "randomBoxKeyBlog5", 4)],
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
              justifyContent="flex-start"
              align="center"
            >
              {blogContent[obj.loc][index].map((obj2) => (
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

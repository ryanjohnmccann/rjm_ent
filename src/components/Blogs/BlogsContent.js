import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard1 from "../UI/ContentCards/ContentCard1";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
import Carousel from "react-material-ui-carousel";
import blogsContent from "./create-blogs-content.js";

// Handles styling
const useStyles = makeStyles((theme) => ({
  rootBox: {
    marginTop: "20px",
    [theme.breakpoints.up("lg")]: {
      width: "1350px",
    },
  },
  childBox: {
    height: "340px",
    [theme.breakpoints.down("sm")]: {
      height: "600px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "900px",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "1150px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "1350px",
    },
    overflowY: "auto",
    overflowX: "hidden",
  },
  blogsGrid: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.between("md", "lg")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-start",
    },
    alignContent: "center",
  },
}));

export default function BlogsContent(props) {
  const classes = useStyles();
  function createBlogGrid(gridKey, boxKey) {
    return { gridKey, boxKey };
  }

  const blogGrids = [
    createBlogGrid("randomBlogGridKey1", "randomBoxKeyBlogs1"),
    createBlogGrid("randomBlogGridKey2", "randomBoxKeyBlogs2"),
  ];

  return (
    <Box component="div" className={classes.rootBox}>
      <Carousel autoPlay={false} animation="slide">
        {blogGrids.map((obj, index) => (
          <Box component="div" key={obj.boxKey} className={classes.childBox}>
            <Grid
              container
              spacing={2}
              direction="row"
              key={obj.gridKey}
              className={classes.blogsGrid}
            >
              {blogsContent[index].map((obj2) => (
                <Grow in={true} timeout={500} key={obj2.growKey}>
                  <Grid item key={obj2.gridKey} sm={5} lg={4}>
                    <ContentCard1
                      alt={obj2.alt}
                      image={obj2.image}
                      title={obj2.title}
                      categoryColor={obj2.categoryColor}
                      category={obj2.category}
                      mainTitle={obj2.mainTitle}
                      body={obj2.body}
                      key={obj2.contentKey}
                    />
                  </Grid>
                </Grow>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

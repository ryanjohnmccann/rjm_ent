import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentCard1 from "../UI/ContentCards/ContentCard1";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
import Grow from "@material-ui/core/Grow";
import showsContent from "../../data/Shows/create-shows-content-data.js";

// Handles styling
const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.only("sm")]: {
      height: "690px",
    },
    marginTop: "20px",
    [theme.breakpoints.up("lg")]: {
      width: "1350px",
    },
  },
  childBox: {
    height: "340px",
    [theme.breakpoints.down("sm")]: {
      height: "690px",
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
  showsGrid: {
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

export default function ShowsContent() {
  const classes = useStyles();
  function createShowGrid(gridKey, boxKey) {
    return { gridKey, boxKey };
  }

  const showGrids = [
    createShowGrid("show-page-grid-key1", "show-page-box-key1"),
  ];

  return (
    <Box component="div" className={classes.rootBox}>
      <Carousel autoPlay={false} animation="slide">
        {showGrids.map((obj, index) => (
          <Box component="div" key={obj.boxKey} className={classes.childBox}>
            <Grid
              container
              spacing={2}
              direction="row"
              key={obj.gridKey}
              className={classes.showsGrid}
            >
              {showsContent[index].map((obj2) => (
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
                      isBlog={obj2.isBlog}
                      isWatch={obj2.isWatch}
                      pageID={obj2.pageID}
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

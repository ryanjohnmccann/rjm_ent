import React from "react";
import Show1 from "../../assets/Shows/Show1.jpg";
import Show2 from "../../assets/Shows/Show2.jpg";
import Show3 from "../../assets/Shows/Show3.jpg";
import Show4 from "../../assets/Shows/Show4.jpg";
import Show5 from "../../assets/Shows/Show5.jpg";
import ContentCard2 from "../UI/ContentCards/ContentCard2";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
import styles from "./ShowsContent.module.css";

export default function ShowsContent(props) {
  function createShowContent(
    alt,
    image,
    title,
    categoryColor,
    category,
    mainTitle,
    body,
    date,
    contentKey,
    gridKey
  ) {
    return {
      alt,
      image,
      title,
      categoryColor,
      category,
      mainTitle,
      body,
      date,
      contentKey,
      gridKey,
    };
  }

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
  const showsContent = [
    [
      [
        createShowContent(
          "Random alt",
          Show1,
          "Random Title",
          "primary",
          "Random Show Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Show1Key1",
          "Show1GridKey1"
        ),
        createShowContent(
          "Random alt",
          Show1,
          "Random Title",
          "primary",
          "Random Show Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Show1Key2",
          "Show1GridKey2"
        ),
        createShowContent(
          "Random alt",
          Show1,
          "Random Title",
          "primary",
          "Random Show Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Show1Key3",
          "Show1GridKey3"
        ),
      ],
      [
        createShowContent(
          "Random alt",
          Show1,
          "Random Title",
          "primary",
          "Random Show Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Show1Key4",
          "Show1GridKey4"
        ),
      ],
    ],
    [
      [
        createShowContent(
          "Random alt",
          Show2,
          "Random Title",
          "primary",
          "Random Show Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Show2Key"
        ),
      ],
    ],
    [
      [
        createShowContent(
          "Random alt",
          Show3,
          "Random Title",
          "primary",
          "Random Show Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Show3Key"
        ),
      ],
    ],
    [
      [
        createShowContent(
          "Random alt",
          Show4,
          "Random Title",
          "primary",
          "Random Show Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Show4Key"
        ),
      ],
    ],
    [
      [
        createShowContent(
          "Random alt",
          Show5,
          "Random Title",
          "primary",
          "Random Show Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Show5Key"
        ),
      ],
    ],
  ];
  return (
    <Box component="div" className={styles.rootBox}>
      <Carousel autoPlay={false} animation="slide" navButtonsAlwaysVisible>
        {showGrids[props.desIndex].map((obj, index) => (
          <Box component="div" key={obj.boxKey} className={styles.childBox}>
            <Grid container spacing={6} direction="row" key={obj.gridKey}>
              {showsContent[obj.loc][index].map((obj2) => (
                <Grid item key={obj2.gridKey}>
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

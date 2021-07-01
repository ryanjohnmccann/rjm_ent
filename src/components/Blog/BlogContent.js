import React from "react";
import Blog1 from "../../assets/Blog/Blog1.jpg";
import Blog2 from "../../assets/Blog/Blog2.jpg";
import Blog3 from "../../assets/Blog/Blog3.jpg";
import Blog4 from "../../assets/Blog/Blog4.jpg";
import Blog5 from "../../assets/Blog/Blog5.jpg";
import ContentCard2 from "../UI/ContentCards/ContentCard2";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Carousel from "react-material-ui-carousel";
import styles from "./BlogContent.module.css";

export default function BlogContent(props) {
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
      createShowGrid("randomBlogGridKey1", "randomBoxKeyBlog1", 0),
      createShowGrid("randomBlogGridKey1-2", "randomBoxKeyBlog1-2", 0),
    ],
    [createShowGrid("randomBlogGridKey2", "randomBoxKeyBlog2", 1)],
    [createShowGrid("randomBlogGridKey3", "randomBoxKeyBlog3", 2)],
    [createShowGrid("randomBlogGridKey4", "randomBoxKeyBlog4", 3)],
    [createShowGrid("randomBlogGridKey5", "randomBoxKeyBlog5", 4)],
  ];
  const showsContent = [
    [
      [
        createShowContent(
          "Random alt",
          Blog1,
          "Random Title",
          "secondary",
          "Random Blog Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Blog1Key1",
          "Blog1GridKey1"
        ),
        createShowContent(
          "Random alt",
          Blog1,
          "Random Title",
          "secondary",
          "Random Blog Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Blog1Key2",
          "Blog1GridKey2"
        ),
        createShowContent(
          "Random alt",
          Blog1,
          "Random Title",
          "secondary",
          "Random Blog Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Blog1Key3",
          "Blog1GridKey3"
        ),
      ],
      [
        createShowContent(
          "Random alt",
          Blog1,
          "Random Title",
          "secondary",
          "Random Blog Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Blog1Key4",
          "Blog1GridKey4"
        ),
      ],
    ],
    [
      [
        createShowContent(
          "Random alt",
          Blog2,
          "Random Title",
          "secondary",
          "Random Blog Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Blog2Key"
        ),
      ],
    ],
    [
      [
        createShowContent(
          "Random alt",
          Blog3,
          "Random Title",
          "secondary",
          "Random Blog Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Blog3Key"
        ),
      ],
    ],
    [
      [
        createShowContent(
          "Random alt",
          Blog4,
          "Random Title",
          "secondary",
          "Random Blog Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Blog4Key"
        ),
      ],
    ],
    [
      [
        createShowContent(
          "Random alt",
          Blog5,
          "Random Title",
          "secondary",
          "Random Blog Category",
          "Random Title",
          "Random body content",
          "April 20, 1999",
          "Blog5Key"
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

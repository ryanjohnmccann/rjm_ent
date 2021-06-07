import React from "react";
import ContentCard1 from "../UI/ContentCard1";
import Image1 from "../../assets/Home/ExploreContent/ExploreContent1.jpg";
import Grid from "@material-ui/core/Grid";
import styles from "./ExploreContent.module.css"

export default function ExploreContent() {
  function createContentCard(
    alt,
    image,
    title,
    categoryColor,
    category,
    mainTitle,
    body
  ) {
    return { alt, image, title, categoryColor, category, mainTitle, body };
  }
  const contentCards = [
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "secondary",
      "Shows",
      "Random Show",
      "Random body content."
    ),
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "secondary",
      "Shows",
      "Random Show",
      "Random body content."
    ),
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "secondary",
      "Shows",
      "Random Show",
      "Random body content."
    ),
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "secondary",
      "Shows",
      "Random Show",
      "Random body content."
    ),
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "secondary",
      "Shows",
      "Random Show",
      "Random body content."
    ),
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "secondary",
      "Shows",
      "Random Show",
      "Random body content."
    ),
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "secondary",
      "Shows",
      "Random Show",
      "Random body content."
    ),
  ];

  return (
    <Grid container spacing={4} className={styles.root}>
      {contentCards.map((obj) => (
        <Grid item xs={6} sm={3}>
          <ContentCard1
            alt={obj.alt}
            image={obj.image}
            title={obj.title}
            categoryColor={obj.categoryColor}
            category={obj.category}
            mainTitle={obj.mainTitle}
            body={obj.body}
          />
        </Grid>
      ))}
    </Grid>
  );
}

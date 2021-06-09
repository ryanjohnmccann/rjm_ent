import React from "react";
import ContentCard1 from "../UI/ContentCards/ContentCard1";
import Image1 from "../../assets/Home/ExploreContent/ExploreContent1.jpg";
import Image2 from "../../assets/Home/ExploreContent/ExploreContent2.jpg";
import Image3 from "../../assets/Home/ExploreContent/ExploreContent3.jpg";
import Image4 from "../../assets/Home/ExploreContent/ExploreContent4.jpg";
import Image5 from "../../assets/Home/ExploreContent/ExploreContent5.jpg";
import Image6 from "../../assets/Home/ExploreContent/ExploreContent6.jpg";
import Image7 from "../../assets/Home/ExploreContent/ExploreContent7.jpg";
import Image8 from "../../assets/Home/ExploreContent/ExploreContent8.jpg";
import Grid from "@material-ui/core/Grid";
import styles from "./ExploreContent.module.css";
import { Slide } from "react-awesome-reveal";

export default function ExploreContent() {
  function createContentCard(
    alt,
    image,
    title,
    categoryColor,
    category,
    body,
    contentKey,
    gridKey,
    mainTitle = ""
  ) {
    return {
      alt,
      image,
      title,
      categoryColor,
      category,
      body,
      contentKey,
      gridKey,
      mainTitle,
    };
  }
  const contentCards = [
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "secondary",
      "Show",
      "Random body content.",
      "randomShowContentCard1",
      "randomContentGridItem1",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image2,
      "Random Title",
      "primary",
      "Blog",
      "Random body content.",
      "randomShowContentCard2",
      "randomContentGridItem2",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image3,
      "Random Title",
      "secondary",
      "Show",
      "Random body content.",
      "randomShowContentCard3",
      "randomContentGridItem3",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image4,
      "Random Title",
      "secondary",
      "Show",
      "Random body content.",
      "randomShowContentCard4",
      "randomContentGridItem4",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image5,
      "Random Title",
      "primary",
      "Blog",
      "Random body content.",
      "randomShowContentCard5",
      "randomContentGridItem5",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image6,
      "Random Title",
      "primary",
      "Blog",
      "Random body content.",
      "randomShowContentCard6",
      "randomContentGridItem6",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image7,
      "Random Title",
      "secondary",
      "Show",
      "Random body content.",
      "randomShowContentCard7",
      "randomContentGridItem7",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image8,
      "Random Title",
      "secondary",
      "Show",
      "Random body content.",
      "randomShowContentCard8",
      "randomContentGridItem8",
      "Random Title"
    ),
  ];

  return (
    <Slide cascade triggerOnce delay={550}>
      <Grid container spacing={4} className={styles.root}>
        {contentCards.map((obj) => (
          <Grid item lg={3} key={obj.gridKey}>
            <ContentCard1
              key={obj.contentKey}
              alt={obj.alt}
              image={obj.image}
              title={obj.title}
              categoryColor={obj.categoryColor}
              category={obj.category}
              mainTitle={obj.mainTitle}
              body={obj.body}
              isBlog={obj.isBlog}
              ariaLabel={obj.ariaLabel}
              avatarImg={obj.avatarImg}
              headerTitle={obj.headerTitle}
              headerDate={obj.headerDate}
            />
          </Grid>
        ))}
      </Grid>
    </Slide>
  );
}

import React from "react";
import ContentCard1 from "../UI/ContentCards/ContentCard1";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import styles from "./ContentGrids.module.css";
import Image1 from "../../assets/Home/ExploreContent/ExploreContent1.jpg";
import Image2 from "../../assets/Home/ExploreContent/ExploreContent2.jpg";
import Image3 from "../../assets/Home/ExploreContent/ExploreContent3.jpg";
import Image4 from "../../assets/Home/ExploreContent/ExploreContent4.jpg";
import Image5 from "../../assets/Home/ExploreContent/ExploreContent5.jpg";
import Image6 from "../../assets/Home/ExploreContent/ExploreContent6.jpg";

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
  [
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
  ],
  // [
  //   createContentCard(
  //     "Random Image",
  //     Image6,
  //     "Random Title",
  //     "secondary",
  //     "Show",
  //     "Random body content.",
  //     "randomShowContentCard6-1",
  //     "randomContentGridItem6-1",
  //     "Random Title"
  //   ),
  //   createContentCard(
  //     "Random Image",
  //     Image5,
  //     "Random Title",
  //     "secondary",
  //     "Show",
  //     "Random body content.",
  //     "randomShowContentCard5-1",
  //     "randomContentGridItem5-1",
  //     "Random Title"
  //   ),
  //   createContentCard(
  //     "Random Image",
  //     Image4,
  //     "Random Title",
  //     "primary",
  //     "Blog",
  //     "Random body content.",
  //     "randomShowContentCard4-1",
  //     "randomContentGridItem4-1",
  //     "Random Title"
  //   ),
  //   createContentCard(
  //     "Random Image",
  //     Image3,
  //     "Random Title",
  //     "primary",
  //     "Blog",
  //     "Random body content.",
  //     "randomShowContentCard3-1",
  //     "randomContentGridItem3-1",
  //     "Random Title"
  //   ),
  //   createContentCard(
  //     "Random Image",
  //     Image2,
  //     "Random Title",
  //     "secondary",
  //     "Show",
  //     "Random body content.",
  //     "randomShowContentCard2-1",
  //     "randomContentGridItem2-1",
  //     "Random Title"
  //   ),
  //   createContentCard(
  //     "Random Image",
  //     Image1,
  //     "Random Title",
  //     "secondary",
  //     "Show",
  //     "Random body content.",
  //     "randomShowContentCard1-1",
  //     "randomContentGridItem1-1",
  //     "Random Title"
  //   ),
  // ],
];

function createContentGrid(gridKey) {
  return { gridKey };
}

const contentGrids = [
  createContentGrid("randomContentGrid1"),
  // createContentGrid("randomContentGrid2"),
];

export default function ContentGrids(props) {
  return (
    // <Carousel autoPlay={false} animation="slide" navButtonsAlwaysVisible>
    <React.Fragment>
      {contentGrids.map((obj, index) => (
        <Grid container spacing={3} key={obj.gridKey}>
          {contentCards[index].map((obj2) => (
            <Grid item lg={4} key={obj2.gridKey} className={styles.test} style={{paddingLeft: "4vw"}}>
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
    </React.Fragment>
    // </Carousel>
  );
}

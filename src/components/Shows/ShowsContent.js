import React from "react";
import Show1 from "../../assets/Shows/Show1.jpg";
import Show2 from "../../assets/Shows/Show2.jpg";
import Show3 from "../../assets/Shows/Show3.jpg";
import Show4 from "../../assets/Shows/Show4.jpg";
import Show5 from "../../assets/Shows/Show5.jpg";
import ContentCard2 from "../UI/ContentCards/ContentCard2";
import Grid from "@material-ui/core/Grid";

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
      gridKey
    };
  }

  const showsContent = [
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
        "Show1GridKey1",
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
        "Show1GridKey2",
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
        "Show1GridKey3",
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
        "Show1Key4",
        "Show1GridKey4",
      ),
    ],
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
  ];
  return (
    <Grid container spacing={6} direction="row" style={{paddingLeft: "3.5vw"}}>
      {showsContent[props.desIndex].map((obj) => (
        <Grid item key={obj.gridKey}>
          <ContentCard2
            alt={obj.alt}
            image={obj.image}
            title={obj.title}
            categoryColor={obj.categoryColor}
            category={obj.category}
            mainTitle={obj.mainTitle}
            body={obj.body}
            date={obj.date}
            key={obj.contentKey}
          />{" "}
        </Grid>
      ))}
    </Grid>
  );
}

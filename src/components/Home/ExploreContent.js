import React from "react";
import ContentGrids from "./ContentGrids";

export default function ExploreContent(props) {
  return (
    <React.Fragment>
      <ContentGrids currentCategory={props.currentCategory} />
    </React.Fragment>
  );
}

import React from "react";
import { Slide } from "react-awesome-reveal";
import ContentGrids from "./ContentGrids";

export default function ExploreContent() {
  return (
    <React.Fragment>
      <Slide cascade triggerOnce delay={550}>
        <ContentGrids />
      </Slide>
    </React.Fragment>
  );
}

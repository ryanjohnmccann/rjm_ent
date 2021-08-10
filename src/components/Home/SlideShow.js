import React from "react";
import Carousel from "react-material-ui-carousel";
import Image1 from "../../assets/Home/SlideShow/SlideShow1.jpg";
import Image2 from "../../assets/Home/SlideShow/SlideShow2.jpg";
import Image3 from "../../assets/Home/SlideShow/SlideShow3.jpg";
import Image4 from "../../assets/Home/SlideShow/SlideShow4.jpg";
import Image5 from "../../assets/Home/SlideShow/SlideShow5.jpg";

export default function SlideShow() {
  var items = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
    { image: Image5 },
  ];

  return (
    <Carousel animation="slide" timeout={200} interval={6000}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <React.Fragment>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={props.item.image}
          alt="Slide Show"
          style={{
            height: "65vh",
            width: "97%",
            marginTop: "1vh",
            marginLeft: "1.5vw",
          }}
        />
      </a>
    </React.Fragment>
  );
}

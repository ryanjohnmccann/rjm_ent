import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Image1 from "../../assets/Home/SlideShow/SlideShow1.jpeg";
import Image2 from "../../assets/Home/SlideShow/SlideShow2.jpeg";

// Handles styling
const useStyles = makeStyles((theme) => ({
  slideImage: {
    height: "65vh",
    [theme.breakpoints.down("sm")]: {
      height: "310px",
    },
    width: "97%",
    marginTop: "1vh",
    marginLeft: "1.5vw",
  },
}));

export default function SlideShow() {
  var items = [
    { image: Image1, link: "/shows/the-bkr-show" },
    { image: Image2, link: "/blogs/explore/the-curious-mind" },
  ];

  return (
    <Carousel animation="slide" timeout={200} interval={6000}>
      {items.map((item, i) => (
        <Item key={i} item={item} link={item.link} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          src={props.item.image}
          alt="Slide Show"
          className={classes.slideImage}
        />
      </a>
    </React.Fragment>
  );
}

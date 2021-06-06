// Source code: https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react/
// ! I couldn't figure out how to transfer the classNames to CSS module to keep the convention. More
// ! More specifically, how to transfer the className used in line 50 to a module.css format. Will change eventually.

import React from "react";
import "./SlideShow.css";
import Image1 from "../../assets/Home/SlideShow/SlideShow1.jpg";
import Image2 from "../../assets/Home/SlideShow/SlideShow2.jpg";
import Image3 from "../../assets/Home/SlideShow/SlideShow3.jpg";
import Image4 from "../../assets/Home/SlideShow/SlideShow4.jpg";
import Image5 from "../../assets/Home/SlideShow/SlideShow5.jpg";

export default function Slideshow() {
  const pictures = [Image1, Image2, Image3, Image4, Image5];
  const delay = 3200;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, pictures.length]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {pictures.map((Image, index) => (
          <img className="slide" key={index} src={Image} alt="Slide Show" />
        ))}
      </div>

      <div className="slideshowDots">
        {pictures.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

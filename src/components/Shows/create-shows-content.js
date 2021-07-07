import Show1 from "../../assets/Shows/Show1.jpg";
import Show2 from "../../assets/Shows/Show2.jpg";
import Show3 from "../../assets/Shows/Show3.jpg";
import Show4 from "../../assets/Shows/Show4.jpg";
import Show5 from "../../assets/Shows/Show5.jpg";

const colorArr = ["#8c1aff", "#C30101", "#1D2EFF", "#00B30B", "#EF5E00"];

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

const showsContent = [
  [
    [
      createShowContent(
        "Random alt",
        Show1,
        "Random Title",
        colorArr[0],
        "Random Show Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Show1Key1",
        "Show1GridKey1"
      ),
      createShowContent(
        "Random alt",
        Show1,
        "Random Title",
        colorArr[0],
        "Random Show Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Show1Key2",
        "Show1GridKey2"
      ),
      createShowContent(
        "Random alt",
        Show1,
        "Random Title",
        colorArr[0],
        "Random Show Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Show1Key3",
        "Show1GridKey3"
      ),
    ],
    [
      createShowContent(
        "Random alt",
        Show1,
        "Random Title",
        colorArr[0],
        "Random Show Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Show1Key4",
        "Show1GridKey4"
      ),
    ],
  ],
  [
    [
      createShowContent(
        "Random alt",
        Show2,
        "Random Title",
        colorArr[1],
        "Random Show Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Show2Key"
      ),
    ],
  ],
  [
    [
      createShowContent(
        "Random alt",
        Show3,
        "Random Title",
        colorArr[2],
        "Random Show Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Show3Key"
      ),
    ],
  ],
  [
    [
      createShowContent(
        "Random alt",
        Show4,
        "Random Title",
        colorArr[3],
        "Random Show Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Show4Key"
      ),
    ],
  ],
  [
    [
      createShowContent(
        "Random alt",
        Show5,
        "Random Title",
        colorArr[4],
        "Random Show Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Show5Key"
      ),
    ],
  ],
];

export default showsContent;

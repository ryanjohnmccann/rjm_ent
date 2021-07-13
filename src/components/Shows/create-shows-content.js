import Show1 from "../../assets/Shows/Show1.jpg";
import Show2 from "../../assets/Shows/Show2.jpg";
import Show3 from "../../assets/Shows/Show3.jpg";

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
    createShowContent(
      "Random alt",
      Show1,
      "Random Title",
      colorArr[0],
      "Random Show Category",
      "Random Title",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      "April 20, 1999",
      "Show1Key1",
      "Show1GridKey1"
    ),
    createShowContent(
      "Random alt",
      Show2,
      "Random Title",
      colorArr[1],
      "Random Show Category",
      "Random Title",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do...",
      "April 20, 1999",
      "Show2Key2",
      "Show2GridKey1"
    ),
    createShowContent(
      "Random alt",
      Show3,
      "Random Title",
      colorArr[2],
      "Random Show Category",
      "Random Title",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute...",
      "April 20, 1999",
      "Show3Key3",
      "Show3GridKey1"
    ),
  ],
  [
    createShowContent(
      "Random alt",
      Show3,
      "Random Title",
      colorArr[3],
      "Random Show Category",
      "Random Title",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute...",
      "April 20, 1999",
      "Show4Key4",
      "Show4GridKey2"
    ),
  ],
];

export default showsContent;

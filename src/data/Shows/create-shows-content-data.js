import TheBKRShow from "../../assets/Shows/the-bkr-show.png";

const colorArr = ["#8c1aff", "#C30101", "#1D2EFF", "#00B30B", "#EF5E00"];

function createShowContent(
  alt,
  growKey,
  image,
  title,
  categoryColor,
  category,
  mainTitle,
  body,
  contentKey,
  gridKey,
  pageID,
  isBlog = false,
  isWatch = false
) {
  return {
    alt,
    growKey,
    image,
    title,
    categoryColor,
    category,
    mainTitle,
    body,
    contentKey,
    gridKey,
    pageID,
    isBlog,
    isWatch,
  };
}

const showsContent = [
  [
    createShowContent(
      "The BKR Show Picture",
      "the-bkr-show-show-page-effect-key",
      TheBKRShow,
      "The BKR Show",
      colorArr[0],
      "TV & Film",
      "The BKR Show",
      "Join us on the BKR show for random conversations about anything and everything. From humorous conversations to...",
      "the-bkr-show-content-key",
      "the-bkr-show-grid-key",
      "the-bkr-show"
    ),
  ],
];

export default showsContent;

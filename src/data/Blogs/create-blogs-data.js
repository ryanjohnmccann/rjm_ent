import TheCuriousMindPhoto from "../../assets/Blogs/the-curious-mind.jpg";

const colorArr = ["#8c1aff", "#C30101", "#1D2EFF", "#00B30B", "#EF5E00"];

function createBlogContent(
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
  pageID
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
  };
}

const blogsContent = [
  [
    createBlogContent(
      "Ryan Blog Picture",
      "ryan-mccann-blog-page-effect-key",
      TheCuriousMindPhoto,
      "ryan-mccann-blog-page",
      colorArr[2],
      "Ryan McCann",
      "The Curious Mind",
      "The Curious Mind Blog was created by Ryan McCann to improve his writing skills by writing about topics he’s...",
      "ryan-mccann-blog-content-key",
      "ryan-mccann-blog-grid-key",
      "the-curious-mind"
    ),
  ],
];

export default blogsContent;

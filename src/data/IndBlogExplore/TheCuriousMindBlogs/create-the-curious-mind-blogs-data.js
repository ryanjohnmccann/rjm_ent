import Blog1 from "../../../assets/IndividualBlogs/TheCuriousMindBlogs/Blog1.jpg";

function createContentCard(
  alt,
  zoomKey,
  image,
  title,
  categoryColor,
  category,
  body,
  contentKey,
  gridKey,
  mainTitle = "",
  pageID,
  isBlog = false,
  isWatch = false,
  isBlogExp = false,
  readBlog = false
) {
  return {
    alt,
    zoomKey,
    image,
    title,
    categoryColor,
    category,
    body,
    contentKey,
    gridKey,
    mainTitle,
    pageID,
    isBlog,
    isWatch,
    isBlogExp,
    readBlog,
  };
}

const indContentCards = [
  [
    createContentCard(
      "The Curious Mind Blog 1 Photo",
      "the-curious-mind-blog-page-effect-key-1",
      Blog1,
      "First Blog Post",
      "#8c1aff",
      "Ryan McCann",
      "I had to create a blog post to make sure things on this website are working properly before other content creators start...",
      "the-curious-mind-content-card-1",
      "the-curious-mind-content-grid-item-1",
      "First Blog Post",
      "the-curious-mind-ABp7KE7",
      false,
      false,
      true,
      true
    ),
  ],
];

export default indContentCards;

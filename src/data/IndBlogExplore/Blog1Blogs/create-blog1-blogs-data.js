import Image1 from "../../../assets/IndBlogExplore/IndBlog1.jpg";
import Image2 from "../../../assets/IndBlogExplore/IndBlog2.jpg";
import Image3 from "../../../assets/IndBlogExplore/IndBlog3.jpg";
import Image4 from "../../../assets/IndBlogExplore/IndBlog4.jpg";

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
  isBlogExp = false
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
  };
}

const indContentCards = [
  [
    createContentCard(
      "Random Image Individual Blog",
      "Random Individual Blog Effect Key 1",
      Image1,
      "Random Blog Title 1",
      "#8c1aff",
      "Ryan McCann",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndBlogContentCard1",
      "randomIndContentGridItem1",
      "Random Blog Title 1",
      "random-watch-blog-id-1",
      false,
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Blog 2",
      "Random Individual Blog Effect Key 2",
      Image2,
      "Random Blog Title 2",
      "#8c1aff",
      "Ryan McCann",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndBlogContentCard2",
      "randomIndContentGridItem2",
      "Random Blog Title 2",
      "random-watch-blog-id-2",
      false,
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Blog 3",
      "Random Individual Blog Effect Key 3",
      Image3,
      "Random Blog Title 3",
      "#8c1aff",
      "Ryan McCann",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndBlogContentCard3",
      "randomIndContentGridItem3",
      "Random Blog Title 3",
      "random-watch-blog-id-3",
      false,
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Blog 4",
      "Random Individual Blog Effect Key 4",
      Image4,
      "Random Blog Title 4",
      "#8c1aff",
      "Ryan McCann",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndBlogContentCard4",
      "randomIndContentGridItem4",
      "Random Blog Title 4",
      "random-watch-blog-id-4",
      false,
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Blog 5",
      "Random Individual Blog Effect Key 5",
      Image2,
      "Random Blog Title 5",
      "#8c1aff",
      "Ryan McCann",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndBlogContentCard5",
      "randomIndContentGridItem5",
      "Random Blog Title 5",
      "random-watch-blog-id-5",
      false,
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Blog 6",
      "Random Individual Blog Effect Key 6",
      Image3,
      "Random Blog Title 6",
      "#8c1aff",
      "Ryan McCann",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndBlogContentCard6",
      "randomIndContentGridItem6",
      "Random Blog Title 6",
      "random-watch-blog-id-6",
      false,
      false,
      true
    ),
  ],
  [
    createContentCard(
      "Random Image Individual Blog 7",
      "Random Individual Blog Effect Key 7",
      Image4,
      "Random Blog Title 7",
      "#8c1aff",
      "Ryan McCann",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndBlogContentCard7",
      "randomIndContentGridItem7",
      "Random Blog Title 7",
      "random-watch-blog-id-7",
      false,
      false,
      true
    ),
  ],
];

export default indContentCards;
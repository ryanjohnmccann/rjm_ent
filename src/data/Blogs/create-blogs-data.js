import Blog1 from "../../assets/Blogs/Blog1.jpg";
import Blog2 from "../../assets/Blogs/Blog2.jpg";
import Blog3 from "../../assets/Blogs/Blog3.jpg";

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
  date,
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
    date,
    contentKey,
    gridKey,
    pageID,
  };
}

const blogsContent = [
  [
    createBlogContent(
      "Random alt",
      "Random Effect Key (Blogs) 1",
      Blog1,
      "Random Title",
      colorArr[3],
      "Random Blog Category",
      "Random Title",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
      "April 20, 1999",
      "Blog1Key1",
      "Blog1GridKey1",
      "random-blog-id-1"
    ),
    createBlogContent(
      "Random alt",
      "Random Effect Key (Shows) 2",
      Blog2,
      "Random Title",
      colorArr[2],
      "Random Blog Category",
      "Random Title",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed do...",
      "April 20, 1999",
      "Blog2Key2",
      "Blog2GridKey1",
      "random-blog-id-2"
    ),
    createBlogContent(
      "Random alt",
      "Random Effect Key (Shows) 3",
      Blog3,
      "Random Title",
      colorArr[1],
      "Random Blog Category",
      "Random Title",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute...",
      "April 20, 1999",
      "Blog3Key3",
      "Blog3GridKey1",
      "random-blog-id-3"
    ),
  ],
  [
    createBlogContent(
      "Random alt",
      "Random Effect Key (Shows) 4",
      Blog3,
      "Random Title",
      colorArr[0],
      "Random Blog Category",
      "Random Title",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute...",
      "April 20, 1999",
      "Blog4Key4",
      "Blog4GridKey2",
      "random-blog-id-4"
    ),
  ],
];

export default blogsContent;

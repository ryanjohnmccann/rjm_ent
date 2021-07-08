import Blog1 from "../../assets/Blog/Blog1.jpg";
import Blog2 from "../../assets/Blog/Blog2.jpg";
import Blog3 from "../../assets/Blog/Blog3.jpg";
import Blog4 from "../../assets/Blog/Blog4.jpg";
import Blog5 from "../../assets/Blog/Blog5.jpg";

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

const blogContent = [
  [
    [
      createShowContent(
        "Random alt",
        Blog1,
        "Random Title",
        colorArr[2],
        "Random Blog Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Blog1Key1",
        "Blog1GridKey1"
      ),
      createShowContent(
        "Random alt",
        Blog1,
        "Random Title",
        colorArr[2],
        "Random Blog Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Blog1Key2",
        "Blog1GridKey2"
      ),
      createShowContent(
        "Random alt",
        Blog1,
        "Random Title",
        colorArr[2],
        "Random Blog Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Blog1Key3",
        "Blog1GridKey3"
      ),
    ],
    [
      createShowContent(
        "Random alt",
        Blog1,
        "Random Title",
        colorArr[2],
        "Random Blog Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Blog1Key4",
        "Blog1GridKey4"
      ),
    ],
  ],
  [
    [
      createShowContent(
        "Random alt",
        Blog2,
        "Random Title",
        colorArr[1],
        "Random Blog Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Blog2Key"
      ),
    ],
  ],
  [
    [
      createShowContent(
        "Random alt",
        Blog3,
        "Random Title",
        colorArr[0],
        "Random Blog Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Blog3Key"
      ),
    ],
  ],
  [
    [
      createShowContent(
        "Random alt",
        Blog4,
        "Random Title",
        colorArr[4],
        "Random Blog Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Blog4Key"
      ),
    ],
  ],
  [
    [
      createShowContent(
        "Random alt",
        Blog5,
        "Random Title",
        colorArr[3],
        "Random Blog Category",
        "Random Title",
        "Random body content",
        "April 20, 1999",
        "Blog5Key"
      ),
    ],
  ],
];

export default blogContent;

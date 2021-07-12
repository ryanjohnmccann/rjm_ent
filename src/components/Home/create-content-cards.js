import Image1 from "../../assets/Home/ExploreContent/ExploreContent1.jpg";
import Image2 from "../../assets/Home/ExploreContent/ExploreContent2.jpg";
import Image3 from "../../assets/Home/ExploreContent/ExploreContent3.jpg";
import Image4 from "../../assets/Home/ExploreContent/ExploreContent4.jpg";
import Image5 from "../../assets/Home/ExploreContent/ExploreContent5.jpg";
import Image6 from "../../assets/Home/ExploreContent/ExploreContent6.jpg";

function createContentCard(
  alt,
  image,
  title,
  categoryColor,
  category,
  body,
  contentKey,
  gridKey,
  mainTitle = ""
) {
  return {
    alt,
    image,
    title,
    categoryColor,
    category,
    body,
    contentKey,
    gridKey,
    mainTitle,
  };
}

const contentCards = [
  [
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "#8c1aff",
      "Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomShowContentCard1",
      "randomContentGridItem1",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image2,
      "Random Title",
      "#C30101",
      "Blog",
      "Viverra adipiscing at in tellus integer feugiat. Amet nisl suscipit adipiscing bibendum est ultricies. Vitae congue...",
      "randomShowContentCard2",
      "randomContentGridItem2",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image3,
      "Random Title",
      "#8c1aff",
      "Show",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "randomShowContentCard3",
      "randomContentGridItem3",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image4,
      "Random Title",
      "#8c1aff",
      "Show",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "randomShowContentCard4",
      "randomContentGridItem4",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image5,
      "Random Title",
      "#C30101",
      "Blog",
      "Lorem ipsum dolor sit amet, consectetur adipiscing nisi ut aliquip ex ea commodo consequat. Dolor sit amet...",
      "randomShowContentCard5",
      "randomContentGridItem5",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image6,
      "Random Title",
      "#C30101",
      "Blog",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomShowContentCard6",
      "randomContentGridItem6",
      "Random Title"
    ),
  ],
  [
    createContentCard(
      "Random Image",
      Image6,
      "Random Title",
      "#8c1aff",
      "Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomShowContentCard6-1",
      "randomContentGridItem6-1",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image5,
      "Random Title",
      "#8c1aff",
      "Show",
      "Lorem ipsum dolor sit amet, consectetur adipiscing nisi ut aliquip ex ea commodo consequat. Dolor sit amet...",
      "randomShowContentCard5-1",
      "randomContentGridItem5-1",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image4,
      "Random Title",
      "#C30101",
      "Blog",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "randomShowContentCard4-1",
      "randomContentGridItem4-1",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image3,
      "Random Title",
      "#C30101",
      "Blog",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "randomShowContentCard3-1",
      "randomContentGridItem3-1",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image2,
      "Random Title",
      "#8c1aff",
      "Show",
      "Viverra adipiscing at in tellus integer feugiat. Amet nisl suscipit adipiscing bibendum est ultricies. Vitae congue...",
      "randomShowContentCard2-1",
      "randomContentGridItem2-1",
      "Random Title"
    ),
    createContentCard(
      "Random Image",
      Image1,
      "Random Title",
      "#8c1aff",
      "Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomShowContentCard1-1",
      "randomContentGridItem1-1",
      "Random Title"
    ),
  ],
];

export default contentCards;

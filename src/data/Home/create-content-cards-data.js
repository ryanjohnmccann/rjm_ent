import Image1 from "../../assets/Home/ExploreContent/ExploreContent1.jpg";
import Image2 from "../../assets/Home/ExploreContent/ExploreContent2.jpg";
import Image3 from "../../assets/Home/ExploreContent/ExploreContent3.jpg";
import Image4 from "../../assets/Home/ExploreContent/ExploreContent4.jpg";
import Image5 from "../../assets/Home/ExploreContent/ExploreContent5.jpg";
import Image6 from "../../assets/Home/ExploreContent/ExploreContent6.jpg";
import useful_functions from "../../functions/useful_functions.js";

let useful_functions_inst = new useful_functions();

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
  isWatch = false
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
  };
}

const contentCards = useful_functions_inst.sort_carousel(
  [
    createContentCard(
      "Random Image",
      "Random Effect Key 1",
      Image1,
      "Random Title",
      "#8c1aff",
      "Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomShowContentCard1",
      "randomContentGridItem1",
      "Random Title",
      "random-watch-show-id-1",
      false,
      true
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 2",
      Image2,
      "Random Title",
      "#C30101",
      "Blog",
      "Viverra adipiscing at in tellus integer feugiat. Amet nisl suscipit adipiscing bibendum est ultricies. Vitae congue...",
      "randomShowContentCard2",
      "randomContentGridItem2",
      "Random Title",
      "random-blog-id-1",
      true,
      false
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 3",
      Image3,
      "Random Title",
      "#8c1aff",
      "Show",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "randomShowContentCard3",
      "randomContentGridItem3",
      "Random Title",
      "random-watch-show-id-2",
      false,
      true
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 4",
      Image4,
      "Random Title",
      "#8c1aff",
      "Show",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "randomShowContentCard4",
      "randomContentGridItem4",
      "Random Title",
      "random-watch-show-id-3",
      false,
      true
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 5",
      Image5,
      "Random Title",
      "#C30101",
      "Blog",
      "Lorem ipsum dolor sit amet, consectetur adipiscing nisi ut aliquip ex ea commodo consequat. Dolor sit amet...",
      "randomShowContentCard5",
      "randomContentGridItem5",
      "Random Title",
      "random-blog-id-2",
      true,
      false
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 6",
      Image6,
      "Random Title",
      "#C30101",
      "Blog",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomShowContentCard6",
      "randomContentGridItem6",
      "Random Title",
      "random-blog-id-3",
      true,
      false
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 7",
      Image6,
      "Random Title",
      "#8c1aff",
      "Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomShowContentCard6-1",
      "randomContentGridItem6-1",
      "Random Title",
      "random-watch-show-id-4",
      false,
      true
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 8",
      Image5,
      "Random Title",
      "#8c1aff",
      "Show",
      "Lorem ipsum dolor sit amet, consectetur adipiscing nisi ut aliquip ex ea commodo consequat. Dolor sit amet...",
      "randomShowContentCard5-1",
      "randomContentGridItem5-1",
      "Random Title",
      "random-watch-show-id-5",
      false,
      true
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 9",
      Image4,
      "Random Title",
      "#C30101",
      "Blog",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "randomShowContentCard4-1",
      "randomContentGridItem4-1",
      "Random Title",
      "random-blog-id-4",
      true,
      false
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 10",
      Image3,
      "Random Title",
      "#C30101",
      "Blog",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "randomShowContentCard3-1",
      "randomContentGridItem3-1",
      "Random Title",
      "random-blog-id-5",
      true,
      false
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 11",
      Image2,
      "Random Title",
      "#8c1aff",
      "Show",
      "Viverra adipiscing at in tellus integer feugiat. Amet nisl suscipit adipiscing bibendum est ultricies. Vitae congue...",
      "randomShowContentCard2-1",
      "randomContentGridItem2-1",
      "Random Title",
      "random-watch-show-id-6",
      false,
      true
    ),
    createContentCard(
      "Random Image",
      "Random Effect Key 12",
      Image1,
      "Random Title",
      "#8c1aff",
      "Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomShowContentCard1-1",
      "randomContentGridItem1-1",
      "Random Title",
      "random-watch-show-id-7",
      false,
      true
    ),
  ],
  6
);

// Returns content cards based on category (If there is one)
export default function manageContentCards(category) {
  if (category === "All") {
    return contentCards;
  } else {
    let i = 0;
    let j = 0;
    let tmpArr = [];
    for (i = 0; i < contentCards.length; i++) {
      for (j = 0; j < contentCards[i].length; j++) {
        if (contentCards[i][j].category === category) {
          tmpArr.push(contentCards[i][j]);
        }
      }
    }
    const newContentCards = useful_functions_inst.sort_carousel(tmpArr, 6);
    return newContentCards;
  }
}

import Blog1 from "../../assets/IndividualBlogs/TheCuriousMindBlogs/Blog1.jpg";
import Show1 from "../../assets/Shows/the-bkr-show.png";
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
      "The BKR Show S00E00 - Pilot Explore Photo",
      "the-bkr-show-explore-effect-key-1",
      Show1,
      "The BKR Show S00E00 - Pilot",
      "#8c1aff",
      "Show",
      "Join us for the beginning of whatever the heck we just created. Don't get offended.",
      "the-bkr-show-explore-content-key-1",
      "the-bkr-show-explore-grid-key-1",
      "The BKR Show S00E00 - Pilot",
      "the-bkr-watch-show-zPACJTWweh",
      false,
      true
    ),
    createContentCard(
      "The Curious Mind First Blog Post Explore Photo",
      "the-curious-mind-explore-effect-key-1",
      Blog1,
      "First Blog Post",
      "#C30101",
      "Blog",
      "I had to create a blog post to make sure things on this website are working properly before other content creators start to...",
      "the-curious-mind-explore-content-key-1",
      "the-curious-mind-explore-grid-key-1",
      "First Blog Post",
      "the-curious-mind-ABp7KE7",
      true,
      false
    ),
  ],
  2
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

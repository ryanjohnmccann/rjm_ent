import Blog1 from "../../assets/IndividualBlogs/TheCuriousMindBlogs/Blog1.jpg";
import Blog2 from "../../assets/IndividualBlogs/GabyDugarteBlogs/Blog1.jpg"
// import Show1 from "../../assets/Shows/the-bkr-show.png";
import Show2 from "../../assets/Shows/the-midnight-howl.png"
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
      "Gaby Dugarte What Is Love Photo",
      "gaby-dugarte-explore-effect-key-1",
      Blog2,
      "Gaby Dugarte - What Is Love?",
      "#C30101",
      "Blog",
      "A couple of weeks ago I was in English class, as I am every Wednesday. When class begins, the teacher usually...",
      "gaby-dugarte-explore-content-key-1",
      "gaby-dugarte-explore-grid-key-1",
      "Gaby Dugarte - What Is Love?",
      "gaby-dugarte-glkrQWV",
      true,
      false
    ),
    createContentCard(
      "The Midnight Howl Season 1 - Pilot",
      "the-midnight-howl-explore-effect-key-1",
      Show2,
      "The Midnight Howl Season 1 - Pilot",
      "#8c1aff",
      "Show",
      "Hey everyone it's Kyran here. I decided to start my podcast, The Midnight Howl, for young business owners and...",
      "the-midnight-howl-explore-content-key-1",
      "the-midnight-howl-explore-grid-key-1",
      "The Midnight Howl Season 1 - Pilot",
      "the-midnight-howl-watch-show-zPACJTWweh",
      false,
      true
    ),
    createContentCard(
      "The Midnight Howl Season 1 Episode 1 - Young Los",
      "the-midnight-howl-explore-effect-key-2",
      Show2,
      "The Midnight Howl Season 1 Episode 1 - Young Los",
      "#8c1aff",
      "Show",
      "Hey everyone it's Kyran here. I decided to start my podcast, The Midnight Howl, for young business owners and...",
      "the-midnight-howl-explore-content-key-2",
      "the-midnight-howl-explore-grid-key-2",
      "TMH S1E01 - Young Los",
      "the-midnight-howl-watch-show-grtfEGFnp",
      false,
      true
    ),
    createContentCard(
      "The Curious Mind First Blog Post Explore Photo",
      "the-curious-mind-explore-effect-key-1",
      Blog1,
      "The Curious Mind - First Blog Post",
      "#C30101",
      "Blog",
      "I had to create a blog post to make sure things on this website are working properly before other content creators start to...",
      "the-curious-mind-explore-content-key-1",
      "the-curious-mind-explore-grid-key-1",
      "The Curious Mind - First Blog Post",
      "the-curious-mind-ABp7KE7",
      true,
      false
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

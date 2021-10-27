import Blog1 from "../../assets/IndividualBlogs/TheCuriousMindBlogs/Blog1.jpg";
import Blog2 from "../../assets/IndividualBlogs/GabyDugarteBlogs/Blog1.jpg";
import Blog3 from "../../assets/IndividualBlogs/OnelyRobleroBlogs/Blog1.jpg";
import Show1 from "../../assets/Shows/the-bkr-show.png";
import Show2 from "../../assets/Shows/the-midnight-howl.png";
import Show3 from "../../assets/Shows/the-curious-mind.png";
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
      "The Amazing World of Bacteria Photo",
      "onely-roblero-explore-effect-key-1",
      Blog3,
      "The Amazing World of Bacteria",
      "#C30101",
      "Blog",
      "Many times, we have heard and talked about bacteria, but do you know what bacteria really is?",
      "onely-roblero-explore-content-key-1",
      "onely-roblero-explore-grid-key-1",
      "The Amazing World of Bacteria",
      "onely-roblero-lkjQYWh",
      true,
      false
    ),
    createContentCard(
      "TCM S1E03 - Priscila Explore Photo",
      "the-curious-mind-explore-effect-key-4",
      Show3,
      "TCM S1E03 - Priscila",
      "#8c1aff",
      "Show",
      "Priscila is an international relations student and the founder of the Grandes Mentes Project.",
      "the-curious-mind-explore-content-key-4",
      "the-curious-mind-explore-grid-key-4",
      "TCM S1E03 - Priscila",
      "the-curious-mind-watch-show-lpithnWQD",
      false,
      true
    ),
    createContentCard(
      "TMH S1E03 - Kaci Explore Photo",
      "the-midnight-howl-explore-effect-key-4",
      Show2,
      "TMH S1E03 - Kaci",
      "#8c1aff",
      "Show",
      "Kaci is a Real Estate Agent, psychology student, and lifestyle blogger.",
      "the-midnight-howl-explore-content-key-4",
      "the-midnight-howl-explore-grid-key-4",
      "TMH S1E03 - Kaci",
      "the-midnight-howl-watch-show-hgwyqDJFy",
      false,
      true
    ),
    createContentCard(
      "TCM S1E02 - Bawi Kham Explore Photo",
      "the-curious-mind-explore-effect-key-3",
      Show3,
      "TCM S1E02 - Bawi Kham",
      "#8c1aff",
      "Show",
      "Bawi currently owns multiple sushi franchises along with being an Electrical Engineering student at UML.",
      "the-curious-mind-explore-content-key-3",
      "the-curious-mind-explore-grid-key-3",
      "TCM S1E02 - Bawi Kham",
      "the-curious-mind-watch-show-altooPQHt",
      false,
      true
    ),
    createContentCard(
      "TMH S1E02 - Selianna Explore Photo",
      "the-midnight-howl-explore-effect-key-3",
      Show2,
      "TMH S1E02",
      "#8c1aff",
      "Show",
      "Selianna is the founder and owner of SAVICI.",
      "the-midnight-howl-explore-content-key-3",
      "the-midnight-howl-explore-grid-key-3",
      "TMH S1E02 - Selianna",
      "the-midnight-howl-watch-show-jqpwFDTle",
      false,
      true
    ),
    createContentCard(
      "The BKR Show S1E01 Explore Photo",
      "the-bkr-show-explore-effect-key-1",
      Show1,
      "The BKR Show S1E01",
      "#8c1aff",
      "Show",
      "Kyran is the CMO of RJMC Entertainment, an Auto Mechanic, and the Co-Founder and Vice President...",
      "the-bkr-show-explore-content-key-1",
      "the-bkr-show-explore-grid-key-1",
      "The BKR Show S1E01 - Kyran",
      "the-bkr-watch-show-mWQCJTWwph",
      false,
      true
    ),
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
      "The Curious Mind Episode 1 Explore Photo",
      "the-curious-mind-explore-effect-key-2",
      Show3,
      "TCM S1E01 - Alex Castro",
      "#8c1aff",
      "Show",
      "Alex Castro is a life long learner, musician/dj, and sound technician who decided to pursue a computer science...",
      "the-curious-mind-explore-content-key-2",
      "the-curious-mind-explore-grid-key-2",
      "TCM S1E01 - Alex Castro",
      "the-curious-mind-watch-show-lPZCKTWweh",
      false,
      true
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

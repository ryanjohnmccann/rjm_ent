import TheBKRShow from "../../../assets/Shows/the-bkr-show.png";

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

const indContentCards = [
  [
    createContentCard(
      "The BKR Show Pilot Episode Image",
      "the-bkr-show-episode-pilot-key",
      TheBKRShow,
      "S00E00 - Pilot",
      "#8c1aff",
      "The BKR Show",
      "Join us for the beginning of whatever the heck we just created.",
      "the-bkr-show-episode-pilot-content-key",
      "the-bkr-show-episode-pilot-grid-key",
      "S00E00 - Pilot",
      "the-bkr-watch-show-zPACJTWweh",
      false,
      true
    ),
  ]
];

export default indContentCards;

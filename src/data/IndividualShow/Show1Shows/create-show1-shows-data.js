import Image1 from "../../../assets/IndividualShows/IndShow1.jpg";
import Image2 from "../../../assets/IndividualShows/IndShow2.jpg";
import Image3 from "../../../assets/IndividualShows/IndShow3.jpg";
import Image4 from "../../../assets/IndividualShows/IndShow4.jpg";

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
      "Random Image Individual Show",
      "Random Individual Show Effect Key 1",
      Image1,
      "S01E01 - Watermelons Taste Good 0",
      "#8c1aff",
      "The BKR Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndShowContentCard1",
      "randomIndContentGridItem1",
      "S01E01 - Watermelons Taste Good",
      "random-watch-show-id-1",
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Show",
      "Random Individual Show Effect Key 2",
      Image2,
      "S01E01 - Watermelons Taste Good 1",
      "#8c1aff",
      "The BKR Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndShowContentCard1",
      "randomIndContentGridItem1",
      "S01E02 - Watermelons Taste Good",
      "random-watch-show-id-2",
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Show",
      "Random Individual Show Effect Key 3",
      Image3,
      "S01E01 - Watermelons Taste Good 2",
      "#8c1aff",
      "The BKR Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndShowContentCard1",
      "randomIndContentGridItem1",
      "S01E03 - Watermelons Taste Good",
      "random-watch-show-id-3",
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Show",
      "Random Individual Show Effect Key 4",
      Image4,
      "S01E01 - Watermelons Taste Good 3",
      "#8c1aff",
      "The BKR Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndShowContentCard1",
      "randomIndContentGridItem1",
      "S01E04 - Watermelons Taste Good",
      "random-watch-show-id-4",
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Show",
      "Random Individual Show Effect Key 5",
      Image2,
      "S01E01 - Watermelons Taste Good 4",
      "#8c1aff",
      "The BKR Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndShowContentCard1",
      "randomIndContentGridItem1",
      "S01E05 - Watermelons Taste Good",
      "random-watch-show-id-5",
      false,
      true
    ),
    createContentCard(
      "Random Image Individual Show",
      "Random Individual Show Effect Key 6",
      Image1,
      "S01E01 - Watermelons Taste Good 5",
      "#8c1aff",
      "The BKR Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndShowContentCard1",
      "randomIndContentGridItem1",
      "S01E06 - Watermelons Taste Good",
      "random-watch-show-id-6",
      false,
      true
    ),
  ],
  [
    createContentCard(
      "Random Image Individual Show",
      "Random Individual Show Effect Key 7",
      Image2,
      "S01E01 - Watermelons Taste Good 6",
      "#8c1aff",
      "The BKR Show",
      "Convallis a cras semper auctor neque vitae. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Adipiscing...",
      "randomIndShowContentCard1",
      "randomIndContentGridItem1",
      "S01E07 - Watermelons Taste Good",
      "random-ind-show-id-1",
      false,
      true
    ),
  ],
];

export default indContentCards;

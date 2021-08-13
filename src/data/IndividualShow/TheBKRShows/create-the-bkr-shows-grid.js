function createContentGrid(gridKey, boxKey) {
  return { gridKey, boxKey };
}

const roughContentGrids = [
  createContentGrid("the-bkr-show-content-grid-1", "the-bkr-show-box-key-1"),
];

export default function createIndGrids(contentCards) {
  let i = 0;
  let contentGrids = [];
  for (i = 0; i < contentCards.length; i++) {
    contentGrids.push(roughContentGrids[i]);
  }
  return contentGrids;
}

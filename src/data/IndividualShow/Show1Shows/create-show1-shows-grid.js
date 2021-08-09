function createContentGrid(gridKey, boxKey) {
  return { gridKey, boxKey };
}

const roughContentGrids = [
  createContentGrid("indContentGrid1", "indContentBox1"),
  createContentGrid("indContentGrid2", "indContentBox2"),
];

export default function createIndGrids(contentCards) {
  let i = 0;
  let contentGrids = [];
  for (i = 0; i < contentCards.length; i++) {
    contentGrids.push(roughContentGrids[i]);
  }
  return contentGrids;
}

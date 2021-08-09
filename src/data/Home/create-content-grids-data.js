function createContentGrid(gridKey, boxKey) {
  return { gridKey, boxKey };
}

const roughContentGrids = [
  createContentGrid("homeContentGrid1", "homeContentBox1"),
  createContentGrid("homeContentGrid2", "homeContentBox2"),
  createContentGrid("homeContentGrid3", "homeContentBox3"),
];

export default function createGrids(contentCards) {
  let i = 0;
  let contentGrids = [];
  for (i = 0; i < contentCards.length; i++) {
    contentGrids.push(roughContentGrids[i]);
  }
  return contentGrids;
}

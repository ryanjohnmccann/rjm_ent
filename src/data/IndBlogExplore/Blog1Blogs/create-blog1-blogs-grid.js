function createContentGrid(gridKey, boxKey) {
    return { gridKey, boxKey };
  }
  
  const roughContentGrids = [
    createContentGrid("indContentBlogGrid1", "indContentBlogBox1"),
    createContentGrid("indContentBlogGrid2", "indContentBlogBox2"),
  ];
  
  export default function createIndGrids(contentCards) {
    let i = 0;
    let contentGrids = [];
    for (i = 0; i < contentCards.length; i++) {
      contentGrids.push(roughContentGrids[i]);
    }
    return contentGrids;
  }
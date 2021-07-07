import About1 from "../../assets/About/About1.jpg";
import About2 from "../../assets/About/About2.jpg";
import About3 from "../../assets/About/About3.jpg";
import About4 from "../../assets/About/About4.jpg";

function createAboutContentCard(img, name, position, summary, buttons, aboutGridKey) {
  return { img, name, position, summary, buttons, aboutGridKey };
}
const aboutContentCards = [
  createAboutContentCard(
    About1,
    "Ryan McCann",
    "Founder and CTO",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt. Eu minim nisi aute nostrud pariatur adipisicing dolore est fugiat culpa consectetur. Est in cupidatat culpa minim id ipsum labore do ad reprehenderit.",
    [
      { txt: "LinkedIn", link: "https://www.linkedin.com/in/ryanjmccann/", key: "ryanLinkedIn" },
      { txt: "Website", link: "https://ryanjohnmccann.com", key: "ryanWebsite" },
      { txt: "Instagram", link: "https://www.instagram.com/_ryanm_/", key: "ryanInstagram" },
    ],
    "about1Grid",
  ),
  createAboutContentCard(
    About2,
    "Kyle Ayer",
    "CBO",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt. Eu minim nisi aute nostrud pariatur adipisicing dolore est fugiat culpa consectetur.",
    [{ txt: "Instagram", link: "https://www.instagram.com/", key: "kyleInstagram" }],
    "about2Grid",
  ),
  createAboutContentCard(
    About4,
    "Kristen Cyr",
    "Head of Quality Assurance",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt. Eu minim nisi aute nostrud pariatur adipisicing dolore est fugiat culpa consectetur. Est in cupidatat.",
    [{ txt: "Instagram", link: "https://www.instagram.com/", key: "kristenInstagram" }],
    "about3Grid",
  ),
  createAboutContentCard(
    About3,
    "Kyran McCann",
    "Content Creator",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt.",
    [{ txt: "Instagram", link: "https://www.instagram.com/", key: "kyranInstagram" }],
    "about4Grid",
  ),
];

export default aboutContentCards;

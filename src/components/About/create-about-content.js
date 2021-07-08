import About1 from "../../assets/About/About1.jpg";
import About2 from "../../assets/About/About2.jpg";
import About3 from "../../assets/About/About3.jpg";
import About4 from "../../assets/About/About4.jpg";

function createAboutContentCard(
  img,
  name,
  position,
  summary,
  buttons,
  aboutGridKey,
  summaryHeight
) {
  return { img, name, position, summary, buttons, aboutGridKey, summaryHeight };
}
const aboutContentCards = [
  createAboutContentCard(
    About1,
    "Ryan McCann",
    "Founder and Chief Technology Officer",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt. Eu minim nisi aute nostrud pariatur adipisicing dolore est fugiat culpa consectetur. Est in cupidatat culpa minim id ipsum labore do ad reprehenderit.",
    [
      {
        txt: "LinkedIn",
        link: "https://www.linkedin.com/in/ryanjmccann/",
        key: "ryanLinkedIn",
      },
      {
        txt: "Website",
        link: "https://ryanjohnmccann.com",
        key: "ryanWebsite",
      },
      {
        txt: "Instagram",
        link: "https://www.instagram.com/_ryanm_/",
        key: "ryanInstagram",
      },
      {
        txt: "More",
        link: "/home",
        key: "ryanMore",
      },
    ],
    "about1Grid",
    "280px"
  ),
  createAboutContentCard(
    About2,
    "Kyle Ayer",
    "Chief Product Officer",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt. Eu minim nisi aute nostrud pariatur adipisicing dolore est fugiat culpa consectetur.",
    [
      {
        txt: "Instagram",
        link: "https://www.instagram.com/",
        key: "kyleInstagram",
      },
      {
        txt: "More",
        link: "/home",
        key: "kyleMore",
      },
    ],
    "about2Grid",
    "280px"
  ),
  createAboutContentCard(
    About4,
    "Kristen Cyr",
    "Head of Quality Assurance",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt. Eu minim nisi aute nostrud pariatur adipisicing dolore est fugiat culpa consectetur. Est in cupidatat.",
    [
      {
        txt: "Instagram",
        link: "https://www.instagram.com/",
        key: "kristenInstagram",
      },
      {
        txt: "More",
        link: "/home",
        key: "kristenMore",
      },
    ],
    "about3Grid",
    "280px"
  ),
  createAboutContentCard(
    About3,
    "Kyran McCann",
    "Content Creator",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla fugiat minim ipsum incididunt.",
    [
      {
        txt: "Instagram",
        link: "https://www.instagram.com/",
        key: "kyranInstagram",
      },
      {
        txt: "More",
        link: "/home",
        key: "kyranMore",
      },
    ],
    "about4Grid",
    "280px"
  ),
  createAboutContentCard(
    About2,
    "Priscila Garcia Oliver",
    "Content Creator",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore.",
    [
      {
        txt: "Instagram",
        link: "https://www.instagram.com/",
        key: "priscilaInstagram",
      },
      {
        txt: "More",
        link: "/home",
        key: "priscilaMore",
      },
    ],
    "about5Grid",
    "244px"
  ),
  createAboutContentCard(
    About1,
    "Jack Flood",
    "Graphic Designer",
    "Eiusmod nulla ad anim cupidatat magna nisi laborum amet amet deserunt ex proident non dolore. Sunt consectetur incididunt aute amet laboris cillum reprehenderit officia fugiat enim excepteur reprehenderit. Ut dolor ullamco proident duis minim magna culpa. Incididunt mollit labore irure mollit velit ut cillum dolor irure commodo esse voluptate. Eiusmod nisi elit voluptate adipisicing aliqua pariatur veniam veniam nulla.",
    [
      {
        txt: "Instagram",
        link: "https://www.instagram.com/",
        key: "jackInstagram",
      },
      {
        txt: "More",
        link: "/home",
        key: "jackMore",
      },
    ],
    "about6Grid",
    "280px"
  ),
];

export default aboutContentCards;

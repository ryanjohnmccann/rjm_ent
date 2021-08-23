import KyleAyerPhoto from "../../assets/About/98ayer.jpg";
import RyanMcCannPhoto from "../../assets/About/ryan_mccann.png";
import OsoPhoto from "../../assets/About/oso.png";
import KyranMcCannPhoto from "../../assets/About/kyran_mccann.png";

function createAboutContentCard(
  img,
  growKey,
  name,
  position,
  summary,
  buttons,
  aboutGridKey,
  summaryHeight
) {
  return {
    img,
    growKey,
    name,
    position,
    summary,
    buttons,
    aboutGridKey,
    summaryHeight,
  };
}
const aboutContentCards = [
  createAboutContentCard(
    RyanMcCannPhoto,
    "ryan-mccann-about-page-grow-key",
    "Ryan McCann",
    "Founder and Chief Technology Officer",
    "After interning at a biotech company with some of the best engineers and scientists in the world, I was motivated to create something of my own. So, I contacted some like-minded friends and we decided to create this website! I coded it on my own using JavaScript and React.js. Other than that, I’m a fourth-year honors computer engineering student at UML. The honors college has pushed me to do things I never thought possible. Some examples include being a part of the national engineering honors society, IEEE, being in the top ten percent of my class, and creating a club at UML to help with poverty alleviation.",
    [
      {
        txt: "LinkedIn",
        link: "https://www.linkedin.com/in/ryanjmccann/",
        key: "ryan-mccann-about-instagram-link-key",
      },
      {
        txt: "Website",
        link: "https://ryanjohnmccann.com",
        key: "ryan-mccann-about-website-link-key",
      },
      {
        txt: "Instagram",
        link: "https://www.instagram.com/_ryanm_/",
        key: "ryan-mccann-about-instagram-link-key",
      },
    ],
    "ryan-mccann-about-page-grid-key",
    "280px"
  ),
  createAboutContentCard(
    KyleAyerPhoto,
    "98ayer-about-page-grow-key",
    "Kyle Ayer",
    "Chief Product Officer",
    "Hey everyone, how’s it going! My name is Kyle Ayer, I’m sort of a jack of all trades type of guy. During my normal 9-5 (6-2) you’ll find me building elevators in the great city of Boston. Any time after that you could find me riding horses in my back yard, working on my tiny house on wheels, skiing in the east, or even taking road trips across the country. I’m a member of IUEC Local 4, also known as the elevators union. That great achievement alone has given me the ability and knowledge to build anything or explore anywhere my heart desires.",
    [
      {
        txt: "Instagram",
        link: "https://www.instagram.com/98ayer/",
        key: "98ayer-about-instagram-link-key",
      },
      {
        txt: "YouTube",
        link: "https://youtube.com/channel/UC90qqEKlRzOXv8OjC4DzsGQ",
        key: "98ayer-about-youtube-link-key",
      },
    ],
    "98ayer-about-page-grid-key",
    "280px"
  ),
  createAboutContentCard(
    KyranMcCannPhoto,
    "kyran-mccann-about-page-grow-key",
    "Kyran McCann",
    "Chief Marketing Officer",
    "Auto technician. Coach. Vice President. Co-Founder. Just a few titles I have to my name. I went to school for and work as an auto technician but I want something more with life. I co-founded Wolfpack Football and I'm currently its Vice President. I love working in the community and giving back as I believe it helps my karma. I was content with all that until Ryan and others came to me with this idea and now we're living it. Hope you enjoy our shows!",
    [
      {
        txt: "Instagram",
        link: "",
        key: "kyran-mccann-about-instagram-link-key",
      },
    ],
    "kyran-mccann-about-page-grid-key",
    "280px"
  ),
  createAboutContentCard(
    OsoPhoto,
    "oso-about-page-grow-key",
    "Oso",
    "IT Specialist",
    "Hi, if there is ever anything wrong with the website, I most likely made a mistake. Please notify me as soon as possible and I will try to fix it. I'm only a dog so please be patient. I love the beach, table food, and being pet. I've been told my whole entire life that I can't do IT because I'm a dog so, I'm here to prove everybody wrong. Woof!",
    [
      {
        txt: "Don't Click This",
        link: "https://www.instagram.com/marshallmaerogan/?hl=en",
        key: "oso-about-random-link-key",
      },
    ],
    "oso-about-page-grid-key",
    "280px"
  ),
];

export default aboutContentCards;

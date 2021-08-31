import KyleAyerPhoto from "../../assets/About/98ayer.jpg";
import RyanMcCannPhoto from "../../assets/About/ryan_mccann.png";
import OsoPhoto from "../../assets/About/oso.png";
import KyranMcCannPhoto from "../../assets/About/kyran_mccann.png";
import PriscilaOliverPhoto from "../../assets/About/priscila_oliver.png"
import GabyDugartePhoto from "../../assets/About/gaby_dugarte.png"
import JackFloodPhoto from "../../assets/About/jack_flood.png"

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
        key: "ryan-mccann-about-linkedin-link-key",
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
        link: "https://www.instagram.com/my_name_is_ky22/",
        key: "kyran-mccann-about-instagram-link-key",
      },
      {
        txt: "Facebook",
        link: "https://www.facebook.com/kyran.mccann.1",
        key: "kyran-mccann-about-facebook-link-key",
      },
    ],
    "kyran-mccann-about-page-grid-key",
    "280px"
  ),
  createAboutContentCard(
    PriscilaOliverPhoto,
    "priscila-oliver-about-page-grow-key",
    "Priscila Oliver",
    "Content Creator",
    "Hola! I’m an International Relations student, passionate about anything that makes my heart beat fast. Human Rights and International Cooperation studies are really my interests, but I also love dancing, horseback riding, partying, and designing for fun! I am the founder of the Grandes Mentes Project, which aims to help children in vulnerable areas of Mexico through education. I’m also a member of the Pathchola Foundation as an Innovation Adviser. This organization protects gender minority people in Bangladesh.",
    [
      {
        txt: "Instagram",
        link: "https://www.instagram.com/prscila_oliver/",
        key: "priscila-oliver-about-instagram-link-key",
      },
      {
        txt: "LinkedIn",
        link: "https://www.linkedin.com/in/priscila-garc%C3%ADa-oliver-a3034a208/",
        key: "priscila-oliver-about-linkedin-link-key",
      },
    ],
    "priscila-oliver-about-page-grid-key",
    "280px"
  ),
  createAboutContentCard(
    GabyDugartePhoto,
    "gabby-dugarte-about-page-grow-key",
    "Gaby Dugarte",
    "Content Creator",
    "My name is Gaby and I'm 19 years old. I am a systems engineering student who also has a passion for languages. I live in the countryside and I consider myself a fairly active and multifaceted person. I love doing many things that help me grow professionally and nurture me as a human being.",
    [
      {
        txt: "Instagram",
        link: "https://www.instagram.com/gabydugartep/",
        key: "gaby-dugarte-about-instagram-link-key",
      },
    ],
    "gaby-dugarte-about-page-grid-key",
    "280px"
  ),
  createAboutContentCard(
    JackFloodPhoto,
    "jack-flood-about-page-grow-key",
    "Jack Flood",
    "Graphic Designer",
    "Hey I'm Jack (obviously short for \"Jackolantern\") and I'm a recent graduate from UML's Computer Engineering program, as well as an aspiring guitarist, lyricist, and graphic designer. I love creating because I believe that art and music add so much purpose to life, and I was honored when I got the opportunity to design a little spaceman for this website. In my free time, I mostly just write lyrics and daydream about owning a goat farm in the middle of nowhere, so this project was a very nice change of pace.",
    [
      {
        txt: "Click This",
        link: "",
        key: "jack-flood-about-random-link-key",
      },
    ],
    "jack-flood-about-page-grid-key",
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

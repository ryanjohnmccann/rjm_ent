import AvatarGaby from "../../../assets/About/gaby_dugarte.png";
import GabyBlog1 from "../blogDocs/GabyDugarte/Blog1.js";
import Blog1 from "../../../assets/IndividualBlogs/GabyDugarteBlogs/Blog1.jpg"

const gaby = {
  avatar: AvatarGaby,
  links: [
    {
      label: "insta",
      link: "https://www.instagram.com/gabydugartep/",
      linkKey: "gaby-dugarte-instagram-blog-link-key",
      gridKey: "gaby-dugarte-instagram-grid-item-key",
    },
  ],
};

const individualBlogData = [
  {
    id: "gaby-dugarte-glkrQWV",
    alt: "Couple Dancing On The Beach Blog Picture",
    title: "What Is Love?",
    avatar: gaby.avatar,
    authorDetails: "Gaby Dugarte",
    blogDate: "September 12, 2021",
    links: gaby.links,
    photo: Blog1,
    photoDetails:
      "",
    blogContent: <GabyBlog1 />,
  },
];

export default individualBlogData;
import AvatarRyan from "../../../assets/About/ryan_mccann.png";
import TheCuriousMindBlog1 from "../blogDocs/TheCuriousMind/Blog1.js";
import Blog1 from "../../../assets/IndividualBlogs/TheCuriousMindBlogs/Blog1.jpg"

const ryan = {
  avatar: AvatarRyan,
  links: [
    {
      label: "insta",
      link: "https://www.instagram.com/_ryanm_/",
      linkKey: "ryan-mccann-instagram-blog-link-key",
      gridKey: "ryan-mccann-instagram-grid-item-key",
    },
    {
      label: "linkedIn",
      link: "https://www.linkedin.com/in/ryanjmccann/",
      linkKey: "ryan-mccann-linkedin-blog-link-key",
      gridKey: "ryan-mccann-linkedin-grid-item-key",
    },
    {
      label: "website",
      link: "https://ryanjohnmccann.com",
      linkKey: "ryan-mccann-website-blog-link-key",
      gridKey: "ryan-mccann-website-grid-item-key",
    },
  ],
};

const individualBlogData = [
  {
    id: "the-curious-mind-ABp7KE7",
    alt: "Hello World Blog Picture",
    title: "First Blog Post",
    avatar: ryan.avatar,
    authorDetails: "Ryan McCann",
    blogDate: "August 12, 2021",
    links: ryan.links,
    photo: Blog1,
    photoDetails:
      "",
    blogContent: <TheCuriousMindBlog1 />,
  },
];

export default individualBlogData;

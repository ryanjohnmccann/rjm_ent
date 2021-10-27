import AvatarOnely from "../../../assets/About/onely_roblero.png";
import OnelyBlog1 from "../blogDocs/OnelyRoblero/Blog1.js";
import Blog1 from "../../../assets/IndividualBlogs/OnelyRobleroBlogs/Blog1.jpg";

const onely = {
  avatar: AvatarOnely,
  links: [
    {
      label: "insta",
      link: "https://www.instagram.com/onely_roblero/",
      linkKey: "onely-roblero-instagram-blog-link-key",
      gridKey: "onely-roblero-instagram-grid-item-key",
    },
  ],
};

const individualBlogData = [
  {
    id: "onely-roblero-lkjQYWh",
    alt: "Bacteria Blog Photo",
    title: "The Amazing World of Bacteria",
    avatar: onely.avatar,
    authorDetails: "Onely Roblero",
    blogDate: "October 27, 2021",
    links: onely.links,
    photo: Blog1,
    photoDetails: "",
    blogContent: <OnelyBlog1 />,
  },
];

export default individualBlogData;

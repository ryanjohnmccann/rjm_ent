import AvatarRyan from "../../assets/Avatars/Ryan.jpg";
import AvatarKyle from "../../assets/Avatars/Kyle.jpg";
import AvatarPriscila from "../../assets/Avatars/Priscila.jpg";
import AvatarGabby from "../../assets/Avatars/Gabby.jpg";
import RyanBlog1 from "./blogDocs/Ryan/RyanBlog1.js";

const ryan = {
  avatar: AvatarRyan,
  links: [
    {
      label: "insta",
      link: "https://www.instagram.com",
      linkKey: "ryanInstagramBlogLink",
      gridKey: "ryanInstagramBlogGrid",
    },
    {
      label: "linkedIn",
      link: "https://www.linkedIn.com",
      linkKey: "ryanLinkedInBlogLink",
      gridKey: "ryanLinkedInBlogGrid",
    },
    {
      label: "website",
      link: "https://www.google.com",
      linkKey: "ryanWebsiteBlogLink",
      gridKey: "ryanWebsiteBlogGrid",
    },
    {
      label: "more",
      link: "https://www.facebook.com",
      linkKey: "ryanMoreBlogLink",
      gridKey: "ryanMoreBlogGrid",
    },
  ],
};
const kyle = {
  avatar: AvatarKyle,
  links: [
    {
      label: "insta",
      link: "https://www.instagram.com",
      linkKey: "kyleInstagramBlogLink",
      gridKey: "kyleInstagramBlogGrid",
    },
    {
      label: "linkedIn",
      link: "https://www.linkedIn.com",
      linkKey: "kyleLinkedInBlogLink",
      gridKey: "kyleLinkedInBlogGrid",
    },
    {
      label: "website",
      link: "https://www.google.com",
      linkKey: "kyleWebsiteBlogLink",
      gridKey: "kyleWebsiteBlogGrid",
    },
    {
      label: "more",
      link: "https://www.facebook.com",
      linkKey: "kyleMoreBlogLink",
      gridKey: "kyleMoreBlogGrid",
    },
  ],
};
const priscila = {
  avatar: AvatarPriscila,
  links: [
    {
      label: "insta",
      link: "https://www.instagram.com",
      linkKey: "priscilaInstagramBlogLink",
      gridKey: "priscilaInstagramBlogGrid",
    },
    {
      label: "linkedIn",
      link: "https://www.linkedIn.com",
      linkKey: "priscilaLinkedInBlogLink",
      gridKey: "priscilaLinkedInBlogGrid",
    },
    {
      label: "website",
      link: "https://www.google.com",
      linkKey: "priscilaWebsiteBlogLink",
      gridKey: "priscilaWebsiteBlogGrid",
    },
  ],
};
const gabby = {
  avatar: AvatarGabby,
  links: [
    {
      label: "insta",
      link: "https://www.instagram.com",
      linkKey: "gabbyInstagramBlogLink",
      gridKey: "gabbyInstagramBlogGrid",
    },
  ],
};

const individualBlogData = [
  {
    id: "random-blog-id-1",
    alt: "random-alt-1",
    title: "Random Title 1",
    avatar: ryan.avatar,
    authorDetails: "Ryan McCann",
    blogDate: "April 20, 1999",
    links: ryan.links,
    photo: ryan.avatar,
    photoDetails:
      "1 - Hello this is the explanation section for the photo. It should be underneath it giving the credit for whoever took the photo and some minor details about it.",
    blogContent: <RyanBlog1 />,
  },
  {
    id: "random-blog-id-2",
    alt: "random-alt-2",
    title: "Random Title 2",
    avatar: kyle.avatar,
    authorDetails: "Kyle Ayer",
    blogDate: "April 20, 1999",
    links: kyle.links,
    photo: kyle.avatar,
    photoDetails:
      "2 - Hello this is the explanation section for the photo. It should be underneath it giving the credit for whoever took the photo and some minor details about it.",
    blogContent: "Test 2",
  },
  {
    id: "random-blog-id-3",
    alt: "random-alt-3",
    title: "Random Title 3",
    avatar: priscila.avatar,
    authorDetails: "Priscila Garcia Oliver",
    blogDate: "April 20, 1999",
    links: priscila.links,
    photo: priscila.avatar,
    photoDetails:
      "3 - Hello this is the explanation section for the photo. It should be underneath it giving the credit for whoever took the photo and some minor details about it.",
    blogContent: "Test 3",
  },
  {
    id: "random-blog-id-4",
    alt: "random-alt-4",
    title: "Random Title 4",
    avatar: gabby.avatar,
    authorDetails: "Gaby Dugarte",
    blogDate: "April 20, 1999",
    links: gabby.links,
    photo: gabby.avatar,
    photoDetails:
      "4 - Hello this is the explanation section for the photo. It should be underneath it giving the credit for whoever took the photo and some minor details about it.",
    blogContent: "Test 4",
  },
  {
    id: "random-blog-id-5",
    alt: "random-alt-5",
    title: "Random Title 5",
    avatar: ryan.avatar,
    authorDetails: "Ryan McCann",
    blogDate: "April 20, 1999",
    links: ryan.links,
    photo: ryan.avatar,
    photoDetails:
      "5 - Hello this is the explanation section for the photo. It should be underneath it giving the credit for whoever took the photo and some minor details about it.",
    blogContent: "Test 5",
  },
];

export default individualBlogData;

import React from "react";
import { useParams } from "react-router-dom";
import individualBlogData from "../components/Blogs/individual-blog-data";

export default function IndividualBlog() {
  const params = useParams();
  const blog = individualBlogData.find((blog) => blog.id === params.blogID);
  // ! Still need to handle if the blog has not been found.
  return (
    <div>
      <p>Hello! Working! (This is the blogs page)</p>
      <p>{blog.id}</p>
    </div>
  );
}

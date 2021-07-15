import React from "react";
import { useParams } from "react-router-dom";
import individualShowData from "../components/Shows/individual-show-data";

export default function IndividualBlog() {
  const params = useParams();
  const show = individualShowData.find((show) => show.id === params.showID);
  return (
    <div>
      <p>Hello! Working! (This is the shows page)</p>
      <p>{show.id}</p>
    </div>
  );
}
"use client";
import Link from "next/link";
import musicStyle from "../musicLayout/musiclayout.module.css";

export default function Music({ title = "", images = "", text = "" }) {
  return (
    <div className={musicStyle.layoutDesign}>
      <h3>{title}</h3>
      <img src={images} alt={title} />
      <h5>{text}</h5>
    </div>
  );
}

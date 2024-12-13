"use client";
import Link from "next/link";

export default function Music({ title = "", images = [], text = "" }) {
  const musicItems = images.map(function (images) {
    return (
      <div>
        <h3>{title}</h3>
        <img src={images.img} />
        <h3>{text}</h3>
      </div>
    );

    return <div>{musicItems}</div>;
  });
}

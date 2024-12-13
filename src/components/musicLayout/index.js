"use client";
import Link from "next/link";

export default function Music({ title = "", images = "", text = "" }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={images} alt={title} />
      <h3>{text}</h3>
    </div>
  );
}

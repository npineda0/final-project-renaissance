import displayStyles from "./display.module.css";
import Image from "next/image";

export default function Display({ pic, alt, width, height, text }) {
  return (
    <div className={displayStyles.display}>
      <Image src={pic} width={width} height={height} alt={alt}></Image>
      <p>{text}</p>
    </div>
  );
}

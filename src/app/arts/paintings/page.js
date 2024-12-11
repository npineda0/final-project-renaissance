import paintingsStyles from "./paintings.module.css";
import Item from "@/components/Item";

export default function paintings() {
  return (
    <main className={paintingsStyles.paintings}>
      <h1>Paintings</h1>
      <div className={paintingsStyles.content}>
        <Item pic={"/"} alt={"hold"} name={"WA"} text={"waaa"}></Item>
        <Item pic={"/"} alt={"hold"} name={"WA"} text={"waaa"}></Item>
        <Item pic={"/"} alt={"hold"} name={"WA"} text={"waaa"}></Item>
      </div>
    </main>
  );
}

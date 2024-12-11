import sculptureStyles from "./sculpture.module.css";
import Item from "@/components/Item";

export default function sculpture() {
  return (
    <main className={sculptureStyles.sculpture}>
      <h1>Sculptures</h1>
      <div className={sculptureStyles.content}>
        <Item pic={"/"} alt={"hold"} name={"WA"} text={"waaa"}></Item>
        <Item pic={"/"} alt={"hold"} name={"WA"} text={"waaa"}></Item>
        <Item pic={"/"} alt={"hold"} name={"WA"} text={"waaa"}></Item>
      </div>
    </main>
  );
}

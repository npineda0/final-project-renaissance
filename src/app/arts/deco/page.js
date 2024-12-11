import decoStyles from "./deco.module.css";
import Item from "@/components/Item";

export default function deco() {
  return (
    <main className={decoStyles.deco}>
      <h1>Decorative</h1>
      <div className={decoStyles.content}>
        <Item
          pic={"/The Crossing of the Granicus, from The Story of....jpg"}
          alt={"hold"}
          name={"WA"}
          year={"year"}
        ></Item>
        <Item
          pic={"/Footed Bowl.jpg"}
          alt={"hold"}
          name={"Footed Bowl"}
          year={"year"}
        ></Item>
        <Item pic={"/"} alt={"hold"} name={"WA"} year={"year"}></Item>
      </div>
    </main>
  );
}

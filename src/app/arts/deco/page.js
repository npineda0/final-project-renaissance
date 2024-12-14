import decoStyles from "./deco.module.css";
import Item from "@/components/Item";

export default function deco() {
  return (
    <main className={decoStyles.deco}>
      <h1>Decorative</h1>
      <div className={decoStyles.content}>
        <Item
          pic={"/The Crossing of the Granicus, from The Story of....jpg"}
          alt={"A rug"}
          name={
            "The Crossing of the Granicus, from The Story of Alexander the Great"
          }
          year={"1619"}
        ></Item>
        <Item
          pic={"/Footed Bowl.jpg"}
          alt={"A blue bowl"}
          name={"Footed Bowl"}
          year={"1485-1495"}
        ></Item>
        <Item
          pic={"/Chalice.jpg"}
          alt={"A chalice"}
          name={"Chalice"}
          year={"1500-1520"}
        ></Item>
      </div>
    </main>
  );
}

import sculptureStyles from "./sculpture.module.css";
import Item from "@/components/Item";

export default function sculpture() {
  return (
    <main className={sculptureStyles.sculpture}>
      <h1>Sculptures</h1>
      <div className={sculptureStyles.content}>
        <Item
          pic={"/sculpture-1.jpg"}
          alt={"Adoration of the Shepherds"}
          name={"Adoration of the Shepherds"}
          year={"1500-1540"}
        ></Item>
        <Item
          pic={"/Archangel Michael Overcoming the Devil.jpg"}
          alt={"Archangel Michael Overcoming the Devil"}
          name={"Archangel Michael Overcoming the Devil"}
          year={"1545-1555"}
        ></Item>
        <Item
          pic={"/Saint John the Baptist.jpg"}
          alt={"Saint John the Baptist"}
          name={"Saint John the Baptist"}
          year={"1545-1555"}
        ></Item>
        <Item
          pic={"/One of the Set of the Four Evangelists_ John.jpg"}
          alt={"One of the Set of the Four Evangelists: John"}
          name={"One of the Set of the Four Evangelists: John"}
          year={"1575-1585"}
        ></Item>
        <Item
          pic={"/Adoration of the Magi.jpg"}
          alt={"Adoration of the Magi"}
          name={"Adoration of the Magi"}
          year={"1450-1500"}
        ></Item>
        <Item
          pic={"/Saint Michael and the Devil.jpg"}
          alt={"Saint Michael and the Devil"}
          name={"Saint Michael and the Devil"}
          year={"1470-1505"}
        ></Item>
        <Item
          pic={"/Bust of Seneca.jpg"}
          alt={"Bust of Seneca"}
          name={"Bust of Seneca"}
          year={"1500-1600"}
        ></Item>
      </div>
    </main>
  );
}

import paintingsStyles from "./paintings.module.css";
import Item from "@/components/Item";

export default function paintings() {
  return (
    <main className={paintingsStyles.paintings}>
      <h1>Paintings</h1>
      <div className={paintingsStyles.content}>
        <Item
          pic={"/venus-birth.jpg"}
          alt={"venus-birth"}
          name={"The birth of Venus"}
          year={"1485-1486"}
        ></Item>
        <Item
          pic={"/Salome with the Head of Saint John the Baptist.jpg"}
          alt={"Salome with the Head of Saint John the Baptist"}
          name={"Salome with the Head of Saint John the Baptist"}
          year={"1635-1645"}
        ></Item>
        <Item
          pic={"/Portrait of a Lady.jpg"}
          alt={"Portrait of a Lady"}
          name={"Portrait of a Lady"}
          year={"1525-1565"}
        ></Item>
        <Item
          pic={"/Saint Agatha.jpg"}
          alt={"Saint Agatha"}
          name={"Saint Agatha"}
          year={"1492-1505"}
        ></Item>
        <Item
          pic={"/Saint Lucy.jpg"}
          alt={"Saint Lucy"}
          name={"Saint Lucy"}
          year={"1492-1505"}
        ></Item>
        <Item
          pic={"/Saint Jerome in Penitence.jpg"}
          alt={"Saint Jerome in Penitence"}
          name={"Saint Jerome in Penitence"}
          year={"1525-1530"}
        ></Item>
      </div>
    </main>
  );
}

import itemStyles from "./item.module.css";

export default function Display({ pic, alt, name, year }) {
  return (
    <div className={itemStyles.item}>
      <img src={pic} alt={alt} />
      <h2>{name}</h2>
      <p>{year}</p>
    </div>
  );
}

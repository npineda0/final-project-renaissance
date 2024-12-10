import basicStyles from "./basic.module.css";
import Learn from "../LearnButton";


export default function BasicInfo({ img = " " , header = " " , subheader = " " , nested=" " }) {
    return (
        <section className={basicStyles.bookContainer}>
            <img src={img} alt="bookCover" className={basicStyles.bookImg} width={200}/>
            <p className={basicStyles.Header}>{header}</p>
            <p className={basicStyles.subHead}>{subheader}</p>
            <Learn link={nested}></Learn>
        </section>
    );
  }
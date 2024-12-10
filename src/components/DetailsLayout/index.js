import detailsStyles from "./details.module.css";

export default function DetailsLayout({ title = " " , desc = " " }) {
    return (
        <section className={detailsStyles.container}>
            <p className={detailsStyles.title}>{title}</p>
            <p className={detailsStyles.desc}>{desc}</p>
        </section>
    );
}
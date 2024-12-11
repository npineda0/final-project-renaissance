import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/cervantes"}></GoBack>
                <p className={authStyles.header}>Miguel de Cervantes</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <p className={authStyles.born}>Born: September 29, 1547</p>
                <p className={authStyles.died}>Died: April 22, 1616</p>
                <p className={authStyles.birthPlace}>Birth Place: Alcalá de Henares, Spain</p>
                <p className={authStyles.spouse}>Spouse: Catalina de Palacios Salazar (1584-1616)</p>
                <p className={authStyles.children}>Children: Isabel de Saavedra</p>
            </section>

            <section className={authStyles.randomQuoteContainer}>
                <p>Click the button below to get quotes from the author!</p>
                
            </section>
        </main>
    );
}
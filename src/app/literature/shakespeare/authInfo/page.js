import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/shakespeare"}></GoBack>
                <p className={authStyles.header}>William Shakespeare</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <p className={authStyles.born}>Born: April 23, 1564</p>
                <p className={authStyles.died}>Died: April 23, 1616</p>
                <p className={authStyles.birthPlace}>Birth Place: Stratford-upon-Avon, England, United Kingdom</p>
                <p className={authStyles.spouse}>Spouse: Anne Hathaway (1582-1616)</p>
                <p className={authStyles.children}>Children: Susanna, Judith, and Hamnet</p>
            </section>

            <section className={authStyles.randomQuoteContainer}>
                <p>Click the button below to get quotes from Hamilton!</p>

            </section>
        </main>
    );
}
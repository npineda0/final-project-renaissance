import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/machiavelli"}></GoBack>
                <p className={authStyles.header}>Nicholas Machiavelli</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <p className={authStyles.born}>Born: May 3, 1469</p>
                <p className={authStyles.died}>Died: June 21, 1527</p>
                <p className={authStyles.birthPlace}>Birth Place: Florence, Italy</p>
                <p className={authStyles.spouse}>Spouse: Marietta Corsini (1501–1527)</p>
                <p className={authStyles.children}>Children: Piero, Lodovico, Bernardo, Totto, Primerana, Bartolomea, Guido</p>
            </section>

            <section className={authStyles.randomQuoteContainer}>
                <p>Click the button below to get quotes from the author!</p>
                
            </section>
        </main>
    );
}
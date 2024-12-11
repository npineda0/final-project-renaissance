import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/alighieri"}></GoBack>
                <p className={authStyles.header}>Dante Alighieri</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <p className={authStyles.born}>Born: est. 1265</p>
                <p className={authStyles.died}>Died: September 14, 1321</p>
                <p className={authStyles.birthPlace}>Birth Place: Florence, Italy</p>
                <p className={authStyles.spouse}>Spouse: Gemma Donati (1285-1321)</p>
                <p className={authStyles.children}>Children: Jacopo, Antonia, Pietro, Giovanni</p>
            </section>

            <section className={authStyles.randomQuoteContainer}>
                <p>Click the button below to get quotes from The Divine Comedy!</p>
                
            </section>
        </main>
    );
}
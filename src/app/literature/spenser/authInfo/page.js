import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/spenser"}></GoBack>
                <p className={authStyles.header}>Edmund Spenser</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <p className={authStyles.born}>Born: est. 1552</p>
                <p className={authStyles.died}>Died: January 13, 1599</p>
                <p className={authStyles.birthPlace}>Birth Place: London, United Kingdom</p>
                <p className={authStyles.spouse}>Spouse: Elizabeth Boyle (1594–1599), Machabyas Childe (1579–1594)</p>
                <p className={authStyles.children}>Children: Sylvanus Spenser, Lawrence Spenser, Catherine Wiseman, Peregrine Spenser</p>
            </section>

            <section className={authStyles.randomQuoteContainer}>
                <p>Click the button below to get quotes from The Faerie Queene!</p>
                
            </section>
        </main>
    );
}
import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/chaucer"}></GoBack>
                <p className={authStyles.header}>Geoffrey Chaucer</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <p className={authStyles.born}>Born: est. 1340</p>
                <p className={authStyles.died}>Died: October 25, 1400</p>
                <p className={authStyles.birthPlace}>Birth Place: London, United Kingdom</p>
                <p className={authStyles.spouse}>Spouse: Philippa Roet (1366–1387)</p>
                <p className={authStyles.children}>Children: Thomas, Elizabeth, Lewis, Agnes</p>
            </section>

            <section className={authStyles.randomQuoteContainer}>
                <p>Click the button below to get a quote from the author!</p>
                
            </section>
        </main>
    );
}
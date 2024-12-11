"use client";
import { useState } from "react";
import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    const [viewQuote, setViewQuote] = useState(false);

    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/cervantes"}></GoBack>
                <p className={authStyles.header}>Miguel de Cervantes</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <img src="/cervantesPortrait.png" height={250} width={210}/>
                <p className={authStyles.born}>Born: September 29, 1547</p>
                <p className={authStyles.died}>Died: April 22, 1616</p>
                <p className={authStyles.birthPlace}>Birth Place: Alcalá de Henares, Spain</p>
                <p className={authStyles.spouse}>Spouse: Catalina de Palacios Salazar (1584-1616)</p>
                <p className={authStyles.children}>Children: Isabel de Saavedra</p>
            </section>

            <section className={authStyles.quoteContainer}>
                <p className={authStyles.quoteHeader}>Click the button below to view the most popular quote from Don Quixote!</p>
                <button className={authStyles.quoteBtn} onClick={() => setViewQuote(!viewQuote)}>{viewQuote ? 'Hide Don Quixote Quote' : 'View Don Quixote Quote'}</button>
                {viewQuote && (
                    <p className={authStyles.litQuote}>&ldquo;For neither good nor evil can last for ever; and so it follows that as evil has lasted a long time, good must now be close at hand.&rdquo;</p>
                )}
            </section>
        </main>
    );
}
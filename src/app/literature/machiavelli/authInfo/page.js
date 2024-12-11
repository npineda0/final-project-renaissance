"use client";
import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";
import { useState } from "react";

export default function AuthInfo() {
    const [viewQuote, setViewQuote] = useState(false);

    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/machiavelli"}></GoBack>
                <p className={authStyles.header}>Nicholas Machiavelli</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <img src="/machiavelliPortrait.png" height={250} width={210}/>
                <p className={authStyles.born}>Born: May 3, 1469</p>
                <p className={authStyles.died}>Died: June 21, 1527</p>
                <p className={authStyles.birthPlace}>Birth Place: Florence, Italy</p>
                <p className={authStyles.spouse}>Spouse: Marietta Corsini (1501–1527)</p>
                <p className={authStyles.children}>Children: Piero, Lodovico, Bernardo, Totto, Primerana, Bartolomea, Guido</p>
            </section>

            <section className={authStyles.quoteContainer}>
                <p className={authStyles.quoteHeader}>Click the button below to view the most popular quote from The Prince!</p>
                <button className={authStyles.quoteBtn} onClick={() => setViewQuote(!viewQuote)}>{viewQuote ? 'Hide The Prince Quote' : 'View The Prince Quote'}</button>
                {viewQuote && (
                    <p className={authStyles.litQuote}>“Every one sees what you appear to be, few really know what you are.”</p>
                )}
            </section>
        </main>
    );
}
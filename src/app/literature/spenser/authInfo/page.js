"use client";
import { useState } from "react";
import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    const [viewQuote, setViewQuote] = useState(false);

    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/spenser"}></GoBack>
                <p className={authStyles.header}>Edmund Spenser</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <img src="/spenserPortrait.png" height={250} width={200}/>
                <p className={authStyles.born}>Born: est. 1552</p>
                <p className={authStyles.died}>Died: January 13, 1599</p>
                <p className={authStyles.birthPlace}>Birth Place: London, United Kingdom</p>
                <p className={authStyles.spouse}>Spouse: Elizabeth Boyle (1594–1599), Machabyas Childe (1579–1594)</p>
                <p className={authStyles.children}>Children: Sylvanus Spenser, Lawrence Spenser, Catherine Wiseman, Peregrine Spenser</p>
            </section>

            <section className={authStyles.quoteContainer}>
                <p className={authStyles.quoteHeader}>Click the button below to view the most popular quote from The Faerie Queene!</p>
                <button className={authStyles.quoteBtn} onClick={() => setViewQuote(!viewQuote)}>{viewQuote ? 'Hide The Faerie Queene Quote' : 'View The Faerie Queene Quote'}</button>
                {viewQuote && (
                    <p className={authStyles.litQuote}>&ldquo;For there is nothing lost, that may be found, if sought.&rdquo;</p>
                )}
            </section>
        </main>
    );
}
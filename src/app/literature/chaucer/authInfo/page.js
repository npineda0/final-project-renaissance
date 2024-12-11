"use client";
import { useState } from "react";
import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    const [viewQuote, setViewQuote] = useState(false);

    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/chaucer"}></GoBack>
                <p className={authStyles.header}>Geoffrey Chaucer</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <img src="/chaucerPortrait.png" height={250} width={200}/>
                <p className={authStyles.born}>Born: est. 1340</p>
                <p className={authStyles.died}>Died: October 25, 1400</p>
                <p className={authStyles.birthPlace}>Birth Place: London, United Kingdom</p>
                <p className={authStyles.spouse}>Spouse: Philippa Roet (1366–1387)</p>
                <p className={authStyles.children}>Children: Thomas, Elizabeth, Lewis, Agnes</p>
            </section>

            <section className={authStyles.quoteContainer}>
                <p className={authStyles.quoteHeader}>Click the button below to view the most popular quote from Canterbury Tales!</p>
                <button className={authStyles.quoteBtn} onClick={() => setViewQuote(!viewQuote)}>{viewQuote ? 'Hide Canterbury Tales Quote' : 'View Canterbury Tales Quote'}</button>
                {viewQuote && (
                    <p className={authStyles.litQuote}>
                        “Though there was nowhere one so busy as he, <br/>
                        He was less busy than he seemed to be.”
                    </p>
                )}
            </section>
        </main>
    );
}
"use client";
import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";
import { useState } from "react";

export default function AuthInfo() {
    const [viewQuote, setViewQuote] = useState(false);

    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/shakespeare"}></GoBack>
                <p className={authStyles.header}>William Shakespeare</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <img src="/shakespearePortrait.png" height={250} width={200}/>
                <p className={authStyles.born}>Born: April 23, 1564</p>
                <p className={authStyles.died}>Died: April 23, 1616</p>
                <p className={authStyles.birthPlace}>Birth Place: Stratford-upon-Avon, England, United Kingdom</p>
                <p className={authStyles.spouse}>Spouse: Anne Hathaway (1582-1616)</p>
                <p className={authStyles.children}>Children: Susanna, Judith, and Hamnet</p>
            </section>

            <section className={authStyles.quoteContainer}>
                <p className={authStyles.quoteHeader}>Click the button below to view the most popular quote from Hamilton!</p>
                <button className={authStyles.quoteBtn} onClick={() => setViewQuote(!viewQuote)}>{viewQuote ? 'Hide Hamilton Quote' : 'View Hamilton Quote'}</button>
                {viewQuote && (
                    <p className={authStyles.litQuote}>"To be or not to be"</p>
                )}
            </section>
        </main>
    );
}
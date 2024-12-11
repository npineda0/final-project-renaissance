"use client";
import { useState } from "react";
import authStyles from "./auth.module.css";
import GoBack from "@/components/GoBackButton";

export default function AuthInfo() {
    const [viewQuote, setViewQuote] = useState(false);

    return (
        <main>
            <div className={authStyles.headingContainer}>
                <GoBack link={"/literature/alighieri"}></GoBack>
                <p className={authStyles.header}>Dante Alighieri</p>
            </div>

            <section className={authStyles.authInfoContainer}>
                <img src="/alighieriPortrait.png" height={250} width={200}/>
                <p className={authStyles.born}>Born: est. 1265</p>
                <p className={authStyles.died}>Died: September 14, 1321</p>
                <p className={authStyles.birthPlace}>Birth Place: Florence, Italy</p>
                <p className={authStyles.spouse}>Spouse: Gemma Donati (1285-1321)</p>
                <p className={authStyles.children}>Children: Jacopo, Antonia, Pietro, Giovanni</p>
            </section>

            <section className={authStyles.quoteContainer}>
                <p className={authStyles.quoteHeader}>Click the button below to view the most popular quote from The Divine Comedy!</p>
                <button className={authStyles.quoteBtn} onClick={() => setViewQuote(!viewQuote)}>{viewQuote ? 'Hide The Divine Comedy Quote' : 'View The Divine Comedy Quote'}</button>
                {viewQuote && (
                    <p className={authStyles.litQuote}>"All hope abandon, ye who enter here."</p>
                )}
            </section>
        </main>
    );
}
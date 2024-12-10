"use client";
import shakespeareStyles from "./shakespeare.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";
import BasicInfo from "@/components/BasicInfoLayout";
import DetailsLayout from "@/components/DetailsLayout";

export default function Shakespeare() {
    return (
        <main>
            <SignedOut>
                <div className={shakespeareStyles.msgContainer}>
                    <p className={shakespeareStyles.msgHeader}>Message:</p>
                    <p className={shakespeareStyles.msgDesc}>Please sign in to view page.</p>
                    <GoBack link={"/literature"}></GoBack>
                </div>
            </SignedOut>

            <SignedIn>
                <div className={shakespeareStyles.headingContainer}>
                    <GoBack link={"/literature"}></GoBack>
                    <p className={shakespeareStyles.header}>Hamlet</p>
                </div>

                <div className={shakespeareStyles.contentContainer}>
                    <div className={shakespeareStyles.rightSect}>
                    <h2>Author:</h2>
                    <BasicInfo 
                        img="/spenserFaerie.png"
                        header="William Shakespeare"
                        subheader="April 23, 1564 – April 23, 1616"
                        nested={"/literature/shakespeareInfo"}
                    />
                    </div>

                    <div className={shakespeareStyles.contentTxt}>
                        <DetailsLayout
                            title="Significance:"
                            desc="In the four centuries since it was first staged, Hamlet has never lost its theatrical appeal, remaining today the most frequently performed of Shakespeare’s tragedies. At the same time, it has developed a reputation as the most intellectually puzzling of his plays, and it has already attracted more commentary than any other work in English except the Bible. Even today, when criticism stresses the importance of the reader’s role in “constructing” the texts of the past, there is something astonishing about Hamlet’s capacity to accommodate the most bafflingly different readings."
                        />
                        <DetailsLayout
                            title="Genre:"
                            desc="Shakespearean Tragedy"
                        />
                        <DetailsLayout
                            title="Published:"
                            desc="1623"
                        />
                    </div>
                    
                </div>
            </SignedIn>
        </main>
    );
}
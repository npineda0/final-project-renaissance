import machiavelliStyles from "./machiavelli.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";
import BasicInfo from "@/components/BasicInfoLayout";
import DetailsLayout from "@/components/DetailsLayout";

export default function Machiavelli() {
    return (
        <main>
            <SignedOut>
                <div className={machiavelliStyles.msgContainer}>
                    <p className={machiavelliStyles.msgHeader}>Message:</p>
                    <p className={machiavelliStyles.msgDesc}>Please sign in to view page.</p>
                    <GoBack link={"/literature"}></GoBack>
                </div>
            </SignedOut>

            <SignedIn>
                <div className={machiavelliStyles.headingContainer}>
                    <GoBack link={"/literature"}></GoBack>
                    <p className={machiavelliStyles.header}>The Prince</p>
                </div>

                <div className={machiavelliStyles.contentContainer}>
                    <div className={machiavelliStyles.rightSect}>
                    <h2>Author:</h2>
                    <BasicInfo 
                        img="/machiavelliPortrait.png"
                        header="Nicholas Machiavelli"
                        subheader="May 3, 1469 &ndash; June 21, 1527"
                        nested={"/literature/shakespeareInfo"}
                    />
                    </div>

                    <div className={machiavelliStyles.contentTxt}>
                        <DetailsLayout
                            title="Significance:"
                            desc="Machiavelli&apos;s focus on terrestrial instead of heavenly power is indicative of the general shift going on in his lifetime as the Renaissance gained steam. His concept that there was a division between public and private morality, and his endorsement of violence, murder, and political trickery to gain and maintain power is where we get the term Machiavellian when describing brilliant if evil politicians or schemers.

                            Some have tried to recast &ldquo;The Prince&rdquo; as a work of satire or even a sort of revolutionary handbook (arguing that the intended audience was actually the oppressed masses in an effort to show them how to overthrow their rulers), but it almost doesn&apos;t matter; Machiavelli&apos;s influence is inarguable."
                        />
                        <DetailsLayout
                            title="Genre:"
                            desc="Non-Fiction"
                        />
                        <DetailsLayout
                            title="Published:"
                            desc="1532"
                        />
                    </div>
                </div>
            </SignedIn>
        </main>
    );
}
import cervantesStyles from "./cervantes.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";
import BasicInfo from "@/components/BasicInfoLayout";
import DetailsLayout from "@/components/DetailsLayout";

export default function Cervantes() {
    return (
        <main>
            <SignedOut>
                <div className={cervantesStyles.msgContainer}>
                    <p className={cervantesStyles.msgHeader}>Message:</p>
                    <p className={cervantesStyles.msgDesc}>Please sign in to view page.</p>
                    <GoBack link={"/literature"}></GoBack>
                </div>
            </SignedOut>

            <SignedIn>
                <div className={cervantesStyles.headingContainer}>
                    <GoBack link={"/literature"}></GoBack>
                    <p className={cervantesStyles.header}>Don Quixote</p>
                </div>

                <div className={cervantesStyles.contentContainer}>
                    <div className={cervantesStyles.rightSect}>
                    <h2>Author:</h2>
                    <BasicInfo 
                        img="/cervantesPortrait.png"
                        header="Miguel de Cervantes"
                        subheader="September 29, 1547 &ndash; April 22, 1616"
                        nested={"/literature/shakespeareInfo"}
                    />
                    </div>

                    <div className={cervantesStyles.contentTxt}>
                        <DetailsLayout
                            title="Significance:"
                            desc="Published in 1605, it&apos;s a late-Renaissance work that is also credited with shaping much of what is now the modern Spanish language; in that sense, Cervantes must be regarded as an equal to Shakespeare in terms of cultural influence.

                            Cervantes played with language, using puns and contradictions for humorous effect, and the image of the loyal Sancho miserably following his deluded master as he literally tilts at windmills has endured through the centuries. Novels ranging from Dostoyevsky&apos;s The Idiot to Rushdie&apos;s &ldquo;The Moor&apos;s Last Sigh&rdquo; are explicitly influenced by &ldquo;Don Quixote,&rdquo; establishing its ongoing literary influence."
                        />
                        <DetailsLayout
                            title="Genre:"
                            desc="Parody, Satire, Farce"
                        />
                        <DetailsLayout
                            title="Published:"
                            desc="1605"
                        />
                    </div>
                </div>
            </SignedIn>
        </main>
    );
}
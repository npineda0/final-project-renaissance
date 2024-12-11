import chaucerStyles from "./chaucer.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";
import BasicInfo from "@/components/BasicInfoLayout";
import DetailsLayout from "@/components/DetailsLayout";

export default function Chaucer() {
    return (
        <main>
            <SignedOut>
                <div className={chaucerStyles.msgContainer}>
                    <p className={chaucerStyles.msgHeader}>Message:</p>
                    <p className={chaucerStyles.msgDesc}>Please sign in to view page.</p>
                    <GoBack link={"/literature"}></GoBack>
                </div>
            </SignedOut>

            <SignedIn>
                <div className={chaucerStyles.headingContainer}>
                    <GoBack link={"/literature"}></GoBack>
                    <p className={chaucerStyles.header}>Canterbury Tales</p>
                </div>

                <div className={chaucerStyles.contentContainer}>
                    <div className={chaucerStyles.rightSect}>
                    <h2>Author:</h2>
                    <BasicInfo 
                        img="/chaucerPortrait.png"
                        header="Geoffrey Chaucer"
                        subheader="est. 1340 &ndash; October 25, 1400"
                        nested={"/literature/shakespeareInfo"}
                    />
                    </div>

                    <div className={chaucerStyles.contentTxt}>
                        <DetailsLayout
                            title="Significance:"
                            desc="Chaucer&apos;s influence can be summarized in one sentence: Without him, Shakespeare wouldn&apos;t be Shakespeare. Not only did Chaucer&apos;s &ldquo;Canterbury Tales&rdquo; mark the first time English was used for a serious work of literary ambition (English being considered a &ldquo;common&rdquo; language for the uneducated at the time when the royal family of England still considered themselves in many ways French and in fact French was the official language of the court), but Chaucer&apos;s technique of using five stresses in a line was a direct ancestor of the iambic pentameter used by Shakespeare and his contemporaries."
                        />
                        <DetailsLayout
                            title="Genre:"
                            desc="Poetry, Fiction, Anthology"
                        />
                        <DetailsLayout
                            title="Published:"
                            desc="1400"
                        />
                    </div>
                </div>
            </SignedIn>
        </main>
    );
}
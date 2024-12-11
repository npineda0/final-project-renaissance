import spenserStyles from "./spenser.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";
import BasicInfo from "@/components/BasicInfoLayout";
import DetailsLayout from "@/components/DetailsLayout";

export default function Spenser() {
    return (
        <main>
            <SignedOut>
                <div className={spenserStyles.msgContainer}>
                    <p className={spenserStyles.msgHeader}>Message:</p>
                    <p className={spenserStyles.msgDesc}>Please sign in to view page.</p>
                    <GoBack link={"/literature"}></GoBack>
                </div>
            </SignedOut>

            <SignedIn>
            <div className={spenserStyles.headingContainer}>
                    <GoBack link={"/literature"}></GoBack>
                    <p className={spenserStyles.header}>The Faerie Queene</p>
                </div>

                <div className={spenserStyles.contentContainer}>
                    <div className={spenserStyles.rightSect}>
                    <h2>Author:</h2>
                    <BasicInfo 
                        img="/spenserPortrait.png"
                        header="Edmund Spenser"
                        subheader="est. 1552 &ndash; January 13, 1599"
                        nested={"/literature/shakespeareInfo"}
                    />
                    </div>

                    <div className={spenserStyles.contentTxt}>
                        <DetailsLayout
                            title="Significance:"
                            desc="Spenser isn&apos;t as much of a household name as Shakespeare, but his influence in the realm of poetry is as epic as his best-known work, &ldquo;The Faerie Queen.&rdquo; That lengthy (and technically unfinished) poem is actually a pretty blatantly sycophantic attempt to flatter then-Queen Elizabeth I; Spenser wanted desperately to be ennobled, a goal he never achieved, and a poem linking Queen Elizabeth with all the virtues in the world seemed like a good way to go. Along the way, Spenser developed a poetic structure still known as the Spenserian Stanza and a style of sonnet known as the Spenserian Sonnet, both of which have been copied by later poets such as Coleridge and Shakespeare.

                            Whether or not poetry&apos;s your jam, Spenser looms large all over modern literature."
                        />
                        <DetailsLayout
                            title="Genre:"
                            desc="Chivalric Romance"
                        />
                        <DetailsLayout
                            title="Published:"
                            desc="1590"
                        />
                    </div>
                </div>
            </SignedIn>
        </main>
    );
}
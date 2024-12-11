import alighieriStyles from "./alighieri.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";
import BasicInfo from "@/components/BasicInfoLayout";
import DetailsLayout from "@/components/DetailsLayout";

export default function Alighieri() {
    return (
        <main>
            <SignedOut>
                <div className={alighieriStyles.msgContainer}>
                    <p className={alighieriStyles.msgHeader}>Message:</p>
                    <p className={alighieriStyles.msgDesc}>Please sign in to view page.</p>
                    <GoBack link={"/literature"}></GoBack>
                </div>
            </SignedOut>

            <SignedIn>
            <div className={alighieriStyles.headingContainer}>
                    <GoBack link={"/literature"}></GoBack>
                    <p className={alighieriStyles.header}>The Divine Comedy</p>
                </div>

                <div className={alighieriStyles.contentContainer}>
                    <div className={alighieriStyles.rightSect}>
                    <h2>Author:</h2>
                    <BasicInfo 
                        img="/alighieriPortrait.png"
                        header="Dante Alighieri"
                        subheader="est. 1265 &ndash; September 14, 1321"
                        nested={"/literature/alighieri/authInfo"}
                    />
                    </div>

                    <div className={alighieriStyles.contentTxt}>
                        <DetailsLayout
                            title="Significance:"
                            desc="&ldquo;The Divine Comedy&rdquo; is a poem that follows Dante himself as he travels through hell, purgatory, and heaven. It&apos;s extremely complex in its structure and references, and quite beautiful in its language even in translation. While concerned with many theological and religious themes, it shows its Renaissance trappings in the many ways Dante critiques and comments on contemporary Florentine politics, society, and culture. Understanding all the jokes, insults, and commentary is difficult for the modern reader, but the poem&apos;s influence is felt throughout all of modern culture. Besides, how many writers get to be known by solely their first name?"
                        />
                        <DetailsLayout
                            title="Genre:"
                            desc="Narrative Poetry"
                        />
                        <DetailsLayout
                            title="Published:"
                            desc="1321"
                        />
                    </div>
                </div>
            </SignedIn>
        </main>
    );
}
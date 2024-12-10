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
                    <BasicInfo 
                        img="/spenserFaerie.png"
                        header="William Shakespeare"
                        subheader="1600"
                        nested={"/literature/spenser"}
                    />

                    <div className={shakespeareStyles.contentTxt}>
                        <DetailsLayout
                            title="Significance:"
                            desc="sks"
                        />
                        <DetailsLayout
                            title="Significance:"
                            desc="sks"
                        />
                    </div>
                    
                </div>
            </SignedIn>
        </main>
    );
}
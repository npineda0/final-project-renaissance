import shakespeareStyles from "./shakespeare.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";

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
                <p>Shakespeare</p>
            </SignedIn>
        </main>
    );
}
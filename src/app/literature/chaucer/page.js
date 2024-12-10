import chaucerStyles from "./chaucer.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";

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
                <p>Chaucer</p>
            </SignedIn>
        </main>
    );
}
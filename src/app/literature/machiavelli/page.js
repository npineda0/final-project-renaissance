import machiavelliStyles from "./machiavelli.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";

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
                <p>Machiavelli</p>
            </SignedIn>
        </main>
    );
}
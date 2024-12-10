import cervantesStyles from "./cervantes.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";

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
                <p>Cervantes</p>
            </SignedIn>
        </main>
    );
}
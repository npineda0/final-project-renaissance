import spenserStyles from "./spenser.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";

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
                <p>Spenser</p>
            </SignedIn>
        </main>
    );
}
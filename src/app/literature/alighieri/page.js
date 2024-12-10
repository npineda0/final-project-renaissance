import alighieriStyles from "./alighieri.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import GoBack from "@/components/GoBackButton";

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
                <p>Alighieri</p>
            </SignedIn>
        </main>
    );
}
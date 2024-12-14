"use client";
import contactStyle from "../contactButton/contactbutton.module.css";

import Link from "next/link";

export default function ContactButton() {
  return (
    <main className={contactStyle.contactDesign}>
      <button>
        <Link href="contact">Go to Contact Page</Link>
      </button>
    </main>
  );
}

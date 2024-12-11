"use client";
import contactStyles from "./contact.module.css";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function contact() {
  return (
    <main className={contactStyles.renaissance}>
      <h1>Contact</h1>

      <SignedIn>
        <form>
          <label>Name</label>
          <input></input>

          <label>Please select a topic</label>
          <select>
            <option>Literature</option>
            <option>Religion</option>
            <option>Fine Arts</option>
            <option>Music</option>
          </select>

          <label>Please type your questions or reccomandation you have</label>
          <textarea></textarea>

          <button>Submit</button>
        </form>
      </SignedIn>

      <SignedOut>
        <h1>Please sign in</h1>
      </SignedOut>
    </main>
  );
}

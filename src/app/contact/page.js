import contactStyles from "./contact.module.css";

export default function contact() {
  return (
    <main>
      <h1>Contact</h1>

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
      </form>
    </main>
  );
}

import musicStyles from "./music.module.css";

export default function music() {
  return (
    <main>
      <h1>Music</h1>
      <p>
        Renaissance Music is European music from the 15th and 16th centuries
        that is known for its use of poylphony, intricate compositions, and a
        shift from sacred to secular music
      </p>

      <div>
        <h3>Greensleeves</h3>
        <p>An English song that was well known by the time of Shakespeare</p>
        <button>Read More</button>
      </div>

      <div>
        <h3>Missa Papae Marcelli</h3>
        <p>Written by Giovanni Pierluigi</p>
        <button>Read More</button>
      </div>

      <div>
        <h3>Madrigal</h3>
        <p>
          A secular vocal genre that was usually performed acappella and in
          polyphonic texture
        </p>
        <button>Read More</button>
      </div>
    </main>
  );
}

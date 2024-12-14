import ContactButton from "@/components/contactButton/page";
import musicStyles from "./music.module.css";
import Link from "next/link";

export default function music() {
  return (
    <main className={musicStyles.musicDesign}>
      <h1>Music</h1>
      <h5>
        Renaissance Music is European music from the 15th and 16th centuries
        that is known for its use of poylphony, intricate compositions, and a
        shift from sacred to secular music
      </h5>

      <section>
        <div>
          <h3>Greensleeves</h3>
          <img src="https://www.mfiles.co.uk/scores/greensleeves-flute-and-guitar.jpg" />
          <p>An English song that was well known by the time of Shakespeare</p>

          <button>
            {" "}
            <Link href="/music/greensleeves">Read More</Link>
          </button>
        </div>

        <div>
          <h3>Missa Papae Marcelli</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXBE8FQ0l1zB_YB5qFJVqBXLegqjQ7yMoQQ&s" />
          <p>Written by Giovanni Pierluigi</p>
          <button>
            {" "}
            <Link href="/music/missa">Read More</Link>
          </button>
        </div>

        <div>
          <h3>Madrigal</h3>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9Vi1xErQFSDM8nZWkQ40V-MzOReQz9g3ng&s" />
          <p>
            A secular vocal genre that was usually performed acappella and in
            polyphonic texture
          </p>

          <button>
            {" "}
            <Link href="/music/madrigal">Read More</Link>
          </button>
        </div>
      </section>
      <ContactButton>Go to Contact</ContactButton>
    </main>
  );
}

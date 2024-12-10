import artStyles from "./art.module.css";
import Display from "@/components/Display";

export default function Art() {
  return (
    <main className={artStyles.main}>
      <h1>Religious Art and Architecture</h1>
      {/* <p>
        During the 13th and 14th century Religious Art was used in a number of
        ways. Churches were huge patrons of the arts and purchased tremendous
        amounts of art to create awe and respect. Making this art available to
        the public helped many people who could not read the scriptures by
        allowing them to envision the stories and relate to the subjects.
        Churches also hoped to inspire greater devotion to religion and arouse
        more desire for salvation. Early Renaissance artists began using more
        humanistic looking subjects and naturalistic settings to achieve those
        goals. By placing viewers in the scenes with the religious icons, the
        allegories became more relevant to everyday life. Throughout the
        Renaissance artists continued to develop new styles and techniques that
        appealed to and inspired the masses.
      </p> */}
      <section className={artStyles.gallery}>
        <Display
          pic={"/creation-of-adam.jpg"}
          width={"300"}
          height={"200"}
          alt={"2nd most Famous Painting"}
          text={
            "Created in 1512, this is one of the iconic paintings of Michelangelo. The creation of Adam is the painting on the ceiling of the Sistine Chapel. Even though this is one of the most replicated paintings of all time, it is only second in popularity to Mona Lisa. The painting has become a symbol of humanity as the image depicts the hand of both God and Adam on the verge of touching."
          }
        ></Display>
      </section>
    </main>
  );
}

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
        <Display
          pic={"/last-supper.jpg"}
          width={"300"}
          height={"200"}
          alt={"Painting of Jesus eating with Disciples"}
          text={
            "Considered to be the best artwork by Leonardo Da Vinci in 1498, the Last Supper is an important painting of the Renaissance period. The image shows Jesus with his disciples for his last supper. The painting is noted for its clever use of color, light, and anatomy. The painting is also a subject of many discussions and conjectures. Many have proposed that the disciple sitting to the right of Jesus is Mary Magdalene and many have also wondered the significance or meaning of the V shape between Jesus and the person on the right. Despite all the conjectures, the Last Supper is one of the masterpieces by Leonardo Da Vinci."
          }
        ></Display>
        <Display
          pic={"/judas-kiss.jpg"}
          width={"300"}
          height={"250"}
          alt={"Painting of Judas kissing Jesus after he betrays him."}
          text={
            "Painted in the year 1306 by Giotto di Bondone, this painting depicts the moment of betrayal of Jesus by Judas Iscariot who identifies Jesus to the Roman soldiers by kissing him. The Scrovegni Chapel is home to the fresco cycle by Giotto di Bondone, and the Kiss of Judas is the most famous painting in the cycle. Many critics believe that Giotto is a genius and no artist has been able to surpass his work. His mastery is evident in the way he captured the expression of Jesus and Judas at that scene of betrayal."
          }
        ></Display>
        <Display
          pic={"/last-day"}
          width={"200"}
          height={"250"}
          alt={"Painting of end times."}
          text={
            "This painting by Michelangelo Buonarroti completed in the year 1541 is found on the altar wall of the Sistine Chapel in Vatican City. The painting is about the second coming of Jesus, the day when God shall judge all humanity. Michelangelo has painted Jesus in the center surrounded by saints. The top portion of the painting shows the resurrection of the dead to heaven and the bottom portion shows the descent of sinners into hell. The use of colors and excellent brushwork make this painting of the most revered painting in the world."
          }
        ></Display>
        <Display
          pic={"/madonna.jpg"}
          width={"200"}
          height={"250"}
          alt={"Mary holding Jesus."}
          text={
            "Raffaello Sanzio popularly known as Raphael painted the Sistine Madonna in 1512. The painting shows Mother Mary holding baby Jesus in her hands with Saint Barbara and Saint Sixtus on both her sides and two cherubs beneath her. This is one of the most famous works of Raphael and important painting of the Renaissance."
          }
        ></Display>
        <Display
          pic={"/venus-birth.jpg"}
          width={"225"}
          height={"250"}
          alt={"Birth of the Goddess Venus."}
          text={
            "Created in 1485, the painting shows Goddess Venus arriving on the island of Cyprus. She is depicted as a pure and mature woman standing on a seashell. Botticelli had given much attention to every detail of Venus. This painting was done in a period where nudity was a subject in paintings and thus makes this one an important painting of the Renaissance."
          }
        ></Display>
      </section>
    </main>
  );
}

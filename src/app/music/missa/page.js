import Music from "@/components/musicLayout";

export default function () {
  let pic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXBE8FQ0l1zB_YB5qFJVqBXLegqjQ7yMoQQ&s";
  return (
    <main>
      <h1>Missa Papae Marcelli</h1>

      <Music
        title="Music Sheet"
        images={pic}
        text="The Missa Papae Marcelli consists, like most Renaissance masses, of a Kyrie, Gloria, Credo, Sanctus/Benedictus, and Agnus Dei, though the third part of the Agnus Dei is a separate movement.The mass is freely composed, not based upon a cantus firmus, paraphrase, or parody. Perhaps because of this, the mass is not as thematically consistent as Palestrina's masses based on models. It is primarily a six-voice mass, but voice combinations are varied throughout the piece; Palestrina scores Agnus II for seven voices, and the use of the full forces is reserved for specific climactic portions in the text. It is set primarily in a homorhythmic, declamatory style, with little overlapping of text and a general preference for block chords such that the text can clearly be heard in performance, unlike many polyphonic masses of the 16th century. As in much of Palestrina's contrapuntal work, voices move primarily in stepwise motion, and the voice leading strictly follows the rules of the diatonic modes codified by theorist Gioseffo Zarlino."
      ></Music>
    </main>
  );
}

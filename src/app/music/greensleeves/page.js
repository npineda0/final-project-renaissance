import Music from "@/components/musicLayout";

export default function () {
  let pic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAMlG9sLlH_VGWv3obFTOZqY_T-F24uz5aQ&s";
  return (
    <main>
      <h1>Greensleeves</h1>

      <Music
        title="Music Sheet"
        images={pic}
        text="is a traditional English folk song. A broadside ballad by the name A Newe Northen Dittye of ye Ladye Greene Sleves was registered by Richard Jones at the London Stationers' Company in September 1580,and the tune is found in several late 16th-century and early 17th-century sources, such as Ballet's MS Lute Book and Het Luitboek van Thysius, as well as various manuscripts preserved in the Seeley Historical Library in the University of Cambridge."
      ></Music>
    </main>
  );
}

import Music from "@/components/musicLayout";

export default function () {
  let pic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9Vi1xErQFSDM8nZWkQ40V-MzOReQz9g3ng&s";
  return (
    <main>
      <h1>Madrigal</h1>

      <Music
        title="Music Sheet"
        images={pic}
        text="is a form of secular vocal music most typical of the Renaissance  and early Baroque periods, although revisited by some later European composers. The polyphonic madrigal is unaccompanied, and the number of voices varies from two to eight, but the form usually features three to six voices, whilst the metre of the madrigal varies between two or three tercets, followed by one or two couplets.Unlike verse-repeating strophic forms sung to the same music, most madrigals are through-composed, featuring different music for each stanza of lyrics, whereby the composer expresses the emotions contained in each line and in single words of the poem being sung."
      ></Music>
    </main>
  );
}

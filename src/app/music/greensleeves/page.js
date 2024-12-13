import Music from "@/components/musicLayout";

export default function () {
  let pic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAMlG9sLlH_VGWv3obFTOZqY_T-F24uz5aQ&s";
  return (
    <main>
      <h1>Greensleeves</h1>

      <Music title="Green" images={pic} text="hi"></Music>
    </main>
  );
}

"use client";

export default function AuthorDetailsPage({ params: { authorName } }) {
    let authorInfo = (
        <section>
          <h2>hey</h2>
        </section>
    );

    if (authorName === "shakespeareInfo") {
        authorInfo = (
          <section>
            <h2>William Shakespeare</h2>
            <p>lorem</p>
          </section>
        );
    } else if (authorName === "spenserInfo") {
        authorInfo = (
            <section>
              <h2>Spenser</h2>
              <p>hyeyyyyy</p>
            </section>
          );
    }

    return (
        <main>
            <h2>{authorName}</h2>
            <p>{authorInfo}</p>
        </main>
    );
}
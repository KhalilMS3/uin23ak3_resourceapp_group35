import React from "react";

export default function ContentCard({category, text, sources}) {
  return (
    <>
      <main>
        <section>
          <h1>{category}</h1>
          <p>{text}</p>
          <ul id="links">
            {sources.map((source, index) => <li key={index}><a href={source.url}>{source.title}</a></li>)}
          </ul>
        </section>
      </main>
    </>
  );
}

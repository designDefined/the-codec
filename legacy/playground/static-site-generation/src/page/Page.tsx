import { PageDatum } from "../../data";

type PageProps = {
  datum: PageDatum;
};
export function Page({ datum }: PageProps) {
  return (
    <main id={`page${datum.id}`} style={{ backgroundColor: datum.color }}>
      {datum.contents.map((str, i) => (
        <div key={i}>{str}</div>
      ))}
      <div>
        <button onClick={() => alert(`clicked (id: ${datum.id})`)}>click!</button>
      </div>
      <div>
        <a href={`./${datum.id - 1}`}>back</a> <a href={`./${datum.id + 1}`}>next</a> <a href="/home">home</a>
      </div>
      <div></div>
    </main>
  );
}

import { Datum } from "../data";

type PageProps = {
  datum: Datum;
};
export function Page({ datum }: PageProps) {
  return (
    <main id={`page${datum.id}`} style={{ backgroundColor: datum.color }}>
      {datum.contents.map((str, i) => (
        <div key={i}>{str}</div>
      ))}
      <button onClick={() => alert(`clicked (id: ${datum.id})`)}>click!</button>
    </main>
  );
}

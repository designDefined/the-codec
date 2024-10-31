import "./App.css";
import { Bevel } from "./filters/Bevel";
import { DropShadow } from "./filters/DropShadow";
import { Grayscale } from "./filters/Grayscale";
import { InnerShadow } from "./filters/InnerShadow";

function App() {
  return (
    <main className="fullscreen">
      <div className="foreground">
        <div>
          <svg className="svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <DropShadow />
              <InnerShadow />
              <Grayscale />
              <Bevel />
            </defs>
            <text filter="url(#InnerShadow)" className="title" x="100" y="50" textAnchor="middle">
              the CODEC
            </text>
          </svg>
        </div>
      </div>
    </main>
  );
}

export default App;

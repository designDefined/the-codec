import "./style.css";
import { Main } from "@flexive/core";
import { EditorContainer } from "./component/EditorContainer";

function App() {
  return (
    <Main
      f={{
        spacing: [32, 16],
        justify: [undefined, undefined, "100vh", "100vh"],
        align: [undefined, undefined, "100vw", "100vw"],
      }}
    >
      <EditorContainer />
    </Main>
  );
}

export default App;

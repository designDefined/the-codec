import { Main } from "@flexive/core";
import { EditorContainer } from "./component/EditorContainer";
import { SampleEditor } from "./component/SampleEditor";

function App() {
  return (
    <Main f={{ spacing: [16, 16] }}>
      <EditorContainer />
      <SampleEditor />
    </Main>
  );
}

export default App;

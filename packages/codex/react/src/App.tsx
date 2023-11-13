import "./App.css";
import { RouteTree } from "./types/RouteTree";
import Router from "./components/Router/Router";
import { ItemPage } from "./sample/Item";
import { SimplePage } from "./sample/Simple";

const routeTree: RouteTree = {
  _index: { component: () => <div>index</div> },
  _error: { component: () => <div>error!</div> },
  simple: SimplePage,
  depth1: {
    _index: { component: () => <div>depth1</div> },
    depth2: {
      _index: { component: () => <div>depth2</div> },
    },
  },
  item: {
    _index: ItemPage,
    _error: { component: () => <div>no item id</div> },
  },
};

function App() {
  return <Router routeTree={routeTree} />;
}

export default App;

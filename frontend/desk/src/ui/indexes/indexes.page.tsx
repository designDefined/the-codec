import { Link } from "react-router-dom";

import { IndexList } from "./IndexList";

export const IndexesPage = () => {
  return (
    <div>
      <h1>Indexes Page</h1>
      <IndexList />
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

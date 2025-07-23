import { Link } from "react-router-dom";

import { IndexDashboard } from "./IndexDashboard";

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <IndexDashboard />
      <div>
        <Link to="/indexes">Indexes</Link>
      </div>
    </div>
  );
};

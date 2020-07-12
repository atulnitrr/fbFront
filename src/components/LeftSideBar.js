import React from "react";

import { Link } from "react-router-dom";
import "../css/Leftsidebar.css";

function LeftSideBar() {
  return (
    <aside className="left-sdebar">
      <div>
        <Link to="/tops">Top Stroies</Link>
      </div>
      <div>
        <Link to="/jobs"> Jobs</Link>
      </div>
    </aside>
  );
}

export default LeftSideBar;

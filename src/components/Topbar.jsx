import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import "../app.css";

export default function Topbar() {
  const [navbar, setNavbar] = useState(false);
  const history = useHistory();
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "topbar active" : "topbar"}>
      <div className="topbarLeft">
        <div className="topbarLogo">
          <span>HA</span>
          <span>SH</span>
        </div>
      </div>
      <div className="topbarRight">
        <ul className="topbarLink">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={400}
              onClick={() => history.push("/home")}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="show"
              smooth={true}
              duration={400}
              onClick={() => history.push("/show")}
            >
              Show
            </Link>
          </li>
          <li>
            <Link
              to="create"
              smooth={true}
              duration={400}
              onClick={() => history.push("/create")}
            >
              Create
            </Link>
          </li>
          <li>
            <Link
              to="assign"
              smooth={true}
              duration={400}
              onClick={() => history.push("/assign")}
            >
              Assign
            </Link>
          </li>
          <li>
            <Link
              to="update"
              smooth={true}
              duration={400}
              onClick={() => history.push("/assign")}
            >
              Update
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

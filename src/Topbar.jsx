import React, { useState } from "react";
import "./app.css";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";

export default function Topbar() {
  const [navbar, setNavbar] = useState(false);
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
            <Link to="home" smooth={true} duration={100}>
              <Link1 to="/#home" className="link">
                home
              </Link1>
            </Link>
          </li>
          <li>
            <Link to="show" smooth={true} duration={100}>
              <Link1 to="/#show" className="link">
                Show
              </Link1>
            </Link>
          </li>
          <li>Create</li>
          <li>Assign</li>
          <li>Update</li>
        </ul>
      </div>
    </div>
  );
}

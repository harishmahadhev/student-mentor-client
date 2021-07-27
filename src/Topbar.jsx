import React from "react";
import "./app.css";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <div className="topbarLogo">
          <span>HA</span>
          <span>SH</span>
        </div>
      </div>
      <div className="topbarRight">
        <ul className="topbarLink">
          <li>Home</li>
          <li>Show</li>
          <li>Create</li>
          <li>Assign</li>
          <li>Update</li>
        </ul>
      </div>
    </div>
  );
}

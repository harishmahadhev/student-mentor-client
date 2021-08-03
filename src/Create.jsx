import React from "react";
import "./app.css";
import CreateMentor from "./CreateMentor";
import CreateStudent from "./CreateStudent";
export default function Create() {
  return (
    <div className="create" id="create">
      <CreateStudent />
      <CreateMentor />
    </div>
  );
}

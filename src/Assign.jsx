import { Button, Checkbox, Radio } from "@material-ui/core";
import React from "react";
import "./app.css";
export default function Assign() {
  return (
    <div className="assign pages" id="assign">
      <h1 className="showTitle">Assign</h1>
      <div className="assignContainer">
        <div className="assignMentor">
          <h2 className="assignTitle">Mentor</h2>
          <div className="assignMentorList">
            <label htmlFor="mentor">Harish Kumar</label>
            <Radio name="mentor" id="mentor" />
          </div>
        </div>
        <div className="assignMentor">
          <h2 className="assignTitle">Students</h2>
          <div className="assignStudentList">
            <label htmlFor="student">Harish Kumar</label>
            <Checkbox name="student" id="student" />
          </div>
        </div>
      </div>
      <Button type="submit" className="assignButton">
        Assign
      </Button>
    </div>
  );
}

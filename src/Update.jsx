import { Button, IconButton, Radio } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";

export default function Update() {
  return (
    <div className="update pages" id="update">
      <h1 className="showTitle">Update</h1>
      <div className="assignContainer">
        <div className="assignMentor">
          <h2 className="assignTitle">Students</h2>
          <div className="assignMentorList">
            <label htmlFor="mentor">Harish Kumar</label>
            <Radio name="mentor" id="mentor" />
          </div>
        </div>
        <div className="assignMentor">
          <h2 className="assignTitle">Assigned Mentor</h2>
          <div className="assignStudentList">
            <label htmlFor="student">Harish Kumar</label>
            <IconButton>
              <EditIcon className="updateIcon" />
            </IconButton>
          </div>
          <hr />
          <div className="updateMentor">
            <ul>
              <h3 className="assignTitle">Available Mentors</h3>
              <li>
                Harish <Radio name="mentor" id="mentor" />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Button type="submit" className="updateButton">
        Update
      </Button>
    </div>
  );
}
